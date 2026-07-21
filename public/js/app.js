async function apiGet(path) {
  if (!supabase) return null;
  try {
    if (path === '/api/formations') return await sbGetFormations();
    if (path.startsWith('/api/formations/') && path.endsWith('/cours')) return await sbGetCours(path.split('/')[3]);
    if (path.startsWith('/api/formations/')) return await sbGetFormation(path.split('/')[3]);
    if (path === '/api/inscriptions/mine') return await sbGetMyInscriptions();
    if (path === '/api/inscriptions/attente') return await sbGetPendingInscriptions();
    if (path === '/api/certificats') return await sbGetMyCertificats();
    if (path === '/api/admin/stats') return await sbGetAdminStats();
    if (path === '/api/admin/etudiants') return await sbGetEtudiants();
    if (path === '/api/auth/me') return await sbGetMe();
    return null;
  } catch (e) { return null; }
}

async function apiPost(path, body) {
  if (!supabase) return null;
  try {
    if (path === '/api/auth/register') {
      const r = await sbRegister(body.email, body.password, body.nom, body.prenom);
      if (r.token) setAuth(r.token, r.user);
      return r;
    }
    if (path === '/api/auth/login') {
      const r = await sbLogin(body.email, body.password);
      if (r.token) setAuth(r.token, r.user);
      return r;
    }
    if (path === '/api/inscriptions') return await sbCreateInscription(body.formation_id);
    if (path === '/api/examens') return await sbSaveExamen(body.formation_id, body.score, body.reussi);
    return null;
  } catch (e) { return null; }
}

async function apiPut(path, body) {
  if (!supabase) return null;
  try {
    if (path.startsWith('/api/inscriptions/') && path.includes('/traiter')) return await sbUpdateInscription(path.split('/')[3], body.statut);
    if (path === '/api/progressions') return await sbSaveProgression(body.formation_id, body.cours_id, body.statut, body.quiz_reussi, body.score_quiz);
    return null;
  } catch (e) { return null; }
}

async function apiDelete(path) { return null; }

function getToken() { return localStorage.getItem('token'); }
function getUser() { const u = localStorage.getItem('user'); return u ? JSON.parse(u) : null; }
function isLoggedIn() { return !!getToken(); }
function isAdmin() { const u = getUser(); return u && u.role === 'admin'; }
function setAuth(token, user) { localStorage.setItem('token', token); localStorage.setItem('user', JSON.stringify(user)); }
function clearAuth() { localStorage.removeItem('token'); localStorage.removeItem('user'); }

function renderNavbar() {
  const user = getUser();
  const isAdminUser = isAdmin();
  const container = document.getElementById('navbar-container');
  if (!container) return;
  let navLinks = '';
  if (isAdminUser) navLinks = '<a href="admin.html" class="nav-link">Admin</a>';
  else if (user) navLinks = '<a href="formations.html" class="nav-link">Formations</a><a href="dashboard.html" class="nav-link">Mon Espace</a><a href="notifications.html" class="nav-link">Notifications</a>';
  else navLinks = '<a href="formations.html" class="nav-link">Formations</a>';
  const authSection = user
    ? '<div class="nav-user"><span class="nav-user-name">' + (user.prenom || '') + ' ' + (user.nom || '') + '</span><span class="badge badge-' + (isAdminUser ? 'admin' : 'etudiant') + '">' + (isAdminUser ? 'Admin' : 'Etudiant') + '</span><button onclick="logout()" class="btn btn-sm btn-outline">Deconnexion</button></div>'
    : '<div class="nav-user"><a href="login.html" class="btn btn-sm btn-outline">Connexion</a><a href="register.html" class="btn btn-sm btn-primary">Inscription</a></div>';
  container.innerHTML = '<a href="index.html" class="navbar-brand">Tweadup</a><nav class="navbar-nav">' + navLinks + '</nav>' + authSection + '<button class="mobile-menu-btn" onclick="toggleMobileMenu()">Menu</button>';
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.innerHTML = navLinks + (user ? '<button onclick="logout()" class="btn btn-outline">Deconnexion</button>' : '<a href="login.html" class="nav-link">Connexion</a><a href="register.html" class="nav-link">Inscription</a>');
}

function toggleMobileMenu() { document.getElementById('mobile-menu')?.classList.toggle('open'); }
function logout() { clearAuth(); if (supabase) supabase.auth.signOut(); window.location.href = 'index.html'; }
function renderFooter() { const el = document.getElementById('footer'); if (el) el.innerHTML = '<div class="container footer-inner"><p>&copy; 2026 Tweadup</p></div>'; }
function requireAuth() { if (!isLoggedIn()) { window.location.href = 'login.html'; return false; } return true; }
function requireAdmin() { if (!requireAuth()) return false; if (!isAdmin()) { window.location.href = 'index.html'; return false; } return true; }
function redirectIfAuth() { if (isLoggedIn()) { if (isAdmin()) window.location.href = 'admin.html'; else window.location.href = 'dashboard.html'; return true; } return false; }

function getLocalFormations() { return FORMATIONS; }
function getLocalFormation(id) { return FORMATIONS.find(f => f.id === id); }
function getLocalCours(formationId) {
  const titres = COURS_TITRES[formationId] || COURS_TITRES['f1'];
  return titres.map((titre, index) => ({ id: formationId + '_c' + (index + 1), formation_id: formationId, titre, description: 'Dans ce cours, vous allez approfondir vos connaissances sur ' + titre.toLowerCase() + '.', contenu: generateContenuCours(titre), ordre: index + 1, duree: '45min' }));
}
function getLocalInscriptions() { const raw = localStorage.getItem('inscriptions'); return raw ? JSON.parse(raw) : []; }
function setLocalInscription(insc) { const all = getLocalInscriptions(); const existing = all.find(i => i.formation_id === insc.formation_id); if (existing) existing.statut = insc.statut; else all.push({ ...insc, date_demande: new Date().toISOString() }); localStorage.setItem('inscriptions', JSON.stringify(all)); }
function getInscriptionStatus(formationId) { const found = getLocalInscriptions().find(i => i.formation_id === formationId); return found ? found.statut : null; }
function getLocalProgressions() { const raw = localStorage.getItem('progressions'); return raw ? JSON.parse(raw) : []; }
function setLocalProgression(prog) { const all = getLocalProgressions(); const idx = all.findIndex(p => p.formation_id === prog.formation_id && p.cours_id === prog.cours_id); if (idx >= 0) all[idx] = { ...all[idx], ...prog }; else all.push(prog); localStorage.setItem('progressions', JSON.stringify(all)); }
function getCoursProgression(formationId, coursId) { const all = getLocalProgressions(); return all.find(p => p.formation_id === formationId && p.cours_id === coursId) || { statut: 'non_commence', quiz_reussi: false }; }
function isCoursAccessible(formationId, coursOrdre) {
  if (isAdmin()) return true;
  if (coursOrdre === 1) return true;
  const prev = getLocalProgressions().find(p => p.formation_id === formationId && parseInt(p.cours_id.split('_c')[1]) === coursOrdre - 1);
  return prev && prev.quiz_reussi;
}
function getFormationProgress(formationId) { const cours = getLocalCours(formationId); const progressions = getLocalProgressions().filter(p => p.formation_id === formationId); const completed = progressions.filter(p => p.quiz_reussi).length; return { total: cours.length, completed, percent: Math.round((completed / cours.length) * 100) }; }
function canTakeExam(formationId) { const prog = getFormationProgress(formationId); return prog.completed >= prog.total; }
function getExamenResult(formationId) { const raw = localStorage.getItem('examenResults'); const all = raw ? JSON.parse(raw) : {}; return all[formationId] || null; }
function setExamenResult(formationId, result) { const raw = localStorage.getItem('examenResults'); const all = raw ? JSON.parse(raw) : {}; all[formationId] = result; localStorage.setItem('examenResults', JSON.stringify(all)); }
function getLocalCertificats() { const raw = localStorage.getItem('certificats'); return raw ? JSON.parse(raw) : []; }
function addLocalCertificat(cert) { const all = getLocalCertificats(); all.push(cert); localStorage.setItem('certificats', JSON.stringify(all)); }

document.addEventListener('DOMContentLoaded', function() {
  initSupabase();
  renderNavbar();
  renderFooter();
});
