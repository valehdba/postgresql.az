# Supabase Auth Migration Guide
## postgresql.az — Step-by-Step Instructions

---

## Prerequisites

- Access to Supabase Dashboard (https://supabase.com/dashboard)
- A **test Supabase project** (recommended: create a new project to test first)
- Current database dump from production project

---

## Step 1: Create Test Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Name it `azerpug-auth-test`
4. Choose a strong database password
5. Select region closest to Baku (e.g., Frankfurt)
6. Wait for project to be created

---

## Step 2: Restore Database to Test Project

1. Export your production database:
   - Go to production Supabase project → Settings → Database
   - Or use `pg_dump` to create a backup

2. Import into test project:
   - Go to test project → SQL Editor
   - Run the production schema + data

---

## Step 3: Enable Google OAuth in Test Project

1. Go to test project → Authentication → Providers
2. Enable Google provider
3. Enter your Google OAuth credentials:
   - Client ID: `328722583843-n04cr2tp7uhg4876m74ap124t366khq7.apps.googleusercontent.com`
   - Client Secret: (from Google Cloud Console)
4. Add redirect URL to Google Cloud Console:
   - `https://<your-test-project>.supabase.co/auth/v1/callback`

---

## Step 4: Run the SQL Migration

1. Open test project → SQL Editor
2. Open file: `migration/01_supabase_auth_migration.sql`
3. **Read it carefully** — it will:
   - Add `auth_id` column to `members` table
   - Create trigger `handle_new_auth_user` on `auth.users`
   - Rewrite ALL RPC functions (removes p_member_id/p_admin_id parameters)
   - Create `legacy_migrate_login` for existing user migration
   - Drop `member_login`, `google_auth`, `register_member` (replaced by Supabase Auth)
   - Update permissions
4. Run it
5. Verify no errors

---

## Step 5: Update Supabase Credentials in Code

**If testing with a different Supabase project**, update these files:

1. `js/supabase-client.js` — lines 2-3:
   ```javascript
   var SUPABASE_URL = 'https://YOUR-TEST-PROJECT.supabase.co';
   var SUPABASE_ANON_KEY = 'YOUR-TEST-ANON-KEY';
   ```

2. `js/google-auth-v2.js` — Google Client ID (if different)

**For production deployment** (merging to main): keep the original credentials.

---

## Step 6: Test the Migration

Deploy the `feat/supabase-auth` branch to a test environment (e.g., GitHub Pages on a test domain or localhost).

### Test Checklist:

#### Registration (New User)
- [ ] Go to /registration/
- [ ] Fill out form and submit
- [ ] Verify: user created in Supabase Auth (Dashboard → Authentication → Users)
- [ ] Verify: member row created in `members` table with `auth_id` linked
- [ ] Verify: auto-login works after registration
- [ ] Verify: EmailJS notification sent

#### Login (Existing User — Legacy Migration)
- [ ] Go to /login/
- [ ] Enter existing user's email and password
- [ ] First login: system should migrate user (create auth.users entry, link auth_id)
- [ ] Verify: user can now login with same password via Supabase Auth
- [ ] Verify: redirected to homepage with welcome message

#### Login (Already Migrated User)
- [ ] Login again with same credentials
- [ ] Should work directly via Supabase Auth (no migration needed)

#### Google Sign-In
- [ ] Click Google Sign-In button on login page
- [ ] Verify: Supabase Auth session created
- [ ] Verify: member profile linked

#### Profile Page
- [ ] Go to /profile/
- [ ] Verify: profile data loads correctly
- [ ] Edit profile → save → verify changes persist
- [ ] Change password → verify new password works on next login
- [ ] Check mailbox → verify messages load

#### Blog Posts
- [ ] Go to /blogs/
- [ ] View existing posts (public — should work without login)
- [ ] Login → go to Dashboard → verify your posts show
- [ ] Create new post → verify saved
- [ ] Edit post → verify updated
- [ ] Like a post → verify toggle works

#### Admin Panel
- [ ] Go to /admin/
- [ ] Login as admin user
- [ ] Verify: stats load (pending, published, drafts, members, messages, volunteers)
- [ ] Verify: can approve/reject posts
- [ ] Verify: Events tab works (create/delete)
- [ ] Verify: Messages tab loads
- [ ] Verify: Volunteers tab loads with status updates

#### Other Pages
- [ ] Events page: RSVP works for logged-in user
- [ ] Jobs page: post/edit/delete job works
- [ ] Contact page: form submits correctly
- [ ] Contribute page: volunteer form works
- [ ] Members page: member list loads

#### Navbar
- [ ] Logged out: shows "Log In" button
- [ ] Logged in: shows user name + profile link
- [ ] Admin: shows red shield admin button
- [ ] Dark mode toggle works
- [ ] Language toggle works
- [ ] Logout button works

---

## Step 7: Migrate Existing Users (Optional Pre-Migration)

The `legacy_migrate_login` function handles migration automatically on first login.
However, if you want to pre-migrate all users:

```sql
-- WARNING: This creates auth.users entries but users will need to
-- reset their passwords since SHA-256 cannot be converted to bcrypt.
-- The legacy_migrate_login approach (migrate on first login) is recommended instead.
```

---

## Step 8: Merge to Production

Once all tests pass:

1. Go to GitHub: https://github.com/valehdba/postgresql.az
2. Create Pull Request: `feat/supabase-auth` → `main`
3. Review the changes
4. **Before merging**: Run `01_supabase_auth_migration.sql` on your PRODUCTION Supabase project
5. Merge the PR
6. Verify the live site works

---

## Rollback Plan

If something goes wrong after merging:

1. **Revert the merge** on GitHub (revert commit)
2. The old JS files (navbar-auth.js, google-auth.js) are still in the repo
3. The old RPC functions were replaced by `CREATE OR REPLACE` — to restore them,
   you'd need to run the original function definitions from a backup

**Recommendation**: Keep a database backup before running the migration SQL.

---

## Files Changed Summary

### New Files
- `js/supabase-client.js` — shared Supabase client (auth helpers, RPC wrapper)
- `js/navbar-auth-v2.js` — async navbar auth (replaces navbar-auth.js)
- `js/google-auth-v2.js` — Google Sign-In via Supabase Auth
- `migration/01_supabase_auth_migration.sql` — database migration
- `migration/MIGRATION_GUIDE.md` — this file

### Modified Files (13 HTML pages)
- `login/index.html` — uses `sbMigrateLogin()`
- `registration/index.html` — uses `sbSignUp()`
- `profile/index.html` — async auth, no sessionStorage
- `admin/index.html` — async admin check
- `blogs/index.html` — async auth
- `index.html` — async hero personalization
- `events/index.html` — async user init
- `jobs/index.html` — async user init
- `contact/index.html` — async user init
- `contribute/index.html` — async user init
- `members/index.html` — async user init
- `gallery/index.html` — variable name updates
- `feed/index.html` — variable name updates

### Old Files (kept for reference, no longer loaded)
- `js/navbar-auth.js` — replaced by v2
- `js/google-auth.js` — replaced by v2

---

## Key Technical Changes

| Before | After |
|--------|-------|
| `sessionStorage.getItem('azerpug_user')` | `sbGetMember()` (async) |
| `rpc('fn', { p_member_id: user.id })` | `rpc('fn', {})` (server uses `auth.uid()`) |
| `rpc('fn', { p_admin_id: admin.id })` | `rpc('fn', {})` (server checks `_is_admin()`) |
| `member_login` RPC | `sbMigrateLogin()` → Supabase Auth |
| `register_member` RPC | `sbSignUp()` → Supabase Auth |
| `google_auth` RPC | `signInWithIdToken()` → Supabase Auth |
| anon key for all requests | session JWT for authenticated requests |
| SHA-256 password hash | bcrypt (managed by Supabase) |
