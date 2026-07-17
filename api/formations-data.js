const FORMATIONS = [
  { id: 'f1', titre: 'Developpement Web Full Stack', description: 'HTML, CSS, JavaScript, React, Node.js. Construisez des applications web completes.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800', duree: '120h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f2', titre: 'Python pour la Data Science', description: 'Python, Pandas, NumPy, Matplotlib et scikit-learn pour analyser des donnees.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800', duree: '100h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f3', titre: 'Developpement Mobile Flutter', description: 'Applications mobiles cross-platform iOS et Android avec Flutter et Dart.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', duree: '90h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f4', titre: 'Intelligence Artificielle & ML', description: 'Fondamentaux de l IA, reseaux de neurones, deep learning.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800', duree: '140h', niveau: 'Avance', nombre_cours: 10 },
  { id: 'f5', titre: 'Cybersecurite & Hacking Ethique', description: 'Securite des reseaux, tests d intrusion, protection des systemes.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800', duree: '110h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f6', titre: 'Cloud Computing & AWS', description: 'Services cloud Amazon, deploiement, scaling et gestion d infrastructure.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', duree: '95h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f7', titre: 'Bases de Donnees SQL & NoSQL', description: 'Conception, optimisation et gestion de bases de donnees.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800', duree: '80h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f8', titre: 'DevOps & CI/CD', description: 'Docker, Kubernetes, Jenkins, GitLab CI et automatisation.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=800', duree: '100h', niveau: 'Avance', nombre_cours: 10 },
  { id: 'f9', titre: 'SEO & Referencement Naturel', description: 'Optimisez votre site pour Google, mots-cles, backlinks.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800', duree: '70h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f10', titre: 'Facebook & Instagram Ads', description: 'Campagnes publicitaires performantes sur les reseaux sociaux.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800', duree: '60h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f11', titre: 'Marketing de Contenu', description: 'Strategie de contenu, storytelling, copywriting.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', duree: '65h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f12', titre: 'Email Marketing Automation', description: 'Sequences d emails automatisees qui convertissent.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800', duree: '50h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f13', titre: 'Google Ads & SEM', description: 'Google Ads, recherche payante et marketing search.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?w=800', duree: '70h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f14', titre: 'Analytics & Data Marketing', description: 'Google Analytics 4, GTM, tableaux de bord data-driven.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', duree: '80h', niveau: 'Avance', nombre_cours: 10 },
  { id: 'f15', titre: 'Community Management', description: 'Gerez votre communaute, creez de l engagement.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800', duree: '55h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f16', titre: 'Growth Hacking', description: 'Techniques de croissance rapide, A/B testing, viralite.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', duree: '75h', niveau: 'Avance', nombre_cours: 10 },
  { id: 'f17', titre: 'UI/UX Design', description: 'Interfaces intuitives avec Figma, prototypage et user research.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800', duree: '90h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f18', titre: 'Adobe Creative Suite', description: 'Photoshop, Illustrator et InDesign pour des visuels pros.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800', duree: '100h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f19', titre: 'Motion Design & Animation', description: 'After Effects, animations 2D/3D et videos dynamiques.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800', duree: '85h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f20', titre: 'Design 3D avec Blender', description: 'Modelisation 3D, texturing, eclairage et rendu.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800', duree: '110h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f21', titre: 'Photographie Professionnelle', description: 'Prise de vue, composition, eclairage et post-traitement.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800', duree: '70h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f22', titre: 'Illustration Digitale', description: 'Dessin numerique avec Procreate et Photoshop.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800', duree: '80h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f23', titre: 'Webdesign Responsive', description: 'Design adaptatif, mobile-first, wireframing.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800', duree: '75h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f24', titre: 'Creation d Entreprise', description: 'Business plan, financement, modele economique.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800', duree: '85h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f25', titre: 'Gestion de Projet Agile', description: 'Scrum, Kanban, Jira et methodologies agiles.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800', duree: '70h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f26', titre: 'Finance pour Entrepreneurs', description: 'Comptabilite, gestion financiere, previsions.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', duree: '75h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f27', titre: 'Leadership & Management', description: 'Gestion d equipe, communication, leadership.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', duree: '65h', niveau: 'Intermediaire', nombre_cours: 10 },
  { id: 'f28', titre: 'E-commerce & Dropshipping', description: 'Boutique en ligne, marketing et logistique.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', duree: '70h', niveau: 'Debutant', nombre_cours: 10 },
  { id: 'f29', titre: 'Negociation & Ventes B2B', description: 'Techniques de vente, prospection, closing.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', duree: '60h', niveau: 'Avance', nombre_cours: 10 },
  { id: 'f30', titre: 'Business Intelligence', description: 'Tableaux de bord, KPIs, Power BI, strategie data.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', duree: '90h', niveau: 'Avance', nombre_cours: 10 }
];

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

function generateCours(formationId) {
  const titres = COURS_TITRES[formationId] || COURS_TITRES['f1'];
  return titres.map((titre, index) => ({
    id: formationId + '_c' + (index + 1),
    formation_id: formationId,
    titre,
    description: 'Dans ce cours, vous allez approfondir vos connaissances sur ' + titre.toLowerCase() + '. Ce module est essentiel pour votre formation.',
    contenu: '<h1>' + titre + '</h1><h2>Objectifs du cours</h2><ul><li>Comprendre les concepts fondamentaux de ' + titre + '</li><li>Appliquer les bonnes pratiques en situation reelle</li><li>Maitriser les outils et techniques associes</li></ul><h2>Contenu detaille</h2><h3>1. Introduction</h3><p>Ce cours couvre les aspects essentiels de <strong>' + titre + '</strong>. Vous apprendrez etape par etape a maitriser ce sujet grace a des exemples concrets et des exercices pratiques.</p><h3>2. Concepts cles</h3><ul><li>Definitions et terminologie</li><li>Principes fondamentaux</li><li>Cas d usage courants</li><li>Erreurs a eviter</li></ul><h3>3. Pratique et exercices</h3><ul><li>Exercice guide : Application des concepts</li><li>Etude de cas reel</li><li>Bonnes pratiques professionnelles</li><li>Astuces et shortcuts</li></ul><h2>Conclusion</h2><p>Felicitations d avoir termine ce cours sur <strong>' + titre + '</strong> ! Vous etes maintenant pret a passer au quiz de validation.</p>',
    ordre: index + 1,
    duree: '45min'
  }));
}

const ALL_COURS = [];
for (const f of FORMATIONS) {
  ALL_COURS.push(...generateCours(f.id));
}

module.exports = { FORMATIONS, ALL_COURS, COURS_TITRES };
