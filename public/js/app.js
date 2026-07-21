// ============================================
// TWEADUP - APPLICATION PRINCIPALE
// ============================================

const API_URL = '';

// ===== AUTH =====
function getToken() { return localStorage.getItem('token'); }
function getUser() { const u = localStorage.getItem('user'); return u ? JSON.parse(u) : null; }
function isLoggedIn() { return !!getToken(); }
function isAdmin() { const u = getUser(); return u && u.role === 'admin'; }
function setAuth(token, user) { localStorage.setItem('token', token); localStorage.setItem('user', JSON.stringify(user)); }
function clearAuth() { localStorage.removeItem('token'); localStorage.removeItem('user'); localStorage.removeItem('progressions'); localStorage.removeItem('inscriptions'); }

// ===== API =====
async function apiGet(path) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;
  try {
    const r = await fetch(API_URL + path, { headers });
    if (r.status === 401) { clearAuth(); window.location.href = '/login.html'; return; }
    return await r.json();
  } catch (e) { console.error('API GET error:', e); return null; }
}

async function apiPost(path, body) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;
  try {
    const r = await fetch(API_URL + path, { method: 'POST', headers, body: JSON.stringify(body) });
    if (r.status === 401) { clearAuth(); window.location.href = '/login.html'; return; }
    return await r.json();
  } catch (e) { console.error('API POST error:', e); return null; }
}

async function apiDelete(path) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;
  try {
    const r = await fetch(API_URL + path, { method: 'DELETE', headers });
    if (r.status === 401) { clearAuth(); window.location.href = '/login.html'; return; }
    return await r.json();
  } catch (e) { console.error('API DELETE error:', e); return null; }
}

async function apiPut(path, body) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;
  try {
    const r = await fetch(API_URL + path, { method: 'PUT', headers, body: JSON.stringify(body) });
    if (r.status === 401) { clearAuth(); window.location.href = '/login.html'; return; }
    return await r.json();
  } catch (e) { console.error('API PUT error:', e); return null; }
}

// ===== NAVBAR =====
function renderNavbar() {
  const user = getUser();
  const isAdminUser = isAdmin();
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const notifCount = parseInt(localStorage.getItem('notifCount') || '0');

  let navLinks = '';
  if (isAdminUser) {
    navLinks = `
      <a href="/admin.html" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Admin</a>
    `;
  } else if (user) {
    navLinks = `
      <a href="/formations.html" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Formations</a>
      <a href="/dashboard.html" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Mon Espace</a>
      <a href="/notifications.html" class="nav-link" style="position:relative"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg> ${notifCount > 0 ? `<span class="badge-notif">${notifCount}</span>` : ''} Notifications</a>
    `;
  } else {
    navLinks = `
      <a href="/formations.html" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Formations</a>
    `;
  }

  const authSection = user
    ? `<div class="nav-user"><span class="nav-user-name">${user.prenom} ${user.nom}</span><span class="badge badge-${isAdminUser ? 'admin' : 'etudiant'}">${isAdminUser ? 'Admin' : 'Etudiant'}</span><button onclick="logout()" class="btn btn-sm btn-outline">Deconnexion</button></div>`
    : `<div class="nav-user"><a href="/login.html" class="btn btn-sm btn-outline">Connexion</a><a href="/register.html" class="btn btn-sm btn-primary">Inscription</a></div>`;

  container.innerHTML = `
    <a href="/" class="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> Tweadup</a>
    <nav class="navbar-nav" id="desktop-nav">${navLinks}</nav>
    ${authSection}
    <button class="mobile-menu-btn" onclick="toggleMobileMenu()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
  `;

  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.innerHTML = navLinks + (user ? `<button onclick="logout()" class="btn btn-outline" style="width:100%;margin-top:0.5rem">Deconnexion</button>` : `<a href="/login.html" class="nav-link">Connexion</a><a href="/register.html" class="nav-link">Inscription</a>`);
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

function logout() { clearAuth(); window.location.href = '/'; }

// ===== FOOTER =====
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> Tweadup</div>
      <p>&copy; 2026 Tweadup - Plateforme de formation en ligne</p>
    </div>
  `;
}

// ===== PAGE PROTECTION =====
function requireAuth() { if (!isLoggedIn()) { window.location.href = '/login.html'; return false; } return true; }
function requireAdmin() { if (!requireAuth()) return false; if (!isAdmin()) { window.location.href = '/'; return false; } return true; }
function redirectIfAuth() { if (isLoggedIn()) { if (isAdmin()) window.location.href = '/admin.html'; else window.location.href = '/dashboard.html'; return true; } return false; }

// ===== NOTIFICATIONS =====
async function loadNotifications() {
  const data = await apiGet('/api/notifications');
  if (data && Array.isArray(data)) {
    const unread = data.filter(n => !n.lu).length;
    localStorage.setItem('notifCount', unread);
    localStorage.setItem('notifications', JSON.stringify(data));
    return data;
  }
  return [];
}

// ===== FORMATIONS (local fallback) =====
function getLocalFormations() { return FORMATIONS; }
function getLocalFormation(id) { return FORMATIONS.find(f => f.id === id); }
function getLocalCours(formationId) {
  const titres = COURS_TITRES[formationId] || COURS_TITRES['f1'];
  return titres.map((titre, index) => ({
    id: formationId + '_c' + (index + 1),
    formation_id: formationId,
    titre,
    description: 'Dans ce cours, vous allez approfondir vos connaissances sur ' + titre.toLowerCase() + '.',
    contenu: generateContenuCours(titre),
    ordre: index + 1,
    duree: '45min'
  }));
}

// ===== INSCRIPTION LOCAL STATE =====
function getLocalInscriptions() {
  const raw = localStorage.getItem('inscriptions');
  return raw ? JSON.parse(raw) : [];
}
function setLocalInscription(insc) {
  const all = getLocalInscriptions();
  const existing = all.find(i => i.formation_id === insc.formation_id);
  if (existing) { existing.statut = insc.statut; }
  else { all.push({ ...insc, date_demande: new Date().toISOString() }); }
  localStorage.setItem('inscriptions', JSON.stringify(all));
}
function getInscriptionStatus(formationId) {
  const all = getLocalInscriptions();
  const found = all.find(i => i.formation_id === formationId);
  return found ? found.statut : null;
}

// ===== PROGRESSIONS LOCAL STATE =====
function getLocalProgressions() {
  const raw = localStorage.getItem('progressions');
  return raw ? JSON.parse(raw) : [];
}
function setLocalProgression(prog) {
  const all = getLocalProgressions();
  const idx = all.findIndex(p => p.formation_id === prog.formation_id && p.cours_id === prog.cours_id);
  if (idx >= 0) { all[idx] = { ...all[idx], ...prog }; }
  else { all.push(prog); }
  localStorage.setItem('progressions', JSON.stringify(all));
}
function getCoursProgression(formationId, coursId) {
  const all = getLocalProgressions();
  return all.find(p => p.formation_id === formationId && p.cours_id === coursId) || { statut: 'non_commence', quiz_reussi: false };
}
function isCoursAccessible(formationId, coursOrdre) {
  if (coursOrdre === 1) return true;
  const prev = getLocalProgressions().find(p => p.formation_id === formationId && parseInt(p.cours_id.split('_c')[1]) === coursOrdre - 1);
  return prev && prev.quiz_reussi;
}
function getFormationProgress(formationId) {
  const cours = getLocalCours(formationId);
  const progressions = getLocalProgressions().filter(p => p.formation_id === formationId);
  const completed = progressions.filter(p => p.quiz_reussi).length;
  return { total: cours.length, completed, percent: Math.round((completed / cours.length) * 100) };
}
function canTakeExam(formationId) {
  const prog = getFormationProgress(formationId);
  return prog.completed >= prog.total;
}

// ===== EXAMEN LOCAL STATE =====
function getExamenResult(formationId) {
  const raw = localStorage.getItem('examenResults');
  const all = raw ? JSON.parse(raw) : {};
  return all[formationId] || null;
}
function setExamenResult(formationId, result) {
  const raw = localStorage.getItem('examenResults');
  const all = raw ? JSON.parse(raw) : {};
  all[formationId] = result;
  localStorage.setItem('examenResults', JSON.stringify(all));
}

// ===== CERTIFICATS LOCAL =====
function getLocalCertificats() {
  const raw = localStorage.getItem('certificats');
  return raw ? JSON.parse(raw) : [];
}
function addLocalCertificat(cert) {
  const all = getLocalCertificats();
  all.push(cert);
  localStorage.setItem('certificats', JSON.stringify(all));
}

// ===== LOADING =====
function showLoading(id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  renderNavbar();
  renderFooter();
  loadNotifications().then(() => renderNavbar());
});
