/* =============================================
   Google Sign-In via Supabase Auth
   Requires: supabase-client.js loaded first
   ============================================= */
var GOOGLE_CLIENT_ID = '328722583843-n04cr2tp7uhg4876m74ap124t366khq7.apps.googleusercontent.com';

async function handleGoogleCredential(response) {
  var btn = document.getElementById('googleStatusMsg');
  if (btn) { btn.style.display = 'block'; btn.textContent = 'Signing in with Google...'; btn.style.color = ''; }

  try {
    // Use Supabase Auth signInWithIdToken
    var result = await _sb.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential
    });

    if (result.error) throw result.error;

    // Check if this is a new user — create members row if needed
    var user = result.data.user;
    var isNew = false;
    try {
      var member = await rpc('get_my_profile', {});
      if (!member || !member.id) {
        // New user — create member profile
        var payload = JSON.parse(atob(response.credential.split('.')[1]));
        await rpc('create_member_from_auth', {
          p_first_name: payload.given_name || payload.name || '',
          p_last_name: payload.family_name || '',
          p_google_id: payload.sub
        });
        isNew = true;
      }
    } catch(e) {
      // If get_my_profile fails, it means member doesn't exist yet
      var payload = JSON.parse(atob(response.credential.split('.')[1]));
      await rpc('create_member_from_auth', {
        p_first_name: payload.given_name || payload.name || '',
        p_last_name: payload.family_name || '',
        p_google_id: payload.sub
      });
      isNew = true;
    }

    if (btn) {
      btn.style.color = '#28a745';
      btn.textContent = isNew ? 'Account created! Redirecting...' : 'Welcome back! Redirecting...';
    }

    // Send email notification for new registrations
    if (isNew && typeof emailjs !== 'undefined') {
      try {
        var p = JSON.parse(atob(response.credential.split('.')[1]));
        emailjs.send('service_gtolwpf', 'template_lt1rmcl', {
          name: (p.given_name || '') + ' ' + (p.family_name || ''),
          email: p.email,
          company: 'Signed up via Google',
          job_title: 'N/A'
        });
      } catch(e) {}
    }

    setTimeout(function() { window.location.href = '/'; }, 1000);

  } catch(err) {
    console.error('Google auth error:', err);
    if (btn) {
      btn.style.color = '#dc3545';
      btn.textContent = 'Sign in failed: ' + (err.message || 'Please try again.');
    }
  }
}
