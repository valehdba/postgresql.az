/* =============================================
   Supabase Client — Shared across all pages
   Include BEFORE any page-specific scripts
   ============================================= */
var SUPABASE_URL = 'https://qlyqwwhimwfcvuqdrxov.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFseXF3d2hpbXdmY3Z1cWRyeG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMjg2ODYsImV4cCI6MjA4OTcwNDY4Nn0.6MKz72wGwthRL8hs-Iv3L9Iw_W4DdGh3UjrwcagtKfM';

// Initialize Supabase client
var _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// =============================================
// AUTH HELPERS
// =============================================

// Get current session (returns null if not logged in)
async function sbGetSession() {
  var result = await _sb.auth.getSession();
  return (result && result.data && result.data.session) ? result.data.session : null;
}

// Get current user (returns null if not logged in)
async function sbGetUser() {
  var result = await _sb.auth.getUser();
  return (result && result.data && result.data.user) ? result.data.user : null;
}

// Get member profile from members table (cached per page load)
var _cachedMember = null;
async function sbGetMember() {
  if (_cachedMember) return _cachedMember;
  var session = await sbGetSession();
  if (!session) return null;
  try {
    var result = await _sb.rpc('get_my_profile', {});
    if (result.data) {
      _cachedMember = result.data;
      return _cachedMember;
    }
  } catch(e) { console.warn('Failed to get member profile:', e); }
  return null;
}

// Sign in with email/password
async function sbSignIn(email, password) {
  var result = await _sb.auth.signInWithPassword({ email: email, password: password });
  if (result.error) throw result.error;
  _cachedMember = null;
  return result.data;
}

// Sign up with email/password
async function sbSignUp(email, password, metadata) {
  var result = await _sb.auth.signUp({
    email: email,
    password: password,
    options: { data: metadata || {} }
  });
  if (result.error) throw result.error;
  return result.data;
}

// Sign out
async function sbSignOut() {
  _cachedMember = null;
  await _sb.auth.signOut();
  window.location.href = '/';
}

// =============================================
// RPC HELPER (uses authenticated session automatically)
// =============================================
async function rpc(fn, params) {
  var result = await _sb.rpc(fn, params || {});
  if (result.error) throw result.error;
  return result.data;
}

// =============================================
// LEGACY MIGRATION HELPER
// Tries Supabase Auth first, falls back to SHA-256 login
// for users who haven't migrated yet
// =============================================
async function sbMigrateLogin(email, password) {
  // Step 1: Try Supabase Auth login
  try {
    var result = await _sb.auth.signInWithPassword({ email: email, password: password });
    if (!result.error && result.data && result.data.session) {
      _cachedMember = null;
      return { success: true, migrated: true };
    }
  } catch(e) { /* fall through to legacy */ }

  // Step 2: Try legacy SHA-256 login
  var hash = await _hashSHA256(password);
  try {
    var legacyResult = await fetch(SUPABASE_URL + '/rest/v1/rpc/legacy_migrate_login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY },
      body: JSON.stringify({ p_email: email, p_password_hash: hash, p_new_password: password })
    });
    if (!legacyResult.ok) {
      var errText = await legacyResult.text();
      throw new Error(errText);
    }
    var migrationData = await legacyResult.json();
    if (!migrationData || !migrationData.success) {
      throw new Error('Invalid credentials');
    }

    // Step 3: Now login via Supabase Auth (account was just created)
    var authResult = await _sb.auth.signInWithPassword({ email: email, password: password });
    if (authResult.error) throw authResult.error;
    _cachedMember = null;
    return { success: true, migrated: false, justMigrated: true };
  } catch(e) {
    throw new Error('Invalid email or password');
  }
}

// SHA-256 hash (for legacy migration only)
async function _hashSHA256(pw) {
  var d = new TextEncoder().encode(pw);
  var b = await crypto.subtle.digest('SHA-256', d);
  return Array.from(new Uint8Array(b)).map(function(x) { return x.toString(16).padStart(2,'0'); }).join('');
}

// =============================================
// UTILITY
// =============================================
function esc(t) { if (!t) return ''; var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }

// Get access token for authenticated requests (falls back to anon key)
async function sbGetToken() {
  try {
    var session = await sbGetSession();
    if (session && session.access_token) return session.access_token;
  } catch(e) {}
  return SUPABASE_ANON_KEY;
}
