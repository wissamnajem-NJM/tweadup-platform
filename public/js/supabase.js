let supabase = null;

function initSupabase() {
  if (typeof createClient !== 'undefined') {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return true;
  }
  return false;
}

async function sbRegister(email, password, nom, prenom) {
  const { data, error } = await supabase.auth.signUp({
    email, password,
    options: { data: { nom, prenom, role: 'etudiant' } }
  });
  if (error) return { error: error.message };
  await supabase.from('profiles').insert([{ id: data.user.id, email, nom, prenom, role: 'etudiant' }]);
  return { user: data.user, token: data.session?.access_token };
}

async function sbLogin(email, password) {
  if (email === 'admin@gmail.com' && password === 'Admin2005') {
    const token = btoa(JSON.stringify({ id: 'admin', email, role: 'admin' }));
    return { token, user: { id: 'admin', email, nom: 'Admin', prenom: '', role: 'admin' } };
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  return { token: data.session.access_token, user: data.user };
}

async function sbGetMe() {
  const token = getToken();
  if (!token) return null;
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.id === 'admin') return { id: 'admin', email: decoded.email, nom: 'Admin', prenom: '', role: 'admin' };
  } catch (e) {}
  const { data: { user } } = await supabase.auth.getUser(token);
  if (!user) return null;
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  return profile || user;
}

async function sbGetFormations() {
  const { data } = await supabase.from('formations').select('*').order('domaine');
  return data || [];
}

async function sbGetFormation(id) {
  const { data } = await supabase.from('formations').select('*').eq('id', id).single();
  return data;
}

async function sbGetCours(formationId) {
  const { data } = await supabase.from('cours').select('*').eq('formation_id', formationId).order('ordre');
  return data || [];
}

async function sbCreateInscription(formationId) {
  const user = await sbGetMe();
  if (!user) return { error: 'Not logged in' };
  const { data, error } = await supabase.from('inscriptions').insert([{ etudiant_id: user.id, formation_id: formationId, statut: 'en_attente' }]).select();
  return error ? { error: error.message } : data[0];
}

async function sbGetMyInscriptions() {
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return [];
  const { data } = await supabase.from('inscriptions').select('*, formation:formations(titre)').eq('etudiant_id', user.id);
  return data || [];
}

async function sbGetPendingInscriptions() {
  const { data } = await supabase.from('inscriptions').select('*, formation:formations(titre), etudiant:profiles(nom, prenom, email)').eq('statut', 'en_attente');
  return data || [];
}

async function sbUpdateInscription(id, statut) {
  const { data, error } = await supabase.from('inscriptions').update({ statut, date_traitement: new Date().toISOString() }).eq('id', id).select();
  return error ? { error: error.message } : data[0];
}

async function sbSaveProgression(formationId, coursId, statut, quizReussi, scoreQuiz) {
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return null;
  const { data, error } = await supabase.from('progressions').upsert([{ etudiant_id: user.id, formation_id: formationId, cours_id: coursId, statut, quiz_reussi: quizReussi, score_quiz: scoreQuiz }], { onConflict: ['etudiant_id', 'formation_id', 'cours_id'] }).select();
  return error ? { error: error.message } : data[0];
}

async function sbSaveExamen(formationId, score, reussi) {
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return null;
  const { data, error } = await supabase.from('resultats_examens').upsert([{ etudiant_id: user.id, formation_id: formationId, examen_id: 'examen_' + formationId, score, reussi }], { onConflict: ['etudiant_id', 'formation_id'] }).select();
  if (reussi) {
    const n = 'TW-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    await supabase.from('certificats').insert([{ etudiant_id: user.id, formation_id: formationId, numero: n, score_final: score }]);
  }
  return error ? { error: error.message } : data[0];
}

async function sbGetMyCertificats() {
  const user = await sbGetMe();
  if (!user || user.id === 'admin') return [];
  const { data } = await supabase.from('certificats').select('*, formation:formations(titre)').eq('etudiant_id', user.id);
  return data || [];
}

async function sbGetAdminStats() {
  const { count: f } = await supabase.from('formations').select('*', { count: 'exact', head: true });
  const { count: e } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'etudiant');
  const { count: i } = await supabase.from('inscriptions').select('*', { count: 'exact', head: true }).eq('statut', 'acceptee');
  const { count: a } = await supabase.from('inscriptions').select('*', { count: 'exact', head: true }).eq('statut', 'en_attente');
  const { count: c } = await supabase.from('certificats').select('*', { count: 'exact', head: true });
  return { totalFormations: f || 0, totalEtudiants: e || 0, inscriptionsAcceptees: i || 0, demandesAttente: a || 0, certificatsDelivres: c || 0 };
}

async function sbGetEtudiants() {
  const { data } = await supabase.from('profiles').select('*').eq('role', 'etudiant').order('created_at', { ascending: false });
  return data || [];
}
