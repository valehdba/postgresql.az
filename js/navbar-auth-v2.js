/* =============================================
   Navbar Auth + Dark Mode + Logout
   Requires: supabase-client.js loaded first
   Include this script on all pages
   ============================================= */
(function() {

  // ============ DARK MODE ============
  function getDarkMode() {
    var stored = localStorage.getItem('azerpug_dark');
    if (stored !== null) return stored === '1';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyDarkMode(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('azerpug_dark', dark ? '1' : '0');
    var icon = document.getElementById('darkModeIcon');
    if (icon) icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  }

  applyDarkMode(getDarkMode());

  // ============ DARK MODE CSS ============
  var s = document.createElement('style');
  s.textContent =
    '[data-theme="dark"]{--pg-blue-dark:#5b9bd5;--pg-blue-light:#1a2a3a;--pg-blue-hover:#7cb3e0;--pg-text:#d4d4d4;--pg-text-light:#a0a0a0;--pg-border:#3a3a3a;--pg-bg-light:#1e1e1e;--pg-white:#252525;--pg-success:#4caf50;--pg-danger:#ef5350}' +
    '[data-theme="dark"] body{background:#181818!important;color:#d4d4d4}' +
    '[data-theme="dark"] .navbar.bg-light{background:#1e1e1e!important;border-bottom:1px solid #333}' +
    '[data-theme="dark"] .navbar a{color:#b0b0b0!important}[data-theme="dark"] .navbar a:hover{color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-hero{background:linear-gradient(135deg,#1a3352,#0d1b2a)}' +
    '[data-theme="dark"] .pg-feature{background:#252525;border-color:#3a3a3a}[data-theme="dark"] .pg-feature:hover{border-color:#5b9bd5;box-shadow:0 4px 12px rgba(0,0,0,.3)}' +
    '[data-theme="dark"] .pg-feature h3,[data-theme="dark"] .pg-page-title,[data-theme="dark"] .pg-section-title{color:#d4d4d4!important}[data-theme="dark"] .pg-page-title,[data-theme="dark"] .pg-section-title{border-color:#3a3a3a!important}' +
    '[data-theme="dark"] h1,[data-theme="dark"] h2,[data-theme="dark"] h3,[data-theme="dark"] h4,[data-theme="dark"] h5,[data-theme="dark"] h6{color:#d4d4d4}' +
    '[data-theme="dark"] a{color:#5b9bd5}' +
    '[data-theme="dark"] .pg-form-control,[data-theme="dark"] .pg-toolbar input,[data-theme="dark"] .pg-toolbar select{background:#2a2a2a!important;border-color:#444!important;color:#d4d4d4!important}' +
    '[data-theme="dark"] .pg-form-control:focus{border-color:#5b9bd5!important;box-shadow:0 0 0 3px rgba(91,155,213,.2)!important}' +
    '[data-theme="dark"] .pg-card,[data-theme="dark"] .pg-post-card,[data-theme="dark"] .pg-blog-card,[data-theme="dark"] .pg-event-card,[data-theme="dark"] .pg-stat-item,[data-theme="dark"] .pg-job-card,[data-theme="dark"] .pg-role-card,[data-theme="dark"] .pg-album-card,[data-theme="dark"] .pg-benefit-card,[data-theme="dark"] .pg-tier-card,[data-theme="dark"] .pg-login-box,[data-theme="dark"] .pg-checkbox-item,[data-theme="dark"] .pg-sponsor-empty{background:#252525!important;border-color:#3a3a3a!important}' +
    '[data-theme="dark"] .pg-card-header{background:#2a4a6b!important}' +
    '[data-theme="dark"] .pg-info-box{background:#1a2a3a!important;border-color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-sidebar-section h3{color:#5b9bd5!important;border-color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-sidebar-section a{color:#b0b0b0!important}[data-theme="dark"] .pg-sidebar-section a:hover,[data-theme="dark"] .pg-sidebar-section a.active{background:#1a2a3a!important;border-left-color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-sidebar-logo{border-color:#3a3a3a!important}' +
    '[data-theme="dark"] #footer{color:#888}[data-theme="dark"] #footer a{color:#5b9bd5}' +
    '[data-theme="dark"] table th{background:#2a2a2a!important;color:#d4d4d4!important;border-color:#3a3a3a!important}[data-theme="dark"] table td{border-color:#333!important;color:#d4d4d4}' +
    '[data-theme="dark"] .pg-alert-danger{background:#3d1c1c!important;color:#ef9a9a!important;border-color:#5a2a2a!important}' +
    '[data-theme="dark"] .pg-alert-success{background:#1c3d1c!important;color:#a5d6a7!important;border-color:#2a5a2a!important}' +
    '[data-theme="dark"] .pg-admin-bar{background:#1a2a3a!important}' +
    '[data-theme="dark"] .pg-member-avatar{background:#2a4a6b!important}' +
    '[data-theme="dark"] .pg-lightbox{background:rgba(0,0,0,.95)}' +
    '[data-theme="dark"] .pg-empty,[data-theme="dark"] .pg-empty-posts,[data-theme="dark"] .pg-loading{color:#888!important}' +
    '[data-theme="dark"] img.footer-logo{filter:brightness(0.7)}' +
    '[data-theme="dark"] .pg-checkbox-item:hover,[data-theme="dark"] .pg-checkbox-item.checked{background:#1a2a3a!important;border-color:#5b9bd5!important}' +
    '[data-theme="dark"] select.pg-form-control{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23a0a0a0\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")!important}' +
    '[data-theme="dark"] .pg-search-wrapper{background:#2a2a2a;border-color:#444}[data-theme="dark"] .pg-search-input{background:#2a2a2a!important;color:#d4d4d4!important}' +
    '[data-theme="dark"] #darkModeBtn{border-color:#444!important;color:#a0a0a0!important}[data-theme="dark"] #darkModeBtn:hover{border-color:#5b9bd5!important;color:#5b9bd5!important}' +
    '[data-theme="dark"] #langToggleBtn{border-color:#444!important;color:#a0a0a0!important}[data-theme="dark"] #langToggleBtn:hover{border-color:#5b9bd5!important;color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-cta-box{background:#1a2a3a!important;border-color:#3a3a3a!important}' +
    '[data-theme="dark"] .pg-btn-primary{background:#2a5a8a!important;color:#fff!important}[data-theme="dark"] .pg-btn-primary:hover{background:#3a6a9a!important}' +
    '[data-theme="dark"] .pg-btn-primary a,[data-theme="dark"] a.pg-btn-primary,[data-theme="dark"] a.pg-btn-primary i{color:#fff!important}' +
    '[data-theme="dark"] .pg-btn-secondary{background:#2a2a2a!important;color:#d4d4d4!important;border-color:#555!important}[data-theme="dark"] .pg-btn-secondary:hover{background:#333!important;border-color:#5b9bd5!important;color:#5b9bd5!important}' +
    '[data-theme="dark"] a.pg-btn-secondary,[data-theme="dark"] a.pg-btn-secondary i{color:#d4d4d4!important}[data-theme="dark"] a.pg-btn-secondary:hover,[data-theme="dark"] a.pg-btn-secondary:hover i{color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-btn-success,[data-theme="dark"] a.pg-btn-success{background:#2e7d32!important;color:#fff!important}[data-theme="dark"] .pg-btn-success:hover{background:#388e3c!important}' +
    '[data-theme="dark"] .pg-btn-outline,[data-theme="dark"] a.pg-btn-outline{background:transparent!important;color:#5b9bd5!important;border-color:#555!important}[data-theme="dark"] .pg-btn-outline:hover{background:#1a2a3a!important;border-color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-job-apply a,[data-theme="dark"] .pg-job-apply button{color:#fff!important}' +
    '[data-theme="dark"] .pg-job-apply .pg-btn-secondary{color:#d4d4d4!important}' +
    '[data-theme="dark"] .pg-hero-btn-primary{background:#2a5a8a!important;color:#fff!important}[data-theme="dark"] .pg-hero-btn-primary:hover{background:#3a6a9a!important}' +
    '[data-theme="dark"] .pg-hero-btn-outline{border-color:rgba(255,255,255,.4)!important;color:#fff!important}[data-theme="dark"] .pg-hero-btn-outline:hover{background:rgba(255,255,255,.1)!important}' +
    '[data-theme="dark"] .pg-tag{background:#1a2a3a!important;color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-badge{color:#fff!important}' +
    '[data-theme="dark"] .pg-badge-ft{background:#1565c0!important;color:#fff!important}' +
    '[data-theme="dark"] .pg-badge-pt{background:#7b1fa2!important;color:#fff!important}' +
    '[data-theme="dark"] .pg-badge-contract{background:#e65100!important;color:#fff!important}' +
    '[data-theme="dark"] .pg-badge-freelance{background:#2e7d32!important;color:#fff!important}' +
    '[data-theme="dark"] .pg-badge-internship{background:#c62828!important;color:#fff!important}' +
    '[data-theme="dark"] .pg-badge-remote{background:#00838f!important;color:#fff!important}' +
    '[data-theme="dark"] .pg-event-type{opacity:.9}' +
    '[data-theme="dark"] .pg-event-day{background:#2a2a2a!important;color:#d4d4d4!important;border-color:#444!important}' +
    '[data-theme="dark"] .pg-event-footer{background:#1e1e1e!important;border-color:#333!important}' +
    '[data-theme="dark"] .pg-job-card{background:#252525!important;border-color:#3a3a3a!important}' +
    '[data-theme="dark"] .pg-job-header h3{color:#d4d4d4!important}' +
    '[data-theme="dark"] .pg-job-meta{color:#a0a0a0!important}' +
    '[data-theme="dark"] .pg-job-desc{color:#c0c0c0!important}' +
    '[data-theme="dark"] .pg-form-group label{color:#d4d4d4!important}' +
    '[data-theme="dark"] .pg-form-hint{color:#888!important}' +
    '[data-theme="dark"] .pg-page-subtitle{color:#a0a0a0!important}' +
    '[data-theme="dark"] .pg-sidebar-logo-text{color:#5b9bd5!important}' +
    '[data-theme="dark"] .btn-pg{color:#d4d4d4!important;border-color:#555!important}[data-theme="dark"] .btn-pg:hover{border-color:#5b9bd5!important}' +
    '[data-theme="dark"] .btn-approve{background:#2e7d32!important;color:#fff!important;border-color:#2e7d32!important}' +
    '[data-theme="dark"] .btn-reject{background:#c62828!important;color:#fff!important;border-color:#c62828!important}' +
    '[data-theme="dark"] .admin-tabs{border-color:#3a3a3a!important}[data-theme="dark"] .admin-tab{color:#a0a0a0!important;border-color:transparent!important}[data-theme="dark"] .admin-tab.active{color:#5b9bd5!important;border-color:#5b9bd5!important}' +
    '[data-theme="dark"] .admin-stats{background:#1e1e1e!important}[data-theme="dark"] .admin-stat{border-color:#3a3a3a!important}' +
    '[data-theme="dark"] .pg-filter-select{background:#2a2a2a!important;border-color:#444!important;color:#d4d4d4!important}' +
    '[data-theme="dark"] .pg-role-card{background:#252525!important;border-color:#3a3a3a!important}[data-theme="dark"] .pg-role-card:hover{border-color:#5b9bd5!important}' +
    '[data-theme="dark"] .pg-role-card h3{color:#d4d4d4!important}[data-theme="dark"] .pg-role-card p{color:#a0a0a0!important}' +
    '[data-theme="dark"] .dropdown-menu{background:#252525!important;border-color:#3a3a3a!important}[data-theme="dark"] .dropdown-item{color:#d4d4d4!important}[data-theme="dark"] .dropdown-item:hover{background:#1a2a3a!important;color:#5b9bd5!important}' +
    '[data-theme="dark"] p,[data-theme="dark"] li,[data-theme="dark"] span,[data-theme="dark"] div{color:inherit}';
  document.head.appendChild(s);

  // ============ INIT NAVBAR ============
  async function init() {
    var navbar = document.getElementById('pgNavbar');
    if (!navbar) return;

    // Get auth state
    var session = null;
    var member = null;
    try {
      session = await sbGetSession();
      if (session) member = await sbGetMember();
    } catch(e) { console.warn('Auth check failed:', e); }

    var authDiv = document.createElement('div');
    authDiv.className = 'navbar-nav ml-auto';
    authDiv.id = 'navbarAuth';
    authDiv.style.cssText = 'display:flex;align-items:center;gap:8px;';

    var darkBtn = '<button id="darkModeBtn" onclick="window.__toggleDark()" title="Toggle dark mode" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:transparent;border:1px solid #ccc;border-radius:50%;font-size:0.8rem;color:#515151;cursor:pointer;transition:all 0.15s;"><i id="darkModeIcon" class="' + (getDarkMode() ? 'fas fa-sun' : 'fas fa-moon') + '"></i></button>';

    if (session && member) {
      var initials = ((member.first_name || '')[0] || '') + ((member.last_name || '')[0] || '');
      authDiv.innerHTML = darkBtn +
        '<a href="/profile/" style="display:inline-flex;align-items:center;gap:8px;padding:5px 14px;background:#336791;color:#fff!important;border-radius:20px;font-size:0.82rem;font-weight:600;text-decoration:none;transition:background 0.15s ease;font-family:\'Maven Pro\',sans-serif;" onmouseover="this.style.background=\'#264d6f\'" onmouseout="this.style.background=\'#336791\'">' +
          '<span style="width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;">' + initials.toUpperCase() + '</span>' +
          '<span>' + esc(member.first_name) + '</span></a>';
      if (member.is_admin) {
        authDiv.innerHTML += '<a href="/admin/" title="Admin Panel" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:#c62828;color:#fff!important;border-radius:50%;font-size:0.75rem;text-decoration:none;transition:background 0.15s ease;" onmouseover="this.style.background=\'#a31c1c\'" onmouseout="this.style.background=\'#c62828\'"><i class="fas fa-shield-alt"></i></a>';
      }
      authDiv.innerHTML += '<button onclick="window.__logout()" title="Log Out" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:transparent;border:1px solid #ccc;border-radius:50%;font-size:0.75rem;color:#999;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor=\'#c62828\';this.style.color=\'#c62828\'" onmouseout="this.style.borderColor=\'#ccc\';this.style.color=\'#999\'"><i class="fas fa-sign-out-alt"></i></button>';

      // Hide Registration link for logged-in users
      navbar.querySelectorAll('a').forEach(function(link) {
        if (link.getAttribute('href') === '/registration/' || link.textContent.trim() === 'Registration')
          link.parentElement.style.display = 'none';
      });
    } else {
      authDiv.innerHTML = darkBtn +
        '<a href="/login/" style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:#336791;color:#fff!important;border-radius:20px;font-size:0.82rem;font-weight:600;text-decoration:none;transition:background 0.15s ease;font-family:\'Maven Pro\',sans-serif;" onmouseover="this.style.background=\'#264d6f\'" onmouseout="this.style.background=\'#336791\'"><i class="fas fa-sign-in-alt"></i> Log In</a>';
    }

    navbar.appendChild(authDiv);
  }

  window.__toggleDark = function() { applyDarkMode(!getDarkMode()); };
  window.__logout = function() { sbSignOut(); };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
