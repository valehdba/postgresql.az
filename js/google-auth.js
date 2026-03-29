/* =============================================
   Google Sign-In
   Shared across login and registration pages
   ============================================= */
var GOOGLE_CLIENT_ID = '328722583843-n04cr2tp7uhg4876m74ap124t366khq7.apps.googleusercontent.com';
var SB_URL = 'https://qlyqwwhimwfcvuqdrxov.supabase.co';
var SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFseXF3d2hpbXdmY3Z1cWRyeG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMjg2ODYsImV4cCI6MjA4OTcwNDY4Nn0.6MKz72wGwthRL8hs-Iv3L9Iw_W4DdGh3UjrwcagtKfM';

function handleGoogleCredential(response) {
  // Decode JWT token from Google
  var payload = JSON.parse(atob(response.credential.split('.')[1]));
  var email = payload.email;
  var firstName = payload.given_name || payload.name || '';
  var lastName = payload.family_name || '';
  var googleId = payload.sub;

  // Show loading state
  var btn = document.getElementById('googleStatusMsg');
  if (btn) { btn.style.display = 'block'; btn.textContent = 'Signing in with Google...'; }

  // Call Supabase RPC
  fetch(SB_URL + '/rest/v1/rpc/google_auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SB_KEY,
      'Authorization': 'Bearer ' + SB_KEY
    },
    body: JSON.stringify({
      p_email: email,
      p_first_name: firstName,
      p_last_name: lastName,
      p_google_id: googleId
    })
  })
  .then(function(r) { return r.json(); })
  .then(function(result) {
    if (result && result.id) {
      // Store session
      sessionStorage.setItem('azerpug_user', JSON.stringify(result));

      if (btn) {
        btn.style.color = '#28a745';
        btn.textContent = result.is_new ? 'Account created! Redirecting...' : 'Welcome back! Redirecting...';
      }

      // Send email notification for new registrations
      if (result.is_new && typeof emailjs !== 'undefined') {
        try {
          emailjs.send('service_gtolwpf', 'template_lt1rmcl', {
            name: firstName + ' ' + lastName,
            email: email,
            company: 'Signed up via Google',
            job_title: 'N/A'
          });
        } catch(e) {}
      }

      setTimeout(function() { window.location.href = '/'; }, 1000);
    } else {
      if (btn) { btn.style.color = '#dc3545'; btn.textContent = 'Sign in failed. Please try again.'; }
    }
  })
  .catch(function(err) {
    console.error('Google auth error:', err);
    if (btn) { btn.style.color = '#dc3545'; btn.textContent = 'Connection error. Please try again.'; }
  });
}
