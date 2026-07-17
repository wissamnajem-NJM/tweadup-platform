require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Config multer pour uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'public', 'uploads')),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.random().toString(36).substring(2, 8);
    cb(null, unique + '-' + file.originalname.replace(/\s+/g, '_'));
  }
});
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } }); // 50MB max

// Creer dossier uploads si pas exist
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Servir les fichiers statiques (frontend + uploads)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// ============================================
// MIDDLEWARE AUTH
// ============================================
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

// ============================================
// AUTH - INSCRIPTION / CONNEXION
// ============================================

// Inscription
app.post('/api/auth/register', async (req, res) => {
  const { email, password, nom, prenom } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO profiles (id, email, password, nom, prenom, role) 
       VALUES (gen_random_uuid(), $1, $2, $3, $4, 'etudiant') 
       RETURNING id, email, nom, prenom, role`,
      [email, hashed, nom, prenom]
    );
    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, email: user.email, nom: user.nom, prenom: user.prenom, role: user.role } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Connexion
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Admin fixe
    if (email === process.env.ADMIN_EMAIL) {
      const match = await bcrypt.compare(password, await bcrypt.hash(process.env.ADMIN_PASSWORD, 10));
      // Verification directe pour l'admin
      const isAdmin = password === process.env.ADMIN_PASSWORD;
      if (isAdmin) {
        const token = jwt.sign({ id: 'admin-fixed', email, role: 'admin' }, process.env.JWT_SECRET);
        return res.json({ token, user: { id: 'admin-fixed', email, nom: 'Admin', prenom: 'Tweadup', role: 'admin' } });
      }
    }

    const result = await pool.query('SELECT * FROM profiles WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user) return res.status(400).json({ error: 'Email ou mot de passe incorrect' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Email ou mot de passe incorrect' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, email: user.email, nom: user.nom, prenom: user.prenom, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Profil
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    if (req.user.id === 'admin-fixed') {
      return res.json({ id: 'admin-fixed', email: req.user.email, nom: 'Admin', prenom: 'Tweadup', role: 'admin' });
    }
    const result = await pool.query('SELECT id, email, nom, prenom, role FROM profiles WHERE id = $1', [req.user.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// FORMATIONS
// ============================================

// Toutes les formations
app.get('/api/formations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM formations ORDER BY domaine, titre');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Formation par ID
app.get('/api/formations/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM formations WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// COURS
// ============================================

// Cours d'une formation
app.get('/api/formations/:id/cours', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cours WHERE formation_id = $1 ORDER BY ordre', [req.params.id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// INSCRIPTIONS
// ============================================

// Demander inscription
app.post('/api/inscriptions', authMiddleware, async (req, res) => {
  const { formation_id } = req.body;
  try {
    const exist = await pool.query(
      'SELECT * FROM inscriptions WHERE etudiant_id = $1 AND formation_id = $2',
      [req.user.id, formation_id]
    );
    if (exist.rows.length > 0) {
      return res.status(400).json({ error: 'Demande deja envoyee' });
    }
    const result = await pool.query(
      'INSERT INTO inscriptions (etudiant_id, formation_id, statut) VALUES ($1, $2, $3) RETURNING *',
      [req.user.id, formation_id, 'en_attente']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mes inscriptions
app.get('/api/inscriptions/mine', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT i.*, f.titre as formation_titre, f.domaine, f.image 
       FROM inscriptions i 
       JOIN formations f ON i.formation_id = f.id 
       WHERE i.etudiant_id = $1 
       ORDER BY i.date_demande DESC`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Statut d'inscription
app.get('/api/inscriptions/status/:formationId', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT statut FROM inscriptions WHERE etudiant_id = $1 AND formation_id = $2',
      [req.user.id, req.params.formationId]
    );
    res.json({ statut: result.rows[0]?.statut || null });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin - demandes en attente
app.get('/api/inscriptions/attente', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT i.*, f.titre as formation_titre, p.nom, p.prenom, p.email
       FROM inscriptions i 
       JOIN formations f ON i.formation_id = f.id 
       JOIN profiles p ON i.etudiant_id = p.id
       WHERE i.statut = 'en_attente'
       ORDER BY i.date_demande DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin - traiter demande
app.put('/api/inscriptions/:id/traiter', authMiddleware, adminMiddleware, async (req, res) => {
  const { statut } = req.body; // 'acceptee' ou 'refusee'
  try {
    const result = await pool.query(
      'UPDATE inscriptions SET statut = $1, date_traitement = NOW() WHERE id = $2 RETURNING *',
      [statut, req.params.id]
    );
    const insc = result.rows[0];

    // Creer notification
    await pool.query(
      'INSERT INTO notifications (user_id, titre, message, type) VALUES ($1, $2, $3, $4)',
      [insc.etudiant_id,
       statut === 'acceptee' ? 'Inscription acceptee' : 'Inscription refusee',
       statut === 'acceptee' ? 'Votre inscription a ete acceptee.' : 'Votre inscription a ete refusee.',
       'inscription']
    );

    // Si acceptee, creer progressions
    if (statut === 'acceptee') {
      const cours = await pool.query('SELECT id FROM cours WHERE formation_id = $1', [insc.formation_id]);
      for (const c of cours.rows) {
        await pool.query(
          `INSERT INTO progressions (etudiant_id, formation_id, cours_id, statut, quiz_reussi)
           VALUES ($1, $2, $3, 'non_commence', false)
           ON CONFLICT DO NOTHING`,
          [insc.etudiant_id, insc.formation_id, c.id]
        );
      }
    }

    res.json(insc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// PROGRESSIONS
// ============================================

// Ma progression pour une formation
app.get('/api/progressions/:formationId', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM progressions WHERE etudiant_id = $1 AND formation_id = $2',
      [req.user.id, req.params.formationId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mettre a jour progression
app.put('/api/progressions', authMiddleware, async (req, res) => {
  const { formation_id, cours_id, statut, quiz_reussi, score_quiz } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO progressions (etudiant_id, formation_id, cours_id, statut, quiz_reussi, score_quiz, date_completion)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (etudiant_id, formation_id, cours_id)
       DO UPDATE SET statut = $4, quiz_reussi = $5, score_quiz = $6, date_completion = $7
       RETURNING *`,
      [req.user.id, formation_id, cours_id, statut, quiz_reussi, score_quiz,
       statut === 'termine' ? new Date() : null]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// EXAMENS
// ============================================

// Sauvegarder resultat examen
app.post('/api/examens', authMiddleware, async (req, res) => {
  const { formation_id, score, reussi } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO resultats_examens (etudiant_id, formation_id, examen_id, score, reussi)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (etudiant_id, formation_id)
       DO UPDATE SET score = $4, reussi = $5, date_passage = NOW()
       RETURNING *`,
      [req.user.id, formation_id, `examen_${formation_id}`, score, reussi]
    );

    // Si reussi, generer certificat
    if (reussi) {
      const numero = 'TW-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      await pool.query(
        `INSERT INTO certificats (etudiant_id, formation_id, numero, score_final)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT DO NOTHING`,
        [req.user.id, formation_id, numero, score]
      );
      await pool.query(
        'INSERT INTO notifications (user_id, titre, message, type) VALUES ($1, $2, $3, $4)',
        [req.user.id, 'Certificat obtenu !', `Examen reussi avec ${score}%. Certificat: ${numero}`, 'certificat']
      );
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// CERTIFICATS
// ============================================

// Mes certificats
app.get('/api/certificats', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.*, f.titre as formation_titre 
       FROM certificats c 
       JOIN formations f ON c.formation_id = f.id 
       WHERE c.etudiant_id = $1 
       ORDER BY c.date_obtention DESC`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// NOTIFICATIONS
// ============================================

// Mes notifications
app.get('/api/notifications', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Marquer comme lu
app.put('/api/notifications/:id/lu', authMiddleware, async (req, res) => {
  try {
    await pool.query('UPDATE notifications SET lu = true WHERE id = $1 AND user_id = $2', [req.params.id, req.user.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// ADMIN STATS
// ============================================

app.get('/api/admin/stats', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const formations = await pool.query('SELECT COUNT(*) FROM formations');
    const etudiants = await pool.query("SELECT COUNT(*) FROM profiles WHERE role = 'etudiant'");
    const inscriptions = await pool.query("SELECT COUNT(*) FROM inscriptions WHERE statut = 'acceptee'");
    const attente = await pool.query("SELECT COUNT(*) FROM inscriptions WHERE statut = 'en_attente'");
    const certificats = await pool.query('SELECT COUNT(*) FROM certificats');
    res.json({
      totalFormations: parseInt(formations.rows[0].count),
      totalEtudiants: parseInt(etudiants.rows[0].count),
      inscriptionsAcceptees: parseInt(inscriptions.rows[0].count),
      demandesAttente: parseInt(attente.rows[0].count),
      certificatsDelivres: parseInt(certificats.rows[0].count)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin - toutes inscriptions
app.get('/api/admin/inscriptions', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT i.*, f.titre as formation_titre, p.nom, p.prenom
       FROM inscriptions i 
       JOIN formations f ON i.formation_id = f.id 
       JOIN profiles p ON i.etudiant_id = p.id
       ORDER BY i.date_demande DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// ADMIN - CRUD FORMATIONS
// ============================================

// Creer une formation (admin)
app.post('/api/admin/formations', authMiddleware, adminMiddleware, async (req, res) => {
  const { id, titre, description, domaine, image, duree, niveau, video_url } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO formations (id, titre, description, domaine, image, duree, niveau, nombre_cours, video_url)
       VALUES ($1,$2,$3,$4,$5,$6,$7,10,$8)
       ON CONFLICT (id) DO UPDATE SET titre=$2, description=$3, domaine=$4, image=$5, duree=$6, niveau=$7, video_url=$8
       RETURNING *`,
      [id || ('f' + Date.now()), titre, description, domaine, image || '', duree || '50h', niveau || 'Debutant', video_url || '']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Supprimer une formation (admin)
app.delete('/api/admin/formations/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM formations WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter un cours a une formation (admin)
app.post('/api/admin/cours', authMiddleware, adminMiddleware, async (req, res) => {
  const { id, formation_id, titre, description, contenu, video_url, pdf_url, ordre, duree } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO cours (id, formation_id, titre, description, contenu, video_url, pdf_url, ordre, duree)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       ON CONFLICT (id) DO UPDATE SET titre=$3, description=$4, contenu=$5, video_url=$6, pdf_url=$7, ordre=$8, duree=$9
       RETURNING *`,
      [id || ('c' + Date.now()), formation_id, titre, description, contenu || '', video_url || '', pdf_url || '', ordre, duree || '45min']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload fichier (PDF ou video) - admin
app.post('/api/admin/upload', authMiddleware, adminMiddleware, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Aucun fichier' });
  const fileUrl = '/uploads/' + req.file.filename;
  res.json({ url: fileUrl, filename: req.file.filename, originalname: req.file.originalname });
});

// Toutes les formations pour admin
app.get('/api/admin/formations', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM formations ORDER BY domaine, titre');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cours d'une formation pour admin
app.get('/api/admin/formations/:id/cours', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cours WHERE formation_id = $1 ORDER BY ordre', [req.params.id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin - tous certificats
app.get('/api/admin/certificats', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.*, f.titre as formation_titre, p.nom, p.prenom
       FROM certificats c 
       JOIN formations f ON c.formation_id = f.id 
       JOIN profiles p ON c.etudiant_id = p.id
       ORDER BY c.date_obtention DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================
// INITIALISATION - Creer tables si pas exist
// ============================================

async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS profiles (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        password TEXT,
        nom TEXT NOT NULL,
        prenom TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'etudiant' CHECK (role IN ('admin', 'etudiant')),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS formations (
        id TEXT PRIMARY KEY,
        titre TEXT NOT NULL,
        description TEXT NOT NULL,
        domaine TEXT NOT NULL,
        image TEXT,
        duree TEXT,
        niveau TEXT,
        nombre_cours INTEGER DEFAULT 10,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS cours (
        id TEXT PRIMARY KEY,
        formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
        titre TEXT NOT NULL,
        description TEXT,
        contenu TEXT,
        video_url TEXT,
        pdf_url TEXT,
        ordre INTEGER NOT NULL,
        duree TEXT DEFAULT '45min',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    
    -- Ajouter colonnes video_url et pdf_url si elles n'existent pas (migration)
    try {
      await pool.query(`ALTER TABLE cours ADD COLUMN IF NOT EXISTS video_url TEXT`);
      await pool.query(`ALTER TABLE cours ADD COLUMN IF NOT EXISTS pdf_url TEXT`);
    } catch (e) { /* colonnes existent deja */ }
    
    -- Ajouter colonnes video_url et pdf_url a formations si pas exist
    try {
      await pool.query(`ALTER TABLE formations ADD COLUMN IF NOT EXISTS video_url TEXT`);
      await pool.query(`ALTER TABLE formations ADD COLUMN IF NOT EXISTS pdf_url TEXT`);
    } catch (e) { /* colonnes existent deja */ }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS inscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
        statut TEXT NOT NULL DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'acceptee', 'refusee')),
        date_demande TIMESTAMP DEFAULT NOW(),
        date_traitement TIMESTAMP,
        UNIQUE(etudiant_id, formation_id)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS progressions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
        cours_id TEXT NOT NULL,
        statut TEXT NOT NULL DEFAULT 'non_commence' CHECK (statut IN ('non_commence', 'en_cours', 'termine')),
        quiz_reussi BOOLEAN DEFAULT FALSE,
        score_quiz INTEGER,
        date_completion TIMESTAMP,
        UNIQUE(etudiant_id, formation_id, cours_id)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS resultats_examens (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
        examen_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        reussi BOOLEAN DEFAULT FALSE,
        date_passage TIMESTAMP DEFAULT NOW(),
        UNIQUE(etudiant_id, formation_id)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificats (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
        numero TEXT NOT NULL UNIQUE,
        score_final INTEGER NOT NULL,
        date_obtention TIMESTAMP DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id TEXT NOT NULL,
        titre TEXT NOT NULL,
        message TEXT NOT NULL,
        type TEXT DEFAULT 'systeme',
        lu BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Inserer formations par defaut si vide
    const count = await pool.query('SELECT COUNT(*) FROM formations');
    if (parseInt(count.rows[0].count) === 0) {
      await insertDefaultFormations();
    }

    console.log('Base de donnees initialisee avec succes');
  } catch (err) {
    console.error('Erreur init DB:', err);
  }
}

async function insertDefaultFormations() {
  const formations = require('./api/formations-data');
  for (const f of formations.FORMATIONS) {
    await pool.query(
      'INSERT INTO formations (id, titre, description, domaine, image, duree, niveau, nombre_cours) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT DO NOTHING',
      [f.id, f.titre, f.description, f.domaine, f.image, f.duree, f.niveau, f.nombre_cours]
    );
  }
  for (const c of formations.ALL_COURS) {
    await pool.query(
      'INSERT INTO cours (id, formation_id, titre, description, contenu, ordre, duree) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT DO NOTHING',
      [c.id, c.formation_id, c.titre, c.description, c.contenu, c.ordre, c.duree]
    );
  }
  console.log('Formations et cours inseres');
}

// ============================================
// LANCER SERVEUR
// ============================================

const PORT = process.env.PORT || 3000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur Tweadup demarre sur le port ${PORT}`);
  });
});

module.exports = app;
