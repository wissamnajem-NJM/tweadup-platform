// ============================================
// CLIENT SUPABASE + FONCTIONS CRUD
// ============================================

// Le client sera initialise apres le chargement du script CDN
let supabase = null;

function initSupabase() {
  if (typeof createClient !== 'undefined') {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase client initialized');
    return true;
  }
  console.error('Supabase CDN not loaded yet');
  return false;
}

// ============================================
// AUTH
// ============================================

async function sbRegister(email, password, nom, prenom) {
  if (!supabase) return { error: 'Supabase not initialized' };
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { nom, prenom, role: 'etudiant' } }
  });
  if (error) return { error: error.message };
  // Inserer dans la table profiles
  await supabase.from('profiles').insert([
    { id: data.user.id, email, nom, prenom, role: 'etudiant' }
  ]);
  return { user: data.user, token: data.session?.access_token };
}

async function sbLogin(email, password) {
  // Admin bypass
  if (email === 'admin@gmail.com' && password === 'Admin2005') {
    const fakeToken = btoa(JSON.stringify({ id: 'admin', email, role: 'admin', exp: Date.now() + 86400000 }));
    return { token: fakeToken, user: { id: 'admin', email, nom: 'Admin', prenom: '', role: 'admin' } };
  }
  if (!supabase) return { error: 'Supabase not initialized' };
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  return { token: data.session.access_token, user: data.user };
}

async function sbGetMe() {
  const token = getToken();
  if (!token) return null;
  // Check admin
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.role === 'admin' || decoded.id === 'admin') {
      return { id: 'admin', email: decoded.email, nom: 'Admin', prenom: '', role: 'admin' };
    }
  } catch (e) {}
  if (!supabase) return null;
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return null;
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  return profile || user;
}

async function sbLogout() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

// ============================================
// FORMATIONS
// ============================================

async function sbGetFormations() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('formations').select('*').order('domaine');
  return error ? [] : data;
}

async function sbGetFormation(id) {
  if (!supabase) return null;
  const { data, error } = await supabase.from('formations').select('*').eq('id', id).single();
  return error ? null : data;
}

async function sbGetCours(formationId) {
  if (!supabase) return [];
  const { data, error } = await supabase.from('cours').select('*').eq('formation_id', formationId).order('ordre');
  return error ? [] : data;
}

// ============================================
// INSCRIPTIONS
// ============================================

async function sbCreateInscription(formationId) {
  if (!supabase) return null;
  const user = await sbGetMe();
  if (!user) return { error: 'Not logged in' };
  const { data, error } = await supabase.from('inscriptions').insert([
    { etudiant_id: user.id, formation_id: formationId, statut: 'en_attente' }
  ]).select();
  return error ? { error: error.message } : data[0];
}

async function sbGetMyInscriptions() {
  if (!supabase) return [];
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return [];
  const { data, error } = await supabase
    .from('inscriptions')
    .select('*, formations:titre')
    .eq('etudiant_id', user.id);
  return error ? [] : data;
}

async function sbGetPendingInscriptions() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('inscriptions')
    .select('*, formation:formations(*), etudiant:profiles(*)')
    .eq('statut', 'en_attente');
  return error ? [] : data;
}

async function sbUpdateInscription(id, statut) {
  if (!supabase) return null;
  const { data, error } = await supabase.from('inscriptions')
    .update({ statut, date_traitement: new Date().toISOString() })
    .eq('id', id).select();
  return error ? { error: error.message } : data[0];
}

// ============================================
// PROGRESSIONS
// ============================================

async function sbSaveProgression(formationId, coursId, statut, quizReussi, scoreQuiz) {
  if (!supabase) return null;
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return null;
  const { data, error } = await supabase.from('progressions').upsert([
    { etudiant_id: user.id, formation_id: formationId, cours_id: coursId, statut, quiz_reussi: quizReussi, score_quiz: scoreQuiz }
  ], { onConflict: ['etudiant_id', 'formation_id', 'cours_id'] }).select();
  return error ? { error: error.message } : data[0];
}

async function sbGetMyProgressions() {
  if (!supabase) return [];
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return [];
  const { data, error } = await supabase.from('progressions').select('*').eq('etudiant_id', user.id);
  return error ? [] : data;
}

// ============================================
// EXAMENS
// ============================================

async function sbSaveExamen(formationId, score, reussi) {
  if (!supabase) return null;
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return null;
  const { data, error } = await supabase.from('resultats_examens').upsert([
    { etudiant_id: user.id, formation_id: formationId, examen_id: 'examen_' + formationId, score, reussi }
  ], { onConflict: ['etudiant_id', 'formation_id'] }).select();
  if (reussi) {
    const n = 'TW-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    await supabase.from('certificats').insert([
      { etudiant_id: user.id, formation_id: formationId, numero: n, score_final: score }
    ]);
  }
  return error ? { error: error.message } : data[0];
}

// ============================================
// CERTIFICATS
// ============================================

async function sbGetMyCertificats() {
  if (!supabase) return [];
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return [];
  const { data, error } = await supabase.from('certificats').select('*, formation:formations(titre)').eq('etudiant_id', user.id);
  return error ? [] : data;
}

async function sbGetAllCertificats() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('certificats').select('*, formation:formations(titre), etudiant:profiles(nom, prenom)');
  return error ? [] : data;
}

// ============================================
// NOTIFICATIONS
// ============================================

async function sbGetNotifications() {
  if (!supabase) return [];
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return [];
  const { data, error } = await supabase.from('notifications').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
  return error ? [] : data;
}

async function sbMarkNotificationRead(id) {
  if (!supabase) return null;
  await supabase.from('notifications').update({ lu: true }).eq('id', id);
}

// ============================================
// ADMIN STATS
// ============================================

async function sbGetAdminStats() {
  if (!supabase) return {};
  const { count: totalFormations } = await supabase.from('formations').select('*', { count: 'exact', head: true });
  const { count: totalEtudiants } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'etudiant');
  const { count: inscriptionsAcceptees } = await supabase.from('inscriptions').select('*', { count: 'exact', head: true }).eq('statut', 'acceptee');
  const { count: demandesAttente } = await supabase.from('inscriptions').select('*', { count: 'exact', head: true }).eq('statut', 'en_attente');
  const { count: certificatsDelivres } = await supabase.from('certificats').select('*', { count: 'exact', head: true });
  return { totalFormations: totalFormations || 0, totalEtudiants: totalEtudiants || 0, inscriptionsAcceptees: inscriptionsAcceptees || 0, demandesAttente: demandesAttente || 0, certificatsDelivres: certificatsDelivres || 0 };
}

async function sbGetEtudiants() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('profiles').select('*').eq('role', 'etudiant').order('created_at', { ascending: false });
  return error ? [] : data;
}

// ============================================
// FORMATIONS ADMIN
// ============================================

async function sbCreateFormation(formation) {
  if (!supabase) return null;
  const { data, error } = await supabase.from('formations').insert([formation]).select();
  return error ? { error: error.message } : data[0];
}

async function sbDeleteFormation(id) {
  if (!supabase) return;
  await supabase.from('cours').delete().eq('formation_id', id);
  await supabase.from('formations').delete().eq('id', id);
}

async function sbCreateCours(cours) {
  if (!supabase) return null;
  const { data, error } = await supabase.from('cours').insert([cours]).select();
  return error ? { error: error.message } : data[0];
}
