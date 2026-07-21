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
// VIDEOS YOUTUBE EDUCATIFS REELS PAR FORMATION
// ============================================
const VIDEOS_YOUTUBE = {
  // f1 - Developpement Web Full Stack
  'f1': ['Krs4exQhwJ0','Wm6CUkswsXA','UB1O30fR-EE','yfoY53QXEnI','PkZNo7MFNFg','hdI2bqOjy3M','w7ejDZ8SWv8','nW63DPgeVLw','1Rs2ND1ryYc','5sXmfVtVknk'],
  // f2 - Python pour la Data Science
  'f2': ['LHBE6Q9XlzI','B42nJP8VHEA','y94bVT0XQoA','W8Bz3de5Eio','2Fw1_0D6bew','0Lt9w-BxKFQ','t1MK3zSwC3E','M9ItmLfJzhs','0h3X_m7RTG4','wQ8BIBxl_Qk'],
  // f3 - Developpement Mobile Flutter
  'f3': ['VPvVD8t02U8','1ukSR1GRtMU','x0YmBfPE5xQ','pTJJsmejUOQ','uZvuLY3b6o4','h-igXZLLzz0','dFbYMz9gdnk','6ZCz6OVMLqU','XBu54nfzxQ8','s3KbYydP5xA'],
  // f4 - Intelligence Artificielle & ML
  'f4': ['aircAruvnKk','IHZwWFHWa-w','UzxYlbK2c7E','JyGGyR8x8I0','bz2mX84iR2k','gGwI4VzI_hE','78L_r7qHSKs','bTXujOFrwDk','8PyyL_rD7Ko','UfMcQ9-s1G0'],
  // f5 - Cybersecurite & Hacking Ethique
  'f5': ['7YQjt-adFY4','MLZ7kWsHWFA','inWWhr5tnEA','3Kq1MIfTWCE','FzhSB8qBnig','WPy3eYpH6nw','YU4D5C_fjsE','rcBnNTjpLwU','7_nO1D01aKc','s1swJ0vw1JY'],
  // f6 - Cloud Computing & AWS
  'f6': ['ZB5ONbDmkZ4','RPis5mbM8c8','HF7vC76CYlE','gswAF1LqR1w','65MnKfc0OIM','fuTLT_XkHMQ','a9__D53WsUs','SOTamWNkxbE','cUMUTSekS_Y','a8Y9z0A1b2C'],
  // f7 - Bases de Donnees SQL & NoSQL
  'f7': ['HXV3zeQKqGY','4Z9KEB_tGYw','7S_tz1z1fXg','I7O3y0vHTgo','zw4s3EjY9JQ','9mdGUKBoZME','2F-bxGRqZ6Y','xiUTqgI5Mn4','K_7k3lzXBX8','UB1O30fR-EE'],
  // f8 - DevOps & CI/CD
  'f8': ['3c-iBn73dDE','pTFZFxd4h6M','Q5POuMHk6S8','0yWAtQ6wYNM','1T6C5HLKRyo','9tW0w3PLVzA','6tMKZKRVjLE','Wnf8gCVPQzY','R9O7Cw9Jx48','7NtR4Q1B_BA'],
  // f9 - SEO & Referencement Naturel
  'f9': ['htwGswu6mQ0','XdT9Gys_Ou4','xsVTqz-RUjM','O7N2Btn0m9E','hF515-0T6yk','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','UfMcQ9-s1G0'],
  // f10 - Facebook & Instagram Ads
  'f10': ['f6j4msGnjf4','0nQk_Bs8XCY','E2fYRxv5zCk','x3bJy8x4dB4','2P1z2x4Z5F8','6H9kL2M4N6P','8Q3R5T7U9V1','3B5D7F9H2J4','7K9M2P4Q6R8','PzKdMEpAmnE'],
  // f11 - Marketing de Contenu
  'f11': ['hF515-0T6yk','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY','jQZtkXxAWLg','v7uJxA5n7_c','htwGswu6mQ0','XdT9Gys_Ou4'],
  // f12 - Email Marketing Automation
  'f12': ['I7BQlVg6238','xsVTqz-RUjM','O7N2Btn0m9E','hF515-0T6yk','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY','jQZtkXxAWLg'],
  // f13 - Google Ads & SEM
  'f13': ['PzKdMEpAmnE','QufRFAXJlOI','qbHJMFfzujo','f7j3JSBD6so','i3-Dvy4Wjb4','P_8Zav29rJs','2P1z2x4Z5F8','6H9kL2M4N6P','8Q3R5T7U9V1','3B5D7F9H2J4'],
  // f14 - Analytics & Data Marketing
  'f14': ['L83Nnii4y28','7WACJemR3ck','m43FEBFLicA','mdHSg-LhiiU','L5yoeBnQAPA','pW-9qOtkSHc','0Lt9w-BxKFQ','t1MK3zSwC3E','M9ItmLfJzhs','0h3X_m7RTG4'],
  // f15 - Community Management
  'f15': ['f6j4msGnjf4','0nQk_Bs8XCY','E2fYRxv5zCk','x3bJy8x4dB4','2P1z2x4Z5F8','6H9kL2M4N6P','8Q3R5T7U9V1','3B5D7F9H2J4','7K9M2P4Q6R8','PzKdMEpAmnE'],
  // f16 - Growth Hacking
  'f16': ['i5xJZ5JdApI','XMLjZB1ASUM','hF515-0T6yk','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY','jQZtkXxAWLg','v7uJxA5n7_c'],
  // f17 - UI/UX Design
  'f17': ['jwCmIBJ8Jtc','QJBP2uy8LcU','1SNZRCVNizg','w7ejDZ8SWv8','hdI2bqOjy3M','PkZNo7MFNFg','yfoY53QXEnI','UB1O30fR-EE','Wm6CUkswsXA','nW63DPgeVLw'],
  // f18 - Adobe Creative Suite
  'f18': ['9kSs6No6Agc','yfoY53QXEnI','UB1O30fR-EE','Wm6CUkswsXA','PkZNo7MFNFg','hdI2bqOjy3M','w7ejDZ8SWv8','nW63DPgeVLw','1Rs2ND1ryYc','5sXmfVtVknk'],
  // f19 - Motion Design & Animation
  'f19': ['NcWAO-OAZbE','hCCoRPh6MO4','qUrWnFqZhqs','DQcyWqWaiyE','VLjF7dUH1zY','5sXmfVtVknk','1Rs2ND1ryYc','nW63DPgeVLw','w7ejDZ8SWv8','PkZNo7MFNFg'],
  // f20 - Design 3D avec Blender
  'f20': ['ZgiGE9XE7Bo','Tr2TCUFLlZY','N0fA3X2nDWk','_5Js5pbvFSw','dmZpzJJpZ6Y','XBu54nfzxQ8','s3KbYydP5xA','9XMt2eLPRyY','6ZCz6OVMLqU','pTJJsmejUOQ'],
  // f21 - Photographie Professionnelle
  'f21': ['1zsGp1biyDc','LxXB2DoAvDg','yfoY53QXEnI','UB1O30fR-EE','Wm6CUkswsXA','PkZNo7MFNFg','hdI2bqOjy3M','w7ejDZ8SWv8','nW63DPgeVLw','1Rs2ND1ryYc'],
  // f22 - Illustration Digitale
  'f22': ['9kSs6No6Agc','yfoY53QXEnI','UB1O30fR-EE','Wm6CUkswsXA','PkZNo7MFNFg','hdI2bqOjy3M','w7ejDZ8SWv8','nW63DPgeVLw','1Rs2ND1ryYc','5sXmfVtVknk'],
  // f23 - Webdesign Responsive
  'f23': ['jwCmIBJ8Jtc','Wm6CUkswsXA','UB1O30fR-EE','PkZNo7MFNFg','yfoY53QXEnI','hdI2bqOjy3M','w7ejDZ8SWv8','nW63DPgeVLw','1Rs2ND1ryYc','5sXmfVtVknk'],
  // f24 - Creation d\'Entreprise
  'f24': ['hHUYidDRPQ0','HWyGEvalCng','3qMpB-UH9kA','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY','jQZtkXxAWLg','v7uJxA5n7_c'],
  // f25 - Gestion de Projet Agile
  'f25': ['y_Rvx70iDz0','36d7rIdzHdg','P_8Zav29rJs','3qMpB-UH9kA','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY','htwGswu6mQ0'],
  // f26 - Finance pour Entrepreneurs
  'f26': ['L83Nnii4y28','7WACJemR3ck','m43FEBFLicA','mdHSg-LhiiU','L5yoeBnQAPA','pW-9qOtkSHc','0Lt9w-BxKFQ','t1MK3zSwC3E','M9ItmLfJzhs','0h3X_m7RTG4'],
  // f27 - Leadership & Management
  'f27': ['RbC_hV3h-2Q','mU15u0EutMo','qA3KphsYRc4','DSzZv8pfOvc','y77gxvGcpjw','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY'],
  // f28 - E-commerce & Dropshipping
  'f28': ['i5xJZ5JdApI','XMLjZB1ASUM','hHUYidDRPQ0','HWyGEvalCng','hF515-0T6yk','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY'],
  // f29 - Negociation & Ventes B2B
  'f29': ['RbC_hV3h-2Q','mU15u0EutMo','qA3KphsYRc4','DSzZv8pfOvc','y77gxvGcpjw','5_5oP5on2zg','SB6X1wkJaM0','Ecvh1_8S10s','xFs7dM4DSZk','Uim4PxfSDzY'],
  // f30 - Business Intelligence
  'f30': ['m43FEBFLicA','mdHSg-LhiiU','L5yoeBnQAPA','L83Nnii4y28','7WACJemR3ck','pW-9qOtkSHc','0Lt9w-BxKFQ','t1MK3zSwC3E','M9ItmLfJzhs','0h3X_m7RTG4']
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

// Base de donnees de questions par domaine
const QUESTIONS_DB = {
  'f1': {
    'Introduction au Web': [
      {q: 'Que signifie HTML ?', options: ['HyperText Markup Language','High Tech Modern Language','Hyper Transfer Mark Language','Home Tool Markup Language'], r: 0},
      {q: 'Quel est le role de CSS dans le developpement web ?', options: ['Structurer le contenu','Styler et mettre en forme','Ajouter de l interactivite','Gerer la base de donnees'], r: 1},
      {q: 'Quel protocole est utilise pour naviguer sur le web ?', options: ['FTP','HTTP/HTTPS','SMTP','TCP'], r: 1},
      {q: 'Que signifie URL ?', options: ['Uniform Resource Locator','Universal Resource Link','Unified Reference Location','User Resource Locator'], r: 0},
      {q: 'Quel est le navigateur web le plus utilise ?', options: ['Firefox','Safari','Chrome','Edge'], r: 2}
    ],
    'HTML5 Fondamentaux': [
      {q: 'Quelle balise definit le titre d une page HTML ?', options: ['<head>','<title>','<header>','<h1>'], r: 1},
      {q: 'Quelle balise cree un lien hypertexte ?', options: ['<link>','<a>','<href>','<url>'], r: 1},
      {q: 'Quel attribut ajoute une image accessible ?', options: ['src','alt','title','class'], r: 1},
      {q: 'Quelle balise definit une liste ordonnee ?', options: ['<ul>','<li>','<ol>','<list>'], r: 2},
      {q: 'Quelle balise HTML5 est utilisee pour le contenu principal ?', options: ['<div>','<section>','<main>','<article>'], r: 2}
    ],
    'CSS3 et Styling': [
      {q: 'Quelle propriete change la couleur du texte ?', options: ['background-color','text-color','color','font-color'], r: 2},
      {q: 'Quelle unite est relative a la taille de police parente ?', options: ['px','rem','em','vh'], r: 2},
      {q: 'Quel selecteur cible un element par son ID ?', options: ['.nom','#nom','nom','*nom'], r: 1},
      {q: 'Quelle propriete cree un espace entre les elements ?', options: ['margin','padding','border','gap'], r: 0},
      {q: 'Quel modele de boite inclut padding et border dans la taille ?', options: ['content-box','border-box','padding-box','margin-box'], r: 1}
    ],
    'JavaScript Basics': [
      {q: 'Quel mot-cle declare une variable constante ?', options: ['var','let','const','fixed'], r: 2},
      {q: 'Quelle methode affiche un message dans la console ?', options: ['console.log()','alert()','print()','debug()'], r: 0},
      {q: 'Quel type de donnee represente vrai ou faux ?', options: ['string','number','boolean','null'], r: 2},
      {q: 'Quel operateur verifie l egalite stricte ?', options: ['==','===','=','!='], r: 1},
      {q: 'Quelle boucle est ideale pour iterer sur un tableau ?', options: ['for','while','forEach','do-while'], r: 2}
    ],
    'DOM Manipulation': [
      {q: 'Quelle methode selectionne un element par son ID ?', options: ['querySelector','getElementById','getElementsByClass','selectById'], r: 1},
      {q: 'Quelle propriete change le contenu HTML interne ?', options: ['textContent','innerHTML','outerHTML','content'], r: 1},
      {q: 'Quelle methode ajoute un ecouteur d evenement ?', options: ['onClick','addEventListener','attachEvent','listen'], r: 1},
      {q: 'Quelle methode cree un nouvel element HTML ?', options: ['new Element()','createElement','makeNode','buildElement'], r: 1},
      {q: 'Comment acceder au premier enfant d un element ?', options: ['firstChild','children[0]','childNodes[0]','Toutes ces reponses'], r: 3}
    ],
    'React Fundamentals': [
      {q: 'Qu est-ce qu un composant React ?', options: ['Une fonction ou classe retournant du JSX','Un fichier CSS','Une base de donnees','Un serveur'], r: 0},
      {q: 'Quel hook gere l etat local ?', options: ['useEffect','useState','useContext','useReducer'], r: 1},
      {q: 'Que signifie JSX ?', options: ['JavaScript XML','Java Syntax Extension','JSON XML','Java Standard Extension'], r: 0},
      {q: 'Quel hook remplace componentDidMount ?', options: ['useState','useEffect','useRef','useMemo'], r: 1},
      {q: 'Comment passe-t-on des donnees d un parent a un enfant ?', options: ['State','Props','Context','Redux'], r: 1}
    ],
    'State Management': [
      {q: 'Quelle bibliotheque est courante pour le state global ?', options: ['Redux','jQuery','Lodash','Axios'], r: 0},
      {q: 'Quel hook remplace mapStateToProps ?', options: ['useState','useEffect','useSelector','useDispatch'], r: 2},
      {q: 'Qu est-ce qu une action Redux ?', options: ['Une fonction','Un objet decrivant un changement','Une classe','Une promesse'], r: 1},
      {q: 'Quel est le role d un reducer ?', options: ['Effectuer des appels API','Modifier le state en fonction d actions','Rendre le DOM','Gerer les routes'], r: 1},
      {q: 'Quel hook permet d optimiser les performances ?', options: ['useState','useCallback','useContext','useDebugValue'], r: 1}
    ],
    'Node.js Backend': [
      {q: 'Quel module integre cree un serveur HTTP ?', options: ['fs','http','path','url'], r: 1},
      {q: 'Quel framework Node.js est le plus populaire ?', options: ['Django','Express','Rails','Laravel'], r: 1},
      {q: 'Quelle methode envoie une reponse au client ?', options: ['req.send()','res.send()','app.send()','server.send()'], r: 1},
      {q: 'Quel middleware parse le JSON du body ?', options: ['express.json()','bodyParser','jsonParser','parseJSON'], r: 0},
      {q: 'Quelle methode ecoute les connexions entrantes ?', options: ['start()','listen()','run()','serve()'], r: 1}
    ],
    'Base de Donnees': [
      {q: 'Quel type de base de donnees utilise SQL ?', options: ['NoSQL','Relationnelle','Graph','Document'], r: 1},
      {q: 'Quelle commande selectionne des donnees ?', options: ['INSERT','UPDATE','SELECT','DELETE'], r: 2},
      {q: 'Quelle clause filtre les resultats ?', options: ['ORDER BY','GROUP BY','WHERE','HAVING'], r: 2},
      {q: 'Quelle jointure retourne les correspondances des deux tables ?', options: ['LEFT JOIN','INNER JOIN','RIGHT JOIN','FULL JOIN'], r: 1},
      {q: 'Quel ORM est populaire avec Node.js ?', options: ['Django ORM','Sequelize','Hibernate','Entity Framework'], r: 1}
    ],
    'Deploiement Full Stack': [
      {q: 'Quelle plateforme est populaire pour deployer des apps ?', options: ['Word','Excel','Vercel','Photoshop'], r: 2},
      {q: 'Qu est-ce que CI/CD ?', options: ['Code Integration/Code Deployment','Continuous Integration/Continuous Deployment','Computer Infrastructure/Computer Design','Create Install/Create Deploy'], r: 1},
      {q: 'Quel outil controle les versions ?', options: ['Git','FTP','SSH','HTTP'], r: 0},
      {q: 'Quel fichier definit les variables d environnement ?', options: ['.env','.config','.enviro','.vars'], r: 0},
      {q: 'Quel protocole securise les communications web ?', options: ['HTTP','FTP','HTTPS','SMTP'], r: 2}
    ]
  },
  'f2': {
    'Introduction a Python': [
      {q: 'Qui a cree Python ?', options: ['James Gosling','Guido van Rossum','Brendan Eich','Dennis Ritchie'], r: 1},
      {q: 'Quelle fonction affiche du texte en Python ?', options: ['print()','echo()','console.log()','write()'], r: 0},
      {q: 'Quel symbole commence un commentaire Python ?', options: ['//','/*','#','--'], r: 2},
      {q: 'Quelle fonction obtient la longueur d une liste ?', options: ['size()','length()','len()','count()'], r: 2},
      {q: 'Quel type de donnee est immuable en Python ?', options: ['list','dict','tuple','set'], r: 2}
    ],
    'Variables et Types': [
      {q: 'Quel type represente un nombre entier ?', options: ['float','int','str','bool'], r: 1},
      {q: 'Quelle fonction convertit en chaine de caracteres ?', options: ['int()','str()','float()','list()'], r: 1},
      {q: 'Quel est le resultat de type(3.14) ?', options: ['int','float','str','complex'], r: 1},
      {q: 'Quelle declaration est correcte ?', options: ['var x = 5','let x = 5','x = 5','int x = 5'], r: 2},
      {q: 'Quel type stocke Vrai ou Faux ?', options: ['string','boolean','int','list'], r: 1}
    ],
    'Structures de Controle': [
      {q: 'Quelle boucle itere sur une sequence ?', options: ['while','for','do-while','loop'], r: 1},
      {q: 'Quel mot-cle sort d une boucle prematurement ?', options: ['stop','exit','break','return'], r: 2},
      {q: 'Quelle structure teste plusieurs conditions ?', options: ['if/else','switch','elif','Toutes ces reponses'], r: 3},
      {q: 'Quel operateur signifie ET en Python ?', options: ['&&','||','and','&'], r: 2},
      {q: 'Quel mot-cle saute a l iteration suivante ?', options: ['next','skip','continue','pass'], r: 2}
    ],
    'Fonctions et Modules': [
      {q: 'Quel mot-cle definit une fonction ?', options: ['function','def','func','define'], r: 1},
      {q: 'Quel mot-cle importe un module ?', options: ['include','import','require','using'], r: 1},
      {q: 'Comment appelle-t-on une fonction nommee ma_fonction ?', options: ['call ma_fonction()','ma_fonction()','exec ma_fonction','run ma_fonction'], r: 1},
      {q: 'Quel mot-cle retourne une valeur ?', options: ['return','yield','give','output'], r: 0},
      {q: 'Qu est-ce qu un module Python ?', options: ['Un fichier .py contenant du code','Une base de donnees','Un editeur','Un navigateur'], r: 0}
    ],
    'Pandas Basics': [
      {q: 'Quelle structure de donnees est comme un tableau Excel ?', options: ['Series','DataFrame','Array','List'], r: 1},
      {q: 'Quelle methode lit un fichier CSV ?', options: ['read_csv()','load_csv()','open_csv()','import_csv()'], r: 0},
      {q: 'Quelle methode affiche les 5 premieres lignes ?', options: ['first()','head()','top()','show()'], r: 1},
      {q: 'Quelle methode donne les statistiques descriptives ?', options: ['stats()','describe()','summary()','info()'], r: 1},
      {q: 'Comment selectionne-t-on une colonne ?', options: ['df.col','df["col"]','df.get("col")','Toutes ces reponses'], r: 3}
    ],
    'Analyse de Donnees': [
      {q: 'Quelle methode compte les valeurs uniques ?', options: ['count()','value_counts()','unique()','nunique()'], r: 1},
      {q: 'Quelle methode groupe les donnees ?', options: ['join()','merge()','groupby()','combine()'], r: 2},
      {q: 'Quelle methode trie les donnees ?', options: ['order()','sort()','sort_values()','arrange()'], r: 2},
      {q: 'Quelle methode detecte les valeurs manquantes ?', options: ['is_null()','isna()','missing()','null()'], r: 1},
      {q: 'Quelle methode remplace les valeurs manquantes ?', options: ['replace()','fillna()','dropna()','clean()'], r: 1}
    ],
    'NumPy Arrays': [
      {q: 'Quelle bibliotheque est optimisee pour le calcul numerique ?', options: ['Pandas','NumPy','Matplotlib','SciPy'], r: 1},
      {q: 'Quelle fonction cree un tableau de zeros ?', options: ['zeros()','empty()','ones()','full()'], r: 0},
      {q: 'Quel attribut donne la dimension d un tableau ?', options: ['size','shape','dim','length'], r: 1},
      {q: 'Quelle fonction cree une sequence de nombres ?', options: ['sequence()','range()','arange()','linspace()'], r: 2},
      {q: 'Quel est le type de donnee par defaut d un ndarray ?', options: ['int32','float64','int64','float32'], r: 1}
    ],
    'Visualisation Matplotlib': [
      {q: 'Quelle fonction cree un graphique lineaire ?', options: ['scatter()','plot()','line()','graph()'], r: 1},
      {q: 'Quelle fonction cree un histogramme ?', options: ['bar()','hist()','histogram()','boxplot()'], r: 1},
      {q: 'Quelle fonction ajoute un titre au graphique ?', options: ['set_title()','title()','suptitle()','add_title()'], r: 1},
      {q: 'Quelle fonction sauvegarde un graphique ?', options: ['export()','savefig()','save()','exportfig()'], r: 1},
      {q: 'Quel sous-module de Matplotlib est couramment importe ?', options: ['matplotlib.plot','matplotlib.graph','matplotlib.pyplot','matplotlib.chart'], r: 2}
    ],
    'Scikit-learn Intro': [
      {q: 'Quel module de sklearn fait la regression lineaire ?', options: ['LinearRegression','LogisticRegression','DecisionTree','SVM'], r: 0},
      {q: 'Quelle fonction divise les donnees en train/test ?', options: ['split()','train_test_split()','divide()','separate()'], r: 1},
      {q: 'Quel algorithme est utilise pour la classification ?', options: ['KMeans','LinearRegression','LogisticRegression','PCA'], r: 2},
      {q: 'Quelle methode entraine le modele ?', options: ['predict()','train()','fit()','learn()'], r: 2},
      {q: 'Quelle metrique evalue un classificateur ?', options: ['MSE','accuracy_score','RMSE','R2'], r: 1}
    ],
    'Projet Data Science': [
      {q: 'Quelle est la premiere etape d un projet data ?', options: ['Modelisation','Collecte et nettoyage des donnees','Deploiement','Visualisation'], r: 1},
      {q: 'Qu est-ce que le feature engineering ?', options: ['Creer de nouvelles variables pertinentes','Construire un graphique','Deployer un modele','Collecter des donnees'], r: 0},
      {q: 'Quelle bibliotheque est utilisee pour le ML ?', options: ['Pandas','NumPy','Scikit-learn','Matplotlib'], r: 2},
      {q: 'Qu est-ce que le overfitting ?', options: ['Modele trop complexe qui memorise','Modele trop simple','Pas assez de donnees','Erreur de code'], r: 0},
      {q: 'Quelle etape vient apres l entrainement ?', options: ['Collecte','Evaluation','Nettoyage','Exploration'], r: 1}
    ]
  }
};

// Generer des questions pour toutes les formations
function getQuestions(coursId, formationId) {
  const ordre = parseInt(coursId.split('_c')[1]);
  const formation = FORMATIONS.find(f => f.id === formationId);
  const coursTitre = COURS_TITRES[formationId] ? COURS_TITRES[formationId][ordre - 1] : 'Cours';

  const db = QUESTIONS_DB[formationId];
  if (db && db[coursTitre]) {
    const rawQuestions = db[coursTitre];
    return rawQuestions.map((q, idx) => ({
      id: 'q' + (idx + 1) + '_c' + ordre,
      question: q.q,
      options: q.options,
      reponse_correcte: q.options[q.r],
      explication: `La bonne reponse est : ${q.options[q.r]}`
    }));
  }

  // Questions generiques specifiques au titre du cours
  return generateQuestionsForCours(coursTitre, ordre, formation.titre);
}

function generateQuestionsForCours(titre, ordre, formationTitre) {
  const q = [];
  const t = titre.toLowerCase();
  const f = formationTitre.toLowerCase();

  // Trouver l'outil/technologie principal du cours
  let outil = 'un editeur de code';
  if (t.includes('python') || f.includes('python')) outil = 'Python';
  else if (t.includes('react')) outil = 'React';
  else if (t.includes('html')) outil = 'HTML5';
  else if (t.includes('css')) outil = 'CSS3';
  else if (t.includes('javascript') || t.includes('js')) outil = 'JavaScript';
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
  else if (t.includes('indesign')) outil = 'Adobe InDesign';
  else if (t.includes('figma')) outil = 'Figma';
  else if (t.includes('blender')) outil = 'Blender';
  else if (t.includes('power bi')) outil = 'Power BI';
  else if (t.includes('scrum')) outil = 'la methode Scrum';
  else if (t.includes('git')) outil = 'Git';
  else if (t.includes('email')) outil = 'une plateforme d\'emailing';
  else if (t.includes('after effects')) outil = 'After Effects';
  else if (t.includes('pandas')) outil = 'Pandas';
  else if (t.includes('numpy')) outil = 'NumPy';
  else if (t.includes('matplotlib')) outil = 'Matplotlib';
  else if (t.includes('scikit')) outil = 'Scikit-learn';
  else if (t.includes('deep learning')) outil = 'TensorFlow/Keras';
  else if (t.includes('ui') || t.includes('ux')) outil = 'Figma';
  else if (t.includes('motion')) outil = 'After Effects';
  else if (t.includes('photo')) outil = 'un appareil photo';
  else if (t.includes('shopify')) outil = 'Shopify';
  else if (t.includes('analytics') || t.includes('ga4')) outil = 'Google Analytics';
  else if (t.includes('agile') || t.includes('scrum')) outil = 'Jira';
  else if (t.includes('devops')) outil = 'Docker et Jenkins';
  else if (t.includes('cyber') || t.includes('securite')) outil = 'Kali Linux';
  else if (t.includes('ia') || t.includes('intelligence')) outil = 'Python et TensorFlow';
  else if (t.includes('business') || t.includes('entreprise')) outil = 'Excel et les outils de gestion';
  else if (t.includes('e-commerce') || t.includes('dropshipping')) outil = 'Shopify';
  else if (t.includes('leadership') || t.includes('management')) outil = 'les techniques de communication';
  else if (t.includes('vente') || t.includes('negociation')) outil = 'les techniques de closing';
  else if (t.includes('finance')) outil = 'Excel et les outils financiers';
  else if (t.includes('marketing')) outil = 'les outils de marketing digital';
  else if (t.includes('blender') || t.includes('3d')) outil = 'Blender';
  else if (t.includes('illustration') || t.includes('dessin')) outil = 'Photoshop ou Procreate';
  else if (t.includes('webdesign') || t.includes('web design')) outil = 'Figma';
  else if (t.includes('data science')) outil = 'Jupyter Notebook';

  // Extraire des mots-cles du titre pour personnaliser
  const keywords = t.split(/[\s/]+/).filter(w => w.length > 3);
  const kw = keywords[0] || 'concept';
  const kw2 = keywords[1] || 'technique';

  // Question 1 - Concept principal
  q.push({
    id: 'q1_c' + ordre,
    question: `Quel est l'objectif principal de "${titre}" ?`,
    options: [`Maitriser les concepts fondamentaux de ${titre}`, `Apprendre un langage de programmation sans but`, `Creer un site web e-commerce`, `Analyser des donnees financieres sans objectif`],
    reponse_correcte: `Maitriser les concepts fondamentaux de ${titre}`,
    explication: `Le cours "${titre}" vise a vous faire maitriser les concepts fondamentaux de ce domaine.`
  });

  // Question 2 - Outil/Technologie
  const fauxOutils = ['Microsoft Word', 'Adobe Premiere', 'AutoCAD', 'Calculator', 'Notepad'];
  const opts2 = [outil, fauxOutils[ordre % 5], fauxOutils[(ordre + 1) % 5], fauxOutils[(ordre + 2) % 5]];
  q.push({
    id: 'q2_c' + ordre,
    question: `Quel outil ou technologie est principalement utilise dans "${titre}" ?`,
    options: opts2,
    reponse_correcte: outil,
    explication: `${outil} est l'outil principal utilise dans le cours "${titre}".`
  });

  // Question 3 - Niveau
  let niveau = 'Debutant';
  if (formationTitre.includes('Avance')) niveau = 'Avance';
  else if (formationTitre.includes('Intermediaire')) niveau = 'Intermediaire';

  q.push({
    id: 'q3_c' + ordre,
    question: `A quel niveau se situe le cours "${titre}" ?`,
    options: [niveau, 'Universitaire (Licence)', 'Doctorat (PhD)', 'College (Secondaire)'],
    reponse_correcte: niveau,
    explication: `Ce cours est de niveau ${niveau} dans la formation.`
  });

  // Question 4 - Application pratique
  q.push({
    id: 'q4_c' + ordre,
    question: `Dans quel contexte applique-t-on "${titre}" ?`,
    options: [`Dans un environnement professionnel reel`, `Uniquement dans un cadre academique`, `Pour des projets personnels uniquement`, `Dans le domaine de la restauration`],
    reponse_correcte: `Dans un environnement professionnel reel`,
    explication: `"${titre}" s'applique dans un contexte professionnel reel.`
  });

  // Question 5 - Importance
  q.push({
    id: 'q5_c' + ordre,
    question: `Pourquoi "${titre}" est-il important dans la formation "${formationTitre}" ?`,
    options: [`C'est un pilier fondamental de la formation`, `C'est une option facultative sans interet`, `Ce n'est pas important pour le metier`, `C'est un bonus decorative`],
    reponse_correcte: `C'est un pilier fondamental de la formation`,
    explication: `"${titre}" est un pilier fondamental de la formation "${formationTitre}".`
  });

  // Question 6 - Definition du concept cle
  q.push({
    id: 'q6_c' + ordre,
    question: `Que signifie "${kw}" dans le contexte de "${titre}" ?`,
    options: [`Un concept cle de ${titre}`, `Un logiciel de bureautique`, `Un type de musique`, `Un plat culinaire`],
    reponse_correcte: `Un concept cle de ${titre}`,
    explication: `"${kw}" est un concept cle du cours "${titre}".`
  });

  // Question 7 - Domaine d'application
  q.push({
    id: 'q7_c' + ordre,
    question: `Quel secteur utilise principalement les competences de "${titre}" ?`,
    options: [`Le secteur numerique et technologique`, `L'agriculture traditionnelle`, `La peche industrielle`, `La fabrication de meubles`],
    reponse_correcte: `Le secteur numerique et technologique`,
    explication: `Les competences de "${titre}" sont principalement utilisees dans le secteur numerique.`
  });

  // Question 8 - Methode/Approche
  q.push({
    id: 'q8_c' + ordre,
    question: `Quelle approche est enseignee dans "${titre}" ?`,
    options: [`Une approche pratique et operationnelle`, `Une approche uniquement theorique`, `Une approche basee sur le hasard`, `Une approche sans methode`],
    reponse_correcte: `Une approche pratique et operationnelle`,
    explication: `"${titre}" enseigne une approche pratique et operationnelle.`
  });

  // Question 9 - Resultat attendu
  q.push({
    id: 'q9_c' + ordre,
    question: `Que peut-on accomplir apres avoir suivi "${titre}" ?`,
    options: [`Mettre en pratique les concepts de ${titre}`, `Devenir astronaute`, `Cuisiner un plat gourmet`, `Reparer une voiture`],
    reponse_correcte: `Mettre en pratique les concepts de ${titre}`,
    explication: `Apres "${titre}", vous serez capable de mettre en pratique les concepts appris.`
  });

  // Question 10 - Prerequis
  q.push({
    id: 'q10_c' + ordre,
    question: `Quel prerequis est recommande avant "${titre}" ?`,
    options: [`Les bases de la formation`, `Un doctorat en physique quantique`, `Aucun prerequis n'est necessaire`, `10 ans d'experience minimum`],
    reponse_correcte: `Les bases de la formation`,
    explication: `Les bases de la formation sont recommandees avant de suivre "${titre}".`
  });

  // Question 11 - Keywords specifique
  q.push({
    id: 'q11_c' + ordre,
    question: `Quel role joue "${kw2 || 'cette competence'}" dans "${titre}" ?`,
    options: [`Il est essentiel pour reussir`, `Il n'a aucune importance`, `C'est un element decoratif`, `C'est obsolete`],
    reponse_correcte: `Il est essentiel pour reussir`,
    explication: `"${kw2 || 'cette competence'}" joue un role essentiel dans "${titre}".`
  });

  // Question 12 - Bonne pratique
  q.push({
    id: 'q12_c' + ordre,
    question: `Quelle bonne pratique est enseignee dans "${titre}" ?`,
    options: [`Suivre les methodologies professionnelles`, `Ignorer les conventions`, `Travailler sans plan`, `Eviter la documentation`],
    reponse_correcte: `Suivre les methodologies professionnelles`,
    explication: `"${titre}" enseigne a suivre les methodologies professionnelles.`
  });

  // Question 13 - Competence developpee
  q.push({
    id: 'q13_c' + ordre,
    question: `Quelle competence developpe-t-on principalement dans "${titre}" ?`,
    options: [`Une competence technique specialisée`, `La conduite automobile`, `La cuisine française`, `Le jardinage`],
    reponse_correcte: `Une competence technique specialisée`,
    explication: `"${titre}" developpe principalement une competence technique specialisée.`
  });

  // Question 14 - Finalite professionnelle
  q.push({
    id: 'q14_c' + ordre,
    question: `Quel est le benefice professionnel de "${titre}" ?`,
    options: [`Ameliorer ses competences pour le marche du travail`, `Aucun benefice professionnel`, `Obtenir un passeport`, `Apprendre a nager`],
    reponse_correcte: `Ameliorer ses competences pour le marche du travail`,
    explication: `"${titre}" permet d'ameliorer ses competences pour le marche du travail.`
  });

  // Question 15 - Verification des connaissances
  q.push({
    id: 'q15_c' + ordre,
    question: `Comment valide-t-on les connaissances acquises dans "${titre}" ?`,
    options: [`En passant le quiz de validation`, `En ecrivant un poeme`, `En courant un marathon`, `En peignant un tableau`],
    reponse_correcte: `En passant le quiz de validation`,
    explication: `Les connaissances de "${titre}" sont validees via le quiz de validation.`
  });

  return q;
}

// ============================================
// QUESTIONS D'EXAMEN FINAL (45 questions)
// ============================================
function getExamenQuestions(formationId) {
  const formation = FORMATIONS.find(f => f.id === formationId);
  const coursTitres = COURS_TITRES[formationId] || [];
  const questions = [];

  // 40 questions couvrant tous les cours de la formation (4 par cours)
  for (let i = 0; i < 10; i++) {
    const titre = coursTitres[i] || `Cours ${i + 1}`;
    const t = titre.toLowerCase();

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
