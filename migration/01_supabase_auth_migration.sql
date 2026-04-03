-- =============================================
-- AZERPUG Supabase Auth Migration
-- Step 1: Run this SQL in Supabase SQL Editor
-- =============================================
-- This script:
--   1. Adds auth_id column to members table
--   2. Creates a trigger to auto-create member on signup
--   3. Rewrites ALL RPC functions to use auth.uid() instead of p_member_id/p_admin_id
--   4. Creates legacy_migrate_login for existing user migration
--   5. Updates permissions (anon vs authenticated)
-- =============================================

-- =============================================
-- PHASE 1: Schema Changes
-- =============================================

-- 1.1 Add auth_id column to members
ALTER TABLE members ADD COLUMN IF NOT EXISTS auth_id UUID UNIQUE REFERENCES auth.users(id);
CREATE INDEX IF NOT EXISTS idx_members_auth_id ON members(auth_id);

-- 1.2 Helper: get member_id from auth.uid()
CREATE OR REPLACE FUNCTION _get_member_id()
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_id UUID;
BEGIN
  SELECT id INTO v_id FROM members WHERE auth_id = auth.uid();
  IF v_id IS NULL THEN RAISE EXCEPTION 'Member not found for auth user'; END IF;
  RETURN v_id;
END;
$$;

-- 1.3 Helper: check if current auth user is admin
CREATE OR REPLACE FUNCTION _is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_admin BOOLEAN;
BEGIN
  SELECT is_admin INTO v_admin FROM members WHERE auth_id = auth.uid();
  RETURN COALESCE(v_admin, false);
END;
$$;

-- 1.4 Trigger: auto-create member row on auth.users insert
CREATE OR REPLACE FUNCTION handle_new_auth_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO members (
    email,
    first_name,
    last_name,
    auth_id,
    google_id
  ) VALUES (
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    NEW.id,
    NEW.raw_user_meta_data->>'google_id'
  )
  ON CONFLICT (email) DO UPDATE SET
    auth_id = NEW.id,
    google_id = COALESCE(EXCLUDED.google_id, members.google_id);
  RETURN NEW;
END;
$$;

-- Drop existing trigger if any
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_auth_user();


-- =============================================
-- PHASE 2: Legacy Migration Function
-- Called by frontend when Supabase Auth login fails
-- Verifies old SHA-256 password, creates auth.users entry
-- =============================================

CREATE OR REPLACE FUNCTION legacy_migrate_login(
  p_email TEXT,
  p_password_hash TEXT,
  p_new_password TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member RECORD;
  v_auth_id UUID;
BEGIN
  -- Find member with old password
  SELECT id, email, first_name, last_name, password_hash, auth_id, google_id
  INTO v_member
  FROM members
  WHERE LOWER(email) = LOWER(p_email);

  IF NOT FOUND THEN
    RETURN json_build_object('success', false, 'error', 'User not found');
  END IF;

  -- Already migrated?
  IF v_member.auth_id IS NOT NULL THEN
    RETURN json_build_object('success', false, 'error', 'Already migrated. Use normal login.');
  END IF;

  -- Verify old password hash
  IF v_member.password_hash IS NULL OR v_member.password_hash != p_password_hash THEN
    RETURN json_build_object('success', false, 'error', 'Invalid password');
  END IF;

  -- Create auth.users entry via Supabase admin API
  -- NOTE: This uses supabase_admin role which has access to auth schema
  v_auth_id := gen_random_uuid();

  INSERT INTO auth.users (
    id,
    instance_id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_user_meta_data,
    role,
    aud,
    created_at,
    updated_at
  ) VALUES (
    v_auth_id,
    '00000000-0000-0000-0000-000000000000',
    v_member.email,
    crypt(p_new_password, gen_salt('bf')),
    now(),
    jsonb_build_object('first_name', v_member.first_name, 'last_name', v_member.last_name),
    'authenticated',
    'authenticated',
    now(),
    now()
  );

  -- Also insert identity
  INSERT INTO auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    provider_id,
    last_sign_in_at,
    created_at,
    updated_at
  ) VALUES (
    v_auth_id,
    v_auth_id,
    jsonb_build_object('sub', v_auth_id::text, 'email', v_member.email),
    'email',
    v_auth_id::text,
    now(),
    now(),
    now()
  );

  -- Link member to auth user
  UPDATE members SET auth_id = v_auth_id WHERE id = v_member.id;

  RETURN json_build_object('success', true);
END;
$$;


-- =============================================
-- PHASE 3: Rewrite USER Functions (remove p_member_id)
-- =============================================

-- get_my_profile — no params needed, uses auth.uid()
CREATE OR REPLACE FUNCTION get_my_profile()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  SELECT row_to_json(t) INTO v_result
  FROM (
    SELECT id, email, first_name, last_name, company, job_title, bio,
           linkedin_url, github_url, website_url, country, city,
           is_admin, google_id, joined_at
    FROM members WHERE id = v_member_id
  ) t;
  RETURN v_result;
END;
$$;

-- update_my_profile — remove p_member_id
CREATE OR REPLACE FUNCTION update_my_profile(
  p_first_name TEXT,
  p_last_name TEXT,
  p_company TEXT DEFAULT NULL,
  p_job_title TEXT DEFAULT NULL,
  p_bio TEXT DEFAULT NULL,
  p_linkedin_url TEXT DEFAULT NULL,
  p_github_url TEXT DEFAULT NULL,
  p_website_url TEXT DEFAULT NULL,
  p_country TEXT DEFAULT NULL,
  p_city TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  UPDATE members SET
    first_name = p_first_name,
    last_name = p_last_name,
    company = p_company,
    job_title = p_job_title,
    bio = p_bio,
    linkedin_url = p_linkedin_url,
    github_url = p_github_url,
    website_url = p_website_url,
    country = p_country,
    city = p_city
  WHERE id = v_member_id
  RETURNING row_to_json(members.*) INTO v_result;
  RETURN v_result;
END;
$$;

-- change_my_password — now changes via Supabase Auth, not members table
-- NOTE: Password changes should ideally go through supabase.auth.updateUser()
-- But we keep this for backward compat — it just validates old and sets new
CREATE OR REPLACE FUNCTION change_my_password(
  p_old_password_hash TEXT,
  p_new_password_hash TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_stored_hash TEXT;
BEGIN
  v_member_id := _get_member_id();
  SELECT password_hash INTO v_stored_hash FROM members WHERE id = v_member_id;
  IF v_stored_hash IS NULL OR v_stored_hash != p_old_password_hash THEN
    RETURN json_build_object('success', false, 'error', 'Incorrect current password');
  END IF;
  UPDATE members SET password_hash = p_new_password_hash WHERE id = v_member_id;
  RETURN json_build_object('success', true);
END;
$$;

-- create_blog_post — remove p_author_id, use auth.uid()
CREATE OR REPLACE FUNCTION create_blog_post(
  p_title TEXT,
  p_content TEXT,
  p_excerpt TEXT DEFAULT NULL,
  p_tags TEXT[] DEFAULT '{}',
  p_status TEXT DEFAULT 'pending'
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  INSERT INTO blog_posts (author_id, title, content, excerpt, tags, status)
  VALUES (v_member_id, p_title, p_content, p_excerpt, p_tags, p_status)
  RETURNING row_to_json(blog_posts.*) INTO v_result;
  RETURN v_result;
END;
$$;

-- update_blog_post — remove p_author_id
CREATE OR REPLACE FUNCTION update_blog_post(
  p_post_id UUID,
  p_title TEXT,
  p_content TEXT,
  p_excerpt TEXT DEFAULT NULL,
  p_tags TEXT[] DEFAULT '{}',
  p_status TEXT DEFAULT 'pending'
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  UPDATE blog_posts SET
    title = p_title,
    content = p_content,
    excerpt = p_excerpt,
    tags = p_tags,
    status = p_status,
    updated_at = now()
  WHERE id = p_post_id AND author_id = v_member_id
  RETURNING row_to_json(blog_posts.*) INTO v_result;
  IF v_result IS NULL THEN RAISE EXCEPTION 'Post not found or not authorized'; END IF;
  RETURN v_result;
END;
$$;

-- delete_blog_post — remove p_author_id
CREATE OR REPLACE FUNCTION delete_blog_post(p_post_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  DELETE FROM blog_posts WHERE id = p_post_id AND author_id = v_member_id;
END;
$$;

-- get_my_posts — remove member_id param
CREATE OR REPLACE FUNCTION get_my_posts()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  SELECT json_agg(row_to_json(t) ORDER BY t.updated_at DESC)
  INTO v_result
  FROM (
    SELECT id, title, excerpt, tags, status, slug, views_count, created_at, updated_at
    FROM blog_posts WHERE author_id = v_member_id
  ) t;
  RETURN COALESCE(v_result, '[]'::json);
END;
$$;

-- get_my_post — remove member_id param
CREATE OR REPLACE FUNCTION get_my_post(p_post_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  SELECT row_to_json(t) INTO v_result
  FROM (
    SELECT * FROM blog_posts WHERE id = p_post_id AND author_id = v_member_id
  ) t;
  RETURN v_result;
END;
$$;

-- toggle_post_like — remove p_member_id
CREATE OR REPLACE FUNCTION toggle_post_like(p_post_slug TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_exists BOOLEAN;
  v_count INTEGER;
BEGIN
  v_member_id := _get_member_id();
  SELECT EXISTS(SELECT 1 FROM post_likes WHERE post_slug = p_post_slug AND member_id = v_member_id) INTO v_exists;
  IF v_exists THEN
    DELETE FROM post_likes WHERE post_slug = p_post_slug AND member_id = v_member_id;
  ELSE
    INSERT INTO post_likes (post_slug, member_id) VALUES (p_post_slug, v_member_id) ON CONFLICT DO NOTHING;
  END IF;
  SELECT count(*) INTO v_count FROM post_likes WHERE post_slug = p_post_slug;
  RETURN json_build_object('liked', NOT v_exists, 'count', v_count);
END;
$$;

-- get_post_likes — remove p_member_id (use auth.uid() if logged in)
CREATE OR REPLACE FUNCTION get_post_likes(p_post_slug TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_count INTEGER;
  v_liked BOOLEAN := false;
BEGIN
  -- Try to get member_id (may be null if not logged in)
  BEGIN
    v_member_id := _get_member_id();
  EXCEPTION WHEN OTHERS THEN
    v_member_id := NULL;
  END;
  SELECT count(*) INTO v_count FROM post_likes WHERE post_slug = p_post_slug;
  IF v_member_id IS NOT NULL THEN
    SELECT EXISTS(SELECT 1 FROM post_likes WHERE post_slug = p_post_slug AND member_id = v_member_id) INTO v_liked;
  END IF;
  RETURN json_build_object('count', v_count, 'liked', v_liked);
END;
$$;

-- get_my_messages — remove p_member_id
CREATE OR REPLACE FUNCTION get_my_messages()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  SELECT json_agg(row_to_json(t) ORDER BY t.created_at DESC)
  INTO v_result
  FROM (
    SELECT cm.*, 
           COALESCE(cm.name, 'Admin') as sender_name,
           (SELECT count(*) FROM message_replies mr WHERE mr.message_id = cm.id) as reply_count
    FROM contact_messages cm
    WHERE cm.recipient_id = v_member_id AND cm.deleted_at IS NULL
  ) t;
  RETURN COALESCE(v_result, '[]'::json);
END;
$$;

-- get_my_unread_count — remove p_member_id
CREATE OR REPLACE FUNCTION get_my_unread_count()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_count INTEGER;
BEGIN
  v_member_id := _get_member_id();
  SELECT count(*) INTO v_count
  FROM contact_messages
  WHERE recipient_id = v_member_id AND is_read = false AND deleted_at IS NULL;
  RETURN v_count;
END;
$$;

-- mark_reply_read — remove p_member_id
CREATE OR REPLACE FUNCTION mark_reply_read(p_reply_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  UPDATE message_replies SET is_read = true
  WHERE id = p_reply_id
    AND message_id IN (SELECT id FROM contact_messages WHERE recipient_id = v_member_id OR member_id = v_member_id);
END;
$$;

-- user_reply_message — remove p_member_id
CREATE OR REPLACE FUNCTION user_reply_message(p_message_id UUID, p_body TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  -- Verify user owns this message
  IF NOT EXISTS(SELECT 1 FROM contact_messages WHERE id = p_message_id AND (recipient_id = v_member_id OR member_id = v_member_id)) THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;
  INSERT INTO message_replies (message_id, sender_id, body, is_admin_reply) VALUES (p_message_id, v_member_id, p_body, false);
END;
$$;

-- user_hide_message — remove p_member_id
CREATE OR REPLACE FUNCTION user_hide_message(p_message_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  UPDATE contact_messages SET deleted_at = now()
  WHERE id = p_message_id AND recipient_id = v_member_id;
END;
$$;

-- user_restore_message — remove p_member_id
CREATE OR REPLACE FUNCTION user_restore_message(p_message_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  UPDATE contact_messages SET deleted_at = NULL
  WHERE id = p_message_id AND recipient_id = v_member_id;
END;
$$;

-- post_job — remove p_member_id from direct fetch calls
CREATE OR REPLACE FUNCTION post_job(
  p_title TEXT,
  p_company TEXT,
  p_location TEXT,
  p_job_type TEXT,
  p_description TEXT,
  p_apply_url TEXT DEFAULT NULL,
  p_apply_email TEXT DEFAULT NULL,
  p_salary_range TEXT DEFAULT NULL,
  p_remote BOOLEAN DEFAULT false,
  p_tags TEXT[] DEFAULT '{}'
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_member_id UUID;
  v_result JSON;
BEGIN
  v_member_id := _get_member_id();
  INSERT INTO jobs (posted_by, title, company, location, job_type, description, apply_url, apply_email, salary_range, remote, tags)
  VALUES (v_member_id, p_title, p_company, p_location, p_job_type, p_description, p_apply_url, p_apply_email, p_salary_range, p_remote, p_tags)
  RETURNING row_to_json(jobs.*) INTO v_result;
  RETURN v_result;
END;
$$;

-- update_my_job — remove p_member_id
CREATE OR REPLACE FUNCTION update_my_job(
  p_job_id UUID,
  p_title TEXT,
  p_company TEXT,
  p_location TEXT,
  p_job_type TEXT,
  p_description TEXT,
  p_apply_url TEXT DEFAULT NULL,
  p_apply_email TEXT DEFAULT NULL,
  p_salary_range TEXT DEFAULT NULL,
  p_remote BOOLEAN DEFAULT false,
  p_tags TEXT[] DEFAULT '{}'
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  UPDATE jobs SET
    title = p_title, company = p_company, location = p_location,
    job_type = p_job_type, description = p_description,
    apply_url = p_apply_url, apply_email = p_apply_email,
    salary_range = p_salary_range, remote = p_remote, tags = p_tags,
    updated_at = now()
  WHERE id = p_job_id AND posted_by = v_member_id;
END;
$$;

-- delete_my_job — remove p_member_id
CREATE OR REPLACE FUNCTION delete_my_job(p_job_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  DELETE FROM jobs WHERE id = p_job_id AND posted_by = v_member_id;
END;
$$;

-- event_rsvp — remove p_member_id
CREATE OR REPLACE FUNCTION event_rsvp(p_event_id UUID, p_status TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_member_id UUID;
BEGIN
  v_member_id := _get_member_id();
  INSERT INTO event_rsvps (event_id, member_id, status)
  VALUES (p_event_id, v_member_id, p_status)
  ON CONFLICT (event_id, member_id) DO UPDATE SET status = p_status, updated_at = now();
END;
$$;

-- create_member_from_auth — for Google sign-in when member doesn't exist
CREATE OR REPLACE FUNCTION create_member_from_auth(
  p_first_name TEXT,
  p_last_name TEXT,
  p_google_id TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_auth_user RECORD;
  v_member RECORD;
BEGIN
  SELECT * INTO v_auth_user FROM auth.users WHERE id = auth.uid();
  IF NOT FOUND THEN RAISE EXCEPTION 'Auth user not found'; END IF;

  -- Check if member already exists
  SELECT * INTO v_member FROM members WHERE email = v_auth_user.email;
  IF FOUND THEN
    -- Just link
    UPDATE members SET auth_id = auth.uid(), google_id = COALESCE(p_google_id, google_id)
    WHERE id = v_member.id;
    RETURN row_to_json(v_member);
  END IF;

  -- Create new member
  INSERT INTO members (email, first_name, last_name, auth_id, google_id)
  VALUES (v_auth_user.email, p_first_name, p_last_name, auth.uid(), p_google_id)
  RETURNING row_to_json(members.*) INTO v_member;
  RETURN row_to_json(v_member);
END;
$$;


-- =============================================
-- PHASE 4: Rewrite ADMIN Functions (remove p_admin_id)
-- =============================================

CREATE OR REPLACE FUNCTION admin_get_stats()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  RETURN json_build_object(
    'pending_posts', (SELECT count(*) FROM blog_posts WHERE status = 'pending'),
    'published_posts', (SELECT count(*) FROM blog_posts WHERE status = 'published'),
    'draft_posts', (SELECT count(*) FROM blog_posts WHERE status = 'draft'),
    'total_members', (SELECT count(*) FROM members),
    'unread_messages', (SELECT count(*) FROM contact_messages WHERE is_read = false AND deleted_at IS NULL),
    'new_volunteers', (SELECT count(*) FROM volunteer_submissions WHERE status = 'new')
  );
END;
$$;

CREATE OR REPLACE FUNCTION admin_get_all_posts()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_result JSON;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  SELECT json_agg(row_to_json(t) ORDER BY t.updated_at DESC)
  INTO v_result
  FROM (
    SELECT bp.*, m.first_name as author_first_name, m.last_name as author_last_name, m.email as author_email
    FROM blog_posts bp LEFT JOIN members m ON bp.author_id = m.id
  ) t;
  RETURN COALESCE(v_result, '[]'::json);
END;
$$;

CREATE OR REPLACE FUNCTION admin_update_post_status(
  p_post_id UUID,
  p_status TEXT,
  p_admin_note TEXT DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  UPDATE blog_posts SET status = p_status, admin_note = p_admin_note, updated_at = now()
  WHERE id = p_post_id;
END;
$$;

CREATE OR REPLACE FUNCTION admin_get_all_members()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_result JSON;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  SELECT json_agg(row_to_json(t) ORDER BY t.joined_at DESC)
  INTO v_result
  FROM (
    SELECT id, email, first_name, last_name, company, job_title, is_admin, joined_at
    FROM members
  ) t;
  RETURN COALESCE(v_result, '[]'::json);
END;
$$;

CREATE OR REPLACE FUNCTION admin_get_contact_messages()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_result JSON;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  SELECT json_agg(row_to_json(t) ORDER BY t.created_at DESC)
  INTO v_result
  FROM (
    SELECT cm.*,
           COALESCE(cm.name, m.first_name || ' ' || m.last_name) as sender_name,
           COALESCE(cm.email, m.email) as sender_email,
           (SELECT count(*) FROM message_replies mr WHERE mr.message_id = cm.id) as reply_count
    FROM contact_messages cm
    LEFT JOIN members m ON cm.member_id = m.id
    WHERE cm.deleted_at IS NULL
  ) t;
  RETURN COALESCE(v_result, '[]'::json);
END;
$$;

CREATE OR REPLACE FUNCTION admin_reply_contact(p_message_id UUID, p_body TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_admin_member_id UUID;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  v_admin_member_id := _get_member_id();
  INSERT INTO message_replies (message_id, sender_id, body, is_admin_reply) VALUES (p_message_id, v_admin_member_id, p_body, true);
  UPDATE contact_messages SET is_read = true WHERE id = p_message_id;
END;
$$;

CREATE OR REPLACE FUNCTION admin_toggle_message_read(p_message_id UUID, p_is_read BOOLEAN)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  UPDATE contact_messages SET is_read = p_is_read WHERE id = p_message_id;
END;
$$;

CREATE OR REPLACE FUNCTION admin_delete_contact_message(p_message_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  UPDATE contact_messages SET deleted_at = now() WHERE id = p_message_id;
END;
$$;

CREATE OR REPLACE FUNCTION admin_send_message(p_member_id UUID, p_subject TEXT, p_body TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_admin_member_id UUID;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  v_admin_member_id := _get_member_id();
  INSERT INTO contact_messages (name, email, subject, message, member_id, recipient_id, is_read)
  VALUES ('Admin', (SELECT email FROM members WHERE id = v_admin_member_id), p_subject, p_body, v_admin_member_id, p_member_id, false);
END;
$$;

CREATE OR REPLACE FUNCTION admin_send_broadcast(p_subject TEXT, p_body TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_admin_member_id UUID;
  v_count INTEGER := 0;
  v_member RECORD;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  v_admin_member_id := _get_member_id();
  FOR v_member IN SELECT id FROM members WHERE id != v_admin_member_id LOOP
    INSERT INTO contact_messages (name, email, subject, message, member_id, recipient_id, is_read)
    VALUES ('Admin', (SELECT email FROM members WHERE id = v_admin_member_id), p_subject, p_body, v_admin_member_id, v_member.id, false);
    v_count := v_count + 1;
  END LOOP;
  RETURN json_build_object('sent', v_count);
END;
$$;

CREATE OR REPLACE FUNCTION admin_get_volunteers()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_result JSON;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  SELECT json_agg(row_to_json(t) ORDER BY t.created_at DESC)
  INTO v_result
  FROM (
    SELECT id, name, email, phone, roles, experience, availability, message, status, member_id, created_at
    FROM volunteer_submissions
  ) t;
  RETURN COALESCE(v_result, '[]'::json);
END;
$$;

CREATE OR REPLACE FUNCTION admin_update_volunteer_status(p_volunteer_id UUID, p_status TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  IF p_status NOT IN ('new', 'reviewed', 'accepted', 'declined') THEN
    RAISE EXCEPTION 'Invalid status';
  END IF;
  UPDATE volunteer_submissions SET status = p_status WHERE id = p_volunteer_id;
END;
$$;

CREATE OR REPLACE FUNCTION admin_insert_event(
  p_title TEXT,
  p_description TEXT DEFAULT NULL,
  p_event_date TIMESTAMPTZ DEFAULT NULL,
  p_end_date TIMESTAMPTZ DEFAULT NULL,
  p_location TEXT DEFAULT NULL,
  p_event_type TEXT DEFAULT 'meetup',
  p_registration_url TEXT DEFAULT NULL,
  p_max_attendees INTEGER DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE v_result JSON;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  INSERT INTO events (title, description, event_date, end_date, location, event_type, registration_url, max_attendees)
  VALUES (p_title, p_description, p_event_date, p_end_date, p_location, p_event_type, p_registration_url, p_max_attendees)
  RETURNING row_to_json(events.*) INTO v_result;
  RETURN v_result;
END;
$$;

CREATE OR REPLACE FUNCTION admin_delete_event(p_event_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  DELETE FROM events WHERE id = p_event_id;
END;
$$;


-- =============================================
-- PHASE 5: Public Functions (keep accessible to anon)
-- =============================================

-- track_post_view — stays public, optional auth
CREATE OR REPLACE FUNCTION track_post_view(p_post_slug TEXT, p_viewer_id UUID DEFAULT NULL)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE blog_posts SET views_count = views_count + 1 WHERE slug = p_post_slug;
END;
$$;

-- submit_contact — stays public (with rate limiting)
-- (no changes needed — already uses p_name, p_email, not member_id)

-- submit_volunteer — stays public (with rate limiting)
-- (no changes needed)

-- check_email_exists — stays public
-- (no changes needed)


-- =============================================
-- PHASE 6: Drop obsolete functions
-- =============================================

-- member_login is replaced by Supabase Auth
DROP FUNCTION IF EXISTS member_login(TEXT, TEXT);

-- google_auth is replaced by Supabase Auth signInWithIdToken
DROP FUNCTION IF EXISTS google_auth(TEXT, TEXT, TEXT, TEXT);

-- register_member is replaced by Supabase Auth signUp + trigger
DROP FUNCTION IF EXISTS register_member(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT);


-- =============================================
-- PHASE 7: Permissions
-- =============================================

-- Public functions (anon can call)
GRANT EXECUTE ON FUNCTION track_post_view(TEXT, UUID) TO anon;
GRANT EXECUTE ON FUNCTION get_post_likes(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION legacy_migrate_login(TEXT, TEXT, TEXT) TO anon;

-- Authenticated-only functions (all user + admin)
GRANT EXECUTE ON FUNCTION get_my_profile() TO authenticated;
GRANT EXECUTE ON FUNCTION update_my_profile(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION change_my_password(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION create_blog_post(TEXT, TEXT, TEXT, TEXT[], TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION update_blog_post(UUID, TEXT, TEXT, TEXT, TEXT[], TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION delete_blog_post(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION get_my_posts() TO authenticated;
GRANT EXECUTE ON FUNCTION get_my_post(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION toggle_post_like(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION get_my_messages() TO authenticated;
GRANT EXECUTE ON FUNCTION get_my_unread_count() TO authenticated;
GRANT EXECUTE ON FUNCTION mark_reply_read(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION user_reply_message(UUID, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION user_hide_message(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION user_restore_message(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION post_job(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, BOOLEAN, TEXT[]) TO authenticated;
GRANT EXECUTE ON FUNCTION update_my_job(UUID, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, BOOLEAN, TEXT[]) TO authenticated;
GRANT EXECUTE ON FUNCTION delete_my_job(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION event_rsvp(UUID, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION create_member_from_auth(TEXT, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_get_stats() TO authenticated;
GRANT EXECUTE ON FUNCTION admin_get_all_posts() TO authenticated;
GRANT EXECUTE ON FUNCTION admin_update_post_status(UUID, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_get_all_members() TO authenticated;
GRANT EXECUTE ON FUNCTION admin_get_contact_messages() TO authenticated;
GRANT EXECUTE ON FUNCTION admin_reply_contact(UUID, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_toggle_message_read(UUID, BOOLEAN) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_delete_contact_message(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_send_message(UUID, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_send_broadcast(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_get_volunteers() TO authenticated;
GRANT EXECUTE ON FUNCTION admin_update_volunteer_status(UUID, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_insert_event(TEXT, TEXT, TIMESTAMPTZ, TIMESTAMPTZ, TEXT, TEXT, TEXT, INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION admin_delete_event(UUID) TO authenticated;

-- Revoke anon from all user/admin functions
REVOKE EXECUTE ON FUNCTION get_my_profile() FROM anon;
REVOKE EXECUTE ON FUNCTION update_my_profile(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT) FROM anon;
REVOKE EXECUTE ON FUNCTION change_my_password(TEXT, TEXT) FROM anon;
REVOKE EXECUTE ON FUNCTION create_blog_post(TEXT, TEXT, TEXT, TEXT[], TEXT) FROM anon;
REVOKE EXECUTE ON FUNCTION admin_get_stats() FROM anon;
REVOKE EXECUTE ON FUNCTION admin_get_all_posts() FROM anon;
REVOKE EXECUTE ON FUNCTION admin_get_all_members() FROM anon;
REVOKE EXECUTE ON FUNCTION admin_get_contact_messages() FROM anon;
REVOKE EXECUTE ON FUNCTION admin_get_volunteers() FROM anon;

-- NOTE: submit_contact, submit_volunteer, check_email_exists, check_rate_limit
-- keep their existing grants (anon INSERT)
