/* =============================================
   AZERPUG Navbar Auth Button
   Include this script on all pages to show
   a login/profile button in the navbar
   ============================================= */
(function() {
  var user = null;
  try { user = JSON.parse(sessionStorage.getItem('azerpug_user')); } catch(e) {}

  // Wait for DOM
  function init() {
    var navbar = document.getElementById('pgNavbar');
    if (!navbar) return;

    // Create the auth container
    var authDiv = document.createElement('div');
    authDiv.className = 'navbar-nav ml-auto';
    authDiv.id = 'navbarAuth';
    authDiv.style.cssText = 'display:flex;align-items:center;gap:8px;';

    if (user && user.id) {
      var initials = ((user.first_name || '')[0] || '') + ((user.last_name || '')[0] || '');

      authDiv.innerHTML =
        '<a href="/profile/" style="display:inline-flex;align-items:center;gap:8px;padding:5px 14px;background:#336791;color:#fff;border-radius:20px;font-size:0.82rem;font-weight:600;text-decoration:none;transition:background 0.15s ease;font-family:\'Maven Pro\',sans-serif;" ' +
        'onmouseover="this.style.background=\'#264d6f\'" onmouseout="this.style.background=\'#336791\'">' +
          '<span style="width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;">' + initials.toUpperCase() + '</span>' +
          '<span>' + user.first_name + '</span>' +
        '</a>';

      // Add admin icon if admin
      if (user.is_admin) {
        authDiv.innerHTML +=
          '<a href="/admin/" title="Admin Panel" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:#c62828;color:#fff;border-radius:50%;font-size:0.75rem;text-decoration:none;transition:background 0.15s ease;" ' +
          'onmouseover="this.style.background=\'#a31c1c\'" onmouseout="this.style.background=\'#c62828\'">' +
            '<i class="fas fa-shield-alt"></i>' +
          '</a>';
      }
    } else {
      authDiv.innerHTML =
        '<a href="/profile/" style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:#336791;color:#fff;border-radius:20px;font-size:0.82rem;font-weight:600;text-decoration:none;transition:background 0.15s ease;font-family:\'Maven Pro\',sans-serif;" ' +
        'onmouseover="this.style.background=\'#264d6f\'" onmouseout="this.style.background=\'#336791\'">' +
          '<i class="fas fa-sign-in-alt"></i> Log In' +
        '</a>';
    }

    navbar.appendChild(authDiv);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
