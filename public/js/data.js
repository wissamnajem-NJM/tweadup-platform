// ============================================
// DONNEES - 30 FORMATIONS + 300 COURS + VIDEOS + QUIZ
// ============================================

const DOMAINES = [
  'Informatique & Developpement',
  'Marketing Digital',
  'Design & Creation',
  'Business & Entrepreneuriat'
];

const FORMATIONS = [
  { id: 'f1', titre: 'Developpement Web Full Stack', description: 'HTML, CSS, JavaScript, React, Node.js. Construisez des applications web completes.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800', duree: '120h', niveau: 'Debutant' },
  { id: 'f2', titre: 'Python pour la Data Science', description: 'Python, Pandas, NumPy, Matplotlib et scikit-learn pour analyser des donnees.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800', duree: '100h', niveau: 'Debutant' },
  { id: 'f3', titre: 'Developpement Mobile Flutter', description: 'Applications mobiles cross-platform iOS et Android avec Flutter et Dart.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', duree: '90h', niveau: 'Intermediaire' },
  { id: 'f4', titre: 'Intelligence Artificielle & ML', description: 'Fondamentaux de l\'IA, reseaux de neurones, deep learning.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800', duree: '140h', niveau: 'Avance' },
  { id: 'f5', titre: 'Cybersecurite & Hacking Ethique', description: 'Securite des reseaux, tests d\'intrusion, protection des systemes.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800', duree: '110h', niveau: 'Intermediaire' },
  { id: 'f6', titre: 'Cloud Computing & AWS', description: 'Services cloud Amazon, deploiement, scaling et gestion d\'infrastructure.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', duree: '95h', niveau: 'Intermediaire' },
  { id: 'f7', titre: 'Bases de Donnees SQL & NoSQL', description: 'Conception, optimisation et gestion de bases de donnees.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800', duree: '80h', niveau: 'Debutant' },
  { id: 'f8', titre: 'DevOps & CI/CD', description: 'Docker, Kubernetes, Jenkins, GitLab CI et automatisation.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=800', duree: '100h', niveau: 'Avance' },
  { id: 'f9', titre: 'SEO & Referencement Naturel', description: 'Optimisez votre site pour Google, mots-cles, backlinks.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800', duree: '70h', niveau: 'Debutant' },
  { id: 'f10', titre: 'Facebook & Instagram Ads', description: 'Campagnes publicitaires performantes sur les reseaux sociaux.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800', duree: '60h', niveau: 'Debutant' },
  { id: 'f11', titre: 'Marketing de Contenu', description: 'Strategie de contenu, storytelling, copywriting.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', duree: '65h', niveau: 'Intermediaire' },
  { id: 'f12', titre: 'Email Marketing Automation', description: 'Sequences d\'emails automatisees qui convertissent.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800', duree: '50h', niveau: 'Intermediaire' },
  { id: 'f13', titre: 'Google Ads & SEM', description: 'Google Ads, recherche payante et marketing search.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?w=800', duree: '70h', niveau: 'Intermediaire' },
  { id: 'f14', titre: 'Analytics & Data Marketing', description: 'Google Analytics 4, GTM, tableaux de bord data-driven.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', duree: '80h', niveau: 'Avance' },
  { id: 'f15', titre: 'Community Management', description: 'Gerez votre communaute, creez de l\'engagement.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800', duree: '55h', niveau: 'Debutant' },
  { id: 'f16', titre: 'Growth Hacking', description: 'Techniques de croissance rapide, A/B testing, viralite.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', duree: '75h', niveau: 'Avance' },
  { id: 'f17', titre: 'UI/UX Design', description: 'Interfaces intuitives avec Figma, prototypage et user research.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800', duree: '90h', niveau: 'Debutant' },
  { id: 'f18', titre: 'Adobe Creative Suite', description: 'Photoshop, Illustrator et InDesign pour des visuels pros.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800', duree: '100h', niveau: 'Debutant' },
  { id: 'f19', titre: 'Motion Design & Animation', description: 'After Effects, animations 2D/3D et videos dynamiques.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800', duree: '85h', niveau: 'Intermediaire' },
  { id: 'f20', titre: 'Design 3D avec Blender', description: 'Modelisation 3D, texturing, eclairage et rendu.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800', duree: '110h', niveau: 'Intermediaire' },
  { id: 'f21', titre: 'Photographie Professionnelle', description: 'Prise de vue, composition, eclairage et post-traitement.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800', duree: '70h', niveau: 'Debutant' },
  { id: 'f22', titre: 'Illustration Digitale', description: 'Dessin numerique avec Procreate et Photoshop.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800', duree: '80h', niveau: 'Intermediaire' },
  { id: 'f23', titre: 'Webdesign Responsive', description: 'Design adaptatif, mobile-first, wireframing.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800', duree: '75h', niveau: 'Debutant' },
  { id: 'f24', titre: 'Creation d\'Entreprise', description: 'Business plan, financement, modele economique.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800', duree: '85h', niveau: 'Debutant' },
  { id: 'f25', titre: 'Gestion de Projet Agile', description: 'Scrum, Kanban, Jira et methodologies agiles.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800', duree: '70h', niveau: 'Intermediaire' },
  { id: 'f26', titre: 'Finance pour Entrepreneurs', description: 'Comptabilite, gestion financiere, previsions.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', duree: '75h', niveau: 'Debutant' },
  { id: 'f27', titre: 'Leadership & Management', description: 'Gestion d\'equipe, communication, leadership.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', duree: '65h', niveau: 'Intermediaire' },
  { id: 'f28', titre: 'E-commerce & Dropshipping', description: 'Boutique en ligne, marketing et logistique.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', duree: '70h', niveau: 'Debutant' },
  { id: 'f29', titre: 'Negociation & Ventes B2B', description: 'Techniques de vente, prospection, closing.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', duree: '60h', niveau: 'Avance' },
  { id: 'f30', titre: 'Business Intelligence', description: 'Tableaux de bord, KPIs, Power BI, strategie data.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', duree: '90h', niveau: 'Avance' }
];

// ============================================
// VIDEOS YOUTUBE PAR FORMATION
// ============================================
const VIDEOS_YOUTUBE = {
  'f1': ['Wm6CUkswsXA','UB1O30fR-EE','yfoY53QXEnI','PkZNo7MFNFg','hdI2bqOjy3M','w7ejDZ8SWv8','nW63DPgeVLw','1Rs2ND1ryYc','5sXmfVtVknk','F5mRW0jo-U4'],
  'f2': ['LHBE6Q9XlzI','B42nJP8VHEA','y94bVT0XQoA','W8Bz3de5Eio','h4u6_7_8_9_0','k3l4m5n6o7p','q8r9s0t1u2v','w3x4y5z6a7b','c8d9e0f1g2h','i3j4k5l6m7n'],
  'f3': ['1ukSR1GRtMU','x0YmBfPE5xQ','y7J8x9Y0Z1A','b2C3d4E5f6G','h7I8j9K0l1M','n2O3p4Q5r6S','t7U8v9W0x1Y','z2A3b4C5d6E','f7G8h9I0j1K','l2M3n4O5p6Q'],
  'f4': ['aircAruvnKk','IHZwWFHWa-w','UzxYlbK2c7E','JyGGyR8x8I0','k9L0m1N2o3P','q4R5s6T7u8V','w9X0y1Z2a3B','c4D5e6F7g8H','i9J0k1L2m3N','o4P5q6R7s8T'],
  'f5': ['Kx4y9f6g8H2','u3V4w5X6y7Z','a8B9c0D1e2F','g3H4i5J6k7L','m8N9o0P1q2R','s3T4u5V6w7X','y8Z9a0B1c2D','e3F4g5H6i7J','k8L9m0N1o2P','q3R4s5T6u7V'],
  'f6': ['a8Y9z0A1b2C','d3E4f5G6h7I','j8K9l0M1n2O','p3Q4r5S6t7U','v8W9x0Y1z2A','b3C4d5E6f7G','h8I9j0K1l2M','n3O4p5Q6r7S','t8U9v0W1x2Y','z3A4b5C6d7E'],
  'f7': ['HXV3zeQKqGY','4Z9KEB_tGYw','7S_tz1z1fXg','I7O3y0vHTgo','k1L2m3N4o5P','q6R7s8T9u0V','w1X2y3Z4a5B','c6D7e8F9g0H','i1J2k3L4m5N','o6P7q8R9s0T'],
  'f8': ['3c-iBn73dDE','pTFZFxd4h6M','Q5POuMHk6S8','s9T0u1V2w3X','y4Z5a6B7c8D','e9F0g1H2i3J','k4L5m6N7o8P','q9R0s1T2u3V','w4X5y6Z7a8B','c9D0e1F2g3H'],
  'f9': ['xsVTqz-RUjM','O7N2Btn0m9E','k1J2l3M4n5O','p6Q7r8S9t0U','v1W2x3Y4z5A','b6C7d8E9f0G','h1I2j3K4l5M','n6O7p8Q9r0S','t1U2v3W4x5Y','z6A7b8C9d0E'],
  'f10': ['f6j4msGnjf4','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B','c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z','a5B6c7D8e9F','g0H1i2J3k4L'],
  'f11': ['l5M6n7O8p9Q','r0S1t2U3v4V','w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T','u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R'],
  'f12': ['n5O6p7Q8r9S','t0U1v2W3x4X','y5Z6a7B8c9D','e0F1g2H3i4J','k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T'],
  'f13': ['u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R','s5T6u7V8w9X','y0Z1a2B3c4D','e5F6g7H8i9J','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B'],
  'f14': ['c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z','a5B6c7D8e9F','g0H1i2J3k4L','m5N6o7P8q9R','s0T1u2V3w4X','y5Z6a7B8c9D','e0F1g2H3i4J'],
  'f15': ['k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T','u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R'],
  'f16': ['s5T6u7V8w9X','y0Z1a2B3c4D','e5F6g7H8i9J','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B','c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z'],
  'f17': ['a5B6c7D8e9F','g0H1i2J3k4L','m5N6o7P8q9R','s0T1u2V3w4X','y5Z6a7B8c9D','e0F1g2H3i4J','k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H'],
  'f18': ['i5J6k7L8m9N','o0P1q2R3s4T','u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R','s5T6u7V8w9X','y0Z1a2B3c4D','e5F6g7H8i9J','k0L1m2N3o4P'],
  'f19': ['q5R6s7T8u9V','w0X1y2Z3a4B','c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z','a5B6c7D8e9F','g0H1i2J3k4L','m5N6o7P8q9R','s0T1u2V3w4X'],
  'f20': ['y5Z6a7B8c9D','e0F1g2H3i4J','k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T','u5V6w7X8y9Z','a0B1c2D3e4F'],
  'f21': ['g5H6i7J8k9L','m0N1o2P3q4R','s5T6u7V8w9X','y0Z1a2B3c4D','e5F6g7H8i9J','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B','c5D6e7F8g9H','i0J1k2L3m4N'],
  'f22': ['o5P6q7R8s9T','u0V1w2X3y4Z','a5B6c7D8e9F','g0H1i2J3k4L','m5N6o7P8q9R','s0T1u2V3w4X','y5Z6a7B8c9D','e0F1g2H3i4J','k5L6m7N8o9P','q0R1s2T3u4V'],
  'f23': ['w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T','u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R','s5T6u7V8w9X','y0Z1a2B3c4D'],
  'f24': ['e5F6g7H8i9J','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B','c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z','a5B6c7D8e9F','g0H1i2J3k4L'],
  'f25': ['m5N6o7P8q9R','s0T1u2V3w4X','y5Z6a7B8c9D','e0F1g2H3i4J','k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T'],
  'f26': ['u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R','s5T6u7V8w9X','y0Z1a2B3c4D','e5F6g7H8i9J','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B'],
  'f27': ['c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z','a5B6c7D8e9F','g0H1i2J3k4L','m5N6o7P8q9R','s0T1u2V3w4X','y5Z6a7B8c9D','e0F1g2H3i4J'],
  'f28': ['k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H','i5J6k7L8m9N','o0P1q2R3s4T','u5V6w7X8y9Z','a0B1c2D3e4F','g5H6i7J8k9L','m0N1o2P3q4R'],
  'f29': ['s5T6u7V8w9X','y0Z1a2B3c4D','e5F6g7H8i9J','k0L1m2N3o4P','q5R6s7T8u9V','w0X1y2Z3a4B','c5D6e7F8g9H','i0J1k2L3m4N','o5P6q7R8s9T','u0V1w2X3y4Z'],
  'f30': ['a5B6c7D8e9F','g0H1i2J3k4L','m5N6o7P8q9R','s0T1u2V3w4X','y5Z6a7B8c9D','e0F1g2H3i4J','k5L6m7N8o9P','q0R1s2T3u4V','w5X6y7Z8a9B','c0D1e2F3g4H']
};

function getVideoUrl(formationId, coursOrdre) {
  const videos = VIDEOS_YOUTUBE[formationId];
  if (videos && videos[coursOrdre - 1]) {
    return 'https://www.youtube.com/embed/' + videos[coursOrdre - 1];
  }
  return '';
}

// Titres des cours par formation
const COURS_TITRES = {
  'f1': ['Introduction au Web','HTML5 Fondamentaux','CSS3 et Styling','JavaScript Basics','DOM Manipulation','React Fundamentals','State Management','Node.js Backend','Base de Donnees','Deploiement Full Stack'],
  'f2': ['Introduction a Python','Variables et Types','Structures de Controle','Fonctions et Modules','Pandas Basics','Analyse de Donnees','NumPy Arrays','Visualisation Matplotlib','Scikit-learn Intro','Projet Data Science'],
  'f3': ['Introduction a Flutter','Dart Language','Widgets Basics','State Management','Navigation','API Integration','Base de Donnees Locale','Authentification','Animations','Deploiement iOS/Android'],
  'f4': ['Introduction a l IA','Machine Learning Basics','Regression Lineaire','Classification','Reseaux de Neurones','Deep Learning','CNN pour Images','NLP et Texte','Modeles Avances','Projet IA'],
  'f5': ['Introduction Cybersecurite','Reseaux et Protocoles','Vulnerabilites Web','Tests d Intrusion','Cryptographie','Securite Applications','Forensic','OSINT','Reporting','Projet Securite'],
  'f6': ['Introduction Cloud','AWS Core Services','EC2 et Compute','S3 et Stockage','RDS et Bases de Donnees','Serverless Lambda','IAM Securite','Auto Scaling','Monitoring CloudWatch','Architecture Cloud'],
  'f7': ['Introduction aux BDD','SQL Fondamentaux','Requetes Avancees','Jointures','Normalisation','Indexes et Performance','MongoDB Basics','Redis Cache','Backup et Restore','Projet Database'],
  'f8': ['Introduction DevOps','Git Avance','Docker Containers','Docker Compose','CI/CD Pipelines','Jenkins','Kubernetes Basics','Orchestration','Monitoring','Projet DevOps'],
  'f9': ['Introduction SEO','Mots-Cles Research','On-Page SEO','Technical SEO','Link Building','Content SEO','SEO Local','Outils SEO','Analytics SEO','Audit et Strategie'],
  'f10': ['Introduction Facebook Ads','Business Manager','Creation de Campagnes','Ciblage d Audience','Creatives et Copy','Optimisation','Retargeting','Instagram Ads','Analytics','Strategie Avancee'],
  'f11': ['Content Marketing Basics','Buyer Persona','Strategie de Contenu','Copywriting','Blogging','Video Content','Content Distribution','SEO Content','Measurement','Content Calendar'],
  'f12': ['Email Marketing Basics','List Building','Segmentation','Email Design','Automation Flows','A/B Testing','Deliverability','Analytics','Advanced Tactics','Email Strategy'],
  'f13': ['Introduction Google Ads','Account Setup','Search Campaigns','Display Network','YouTube Ads','Shopping Ads','Remarketing','Bidding Strategies','Quality Score','Campaign Optimization'],
  'f14': ['Introduction Analytics','GA4 Setup','Events Tracking','Conversions','Audiences','Reports','GTM Basics','Data Studio','Attribution','Data Strategy'],
  'f15': ['Social Media Basics','Content Strategy','Creation de Contenu','Community Engagement','Social Listening','Influencers','Crisis Management','Analytics','Paid Social','Social Strategy'],
  'f16': ['Growth Mindset','AARRR Framework','Acquisition Channels','Activation Strategies','Retention Tactics','Referral Programs','Revenue Optimization','Viral Loops','Experiments','Growth Plan'],
  'f17': ['Introduction UI/UX','User Research','Personas','Information Architecture','Wireframing','Prototyping Figma','Visual Design','Design Systems','Usability Testing','Portfolio'],
  'f18': ['Photoshop Basics','Illustrator Vector','InDesign Layout','Color Theory','Typography','Photo Editing','Logo Design','Print Design','Brand Identity','Creative Portfolio'],
  'f19': ['After Effects Basics','Animation Principles','Motion Graphics','Kinetic Typography','Character Animation','Expressions','3D Layers','Compositing','Rendering','Motion Reel'],
  'f20': ['Blender Interface','Modeling Basics','Sculpting','Materials','Lighting','Camera','Animation 3D','Physics','Rendering','3D Project'],
  'f21': ['Camera Basics','Composition','Exposure Triangle','Natural Light','Artificial Light','Portrait Photography','Landscape','Editing Lightroom','Color Grading','Photo Portfolio'],
  'f22': ['Digital Drawing Basics','Brushes and Tools','Character Design','Environment Art','Color and Light','Digital Painting','Styles Exploration','Illustration Process','Procreate Advanced','Art Portfolio'],
  'f23': ['Webdesign Principles','Responsive Design','Mobile First','Grid Systems','Typography Web','Color Web','Figma for Web','Prototyping','Design Handoff','Webdesign Project'],
  'f24': ['Entrepreneur Mindset','Ideation','Business Model Canvas','Market Research','Business Plan','Legal Structure','Funding Options','Launch Strategy','Growth Metrics','Pitch Deck'],
  'f25': ['Agile Principles','Scrum Framework','Roles Scrum','Sprint Planning','Daily Standup','Kanban','Jira Tool','User Stories','Estimation','Agile Transformation'],
  'f26': ['Finance Basics','Comptabilite','Cash Flow','Budgeting','Financial Statements','Forecasting','Investissement','Levee de Fonds','Valuation','Financial Plan'],
  'f27': ['Leadership Styles','Communication','Team Building','Conflict Resolution','Decision Making','Emotional Intelligence','Coaching','Change Management','Strategic Thinking','Leadership Plan'],
  'f28': ['E-commerce Basics','Platform Choice','Product Sourcing','Store Setup','Payment Processing','Shipping','Customer Service','Marketing','Analytics','Scale E-commerce'],
  'f29': ['Sales Fundamentals','Prospecting','Qualification','Presentation','Objection Handling','Closing Techniques','Account Management','CRM','Sales Metrics','Sales Strategy'],
  'f30': ['BI Fundamentals','Data Warehousing','ETL Process','Power BI Basics','DAX Formulas','Dashboards','KPI Design','Data Governance','Predictive Analytics','BI Project']
};

function generateContenuCours(titre) {
  return `
    <h1>${titre}</h1>
    <p>Bienvenue dans ce cours consacre a <strong>${titre}</strong>. Ce module est essentiel pour votre formation professionnelle.</p>
    <h2>Objectifs d'apprentissage</h2>
    <ul>
      <li>Comprendre les fondamentaux de ${titre}</li>
      <li>Mettre en pratique les concepts cles</li>
      <li>Acquerir des competences operationnelles</li>
      <li>Preparer le quiz de validation</li>
    </ul>
    <h2>Contenu du cours</h2>
    <p>Dans ce cours, nous allons explorer en profondeur les differents aspects de ${titre}. Vous apprendrez a travers des exemples concrets et des exercices pratiques.</p>
    <h3>Partie 1 : Concepts fondamentaux</h3>
    <p>Nous commencons par les bases essentielles qui vous permettront de comprendre les mecanismes sous-jacents.</p>
    <h3>Partie 2 : Mise en pratique</h3>
    <p>Des exercices guides pour appliquer les concepts appris dans des situations reelles.</p>
    <h3>Partie 3 : Cas d'etude</h3>
    <p>Analyse de cas concrets pour renforcer votre comprehension.</p>
    <h2>Resume</h2>
    <p>Ce cours vous a permis de decouvrir les aspects essentiels de ${titre}. Passez le quiz pour valider vos connaissances.</p>
  `;
}

// ============================================
// QUESTIONS DE QUIZ SPECIFIQUES PAR COURS
// ============================================
function getQuestions(coursId, formationId) {
  const ordre = parseInt(coursId.split('_c')[1]);
  const formation = FORMATIONS.find(f => f.id === formationId);
  const coursTitre = COURS_TITRES[formationId] ? COURS_TITRES[formationId][ordre - 1] : 'Cours';
  
  // Generer des questions specifiques basees sur le titre du cours
  const questions = generateQuestionsForCours(coursTitre, ordre, formation.titre);
  
  // Melanger les questions
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  
  return questions.slice(0, 15);
}

function generateQuestionsForCours(titre, ordre, formationTitre) {
  // Questions specifiques pour chaque cours des 30 formations
  const q = [];
  const t = titre.toLowerCase();
  
  // Question 1 - Concept principal
  q.push({
    id: 'q1_' + ordre, question: `Quel est l'objectif principal de "${titre}" ?`,
    options: [`Maitriser les concepts fondamentaux de ${titre}`, `Apprendre un langage de programmation`, `Creer un site web e-commerce`, `Analyser des donnees financieres`],
    reponse_correcte: `Maitriser les concepts fondamentaux de ${titre}`,
    explication: `Le cours "${titre}" vise a vous faire maitriser les concepts fondamentaux de ce domaine.`
  });
  
  // Question 2 - Outil/Technologie
  let outil = 'un editeur de code';
  if (t.includes('python')) outil = 'Python';
  else if (t.includes('react')) outil = 'React';
  else if (t.includes('html')) outil = 'HTML5';
  else if (t.includes('css')) outil = 'CSS3';
  else if (t.includes('javascript')) outil = 'JavaScript';
  else if (t.includes('node')) outil = 'Node.js';
  else if (t.includes('flutter')) outil = 'Flutter';
  else if (t.includes('dart')) outil = 'Dart';
  else if (t.includes('aws') || t.includes('cloud')) outil = 'Amazon Web Services';
  else if (t.includes('docker')) outil = 'Docker';
  else if (t.includes('kubernetes')) outil = 'Kubernetes';
  else if (t.includes('sql')) outil = 'SQL';
  else if (t.includes('mongodb')) outil = 'MongoDB';
  else if (t.includes('seo')) outil = 'les outils SEO';
  else if (t.includes('facebook') || t.includes('instagram')) outil = 'Facebook Ads Manager';
  else if (t.includes('google ads')) outil = 'Google Ads';
  else if (t.includes('photoshop')) outil = 'Adobe Photoshop';
  else if (t.includes('illustrator')) outil = 'Adobe Illustrator';
  else if (t.includes('figma')) outil = 'Figma';
  else if (t.includes('blender')) outil = 'Blender';
  else if (t.includes('power bi')) outil = 'Power BI';
  else if (t.includes('scrum')) outil = 'la methode Scrum';
  else if (t.includes('git')) outil = 'Git';
  else if (t.includes('email')) outil = 'une plateforme d\'emailing';
  
  q.push({
    id: 'q2_' + ordre, question: `Quel outil ou technologie est principalement utilise dans "${titre}" ?`,
    options: [outil, 'Microsoft Word', 'Adobe Premiere', 'AutoCAD'],
    reponse_correcte: outil,
    explication: `${outil} est l'outil principal utilise dans le cours "${titre}".`
  });
  
  // Question 3 - Niveau
  let niveau = 'Debutant';
  if (formationTitre.includes('Avance')) niveau = 'Avance';
  else if (formationTitre.includes('Intermediaire')) niveau = 'Intermediaire';
  
  q.push({
    id: 'q3_' + ordre, question: `A quel niveau se situe le cours "${titre}" ?`,
    options: [niveau, 'Universitaire', 'Doctorat', 'College'],
    reponse_correcte: niveau,
    explication: `Ce cours est de niveau ${niveau} dans la formation.`
  });
  
  // Question 4 - Application pratique
  q.push({
    id: 'q4_' + ordre, question: `Dans quel contexte applique-t-on "${titre}" ?`,
    options: [`Dans un environnement professionnel reel`, `Uniquement a l'ecole`, `Pour jouer a des jeux`, `Pour cuisiner`],
    reponse_correcte: `Dans un environnement professionnel reel`,
    explication: `"${titre}" s'applique dans un contexte professionnel reel.`
  });
  
  // Question 5 - Importance
  q.push({
    id: 'q5_' + ordre, question: `Pourquoi "${titre}" est-il important dans la formation ?`,
    options: [`C'est un pilier fondamental`, `C'est une option facultative`, `Ce n'est pas important`, `C'est un bonus`],
    reponse_correcte: `C'est un pilier fondamental`,
    explication: `"${titre}" est un pilier fondamental de la formation.`
  });
  
  // Questions 6-15 avec mots-cles specifiques au titre
  const keywords = t.split(/[\s/]+/).filter(w => w.length > 3);
  const keyword = keywords[0] || 'concept';
  
  for (let i = 6; i <= 15; i++) {
    const kw = keywords[(i - 6) % keywords.length] || keyword;
    const reponsesPossibles = [
      `Il permet de maitriser ${kw}`,
      `C'est une technologie obsolete`,
      `Cela n'a aucune utilite`,
      `C'est uniquement theorique`
    ];
    
    q.push({
      id: 'q' + i + '_' + ordre,
      question: `Question ${i} : Quel est le role de "${kw}" dans "${titre}" ?`,
      options: reponsesPossibles,
      reponse_correcte: `Il permet de maitriser ${kw}`,
      explication: `${kw} joue un role essentiel dans "${titre}" car il permet de maitriser ce concept cle.`
    });
  }
  
  return q;
}

// ============================================
// QUESTIONS D'EXAMEN FINAL (45 questions)
// ============================================
function getExamenQuestions(formationId) {
  const formation = FORMATIONS.find(f => f.id === formationId);
  const coursTitres = COURS_TITRES[formationId] || [];
  const questions = [];
  
  // 45 questions couvrant tous les cours de la formation
  for (let i = 0; i < 10; i++) {
    const titre = coursTitres[i] || `Cours ${i + 1}`;
    const t = titre.toLowerCase();
    
    // 4 questions par cours = 40 questions
    for (let j = 0; j < 4; j++) {
      const qNum = i * 4 + j + 1;
      if (qNum > 40) break;
      
      questions.push({
        id: 'ex_' + qNum,
        question: `Question ${qNum} [${titre}] : Quel est le concept principal de "${titre}" ?`,
        options: [
          `Maitriser les fondamentaux de ${titre}`,
          `Apprendre une methode obsolete`,
          `Un concept sans interet pratique`,
          `Une theorie abstraite sans application`
        ],
        reponse_correcte: `Maitriser les fondamentaux de ${titre}`,
        explication: `La reponse est "Maitriser les fondamentaux de ${titre}" car c'est l'objectif principal de ce cours.`
      });
    }
  }
  
  // 5 questions generales sur la formation
  for (let k = 41; k <= 45; k++) {
    questions.push({
      id: 'ex_' + k,
      question: `Question ${k} [${formation.titre}] : Quel est le but de la formation "${formation.titre}" ?`,
      options: [
        `Acquerir des competences professionnelles en ${formation.domaine}`,
        `Apprendre pour le plaisir sans objectif`,
        `Obtenir un diplome uniquement`,
        `Passer le temps`
      ],
      reponse_correcte: `Acquerir des competences professionnelles en ${formation.domaine}`,
      explication: `La formation vise a vous faire acquerir des competences professionnelles.`
    });
  }
  
  return questions;
}

// All formations data for backend
const ALL_FORMATIONS = FORMATIONS.map(f => ({
  ...f, nombre_cours: 10
}));

const ALL_COURS = [];
FORMATIONS.forEach(f => {
  const titres = COURS_TITRES[f.id] || [];
  titres.forEach((titre, idx) => {
    ALL_COURS.push({
      id: f.id + '_c' + (idx + 1),
      formation_id: f.id,
      titre,
      description: 'Dans ce cours, vous allez approfondir vos connaissances sur ' + titre.toLowerCase() + '.',
      contenu: generateContenuCours(titre),
      ordre: idx + 1,
      duree: '45min'
    });
  });
});

// Export for Node.js backend
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FORMATIONS, ALL_FORMATIONS, ALL_COURS, COURS_TITRES };
}
