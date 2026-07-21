// ============================================
// DONNEES - 30 FORMATIONS PROFESSIONNELLES
// ============================================

const DOMAINES = [
  'Informatique & Developpement',
  'Marketing Digital',
  'Design & Creation',
  'Business & Entrepreneuriat'
];

const FORMATIONS = [
  // INFORMATIQUE (8)
  { id: 'f1', titre: 'Developpement Web Full Stack', description: 'HTML, CSS, JavaScript, React, Node.js. Construisez des applications web completes.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800', duree: '120h', niveau: 'Debutant' },
  { id: 'f2', titre: 'Python pour la Data Science', description: 'Python, Pandas, NumPy, Matplotlib et scikit-learn pour analyser des donnees.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800', duree: '100h', niveau: 'Debutant' },
  { id: 'f3', titre: 'Developpement Mobile Flutter', description: 'Applications mobiles cross-platform iOS et Android avec Flutter et Dart.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', duree: '90h', niveau: 'Intermediaire' },
  { id: 'f4', titre: 'Intelligence Artificielle & ML', description: 'Fondamentaux de l\'IA, reseaux de neurones, deep learning.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800', duree: '140h', niveau: 'Avance' },
  { id: 'f5', titre: 'Cybersecurite & Hacking Ethique', description: 'Securite des reseaux, tests d\'intrusion, protection des systemes.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800', duree: '110h', niveau: 'Intermediaire' },
  { id: 'f6', titre: 'Cloud Computing & AWS', description: 'Services cloud Amazon, deploiement, scaling et gestion d\'infrastructure.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', duree: '95h', niveau: 'Intermediaire' },
  { id: 'f7', titre: 'Bases de Donnees SQL & NoSQL', description: 'Conception, optimisation et gestion de bases de donnees.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800', duree: '80h', niveau: 'Debutant' },
  { id: 'f8', titre: 'DevOps & CI/CD', description: 'Docker, Kubernetes, Jenkins, GitLab CI et automatisation.', domaine: 'Informatique & Developpement', image: 'https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=800', duree: '100h', niveau: 'Avance' },
  // MARKETING (8)
  { id: 'f9', titre: 'SEO & Referencement Naturel', description: 'Optimisez votre site pour Google, mots-cles, backlinks.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800', duree: '70h', niveau: 'Debutant' },
  { id: 'f10', titre: 'Facebook & Instagram Ads', description: 'Campagnes publicitaires performantes sur les reseaux sociaux.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800', duree: '60h', niveau: 'Debutant' },
  { id: 'f11', titre: 'Marketing de Contenu', description: 'Strategie de contenu, storytelling, copywriting.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', duree: '65h', niveau: 'Intermediaire' },
  { id: 'f12', titre: 'Email Marketing Automation', description: 'Sequences d\'emails automatisees qui convertissent.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800', duree: '50h', niveau: 'Intermediaire' },
  { id: 'f13', titre: 'Google Ads & SEM', description: 'Google Ads, recherche payante et marketing search.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?w=800', duree: '70h', niveau: 'Intermediaire' },
  { id: 'f14', titre: 'Analytics & Data Marketing', description: 'Google Analytics 4, GTM, tableaux de bord data-driven.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', duree: '80h', niveau: 'Avance' },
  { id: 'f15', titre: 'Community Management', description: 'Gerez votre communaute, creez de l\'engagement.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800', duree: '55h', niveau: 'Debutant' },
  { id: 'f16', titre: 'Growth Hacking', description: 'Techniques de croissance rapide, A/B testing, viralite.', domaine: 'Marketing Digital', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', duree: '75h', niveau: 'Avance' },
  // DESIGN (7)
  { id: 'f17', titre: 'UI/UX Design', description: 'Interfaces intuitives avec Figma, prototypage et user research.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800', duree: '90h', niveau: 'Debutant' },
  { id: 'f18', titre: 'Adobe Creative Suite', description: 'Photoshop, Illustrator et InDesign pour des visuels pros.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800', duree: '100h', niveau: 'Debutant' },
  { id: 'f19', titre: 'Motion Design & Animation', description: 'After Effects, animations 2D/3D et videos dynamiques.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800', duree: '85h', niveau: 'Intermediaire' },
  { id: 'f20', titre: 'Design 3D avec Blender', description: 'Modelisation 3D, texturing, eclairage et rendu.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800', duree: '110h', niveau: 'Intermediaire' },
  { id: 'f21', titre: 'Photographie Professionnelle', description: 'Prise de vue, composition, eclairage et post-traitement.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800', duree: '70h', niveau: 'Debutant' },
  { id: 'f22', titre: 'Illustration Digitale', description: 'Dessin numerique avec Procreate et Photoshop.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800', duree: '80h', niveau: 'Intermediaire' },
  { id: 'f23', titre: 'Webdesign Responsive', description: 'Design adaptatif, mobile-first, wireframing.', domaine: 'Design & Creation', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800', duree: '75h', niveau: 'Debutant' },
  // BUSINESS (7)
  { id: 'f24', titre: 'Creation d\'Entreprise', description: 'Business plan, financement, modele economique.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800', duree: '85h', niveau: 'Debutant' },
  { id: 'f25', titre: 'Gestion de Projet Agile', description: 'Scrum, Kanban, Jira et methodologies agiles.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800', duree: '70h', niveau: 'Intermediaire' },
  { id: 'f26', titre: 'Finance pour Entrepreneurs', description: 'Comptabilite, gestion financiere, previsions.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', duree: '75h', niveau: 'Debutant' },
  { id: 'f27', titre: 'Leadership & Management', description: 'Gestion d\'equipe, communication, leadership.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', duree: '65h', niveau: 'Intermediaire' },
  { id: 'f28', titre: 'E-commerce & Dropshipping', description: 'Boutique en ligne, marketing et logistique.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', duree: '70h', niveau: 'Debutant' },
  { id: 'f29', titre: 'Negociation & Ventes B2B', description: 'Techniques de vente, prospection, closing.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', duree: '60h', niveau: 'Avance' },
  { id: 'f30', titre: 'Business Intelligence', description: 'Tableaux de bord, KPIs, Power BI, strategie data.', domaine: 'Business & Entrepreneuriat', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', duree: '90h', niveau: 'Avance' }
];

// Titres des cours par formation
const COURS_TITRES = {
  'f1': ['Introduction au Web','HTML5 Fondamentaux','CSS3 et Styling','JavaScript Basics','DOM Manipulation','React Fundamentals','State Management','Node.js Backend','Base de Donnees','Deploiement Full Stack'],
  'f2': ['Introduction a Python','Variables et Types','Structures de Controle','Fonctions et Modules','Pandas Basics','Analyse de Donnees','NumPy Arrays','Visualisation Matplotlib','Scikit-learn Intro','Projet Data Science'],
  'f3': ['Introduction a Flutter','Dart Language','Widgets Basics','State Management','Navigation','API Integration','Base de Donnees Locale','Authentification','Animations','Deploiement iOS/Android'],
  'f4': ['Introduction a l\'IA','Machine Learning Basics','Regression Lineaire','Classification','Reseaux de Neurones','Deep Learning','CNN pour Images','NLP et Texte','Modeles Avances','Projet IA'],
  'f5': ['Introduction Cybersecurite','Reseaux et Protocoles','Vulnerabilites Web','Tests d\'Intrusion','Cryptographie','Securite Applications','Forensic','OSINT','Reporting','Projet Securite'],
  'f6': ['Introduction Cloud','AWS Core Services','EC2 et Compute','S3 et Stockage','RDS et Bases de Donnees','Serverless Lambda','IAM Securite','Auto Scaling','Monitoring CloudWatch','Architecture Cloud'],
  'f7': ['Introduction aux BDD','SQL Fondamentaux','Requetes Avancees','Jointures','Normalisation','Indexes et Performance','MongoDB Basics','Redis Cache','Backup et Restore','Projet Database'],
  'f8': ['Introduction DevOps','Git Avance','Docker Containers','Docker Compose','CI/CD Pipelines','Jenkins','Kubernetes Basics','Orchestration','Monitoring','Projet DevOps'],
  'f9': ['Introduction SEO','Mots-Cles Research','On-Page SEO','Technical SEO','Link Building','Content SEO','SEO Local','Outils SEO','Analytics SEO','Audit et Strategie'],
  'f10': ['Introduction Facebook Ads','Business Manager','Creation de Campagnes','Ciblage d\'Audience','Creatives et Copy','Optimisation','Retargeting','Instagram Ads','Analytics','Strategie Avancee'],
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

function getCours(formationId) {
  const titres = COURS_TITRES[formationId] || COURS_TITRES['f1'];
  return titres.map((titre, index) => ({
    id: `${formationId}_c${index + 1}`,
    formation_id: formationId,
    titre,
    description: `Dans ce cours, vous allez approfondir vos connaissances sur ${titre.toLowerCase()}. Ce module est essentiel pour votre formation.`,
    contenu: generateContenuCours(titre),
    ordre: index + 1,
    duree: '45min'
  }));
}

function generateContenuCours(titre) {
  return `<h1>${titre}</h1>
<h2>Objectifs du cours</h2>
<ul>
<li>Comprendre les concepts fondamentaux de ${titre}</li>
<li>Appliquer les bonnes pratiques en situation reelle</li>
<li>Maitriser les outils et techniques associes</li>
</ul>
<h2>Contenu detaille</h2>
<h3>1. Introduction</h3>
<p>Ce cours couvre les aspects essentiels de <strong>${titre}</strong>. Vous apprendrez etape par etape a maitriser ce sujet grace a des exemples concrets et des exercices pratiques.</p>
<h3>2. Concepts cles</h3>
<ul>
<li>Definitions et terminologie</li>
<li>Principes fondamentaux</li>
<li>Cas d'usage courants</li>
<li>Erreurs a eviter</li>
</ul>
<h3>3. Pratique et exercices</h3>
<ul>
<li>Exercice guide : Application des concepts</li>
<li>Etude de cas reel</li>
<li>Bonnes pratiques professionnelles</li>
<li>Astuces et shortcuts</li>
</ul>
<h3>4. Points importants a retenir</h3>
<ul>
<li>Recapitulatif des notions cles</li>
<li>Checklist de validation</li>
<li>Ressources complementaires</li>
<li>Prochaines etapes</li>
</ul>
<h2>Conclusion</h2>
<p>Felicitations d'avoir termine ce cours sur <strong>${titre}</strong> ! Vous etes maintenant pret a passer au quiz de validation. Assurez-vous d'avoir bien compris tous les concepts avant de continuer.</p>`;
}

// Questions de quiz par domaine
const QUESTIONS_PAR_DOMAINE = {
  'Informatique & Developpement': [
    ['Quel langage est principalement utilise pour le styling web ?','CSS','Python','Java','Ruby','CSS permet de styliser les pages HTML.'],
    ['Que signifie HTML ?','HyperText Markup Language','High Tech Modern Language','Home Tool Markup Language','HyperText Modern Links','HTML est le langage de balisage standard du web.'],
    ['Quel framework JS est developpe par Facebook ?','React','Vue','Angular','Svelte','React est une bibliotheque JavaScript creee par Facebook.'],
    ['Quelle methode HTTP recupere des donnees ?','GET','POST','DELETE','PUT','GET est la methode standard pour recuperer des ressources.'],
    ['Quel est le role de Node.js ?','Executer JS cote serveur','Styler des pages web','Gerer des BDD','Creer des animations','Node.js permet d\'executer JavaScript sur le serveur.'],
    ['Que signifie API ?','Application Programming Interface','Advanced Programming Integration','Application Process Integration','Automated Program Interface','Une API permet la communication entre logiciels.'],
    ['Quel type de BDD est MongoDB ?','NoSQL','Relationnelle','Graph','Cle-valeur','MongoDB est une base de donnees orientee documents NoSQL.'],
    ['Quel protocole securise les communications web ?','HTTPS','HTTP','FTP','SMTP','HTTPS ajoute une couche de chiffrement SSL/TLS.'],
    ['Qu\'est-ce qu\'un composant React ?','Une brique d\'interface reutilisable','Une fonction serveur','Un type de BDD','Un protocole reseau','Les composants React sont des elements d\'UI reutilisables.'],
    ['Quel outil est utilise pour le versionning ?','Git','Docker','Webpack','NPM','Git est le systeme de controle de version le plus populaire.'],
    ['Que fait la methode map() en JS ?','Transforme chaque element d\'un tableau','Filtre un tableau','Trie un tableau','Reduit un tableau','map() cree un nouveau tableau avec les resultats.'],
    ['Quel est le port par defaut de HTTP ?','80','443','3000','8080','Le port 80 est le port standard pour HTTP non securise.'],
    ['Qu\'est-ce que le DOM ?','Document Object Model','Data Object Mode','Digital Ordinance Model','Desktop Oriented Mode','Le DOM represente la structure d\'un document HTML.'],
    ['Quelle balise HTML cree un lien ?','<a>','<link>','<href>','<url>','La balise <a> avec href cree des liens hypertextes.'],
    ['Quel operateur verifie l\'egalite stricte ?','===','==','=','!=','=== verifie a la fois la valeur et le type.']
  ],
  'Marketing Digital': [
    ['Quel est l\'objectif principal du SEO ?','Ameliorer le positionnement naturel','Payer pour des clics','Envoyer des emails','Creer des videos','Le SEO vise a ameliorer le classement dans les resultats naturels.'],
    ['Que signifie CPC ?','Cost Per Click','Cost Per Conversion','Click Per Cent','Customer Price Cost','CPC est le cout par clic dans la publicite en ligne.'],
    ['Quel reseau social est le plus adapte pour le B2B ?','LinkedIn','TikTok','Snapchat','Pinterest','LinkedIn est la plateforme professionnelle par excellence.'],
    ['Qu\'est-ce qu\'un taux de conversion ?','Pourcentage de visiteurs qui realisent une action','Nombre total de visiteurs','Cout d\'une campagne','Temps passe sur un site','Le taux de conversion mesure l\'efficacite d\'une action marketing.'],
    ['Quel outil Google mesure le trafic web ?','Google Analytics','Google Ads','Search Console','Tag Manager','Google Analytics est l\'outil d\'analyse de trafic le plus utilise.'],
    ['Qu\'est-ce que le remarketing ?','Cibler les anciens visiteurs','Attirer de nouveaux clients','Optimiser le SEO','Creer du contenu','Le remarketing cible les utilisateurs ayant deja visite votre site.'],
    ['Quel format d\'email a le meilleur taux d\'ouverture ?','Email personnalise','Email generique','Newsletter hebdo','Email promotionnel','La personnalisation augmente les taux d\'ouverture.'],
    ['Qu\'est-ce qu\'un persona ?','Profil fictif representant la cible ideale','Un influenceur','Un outil analytics','Un type de publicite','Les personas aident a comprendre et cibler son audience.'],
    ['Quelle metrique mesure l\'engagement social ?','Taux d\'engagement','Reach','Impressions','CPC','Le taux d\'engagement mesure les interactions par rapport a la portee.'],
    ['Qu\'est-ce que le A/B testing ?','Comparer deux versions d\'un element','Tester deux canaux differents','Analyser deux audiences','Comparer deux budgets','Le A/B testing compare deux versions pour determiner la meilleure.'],
    ['Quel est le meilleur moment pour poster sur Instagram ?','Depend de l\'audience','Toujours a midi','Le matin tot','Le week-end','Le meilleur timing depend de votre audience specifique.'],
    ['Qu\'est-ce que le content marketing ?','Creer du contenu de valeur pour attirer','Payer pour de la publicite','Optimiser le SEO technique','Gerer les reseaux sociaux','Le content marketing attire par la valeur du contenu.'],
    ['Quel canal a le meilleur ROI en moyenne ?','Email marketing','Publicite display','Influence marketing','Marketing d\'affiliation','L\'email marketing offre le meilleur retour sur investissement.'],
    ['Qu\'est-ce qu\'un backlink ?','Un lien entrant vers votre site','Un lien sortant','Un lien interne','Un lien casse','Les backlinks sont des liens d\'autres sites vers le votre.'],
    ['Quel objectif pour la notoriete ?','Awareness','Conversions','Trafic','Engagement','L\'objectif Awareness optimise pour la visibilite.']
  ],
  'Design & Creation': [
    ['Quelle unite est relative en CSS ?','em','px','cm','pt','em est relative a la taille de police de l\'element parent.'],
    ['Qu\'est-ce que le whitespace ?','Espace vide autour des elements','Couleur de fond blanche','Police blanche','Image blanche','Le whitespace ameliore la lisibilite.'],
    ['Quel format d\'image supporte la transparence ?','PNG','JPEG','BMP','GIF','PNG supporte la transparence via le canal alpha.'],
    ['Qu\'est-ce que la hierarchie visuelle ?','Organisation des elements par importance','Taille des images','Ordre des couleurs','Structure du code','La hierarchie visuelle guide l\'oeil du spectateur.'],
    ['Quelle couleur evoque la confiance ?','Bleu','Rouge','Jaune','Noir','Le bleu est souvent associe a la confiance.'],
    ['Qu\'est-ce qu\'une grille de mise en page ?','Structure guidant le placement des elements','Tableau de donnees','Image de fond','Liste de polices','Les grilles assurent la coherence du design.'],
    ['Quel logiciel est standard pour le prototypage UI ?','Figma','Excel','Word','PowerPoint','Figma est l\'outil de reference pour le design d\'interface.'],
    ['Qu\'est-ce que le contraste ?','Difference de luminosite entre deux elements','Taille des polices','Distance entre les lettres','Nombre de couleurs','Le contraste ameliore la lisibilite.'],
    ['Quelle police est sans-serif ?','Helvetica','Times New Roman','Georgia','Garamond','Helvetica est une police sans empattement.'],
    ['Qu\'est-ce que l\'UX design ?','Conception de l\'experience utilisateur','Conception graphique','Developpement web','Marketing visuel','L\'UX design se concentre sur l\'experience globale.'],
    ['Quel format est vectoriel ?','SVG','PNG','JPEG','GIF','SVG est un format vectoriel qui se redimensionne sans perte.'],
    ['Qu\'est-ce qu\'un moodboard ?','Collage visuel inspirant','Tableau de bord analytics','Plan de projet','Budget de design','Le moodboard rassemble les inspirations visuelles.'],
    ['Quel principe design cree l\'unite visuelle ?','Coherence','Contraste','Repetition','Proportion','La coherence visuelle unifie tous les elements.'],
    ['Qu\'est-ce que le kerning ?','Espacement entre deux lettres','Taille de police','Hauteur de ligne','Epaisseur de police','Le kerning ajuste l\'espacement entre paires de lettres.'],
    ['Quelle resolution est recommandee pour le web ?','72 PPI','300 PPI','150 PPI','600 PPI','72 PPI est la resolution standard pour le web.']
  ],
  'Business & Entrepreneuriat': [
    ['Qu\'est-ce qu\'un MVP ?','Minimum Viable Product','Maximum Value Product','Most Valuable Player','Minimum Value Proposal','Le MVP est la version minimale testable d\'un produit.'],
    ['Quel document decrit le modele economique ?','Business Model Canvas','CV','Business Plan detaille','Contrat de travail','Le BMC visualise tous les aspects du modele economique.'],
    ['Qu\'est-ce que le cash flow ?','Flux de tresorerie','Profit net','Chiffre d\'affaires','Capital social','Le cash flow represente les entrees et sorties d\'argent.'],
    ['Quel metrique mesure la retention ?','Churn Rate','CAC','LTV','MRR','Le Churn Rate mesure le taux de desabonnement.'],
    ['Que signifie CAC ?','Customer Acquisition Cost','Company Annual Cost','Customer Annual Count','Creative Asset Cost','Le CAC est le cout pour acquérir un nouveau client.'],
    ['Qu\'est-ce que le LTV ?','Lifetime Value','Long Term Vision','Local Target Volume','Lead Time Value','Le LTV est la valeur totale qu\'un client genere.'],
    ['Quel est le principal avantage du Scrum ?','Flexibilite et iterations rapides','Documentation exhaustive','Hierarchie stricte','Planification long terme','Scrum permet de s\'adapter rapidement.'],
    ['Qu\'est-ce qu\'un pitch deck ?','Presentation pour lever des fonds','Document technique','Contrat commercial','Plan marketing','Le pitch deck presente l\'entreprise aux investisseurs.'],
    ['Quelle structure juridique offre la protection limitee ?','SARL/SAS','Entreprise individuelle','EI','Auto-entrepreneur','La SARL/SAS protege le patrimoine personnel.'],
    ['Qu\'est-ce que le product-market fit ?','Adequation produit-marche','Fit marketing','Product fitness','Market placement','Le product-market fit indique que le produit repond a un besoin.'],
    ['Quel indicateur mesure la croissance mensuelle ?','MRR','NPS','CSAT','ROI','Le MRR mesure le revenu mensuel recurrent.'],
    ['Qu\'est-ce que le bootstrapping ?','Demarrage sans financement externe','Lever des fonds','Franchise','Fusion d\'entreprises','Le bootstrapping consiste a financer avec ses propres ressources.'],
    ['Quel outil gere les projets visuellement ?','Trello','Excel','Word','PowerPoint','Trello utilise des tableaux Kanban.'],
    ['Qu\'est-ce que l\'effet de levier ?','Amplification des resultats','Reduction des couts','Augmentation des ventes','Diminution des risques','L\'effet de levier amplifie les gains comme les pertes.'],
    ['Quelle est la premiere etape du lean startup ?','Identifier un probleme','Construire le produit','Lever des fonds','Embaucher une equipe','Le lean startup commence par identifier un probleme.']
  ]
};

function getQuestions(coursId, formationId) {
  const formation = FORMATIONS.find(f => f.id === formationId);
  const domaine = formation ? formation.domaine : 'Informatique & Developpement';
  const pool = QUESTIONS_PAR_DOMAINE[domaine] || QUESTIONS_PAR_DOMAINE['Informatique & Developpement'];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 15).map((q, i) => ({
    id: `${coursId}_q${i + 1}`,
    question: q[0],
    options: shuffleArray([q[1], q[2], q[3], q[4]]),
    reponse_correcte: q[1],
    explication: q[5]
  }));
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getExamenQuestions(formationId) {
  const all = [];
  for (let i = 0; i < 10; i++) {
    const qs = getQuestions(`${formationId}_c${i + 1}`, formationId);
    all.push(...qs.slice(0, 5));
  }
  return all.slice(0, 45);
}

// Export pour les modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FORMATIONS, DOMAINES, getCours, getQuestions, getExamenQuestions, COURS_TITRES };
}
