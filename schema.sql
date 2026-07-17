-- ============================================
-- TWEADUP - SCHEMA COMPLET NEON POSTGRESQL
-- ============================================
-- Executez ce script dans le SQL Editor de Neon
-- https://console.neon.tech

-- ============================================
-- 1. TABLE PROFILES (utilisateurs)
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    password TEXT,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'etudiant' CHECK (role IN ('admin', 'etudiant')),
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- 2. TABLE FORMATIONS
-- ============================================
CREATE TABLE IF NOT EXISTS formations (
    id TEXT PRIMARY KEY,
    titre TEXT NOT NULL,
    description TEXT NOT NULL,
    domaine TEXT NOT NULL,
    image TEXT,
    video_url TEXT,
    pdf_url TEXT,
    duree TEXT,
    niveau TEXT,
    nombre_cours INTEGER DEFAULT 10,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- 3. TABLE COURS
-- ============================================
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
);

-- ============================================
-- 4. TABLE INSCRIPTIONS
-- ============================================
CREATE TABLE IF NOT EXISTS inscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
    statut TEXT NOT NULL DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'acceptee', 'refusee')),
    date_demande TIMESTAMP DEFAULT NOW(),
    date_traitement TIMESTAMP,
    UNIQUE(etudiant_id, formation_id)
);

-- ============================================
-- 5. TABLE PROGRESSIONS
-- ============================================
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
);

-- ============================================
-- 6. TABLE RESULTATS EXAMENS
-- ============================================
CREATE TABLE IF NOT EXISTS resultats_examens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
    examen_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    reussi BOOLEAN DEFAULT FALSE,
    date_passage TIMESTAMP DEFAULT NOW(),
    UNIQUE(etudiant_id, formation_id)
);

-- ============================================
-- 7. TABLE CERTIFICATS
-- ============================================
CREATE TABLE IF NOT EXISTS certificats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    etudiant_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    formation_id TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
    numero TEXT NOT NULL UNIQUE,
    score_final INTEGER NOT NULL,
    date_obtention TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- 8. TABLE NOTIFICATIONS
-- ============================================
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    titre TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'systeme',
    lu BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- VERIFICATION : Lister les tables creees
-- ============================================
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
