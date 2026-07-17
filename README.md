# Tweadup - Plateforme E-Learning

## Description
Plateforme de formation en ligne professionnelle avec Neon PostgreSQL, Node.js, Express.

## Stack Technique
- **Frontend**: HTML5, CSS3, JavaScript ES6+ (vanilla)
- **Backend**: Node.js, Express.js
- **Base de donnees**: Neon PostgreSQL
- **Authentification**: JWT
- **Upload fichiers**: Multer (PDF, videos)
- **Certificats**: jsPDF
- **Deploiement**: Vercel

## Configuration Neon PostgreSQL (OBLIGATOIRE)

### 1. Creer un compte Neon
- Allez sur https://neon.tech
- Connectez-vous avec GitHub ou email
- Creez un nouveau projet

### 2. Obtenir DATABASE_URL
Dans le dashboard Neon :
1. Selectionnez votre projet
2. Cliquez sur **"Connection String"**
3. Choisissez **"Node.js"** comme format
4. Copiez la chaine de connexion qui ressemble a :
```
postgresql://neondb_owner:votre_mot_de_passe@ep-xxxxx.neon.tech/neondb?sslmode=require
```

### 3. Configurer .env
Remplacez `DATABASE_URL` dans le fichier `.env` par votre chaine de connexion Neon :
```env
DATABASE_URL=postgresql://neondb_owner:votre_mot_de_passe@ep-xxxxx.neon.tech/neondb?sslmode=require
JWT_SECRET=votre_cle_secrete_tres_longue
PORT=3000
NODE_ENV=development
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=Admin2005
```

> **IMPORTANT** : La base de donnees se cree automatiquement au demarrage. Les tables sont generees automatiquement.

## Installation

### 1. Cloner le projet
```bash
git clone https://github.com/wissamnajem-NJM/tweadup.git
cd tweadup
```

### 2. Installer les dependances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Editez le fichier `.env` avec vos informations Neon (voir section ci-dessus).

### 4. Lancer le serveur
```bash
npm start
# ou pour le mode developpement :
npm run dev
```

Le serveur demarre sur `http://localhost:3000`

### 5. Compte Admin par defaut
- Email : `admin@gmail.com`
- Mot de passe : `Admin2005`

## Fonctionnalites

### Etudiant
- Inscription/Connexion avec JWT
- Parcourir 30 formations dans 4 domaines
- Demander l'acces a une formation
- Suivre les cours avec progression sequentielle
- Voir les videos (YouTube, Vimeo, ou upload)
- Telecharger les fichiers PDF des cours
- Passer les quiz (15 questions, 70% minimum)
- Passer l'examen final (45 questions, 70% minimum)
- **Telecharger les certificats en PDF** avec numero unique
- Dashboard avec statistiques
- Notifications

### Administrateur
- **Ajouter des formations** avec titre, description, domaine, image, URL video
- **Ajouter des cours** avec contenu HTML, URL video, fichier PDF
- **Uploader des fichiers** (PDF, videos) via le panel admin
- **Supprimer des formations**
- Valider/Refuser les demandes d'inscription
- Voir toutes les statistiques
- Voir tous les certificats delivres

## Upload Video et PDF (Admin)

### Pour ajouter une video a un cours :
1. Allez dans le panel admin → "+ Cours"
2. Dans "URL Video", entrez :
   - Un lien **YouTube embed** : `https://www.youtube.com/embed/VIDEO_ID`
   - Une URL video directe : `https://monsite.com/video.mp4`
3. Ou uploadez un fichier via "Fichier PDF"

### Pour ajouter un PDF a un cours :
1. Allez dans le panel admin → "+ Cours"
2. Dans "Fichier PDF", selectionnez votre fichier .pdf
3. Le fichier sera upload automatiquement
4. Les etudiants pourront voir le PDF dans l'onglet "PDF" du cours

## Certificat PDF
Apres reussite de l'examen final (70% minimum) :
- Le certificat est genere automatiquement
- Numero unique : `TW-XXXXXXXX-XXXXXX`
- **Telechargeable en PDF** depuis la page "Mes Certificats"
- Design professionnel avec bordure doree

## Deploiement Vercel

### Variables d'environnement Vercel
Dans le dashboard Vercel → Settings → Environment Variables, ajoutez :
- `DATABASE_URL` : votre URL Neon
- `JWT_SECRET` : votre cle secrete
- `ADMIN_EMAIL` : email admin
- `ADMIN_PASSWORD` : mot de passe admin
- `NODE_ENV` : production

### Commandes deploiement
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Deployer
vercel --prod
```

## Structure du projet
```
tweadup/
├── server.js              # Backend Node.js/Express
├── db.js                  # Connexion Neon PostgreSQL
├── package.json           # Dependances
├── .env                   # Variables d'environnement
├── vercel.json            # Config deploiement
├── api/
│   └── formations-data.js # Donnees 30 formations
└── public/
    ├── index.html         # Page d'accueil
    ├── login.html         # Connexion
    ├── register.html      # Inscription
    ├── formations.html    # Liste formations
    ├── formation.html     # Detail formation
    ├── cours.html         # Cours + video + PDF + quiz
    ├── examen.html        # Examen final + certificat
    ├── dashboard.html     # Espace etudiant
    ├── admin.html         # Panel admin (CRUD + upload)
    ├── certificats.html   # Mes certificats PDF
    ├── notifications.html # Notifications
    ├── uploads/           # Fichiers uploades (auto-cree)
    ├── css/
    │   └── style.css      # Styles responsives
    └── js/
        ├── data.js        # Donnees formations + quiz
        └── app.js         # Application principale
```

## Tables de la base de donnees (auto-creees)
- **profiles** : utilisateurs (etudiants + admin)
- **formations** : 30 formations avec video_url, pdf_url
- **cours** : 300 cours avec contenu, video_url, pdf_url
- **inscriptions** : demandes d'inscription
- **progressions** : progression des etudiants
- **resultats_examens** : resultats des examens
- **certificats** : certificats delivres
- **notifications** : notifications systeme

## Responsive
Le site est compatible avec :
- **Desktop** (1280px+)
- **Tablette** (max 1024px)
- **Mobile** (max 768px)
- **Petit mobile** (max 480px)
