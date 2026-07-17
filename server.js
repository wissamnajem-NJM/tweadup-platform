require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use(express.static(path.join(__dirname, 'public')));

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token manquant' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
}

function adminMiddleware(req, res, next) {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Acces interdit' });
  next();
}

// AUTH
app.post('/api/auth/register', async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const result = await pool.query(
      'INSERT INTO profiles (email, password, nom, prenom, role) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [req.body.email, hashed, req.body.nom, req.body.prenom, 'etudiant']
    );
    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    if (req.body.email === process.env.ADMIN_EMAIL && req.body.password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ id: 'admin', email: req.body.email, role: 'admin' }, process.env.JWT_SECRET);
      return res.json({ token, user: { id: 'admin', email: req.body.email, nom: 'Admin', prenom: '', role: 'admin' } });
    }
    const result = await pool.query('SELECT * FROM profiles WHERE email = $1', [req.body.email]);
    const user = result.rows[0];
    if (!user) return res.status(400).json({ error: 'Email incorrect' });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ error: 'Mot de passe incorrect' });
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, email: user.email, nom: user.nom, prenom: user.prenom, role: user.role } });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    if (req.user.id === 'admin') return res.json({ id: 'admin', email: req.user.email, nom: 'Admin', prenom: '', role: 'admin' });
    const result = await pool.query('SELECT id, email, nom, prenom, role FROM profiles WHERE id = $1', [req.user.id]);
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// FORMATIONS
app.get('/api/formations', async (req, res) => {
  try { const result = await pool.query('SELECT * FROM formations ORDER BY domaine, titre'); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/formations/:id', async (req, res) => {
  try { const result = await pool.query('SELECT * FROM formations WHERE id = $1', [req.params.id]); res.json(result.rows[0]); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/formations/:id/cours', async (req, res) => {
  try { const result = await pool.query('SELECT * FROM cours WHERE formation_id = $1 ORDER BY ordre', [req.params.id]); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

// INSCRIPTIONS
app.post('/api/inscriptions', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('INSERT INTO inscriptions (etudiant_id, formation_id, statut) VALUES ($1,$2,$3) RETURNING *', [req.user.id, req.body.formation_id, 'en_attente']);
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/inscriptions/mine', authMiddleware, async (req, res) => {
  try { const result = await pool.query('SELECT i.*, f.titre as formation_titre FROM inscriptions i JOIN formations f ON i.formation_id = f.id WHERE i.etudiant_id = $1', [req.user.id]); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/inscriptions/attente', authMiddleware, adminMiddleware, async (req, res) => {
  try { const result = await pool.query("SELECT i.*, f.titre as formation_titre, p.nom, p.prenom, p.email FROM inscriptions i JOIN formations f ON i.formation_id = f.id JOIN profiles p ON i.etudiant_id = p.id WHERE i.statut = 'en_attente'"); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/inscriptions/:id/traiter', authMiddleware, adminMiddleware, async (req, res) => {
  try { const result = await pool.query('UPDATE inscriptions SET statut = $1, date_traitement = NOW() WHERE id = $2 RETURNING *', [req.body.statut, req.params.id]); res.json(result.rows[0]); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

// PROGRESSIONS
app.put('/api/progressions', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'INSERT INTO progressions (etudiant_id, formation_id, cours_id, statut, quiz_reussi, score_quiz) VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT (etudiant_id, formation_id, cours_id) DO UPDATE SET statut = $4, quiz_reussi = $5, score_quiz = $6 RETURNING *',
      [req.user.id, req.body.formation_id, req.body.cours_id, req.body.statut, req.body.quiz_reussi, req.body.score_quiz]);
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// EXAMENS
app.post('/api/examens', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'INSERT INTO resultats_examens (etudiant_id, formation_id, examen_id, score, reussi) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (etudiant_id, formation_id) DO UPDATE SET score = $4, reussi = $5 RETURNING *',
      [req.user.id, req.body.formation_id, 'examen_' + req.body.formation_id, req.body.score, req.body.reussi]);
    if (req.body.reussi) {
      const numero = 'TW-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      await pool.query('INSERT INTO certificats (etudiant_id, formation_id, numero, score_final) VALUES ($1,$2,$3,$4) ON CONFLICT DO NOTHING', [req.user.id, req.body.formation_id, numero, req.body.score]);
    }
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// CERTIFICATS
app.get('/api/certificats', authMiddleware, async (req, res) => {
  try { const result = await pool.query('SELECT c.*, f.titre as formation_titre FROM certificats c JOIN formations f ON c.formation_id = f.id WHERE c.etudiant_id = $1', [req.user.id]); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

// NOTIFICATIONS
app.get('/api/notifications', authMiddleware, async (req, res) => {
  try { const result = await pool.query('SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC', [req.user.id]); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/notifications/:id/lu', authMiddleware, async (req, res) => {
  try { await pool.query('UPDATE notifications SET lu = true WHERE id = $1', [req.params.id]); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

// ADMIN
app.get('/api/admin/stats', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const formations = await pool.query('SELECT COUNT(*) FROM formations');
    const etudiants = await pool.query("SELECT COUNT(*) FROM profiles WHERE role = 'etudiant'");
    const inscriptions = await pool.query("SELECT COUNT(*) FROM inscriptions WHERE statut = 'acceptee'");
    const attente = await pool.query("SELECT COUNT(*) FROM inscriptions WHERE statut = 'en_attente'");
    const certificats = await pool.query('SELECT COUNT(*) FROM certificats');
    res.json({ totalFormations: parseInt(formations.rows[0].count), totalEtudiants: parseInt(etudiants.rows[0].count), inscriptionsAcceptees: parseInt(inscriptions.rows[0].count), demandesAttente: parseInt(attente.rows[0].count), certificatsDelivres: parseInt(certificats.rows[0].count) });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/admin/certificats', authMiddleware, adminMiddleware, async (req, res) => {
  try { const result = await pool.query('SELECT c.*, f.titre as formation_titre, p.nom, p.prenom FROM certificats c JOIN formations f ON c.formation_id = f.id JOIN profiles p ON c.etudiant_id = p.id'); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/admin/formations', authMiddleware, adminMiddleware, async (req, res) => {
  try { const result = await pool.query('INSERT INTO formations (id, titre, description, domaine, image, duree, niveau) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (id) DO UPDATE SET titre=$2 RETURNING *', [req.body.id || ('f' + Date.now()), req.body.titre, req.body.description, req.body.domaine, req.body.image || '', req.body.duree || '50h', req.body.niveau || 'Debutant']); res.json(result.rows[0]); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/admin/formations/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try { await pool.query('DELETE FROM formations WHERE id = $1', [req.params.id]); res.json({ ok: true }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/admin/cours', authMiddleware, adminMiddleware, async (req, res) => {
  try { const result = await pool.query('INSERT INTO cours (id, formation_id, titre, description, contenu, video_url, pdf_url, ordre, duree) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO UPDATE SET titre=$3 RETURNING *', [req.body.id || ('c' + Date.now()), req.body.formation_id, req.body.titre, req.body.description || '', req.body.contenu || '', req.body.video_url || '', req.body.pdf_url || '', req.body.ordre, req.body.duree || '45min']); res.json(result.rows[0]); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/admin/formations', authMiddleware, adminMiddleware, async (req, res) => {
  try { const result = await pool.query('SELECT * FROM formations ORDER BY domaine, titre'); res.json(result.rows); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Serveur Tweadup port ' + PORT));
module.exports = app;
