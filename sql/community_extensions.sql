-- =============================================================================
-- AZERPUG — Community Extensions & Tools
-- =============================================================================
-- Schema + submission RPC for /extensions/.  Run in Supabase SQL editor.
-- Idempotent: safe to run multiple times.
-- =============================================================================

-- 1) Table -------------------------------------------------------------------
create table if not exists public.community_extensions (
  id              bigserial primary key,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),

  -- Submitter
  member_id       bigint,
  submitter_name  text,
  submitter_email text,

  -- Project
  name            text not null,
  github_url      text not null,
  github_owner    text,
  github_repo     text,
  description     text not null,

  category        text not null default 'tool',
  language        text,
  tags            text[],

  -- Cached GitHub metadata (refreshed by a cron / manual run)
  stars           int not null default 0,
  forks           int not null default 0,
  last_pushed_at  timestamptz,
  homepage_url    text,

  -- Workflow
  status          text not null default 'pending',
  is_featured     boolean not null default false,
  reviewer_notes  text,

  -- Light anti-spam
  source_ip_hash  text,

  constraint community_extensions_status_chk
    check (status in ('pending','approved','rejected')),
  constraint community_extensions_category_chk
    check (category in ('extension','tool','cli','library','sample','other'))
);

create unique index if not exists community_extensions_github_url_uq
  on public.community_extensions (lower(github_url));
create index if not exists community_extensions_status_idx
  on public.community_extensions (status, is_featured desc, stars desc, created_at desc);
create index if not exists community_extensions_tags_gin
  on public.community_extensions using gin (tags);

-- 2) RLS ---------------------------------------------------------------------
alter table public.community_extensions enable row level security;

-- Public can read approved entries only.
drop policy if exists ext_public_read on public.community_extensions;
create policy ext_public_read
  on public.community_extensions
  for select
  using (status = 'approved');

-- 3) Public read-only view (what the page reads) -----------------------------
create or replace view public.public_community_extensions as
select
  id, name, github_url, github_owner, github_repo, description,
  category, language, tags,
  stars, forks, last_pushed_at, homepage_url,
  is_featured, created_at
from public.community_extensions
where status = 'approved';

grant select on public.public_community_extensions to anon, authenticated;

-- 4) Submission RPC ----------------------------------------------------------
-- Anyone (anon or authenticated) can submit; review happens manually before
-- the entry shows on the page.
create or replace function public.submit_community_extension(
  p_name        text,
  p_github_url  text,
  p_description text,
  p_category    text,
  p_language    text,
  p_tags        text[],
  p_member_id   bigint,
  p_submitter_name  text,
  p_submitter_email text
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id            bigint;
  v_owner         text;
  v_repo          text;
  v_recent_count  int;
  v_url           text;
  v_allowed_cats  text[] := array['extension','tool','cli','library','sample','other'];
begin
  -- Validation
  if coalesce(trim(p_name), '') = '' then
    raise exception 'Name is required';
  end if;
  if coalesce(trim(p_description), '') = '' then
    raise exception 'Description is required';
  end if;
  if coalesce(trim(p_github_url), '') = '' then
    raise exception 'GitHub URL is required';
  end if;

  v_url := lower(trim(p_github_url));
  if v_url !~ '^https://github\.com/[a-z0-9][a-z0-9-]*/[a-z0-9][a-z0-9._-]*/?$' then
    raise exception 'GitHub URL must look like https://github.com/owner/repo';
  end if;

  if not (coalesce(p_category, 'tool') = any (v_allowed_cats)) then
    raise exception 'Unknown category: %', p_category;
  end if;

  -- Parse owner/repo
  v_owner := split_part(regexp_replace(v_url, '^https://github\.com/', ''), '/', 1);
  v_repo  := rtrim(split_part(regexp_replace(v_url, '^https://github\.com/', ''), '/', 2), '/');

  -- Light rate limit: max 5 submissions per email per 24h
  if p_submitter_email is not null and trim(p_submitter_email) <> '' then
    select count(*) into v_recent_count
    from public.community_extensions
    where lower(submitter_email) = lower(trim(p_submitter_email))
      and created_at > now() - interval '24 hours';
    if v_recent_count >= 5 then
      raise exception 'Too many submissions from this email in the last 24 hours';
    end if;
  end if;

  -- Upsert by github_url so re-submitting an existing repo just bumps it back
  -- to pending without creating duplicates.
  insert into public.community_extensions (
    member_id, submitter_name, submitter_email,
    name, github_url, github_owner, github_repo,
    description, category, language, tags
  ) values (
    p_member_id, p_submitter_name, p_submitter_email,
    trim(p_name), v_url, v_owner, v_repo,
    trim(p_description), coalesce(p_category, 'tool'), p_language, p_tags
  )
  on conflict ((lower(github_url))) do update
     set name        = excluded.name,
         description = excluded.description,
         category    = excluded.category,
         language    = excluded.language,
         tags        = excluded.tags,
         status      = 'pending',
         updated_at  = now()
  returning id into v_id;

  return v_id;
end;
$$;

grant execute on function public.submit_community_extension(
  text, text, text, text, text, text[], bigint, text, text
) to anon, authenticated;

-- 5) Optional admin view -----------------------------------------------------
create or replace view public.v_community_extensions_admin as
select
  id, created_at, status, is_featured, name, github_url, category,
  language, stars, forks, submitter_name, submitter_email
from public.community_extensions
order by status asc, created_at desc;

-- 6) Seed (only inserts if rows do not already exist) ------------------------
-- These are real PostgreSQL extensions/tools authored by AZERPUG members.
-- Edit / extend as needed.
insert into public.community_extensions
  (name, github_url, github_owner, github_repo, description, category, language, tags, stars, status, is_featured)
values
  ('pgclone',
   'https://github.com/valehdba/pgclone',
   'valehdba', 'pgclone',
   'PostgreSQL extension for cloning, masking, and post-clone checking of databases, schemas, tables, and functions between hosts — without leaving your database session.',
   'extension', 'C',
   array['cloning','masking','dba'],
   34, 'approved', true),

  ('pgx_permission_sync',
   'https://github.com/valehdba/pgx_permission_sync',
   'valehdba', 'pgx_permission_sync',
   'Automatically synchronizes role and permission changes (CREATE ROLE, GRANT, REVOKE, ALTER ROLE, DROP ROLE) across multiple environments via event triggers and dblink — full audit log, encrypted credentials, retry queue.',
   'extension', 'PLpgSQL',
   array['security','rbac','event-triggers','dblink'],
   5, 'approved', true),

  ('pgx_warnings',
   'https://github.com/valehdba/pgx_warnings',
   'valehdba', 'pgx_warnings',
   'PostgreSQL extension that watches and collects warnings/errors from the PostgreSQL log file and pushes notifications to a Telegram channel.',
   'extension', 'C',
   array['monitoring','alerting','telegram','logs'],
   4, 'approved', false),

  ('PgWatchtower',
   'https://github.com/valehdba/PgWatchtower',
   'valehdba', 'PgWatchtower',
   'Collects, visualizes, and predicts database growth and other capacity-planning metrics over time.',
   'tool', 'HTML',
   array['monitoring','capacity-planning','growth'],
   4, 'approved', false)
on conflict ((lower(github_url))) do nothing;
