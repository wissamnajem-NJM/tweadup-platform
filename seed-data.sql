-- ============================================
-- TWEADUP - DONNEES DES 30 FORMATIONS + 300 COURS
-- ============================================
-- Executez ce script APRES avoir cree les tables (schema.sql)

-- ============================================
-- INSERT FORMATIONS (30)
-- ============================================

INSERT INTO formations (id, titre, description, domaine, image, duree, niveau, nombre_cours) VALUES
('f1', 'Developpement Web Full Stack', 'HTML, CSS, JavaScript, React, Node.js. Construisez des applications web completes.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800', '120h', 'Debutant', 10),
('f2', 'Python pour la Data Science', 'Python, Pandas, NumPy, Matplotlib et scikit-learn pour analyser des donnees.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800', '100h', 'Debutant', 10),
('f3', 'Developpement Mobile Flutter', 'Applications mobiles cross-platform iOS et Android avec Flutter et Dart.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', '90h', 'Intermediaire', 10),
('f4', 'Intelligence Artificielle & ML', 'Fondamentaux de l IA, reseaux de neurones, deep learning.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800', '140h', 'Avance', 10),
('f5', 'Cybersecurite & Hacking Ethique', 'Securite des reseaux, tests d intrusion, protection des systemes.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800', '110h', 'Intermediaire', 10),
('f6', 'Cloud Computing & AWS', 'Services cloud Amazon, deploiement, scaling et gestion d infrastructure.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', '95h', 'Intermediaire', 10),
('f7', 'Bases de Donnees SQL & NoSQL', 'Conception, optimisation et gestion de bases de donnees.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800', '80h', 'Debutant', 10),
('f8', 'DevOps & CI/CD', 'Docker, Kubernetes, Jenkins, GitLab CI et automatisation.', 'Informatique & Developpement', 'https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=800', '100h', 'Avance', 10),
('f9', 'SEO & Referencement Naturel', 'Optimisez votre site pour Google, mots-cles, backlinks.', 'Marketing Digital', 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800', '70h', 'Debutant', 10),
('f10', 'Facebook & Instagram Ads', 'Campagnes publicitaires performantes sur les reseaux sociaux.', 'Marketing Digital', 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800', '60h', 'Debutant', 10),
('f11', 'Marketing de Contenu', 'Strategie de contenu, storytelling, copywriting.', 'Marketing Digital', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', '65h', 'Intermediaire', 10),
('f12', 'Email Marketing Automation', 'Sequences d emails automatisees qui convertissent.', 'Marketing Digital', 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800', '50h', 'Intermediaire', 10),
('f13', 'Google Ads & SEM', 'Google Ads, recherche payante et marketing search.', 'Marketing Digital', 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?w=800', '70h', 'Intermediaire', 10),
('f14', 'Analytics & Data Marketing', 'Google Analytics 4, GTM, tableaux de bord data-driven.', 'Marketing Digital', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', '80h', 'Avance', 10),
('f15', 'Community Management', 'Gerez votre communaute, creez de l engagement.', 'Marketing Digital', 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800', '55h', 'Debutant', 10),
('f16', 'Growth Hacking', 'Techniques de croissance rapide, A/B testing, viralite.', 'Marketing Digital', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', '75h', 'Avance', 10),
('f17', 'UI/UX Design', 'Interfaces intuitives avec Figma, prototypage et user research.', 'Design & Creation', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800', '90h', 'Debutant', 10),
('f18', 'Adobe Creative Suite', 'Photoshop, Illustrator et InDesign pour des visuels pros.', 'Design & Creation', 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800', '100h', 'Debutant', 10),
('f19', 'Motion Design & Animation', 'After Effects, animations 2D/3D et videos dynamiques.', 'Design & Creation', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800', '85h', 'Intermediaire', 10),
('f20', 'Design 3D avec Blender', 'Modelisation 3D, texturing, eclairage et rendu.', 'Design & Creation', 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800', '110h', 'Intermediaire', 10),
('f21', 'Photographie Professionnelle', 'Prise de vue, composition, eclairage et post-traitement.', 'Design & Creation', 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800', '70h', 'Debutant', 10),
('f22', 'Illustration Digitale', 'Dessin numerique avec Procreate et Photoshop.', 'Design & Creation', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800', '80h', 'Intermediaire', 10),
('f23', 'Webdesign Responsive', 'Design adaptatif, mobile-first, wireframing.', 'Design & Creation', 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800', '75h', 'Debutant', 10),
('f24', 'Creation d Entreprise', 'Business plan, financement, modele economique.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800', '85h', 'Debutant', 10),
('f25', 'Gestion de Projet Agile', 'Scrum, Kanban, Jira et methodologies agiles.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800', '70h', 'Intermediaire', 10),
('f26', 'Finance pour Entrepreneurs', 'Comptabilite, gestion financiere, previsions.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', '75h', 'Debutant', 10),
('f27', 'Leadership & Management', 'Gestion d equipe, communication, leadership.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', '65h', 'Intermediaire', 10),
('f28', 'E-commerce & Dropshipping', 'Boutique en ligne, marketing et logistique.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', '70h', 'Debutant', 10),
('f29', 'Negociation & Ventes B2B', 'Techniques de vente, prospection, closing.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', '60h', 'Avance', 10),
('f30', 'Business Intelligence', 'Tableaux de bord, KPIs, Power BI, strategie data.', 'Business & Entrepreneuriat', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', '90h', 'Avance', 10);


-- ============================================
-- INSERT COURS (300 cours = 30 formations x 10)
-- ============================================

-- F1: Developpement Web Full Stack
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f1_c1', 'f1', 'Introduction au Web', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction au web. Ce module est essentiel pour votre formation.', 1, '45min'),
('f1_c2', 'f1', 'HTML5 Fondamentaux', 'Dans ce cours, vous allez approfondir vos connaissances sur html5 fondamentaux. Ce module est essentiel pour votre formation.', 2, '45min'),
('f1_c3', 'f1', 'CSS3 et Styling', 'Dans ce cours, vous allez approfondir vos connaissances sur css3 et styling. Ce module est essentiel pour votre formation.', 3, '45min'),
('f1_c4', 'f1', 'JavaScript Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur javascript basics. Ce module est essentiel pour votre formation.', 4, '45min'),
('f1_c5', 'f1', 'DOM Manipulation', 'Dans ce cours, vous allez approfondir vos connaissances sur dom manipulation. Ce module est essentiel pour votre formation.', 5, '45min'),
('f1_c6', 'f1', 'React Fundamentals', 'Dans ce cours, vous allez approfondir vos connaissances sur react fundamentals. Ce module est essentiel pour votre formation.', 6, '45min'),
('f1_c7', 'f1', 'State Management', 'Dans ce cours, vous allez approfondir vos connaissances sur state management. Ce module est essentiel pour votre formation.', 7, '45min'),
('f1_c8', 'f1', 'Node.js Backend', 'Dans ce cours, vous allez approfondir vos connaissances sur node.js backend. Ce module est essentiel pour votre formation.', 8, '45min'),
('f1_c9', 'f1', 'Base de Donnees', 'Dans ce cours, vous allez approfondir vos connaissances sur base de donnees. Ce module est essentiel pour votre formation.', 9, '45min'),
('f1_c10', 'f1', 'Deploiement Full Stack', 'Dans ce cours, vous allez approfondir vos connaissances sur deploiement full stack. Ce module est essentiel pour votre formation.', 10, '45min');

-- F2: Python pour la Data Science
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f2_c1', 'f2', 'Introduction a Python', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction a python. Ce module est essentiel pour votre formation.', 1, '45min'),
('f2_c2', 'f2', 'Variables et Types', 'Dans ce cours, vous allez approfondir vos connaissances sur variables et types. Ce module est essentiel pour votre formation.', 2, '45min'),
('f2_c3', 'f2', 'Structures de Controle', 'Dans ce cours, vous allez approfondir vos connaissances sur structures de controle. Ce module est essentiel pour votre formation.', 3, '45min'),
('f2_c4', 'f2', 'Fonctions et Modules', 'Dans ce cours, vous allez approfondir vos connaissances sur fonctions et modules. Ce module est essentiel pour votre formation.', 4, '45min'),
('f2_c5', 'f2', 'Pandas Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur pandas basics. Ce module est essentiel pour votre formation.', 5, '45min'),
('f2_c6', 'f2', 'Analyse de Donnees', 'Dans ce cours, vous allez approfondir vos connaissances sur analyse de donnees. Ce module est essentiel pour votre formation.', 6, '45min'),
('f2_c7', 'f2', 'NumPy Arrays', 'Dans ce cours, vous allez approfondir vos connaissances sur numpy arrays. Ce module est essentiel pour votre formation.', 7, '45min'),
('f2_c8', 'f2', 'Visualisation Matplotlib', 'Dans ce cours, vous allez approfondir vos connaissances sur visualisation matplotlib. Ce module est essentiel pour votre formation.', 8, '45min'),
('f2_c9', 'f2', 'Scikit-learn Intro', 'Dans ce cours, vous allez approfondir vos connaissances sur scikit-learn intro. Ce module est essentiel pour votre formation.', 9, '45min'),
('f2_c10', 'f2', 'Projet Data Science', 'Dans ce cours, vous allez approfondir vos connaissances sur projet data science. Ce module est essentiel pour votre formation.', 10, '45min');

-- F3: Developpement Mobile Flutter
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f3_c1', 'f3', 'Introduction a Flutter', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction a flutter. Ce module est essentiel pour votre formation.', 1, '45min'),
('f3_c2', 'f3', 'Dart Language', 'Dans ce cours, vous allez approfondir vos connaissances sur dart language. Ce module est essentiel pour votre formation.', 2, '45min'),
('f3_c3', 'f3', 'Widgets Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur widgets basics. Ce module est essentiel pour votre formation.', 3, '45min'),
('f3_c4', 'f3', 'State Management', 'Dans ce cours, vous allez approfondir vos connaissances sur state management. Ce module est essentiel pour votre formation.', 4, '45min'),
('f3_c5', 'f3', 'Navigation', 'Dans ce cours, vous allez approfondir vos connaissances sur navigation. Ce module est essentiel pour votre formation.', 5, '45min'),
('f3_c6', 'f3', 'API Integration', 'Dans ce cours, vous allez approfondir vos connaissances sur api integration. Ce module est essentiel pour votre formation.', 6, '45min'),
('f3_c7', 'f3', 'Base de Donnees Locale', 'Dans ce cours, vous allez approfondir vos connaissances sur base de donnees locale. Ce module est essentiel pour votre formation.', 7, '45min'),
('f3_c8', 'f3', 'Authentification', 'Dans ce cours, vous allez approfondir vos connaissances sur authentification. Ce module est essentiel pour votre formation.', 8, '45min'),
('f3_c9', 'f3', 'Animations', 'Dans ce cours, vous allez approfondir vos connaissances sur animations. Ce module est essentiel pour votre formation.', 9, '45min'),
('f3_c10', 'f3', 'Deploiement iOS/Android', 'Dans ce cours, vous allez approfondir vos connaissances sur deploiement ios/android. Ce module est essentiel pour votre formation.', 10, '45min');

-- F4: Intelligence Artificielle & ML
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f4_c1', 'f4', 'Introduction a l IA', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction a l ia. Ce module est essentiel pour votre formation.', 1, '45min'),
('f4_c2', 'f4', 'Machine Learning Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur machine learning basics. Ce module est essentiel pour votre formation.', 2, '45min'),
('f4_c3', 'f4', 'Regression Lineaire', 'Dans ce cours, vous allez approfondir vos connaissances sur regression lineaire. Ce module est essentiel pour votre formation.', 3, '45min'),
('f4_c4', 'f4', 'Classification', 'Dans ce cours, vous allez approfondir vos connaissances sur classification. Ce module est essentiel pour votre formation.', 4, '45min'),
('f4_c5', 'f4', 'Reseaux de Neurones', 'Dans ce cours, vous allez approfondir vos connaissances sur reseaux de neurones. Ce module est essentiel pour votre formation.', 5, '45min'),
('f4_c6', 'f4', 'Deep Learning', 'Dans ce cours, vous allez approfondir vos connaissances sur deep learning. Ce module est essentiel pour votre formation.', 6, '45min'),
('f4_c7', 'f4', 'CNN pour Images', 'Dans ce cours, vous allez approfondir vos connaissances sur cnn pour images. Ce module est essentiel pour votre formation.', 7, '45min'),
('f4_c8', 'f4', 'NLP et Texte', 'Dans ce cours, vous allez approfondir vos connaissances sur nlp et texte. Ce module est essentiel pour votre formation.', 8, '45min'),
('f4_c9', 'f4', 'Modeles Avances', 'Dans ce cours, vous allez approfondir vos connaissances sur modeles avances. Ce module est essentiel pour votre formation.', 9, '45min'),
('f4_c10', 'f4', 'Projet IA', 'Dans ce cours, vous allez approfondir vos connaissances sur projet ia. Ce module est essentiel pour votre formation.', 10, '45min');

-- F5: Cybersecurite & Hacking Ethique
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f5_c1', 'f5', 'Introduction Cybersecurite', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction cybersecurite. Ce module est essentiel pour votre formation.', 1, '45min'),
('f5_c2', 'f5', 'Reseaux et Protocoles', 'Dans ce cours, vous allez approfondir vos connaissances sur reseaux et protocoles. Ce module est essentiel pour votre formation.', 2, '45min'),
('f5_c3', 'f5', 'Vulnerabilites Web', 'Dans ce cours, vous allez approfondir vos connaissances sur vulnerabilites web. Ce module est essentiel pour votre formation.', 3, '45min'),
('f5_c4', 'f5', 'Tests d Intrusion', 'Dans ce cours, vous allez approfondir vos connaissances sur tests d intrusion. Ce module est essentiel pour votre formation.', 4, '45min'),
('f5_c5', 'f5', 'Cryptographie', 'Dans ce cours, vous allez approfondir vos connaissances sur cryptographie. Ce module est essentiel pour votre formation.', 5, '45min'),
('f5_c6', 'f5', 'Securite Applications', 'Dans ce cours, vous allez approfondir vos connaissances sur securite applications. Ce module est essentiel pour votre formation.', 6, '45min'),
('f5_c7', 'f5', 'Forensic', 'Dans ce cours, vous allez approfondir vos connaissances sur forensic. Ce module est essentiel pour votre formation.', 7, '45min'),
('f5_c8', 'f5', 'OSINT', 'Dans ce cours, vous allez approfondir vos connaissances sur osint. Ce module est essentiel pour votre formation.', 8, '45min'),
('f5_c9', 'f5', 'Reporting', 'Dans ce cours, vous allez approfondir vos connaissances sur reporting. Ce module est essentiel pour votre formation.', 9, '45min'),
('f5_c10', 'f5', 'Projet Securite', 'Dans ce cours, vous allez approfondir vos connaissances sur projet securite. Ce module est essentiel pour votre formation.', 10, '45min');

-- F6: Cloud Computing & AWS
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f6_c1', 'f6', 'Introduction Cloud', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction cloud. Ce module est essentiel pour votre formation.', 1, '45min'),
('f6_c2', 'f6', 'AWS Core Services', 'Dans ce cours, vous allez approfondir vos connaissances sur aws core services. Ce module est essentiel pour votre formation.', 2, '45min'),
('f6_c3', 'f6', 'EC2 et Compute', 'Dans ce cours, vous allez approfondir vos connaissances sur ec2 et compute. Ce module est essentiel pour votre formation.', 3, '45min'),
('f6_c4', 'f6', 'S3 et Stockage', 'Dans ce cours, vous allez approfondir vos connaissances sur s3 et stockage. Ce module est essentiel pour votre formation.', 4, '45min'),
('f6_c5', 'f6', 'RDS et Bases de Donnees', 'Dans ce cours, vous allez approfondir vos connaissances sur rds et bases de donnees. Ce module est essentiel pour votre formation.', 5, '45min'),
('f6_c6', 'f6', 'Serverless Lambda', 'Dans ce cours, vous allez approfondir vos connaissances sur serverless lambda. Ce module est essentiel pour votre formation.', 6, '45min'),
('f6_c7', 'f6', 'IAM Securite', 'Dans ce cours, vous allez approfondir vos connaissances sur iam securite. Ce module est essentiel pour votre formation.', 7, '45min'),
('f6_c8', 'f6', 'Auto Scaling', 'Dans ce cours, vous allez approfondir vos connaissances sur auto scaling. Ce module est essentiel pour votre formation.', 8, '45min'),
('f6_c9', 'f6', 'Monitoring CloudWatch', 'Dans ce cours, vous allez approfondir vos connaissances sur monitoring cloudwatch. Ce module est essentiel pour votre formation.', 9, '45min'),
('f6_c10', 'f6', 'Architecture Cloud', 'Dans ce cours, vous allez approfondir vos connaissances sur architecture cloud. Ce module est essentiel pour votre formation.', 10, '45min');

-- F7: Bases de Donnees SQL & NoSQL
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f7_c1', 'f7', 'Introduction aux BDD', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction aux bdd. Ce module est essentiel pour votre formation.', 1, '45min'),
('f7_c2', 'f7', 'SQL Fondamentaux', 'Dans ce cours, vous allez approfondir vos connaissances sur sql fondamentaux. Ce module est essentiel pour votre formation.', 2, '45min'),
('f7_c3', 'f7', 'Requetes Avancees', 'Dans ce cours, vous allez approfondir vos connaissances sur requetes avancees. Ce module est essentiel pour votre formation.', 3, '45min'),
('f7_c4', 'f7', 'Jointures', 'Dans ce cours, vous allez approfondir vos connaissances sur jointures. Ce module est essentiel pour votre formation.', 4, '45min'),
('f7_c5', 'f7', 'Normalisation', 'Dans ce cours, vous allez approfondir vos connaissances sur normalisation. Ce module est essentiel pour votre formation.', 5, '45min'),
('f7_c6', 'f7', 'Indexes et Performance', 'Dans ce cours, vous allez approfondir vos connaissances sur indexes et performance. Ce module est essentiel pour votre formation.', 6, '45min'),
('f7_c7', 'f7', 'MongoDB Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur mongodb basics. Ce module est essentiel pour votre formation.', 7, '45min'),
('f7_c8', 'f7', 'Redis Cache', 'Dans ce cours, vous allez approfondir vos connaissances sur redis cache. Ce module est essentiel pour votre formation.', 8, '45min'),
('f7_c9', 'f7', 'Backup et Restore', 'Dans ce cours, vous allez approfondir vos connaissances sur backup et restore. Ce module est essentiel pour votre formation.', 9, '45min'),
('f7_c10', 'f7', 'Projet Database', 'Dans ce cours, vous allez approfondir vos connaissances sur projet database. Ce module est essentiel pour votre formation.', 10, '45min');

-- F8: DevOps & CI/CD
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f8_c1', 'f8', 'Introduction DevOps', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction devops. Ce module est essentiel pour votre formation.', 1, '45min'),
('f8_c2', 'f8', 'Git Avance', 'Dans ce cours, vous allez approfondir vos connaissances sur git avance. Ce module est essentiel pour votre formation.', 2, '45min'),
('f8_c3', 'f8', 'Docker Containers', 'Dans ce cours, vous allez approfondir vos connaissances sur docker containers. Ce module est essentiel pour votre formation.', 3, '45min'),
('f8_c4', 'f8', 'Docker Compose', 'Dans ce cours, vous allez approfondir vos connaissances sur docker compose. Ce module est essentiel pour votre formation.', 4, '45min'),
('f8_c5', 'f8', 'CI/CD Pipelines', 'Dans ce cours, vous allez approfondir vos connaissances sur ci/cd pipelines. Ce module est essentiel pour votre formation.', 5, '45min'),
('f8_c6', 'f8', 'Jenkins', 'Dans ce cours, vous allez approfondir vos connaissances sur jenkins. Ce module est essentiel pour votre formation.', 6, '45min'),
('f8_c7', 'f8', 'Kubernetes Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur kubernetes basics. Ce module est essentiel pour votre formation.', 7, '45min'),
('f8_c8', 'f8', 'Orchestration', 'Dans ce cours, vous allez approfondir vos connaissances sur orchestration. Ce module est essentiel pour votre formation.', 8, '45min'),
('f8_c9', 'f8', 'Monitoring', 'Dans ce cours, vous allez approfondir vos connaissances sur monitoring. Ce module est essentiel pour votre formation.', 9, '45min'),
('f8_c10', 'f8', 'Projet DevOps', 'Dans ce cours, vous allez approfondir vos connaissances sur projet devops. Ce module est essentiel pour votre formation.', 10, '45min');

-- F9: SEO & Referencement Naturel
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f9_c1', 'f9', 'Introduction SEO', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction seo. Ce module est essentiel pour votre formation.', 1, '45min'),
('f9_c2', 'f9', 'Mots-Cles Research', 'Dans ce cours, vous allez approfondir vos connaissances sur mots-cles research. Ce module est essentiel pour votre formation.', 2, '45min'),
('f9_c3', 'f9', 'On-Page SEO', 'Dans ce cours, vous allez approfondir vos connaissances sur on-page seo. Ce module est essentiel pour votre formation.', 3, '45min'),
('f9_c4', 'f9', 'Technical SEO', 'Dans ce cours, vous allez approfondir vos connaissances sur technical seo. Ce module est essentiel pour votre formation.', 4, '45min'),
('f9_c5', 'f9', 'Link Building', 'Dans ce cours, vous allez approfondir vos connaissances sur link building. Ce module est essentiel pour votre formation.', 5, '45min'),
('f9_c6', 'f9', 'Content SEO', 'Dans ce cours, vous allez approfondir vos connaissances sur content seo. Ce module est essentiel pour votre formation.', 6, '45min'),
('f9_c7', 'f9', 'SEO Local', 'Dans ce cours, vous allez approfondir vos connaissances sur seo local. Ce module est essentiel pour votre formation.', 7, '45min'),
('f9_c8', 'f9', 'Outils SEO', 'Dans ce cours, vous allez approfondir vos connaissances sur outils seo. Ce module est essentiel pour votre formation.', 8, '45min'),
('f9_c9', 'f9', 'Analytics SEO', 'Dans ce cours, vous allez approfondir vos connaissances sur analytics seo. Ce module est essentiel pour votre formation.', 9, '45min'),
('f9_c10', 'f9', 'Audit et Strategie', 'Dans ce cours, vous allez approfondir vos connaissances sur audit et strategie. Ce module est essentiel pour votre formation.', 10, '45min');

-- F10: Facebook & Instagram Ads
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f10_c1', 'f10', 'Introduction Facebook Ads', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction facebook ads. Ce module est essentiel pour votre formation.', 1, '45min'),
('f10_c2', 'f10', 'Business Manager', 'Dans ce cours, vous allez approfondir vos connaissances sur business manager. Ce module est essentiel pour votre formation.', 2, '45min'),
('f10_c3', 'f10', 'Creation de Campagnes', 'Dans ce cours, vous allez approfondir vos connaissances sur creation de campagnes. Ce module est essentiel pour votre formation.', 3, '45min'),
('f10_c4', 'f10', 'Ciblage d Audience', 'Dans ce cours, vous allez approfondir vos connaissances sur ciblage d audience. Ce module est essentiel pour votre formation.', 4, '45min'),
('f10_c5', 'f10', 'Creatives et Copy', 'Dans ce cours, vous allez approfondir vos connaissances sur creatives et copy. Ce module est essentiel pour votre formation.', 5, '45min'),
('f10_c6', 'f10', 'Optimisation', 'Dans ce cours, vous allez approfondir vos connaissances sur optimisation. Ce module est essentiel pour votre formation.', 6, '45min'),
('f10_c7', 'f10', 'Retargeting', 'Dans ce cours, vous allez approfondir vos connaissances sur retargeting. Ce module est essentiel pour votre formation.', 7, '45min'),
('f10_c8', 'f10', 'Instagram Ads', 'Dans ce cours, vous allez approfondir vos connaissances sur instagram ads. Ce module est essentiel pour votre formation.', 8, '45min'),
('f10_c9', 'f10', 'Analytics', 'Dans ce cours, vous allez approfondir vos connaissances sur analytics. Ce module est essentiel pour votre formation.', 9, '45min'),
('f10_c10', 'f10', 'Strategie Avancee', 'Dans ce cours, vous allez approfondir vos connaissances sur strategie avancee. Ce module est essentiel pour votre formation.', 10, '45min');

-- F11: Marketing de Contenu
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f11_c1', 'f11', 'Content Marketing Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur content marketing basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f11_c2', 'f11', 'Buyer Persona', 'Dans ce cours, vous allez approfondir vos connaissances sur buyer persona. Ce module est essentiel pour votre formation.', 2, '45min'),
('f11_c3', 'f11', 'Strategie de Contenu', 'Dans ce cours, vous allez approfondir vos connaissances sur strategie de contenu. Ce module est essentiel pour votre formation.', 3, '45min'),
('f11_c4', 'f11', 'Copywriting', 'Dans ce cours, vous allez approfondir vos connaissances sur copywriting. Ce module est essentiel pour votre formation.', 4, '45min'),
('f11_c5', 'f11', 'Blogging', 'Dans ce cours, vous allez approfondir vos connaissances sur blogging. Ce module est essentiel pour votre formation.', 5, '45min'),
('f11_c6', 'f11', 'Video Content', 'Dans ce cours, vous allez approfondir vos connaissances sur video content. Ce module est essentiel pour votre formation.', 6, '45min'),
('f11_c7', 'f11', 'Content Distribution', 'Dans ce cours, vous allez approfondir vos connaissances sur content distribution. Ce module est essentiel pour votre formation.', 7, '45min'),
('f11_c8', 'f11', 'SEO Content', 'Dans ce cours, vous allez approfondir vos connaissances sur seo content. Ce module est essentiel pour votre formation.', 8, '45min'),
('f11_c9', 'f11', 'Measurement', 'Dans ce cours, vous allez approfondir vos connaissances sur measurement. Ce module est essentiel pour votre formation.', 9, '45min'),
('f11_c10', 'f11', 'Content Calendar', 'Dans ce cours, vous allez approfondir vos connaissances sur content calendar. Ce module est essentiel pour votre formation.', 10, '45min');

-- F12: Email Marketing Automation
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f12_c1', 'f12', 'Email Marketing Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur email marketing basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f12_c2', 'f12', 'List Building', 'Dans ce cours, vous allez approfondir vos connaissances sur list building. Ce module est essentiel pour votre formation.', 2, '45min'),
('f12_c3', 'f12', 'Segmentation', 'Dans ce cours, vous allez approfondir vos connaissances sur segmentation. Ce module est essentiel pour votre formation.', 3, '45min'),
('f12_c4', 'f12', 'Email Design', 'Dans ce cours, vous allez approfondir vos connaissances sur email design. Ce module est essentiel pour votre formation.', 4, '45min'),
('f12_c5', 'f12', 'Automation Flows', 'Dans ce cours, vous allez approfondir vos connaissances sur automation flows. Ce module est essentiel pour votre formation.', 5, '45min'),
('f12_c6', 'f12', 'A/B Testing', 'Dans ce cours, vous allez approfondir vos connaissances sur a/b testing. Ce module est essentiel pour votre formation.', 6, '45min'),
('f12_c7', 'f12', 'Deliverability', 'Dans ce cours, vous allez approfondir vos connaissances sur deliverability. Ce module est essentiel pour votre formation.', 7, '45min'),
('f12_c8', 'f12', 'Analytics', 'Dans ce cours, vous allez approfondir vos connaissances sur analytics. Ce module est essentiel pour votre formation.', 8, '45min'),
('f12_c9', 'f12', 'Advanced Tactics', 'Dans ce cours, vous allez approfondir vos connaissances sur advanced tactics. Ce module est essentiel pour votre formation.', 9, '45min'),
('f12_c10', 'f12', 'Email Strategy', 'Dans ce cours, vous allez approfondir vos connaissances sur email strategy. Ce module est essentiel pour votre formation.', 10, '45min');

-- F13: Google Ads & SEM
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f13_c1', 'f13', 'Introduction Google Ads', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction google ads. Ce module est essentiel pour votre formation.', 1, '45min'),
('f13_c2', 'f13', 'Account Setup', 'Dans ce cours, vous allez approfondir vos connaissances sur account setup. Ce module est essentiel pour votre formation.', 2, '45min'),
('f13_c3', 'f13', 'Search Campaigns', 'Dans ce cours, vous allez approfondir vos connaissances sur search campaigns. Ce module est essentiel pour votre formation.', 3, '45min'),
('f13_c4', 'f13', 'Display Network', 'Dans ce cours, vous allez approfondir vos connaissances sur display network. Ce module est essentiel pour votre formation.', 4, '45min'),
('f13_c5', 'f13', 'YouTube Ads', 'Dans ce cours, vous allez approfondir vos connaissances sur youtube ads. Ce module est essentiel pour votre formation.', 5, '45min'),
('f13_c6', 'f13', 'Shopping Ads', 'Dans ce cours, vous allez approfondir vos connaissances sur shopping ads. Ce module est essentiel pour votre formation.', 6, '45min'),
('f13_c7', 'f13', 'Remarketing', 'Dans ce cours, vous allez approfondir vos connaissances sur remarketing. Ce module est essentiel pour votre formation.', 7, '45min'),
('f13_c8', 'f13', 'Bidding Strategies', 'Dans ce cours, vous allez approfondir vos connaissances sur bidding strategies. Ce module est essentiel pour votre formation.', 8, '45min'),
('f13_c9', 'f13', 'Quality Score', 'Dans ce cours, vous allez approfondir vos connaissances sur quality score. Ce module est essentiel pour votre formation.', 9, '45min'),
('f13_c10', 'f13', 'Campaign Optimization', 'Dans ce cours, vous allez approfondir vos connaissances sur campaign optimization. Ce module est essentiel pour votre formation.', 10, '45min');

-- F14: Analytics & Data Marketing
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f14_c1', 'f14', 'Introduction Analytics', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction analytics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f14_c2', 'f14', 'GA4 Setup', 'Dans ce cours, vous allez approfondir vos connaissances sur ga4 setup. Ce module est essentiel pour votre formation.', 2, '45min'),
('f14_c3', 'f14', 'Events Tracking', 'Dans ce cours, vous allez approfondir vos connaissances sur events tracking. Ce module est essentiel pour votre formation.', 3, '45min'),
('f14_c4', 'f14', 'Conversions', 'Dans ce cours, vous allez approfondir vos connaissances sur conversions. Ce module est essentiel pour votre formation.', 4, '45min'),
('f14_c5', 'f14', 'Audiences', 'Dans ce cours, vous allez approfondir vos connaissances sur audiences. Ce module est essentiel pour votre formation.', 5, '45min'),
('f14_c6', 'f14', 'Reports', 'Dans ce cours, vous allez approfondir vos connaissances sur reports. Ce module est essentiel pour votre formation.', 6, '45min'),
('f14_c7', 'f14', 'GTM Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur gtm basics. Ce module est essentiel pour votre formation.', 7, '45min'),
('f14_c8', 'f14', 'Data Studio', 'Dans ce cours, vous allez approfondir vos connaissances sur data studio. Ce module est essentiel pour votre formation.', 8, '45min'),
('f14_c9', 'f14', 'Attribution', 'Dans ce cours, vous allez approfondir vos connaissances sur attribution. Ce module est essentiel pour votre formation.', 9, '45min'),
('f14_c10', 'f14', 'Data Strategy', 'Dans ce cours, vous allez approfondir vos connaissances sur data strategy. Ce module est essentiel pour votre formation.', 10, '45min');

-- F15: Community Management
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f15_c1', 'f15', 'Social Media Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur social media basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f15_c2', 'f15', 'Content Strategy', 'Dans ce cours, vous allez approfondir vos connaissances sur content strategy. Ce module est essentiel pour votre formation.', 2, '45min'),
('f15_c3', 'f15', 'Creation de Contenu', 'Dans ce cours, vous allez approfondir vos connaissances sur creation de contenu. Ce module est essentiel pour votre formation.', 3, '45min'),
('f15_c4', 'f15', 'Community Engagement', 'Dans ce cours, vous allez approfondir vos connaissances sur community engagement. Ce module est essentiel pour votre formation.', 4, '45min'),
('f15_c5', 'f15', 'Social Listening', 'Dans ce cours, vous allez approfondir vos connaissances sur social listening. Ce module est essentiel pour votre formation.', 5, '45min'),
('f15_c6', 'f15', 'Influencers', 'Dans ce cours, vous allez approfondir vos connaissances sur influencers. Ce module est essentiel pour votre formation.', 6, '45min'),
('f15_c7', 'f15', 'Crisis Management', 'Dans ce cours, vous allez approfondir vos connaissances sur crisis management. Ce module est essentiel pour votre formation.', 7, '45min'),
('f15_c8', 'f15', 'Analytics', 'Dans ce cours, vous allez approfondir vos connaissances sur analytics. Ce module est essentiel pour votre formation.', 8, '45min'),
('f15_c9', 'f15', 'Paid Social', 'Dans ce cours, vous allez approfondir vos connaissances sur paid social. Ce module est essentiel pour votre formation.', 9, '45min'),
('f15_c10', 'f15', 'Social Strategy', 'Dans ce cours, vous allez approfondir vos connaissances sur social strategy. Ce module est essentiel pour votre formation.', 10, '45min');

-- F16: Growth Hacking
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f16_c1', 'f16', 'Growth Mindset', 'Dans ce cours, vous allez approfondir vos connaissances sur growth mindset. Ce module est essentiel pour votre formation.', 1, '45min'),
('f16_c2', 'f16', 'AARRR Framework', 'Dans ce cours, vous allez approfondir vos connaissances sur aarrr framework. Ce module est essentiel pour votre formation.', 2, '45min'),
('f16_c3', 'f16', 'Acquisition Channels', 'Dans ce cours, vous allez approfondir vos connaissances sur acquisition channels. Ce module est essentiel pour votre formation.', 3, '45min'),
('f16_c4', 'f16', 'Activation Strategies', 'Dans ce cours, vous allez approfondir vos connaissances sur activation strategies. Ce module est essentiel pour votre formation.', 4, '45min'),
('f16_c5', 'f16', 'Retention Tactics', 'Dans ce cours, vous allez approfondir vos connaissances sur retention tactics. Ce module est essentiel pour votre formation.', 5, '45min'),
('f16_c6', 'f16', 'Referral Programs', 'Dans ce cours, vous allez approfondir vos connaissances sur referral programs. Ce module est essentiel pour votre formation.', 6, '45min'),
('f16_c7', 'f16', 'Revenue Optimization', 'Dans ce cours, vous allez approfondir vos connaissances sur revenue optimization. Ce module est essentiel pour votre formation.', 7, '45min'),
('f16_c8', 'f16', 'Viral Loops', 'Dans ce cours, vous allez approfondir vos connaissances sur viral loops. Ce module est essentiel pour votre formation.', 8, '45min'),
('f16_c9', 'f16', 'Experiments', 'Dans ce cours, vous allez approfondir vos connaissances sur experiments. Ce module est essentiel pour votre formation.', 9, '45min'),
('f16_c10', 'f16', 'Growth Plan', 'Dans ce cours, vous allez approfondir vos connaissances sur growth plan. Ce module est essentiel pour votre formation.', 10, '45min');

-- F17: UI/UX Design
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f17_c1', 'f17', 'Introduction UI/UX', 'Dans ce cours, vous allez approfondir vos connaissances sur introduction ui/ux. Ce module est essentiel pour votre formation.', 1, '45min'),
('f17_c2', 'f17', 'User Research', 'Dans ce cours, vous allez approfondir vos connaissances sur user research. Ce module est essentiel pour votre formation.', 2, '45min'),
('f17_c3', 'f17', 'Personas', 'Dans ce cours, vous allez approfondir vos connaissances sur personas. Ce module est essentiel pour votre formation.', 3, '45min'),
('f17_c4', 'f17', 'Information Architecture', 'Dans ce cours, vous allez approfondir vos connaissances sur information architecture. Ce module est essentiel pour votre formation.', 4, '45min'),
('f17_c5', 'f17', 'Wireframing', 'Dans ce cours, vous allez approfondir vos connaissances sur wireframing. Ce module est essentiel pour votre formation.', 5, '45min'),
('f17_c6', 'f17', 'Prototyping Figma', 'Dans ce cours, vous allez approfondir vos connaissances sur prototyping figma. Ce module est essentiel pour votre formation.', 6, '45min'),
('f17_c7', 'f17', 'Visual Design', 'Dans ce cours, vous allez approfondir vos connaissances sur visual design. Ce module est essentiel pour votre formation.', 7, '45min'),
('f17_c8', 'f17', 'Design Systems', 'Dans ce cours, vous allez approfondir vos connaissances sur design systems. Ce module est essentiel pour votre formation.', 8, '45min'),
('f17_c9', 'f17', 'Usability Testing', 'Dans ce cours, vous allez approfondir vos connaissances sur usability testing. Ce module est essentiel pour votre formation.', 9, '45min'),
('f17_c10', 'f17', 'Portfolio', 'Dans ce cours, vous allez approfondir vos connaissances sur portfolio. Ce module est essentiel pour votre formation.', 10, '45min');

-- F18: Adobe Creative Suite
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f18_c1', 'f18', 'Photoshop Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur photoshop basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f18_c2', 'f18', 'Illustrator Vector', 'Dans ce cours, vous allez approfondir vos connaissances sur illustrator vector. Ce module est essentiel pour votre formation.', 2, '45min'),
('f18_c3', 'f18', 'InDesign Layout', 'Dans ce cours, vous allez approfondir vos connaissances sur indesign layout. Ce module est essentiel pour votre formation.', 3, '45min'),
('f18_c4', 'f18', 'Color Theory', 'Dans ce cours, vous allez approfondir vos connaissances sur color theory. Ce module est essentiel pour votre formation.', 4, '45min'),
('f18_c5', 'f18', 'Typography', 'Dans ce cours, vous allez approfondir vos connaissances sur typography. Ce module est essentiel pour votre formation.', 5, '45min'),
('f18_c6', 'f18', 'Photo Editing', 'Dans ce cours, vous allez approfondir vos connaissances sur photo editing. Ce module est essentiel pour votre formation.', 6, '45min'),
('f18_c7', 'f18', 'Logo Design', 'Dans ce cours, vous allez approfondir vos connaissances sur logo design. Ce module est essentiel pour votre formation.', 7, '45min'),
('f18_c8', 'f18', 'Print Design', 'Dans ce cours, vous allez approfondir vos connaissances sur print design. Ce module est essentiel pour votre formation.', 8, '45min'),
('f18_c9', 'f18', 'Brand Identity', 'Dans ce cours, vous allez approfondir vos connaissances sur brand identity. Ce module est essentiel pour votre formation.', 9, '45min'),
('f18_c10', 'f18', 'Creative Portfolio', 'Dans ce cours, vous allez approfondir vos connaissances sur creative portfolio. Ce module est essentiel pour votre formation.', 10, '45min');

-- F19: Motion Design & Animation
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f19_c1', 'f19', 'After Effects Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur after effects basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f19_c2', 'f19', 'Animation Principles', 'Dans ce cours, vous allez approfondir vos connaissances sur animation principles. Ce module est essentiel pour votre formation.', 2, '45min'),
('f19_c3', 'f19', 'Motion Graphics', 'Dans ce cours, vous allez approfondir vos connaissances sur motion graphics. Ce module est essentiel pour votre formation.', 3, '45min'),
('f19_c4', 'f19', 'Kinetic Typography', 'Dans ce cours, vous allez approfondir vos connaissances sur kinetic typography. Ce module est essentiel pour votre formation.', 4, '45min'),
('f19_c5', 'f19', 'Character Animation', 'Dans ce cours, vous allez approfondir vos connaissances sur character animation. Ce module est essentiel pour votre formation.', 5, '45min'),
('f19_c6', 'f19', 'Expressions', 'Dans ce cours, vous allez approfondir vos connaissances sur expressions. Ce module est essentiel pour votre formation.', 6, '45min'),
('f19_c7', 'f19', '3D Layers', 'Dans ce cours, vous allez approfondir vos connaissances sur 3d layers. Ce module est essentiel pour votre formation.', 7, '45min'),
('f19_c8', 'f19', 'Compositing', 'Dans ce cours, vous allez approfondir vos connaissances sur compositing. Ce module est essentiel pour votre formation.', 8, '45min'),
('f19_c9', 'f19', 'Rendering', 'Dans ce cours, vous allez approfondir vos connaissances sur rendering. Ce module est essentiel pour votre formation.', 9, '45min'),
('f19_c10', 'f19', 'Motion Reel', 'Dans ce cours, vous allez approfondir vos connaissances sur motion reel. Ce module est essentiel pour votre formation.', 10, '45min');

-- F20: Design 3D avec Blender
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f20_c1', 'f20', 'Blender Interface', 'Dans ce cours, vous allez approfondir vos connaissances sur blender interface. Ce module est essentiel pour votre formation.', 1, '45min'),
('f20_c2', 'f20', 'Modeling Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur modeling basics. Ce module est essentiel pour votre formation.', 2, '45min'),
('f20_c3', 'f20', 'Sculpting', 'Dans ce cours, vous allez approfondir vos connaissances sur sculpting. Ce module est essentiel pour votre formation.', 3, '45min'),
('f20_c4', 'f20', 'Materials', 'Dans ce cours, vous allez approfondir vos connaissances sur materials. Ce module est essentiel pour votre formation.', 4, '45min'),
('f20_c5', 'f20', 'Lighting', 'Dans ce cours, vous allez approfondir vos connaissances sur lighting. Ce module est essentiel pour votre formation.', 5, '45min'),
('f20_c6', 'f20', 'Camera', 'Dans ce cours, vous allez approfondir vos connaissances sur camera. Ce module est essentiel pour votre formation.', 6, '45min'),
('f20_c7', 'f20', 'Animation 3D', 'Dans ce cours, vous allez approfondir vos connaissances sur animation 3d. Ce module est essentiel pour votre formation.', 7, '45min'),
('f20_c8', 'f20', 'Physics', 'Dans ce cours, vous allez approfondir vos connaissances sur physics. Ce module est essentiel pour votre formation.', 8, '45min'),
('f20_c9', 'f20', 'Rendering', 'Dans ce cours, vous allez approfondir vos connaissances sur rendering. Ce module est essentiel pour votre formation.', 9, '45min'),
('f20_c10', 'f20', '3D Project', 'Dans ce cours, vous allez approfondir vos connaissances sur 3d project. Ce module est essentiel pour votre formation.', 10, '45min');

-- F21: Photographie Professionnelle
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f21_c1', 'f21', 'Camera Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur camera basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f21_c2', 'f21', 'Composition', 'Dans ce cours, vous allez approfondir vos connaissances sur composition. Ce module est essentiel pour votre formation.', 2, '45min'),
('f21_c3', 'f21', 'Exposure Triangle', 'Dans ce cours, vous allez approfondir vos connaissances sur exposure triangle. Ce module est essentiel pour votre formation.', 3, '45min'),
('f21_c4', 'f21', 'Natural Light', 'Dans ce cours, vous allez approfondir vos connaissances sur natural light. Ce module est essentiel pour votre formation.', 4, '45min'),
('f21_c5', 'f21', 'Artificial Light', 'Dans ce cours, vous allez approfondir vos connaissances sur artificial light. Ce module est essentiel pour votre formation.', 5, '45min'),
('f21_c6', 'f21', 'Portrait Photography', 'Dans ce cours, vous allez approfondir vos connaissances sur portrait photography. Ce module est essentiel pour votre formation.', 6, '45min'),
('f21_c7', 'f21', 'Landscape', 'Dans ce cours, vous allez approfondir vos connaissances sur landscape. Ce module est essentiel pour votre formation.', 7, '45min'),
('f21_c8', 'f21', 'Editing Lightroom', 'Dans ce cours, vous allez approfondir vos connaissances sur editing lightroom. Ce module est essentiel pour votre formation.', 8, '45min'),
('f21_c9', 'f21', 'Color Grading', 'Dans ce cours, vous allez approfondir vos connaissances sur color grading. Ce module est essentiel pour votre formation.', 9, '45min'),
('f21_c10', 'f21', 'Photo Portfolio', 'Dans ce cours, vous allez approfondir vos connaissances sur photo portfolio. Ce module est essentiel pour votre formation.', 10, '45min');

-- F22: Illustration Digitale
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f22_c1', 'f22', 'Digital Drawing Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur digital drawing basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f22_c2', 'f22', 'Brushes and Tools', 'Dans ce cours, vous allez approfondir vos connaissances sur brushes and tools. Ce module est essentiel pour votre formation.', 2, '45min'),
('f22_c3', 'f22', 'Character Design', 'Dans ce cours, vous allez approfondir vos connaissances sur character design. Ce module est essentiel pour votre formation.', 3, '45min'),
('f22_c4', 'f22', 'Environment Art', 'Dans ce cours, vous allez approfondir vos connaissances sur environment art. Ce module est essentiel pour votre formation.', 4, '45min'),
('f22_c5', 'f22', 'Color and Light', 'Dans ce cours, vous allez approfondir vos connaissances sur color and light. Ce module est essentiel pour votre formation.', 5, '45min'),
('f22_c6', 'f22', 'Digital Painting', 'Dans ce cours, vous allez approfondir vos connaissances sur digital painting. Ce module est essentiel pour votre formation.', 6, '45min'),
('f22_c7', 'f22', 'Styles Exploration', 'Dans ce cours, vous allez approfondir vos connaissances sur styles exploration. Ce module est essentiel pour votre formation.', 7, '45min'),
('f22_c8', 'f22', 'Illustration Process', 'Dans ce cours, vous allez approfondir vos connaissances sur illustration process. Ce module est essentiel pour votre formation.', 8, '45min'),
('f22_c9', 'f22', 'Procreate Advanced', 'Dans ce cours, vous allez approfondir vos connaissances sur procreate advanced. Ce module est essentiel pour votre formation.', 9, '45min'),
('f22_c10', 'f22', 'Art Portfolio', 'Dans ce cours, vous allez approfondir vos connaissances sur art portfolio. Ce module est essentiel pour votre formation.', 10, '45min');

-- F23: Webdesign Responsive
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f23_c1', 'f23', 'Webdesign Principles', 'Dans ce cours, vous allez approfondir vos connaissances sur webdesign principles. Ce module est essentiel pour votre formation.', 1, '45min'),
('f23_c2', 'f23', 'Responsive Design', 'Dans ce cours, vous allez approfondir vos connaissances sur responsive design. Ce module est essentiel pour votre formation.', 2, '45min'),
('f23_c3', 'f23', 'Mobile First', 'Dans ce cours, vous allez approfondir vos connaissances sur mobile first. Ce module est essentiel pour votre formation.', 3, '45min'),
('f23_c4', 'f23', 'Grid Systems', 'Dans ce cours, vous allez approfondir vos connaissances sur grid systems. Ce module est essentiel pour votre formation.', 4, '45min'),
('f23_c5', 'f23', 'Typography Web', 'Dans ce cours, vous allez approfondir vos connaissances sur typography web. Ce module est essentiel pour votre formation.', 5, '45min'),
('f23_c6', 'f23', 'Color Web', 'Dans ce cours, vous allez approfondir vos connaissances sur color web. Ce module est essentiel pour votre formation.', 6, '45min'),
('f23_c7', 'f23', 'Figma for Web', 'Dans ce cours, vous allez approfondir vos connaissances sur figma for web. Ce module est essentiel pour votre formation.', 7, '45min'),
('f23_c8', 'f23', 'Prototyping', 'Dans ce cours, vous allez approfondir vos connaissances sur prototyping. Ce module est essentiel pour votre formation.', 8, '45min'),
('f23_c9', 'f23', 'Design Handoff', 'Dans ce cours, vous allez approfondir vos connaissances sur design handoff. Ce module est essentiel pour votre formation.', 9, '45min'),
('f23_c10', 'f23', 'Webdesign Project', 'Dans ce cours, vous allez approfondir vos connaissances sur webdesign project. Ce module est essentiel pour votre formation.', 10, '45min');

-- F24: Creation d Entreprise
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f24_c1', 'f24', 'Entrepreneur Mindset', 'Dans ce cours, vous allez approfondir vos connaissances sur entrepreneur mindset. Ce module est essentiel pour votre formation.', 1, '45min'),
('f24_c2', 'f24', 'Ideation', 'Dans ce cours, vous allez approfondir vos connaissances sur ideation. Ce module est essentiel pour votre formation.', 2, '45min'),
('f24_c3', 'f24', 'Business Model Canvas', 'Dans ce cours, vous allez approfondir vos connaissances sur business model canvas. Ce module est essentiel pour votre formation.', 3, '45min'),
('f24_c4', 'f24', 'Market Research', 'Dans ce cours, vous allez approfondir vos connaissances sur market research. Ce module est essentiel pour votre formation.', 4, '45min'),
('f24_c5', 'f24', 'Business Plan', 'Dans ce cours, vous allez approfondir vos connaissances sur business plan. Ce module est essentiel pour votre formation.', 5, '45min'),
('f24_c6', 'f24', 'Legal Structure', 'Dans ce cours, vous allez approfondir vos connaissances sur legal structure. Ce module est essentiel pour votre formation.', 6, '45min'),
('f24_c7', 'f24', 'Funding Options', 'Dans ce cours, vous allez approfondir vos connaissances sur funding options. Ce module est essentiel pour votre formation.', 7, '45min'),
('f24_c8', 'f24', 'Launch Strategy', 'Dans ce cours, vous allez approfondir vos connaissances sur launch strategy. Ce module est essentiel pour votre formation.', 8, '45min'),
('f24_c9', 'f24', 'Growth Metrics', 'Dans ce cours, vous allez approfondir vos connaissances sur growth metrics. Ce module est essentiel pour votre formation.', 9, '45min'),
('f24_c10', 'f24', 'Pitch Deck', 'Dans ce cours, vous allez approfondir vos connaissances sur pitch deck. Ce module est essentiel pour votre formation.', 10, '45min');

-- F25: Gestion de Projet Agile
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f25_c1', 'f25', 'Agile Principles', 'Dans ce cours, vous allez approfondir vos connaissances sur agile principles. Ce module est essentiel pour votre formation.', 1, '45min'),
('f25_c2', 'f25', 'Scrum Framework', 'Dans ce cours, vous allez approfondir vos connaissances sur scrum framework. Ce module est essentiel pour votre formation.', 2, '45min'),
('f25_c3', 'f25', 'Roles Scrum', 'Dans ce cours, vous allez approfondir vos connaissances sur roles scrum. Ce module est essentiel pour votre formation.', 3, '45min'),
('f25_c4', 'f25', 'Sprint Planning', 'Dans ce cours, vous allez approfondir vos connaissances sur sprint planning. Ce module est essentiel pour votre formation.', 4, '45min'),
('f25_c5', 'f25', 'Daily Standup', 'Dans ce cours, vous allez approfondir vos connaissances sur daily standup. Ce module est essentiel pour votre formation.', 5, '45min'),
('f25_c6', 'f25', 'Kanban', 'Dans ce cours, vous allez approfondir vos connaissances sur kanban. Ce module est essentiel pour votre formation.', 6, '45min'),
('f25_c7', 'f25', 'Jira Tool', 'Dans ce cours, vous allez approfondir vos connaissances sur jira tool. Ce module est essentiel pour votre formation.', 7, '45min'),
('f25_c8', 'f25', 'User Stories', 'Dans ce cours, vous allez approfondir vos connaissances sur user stories. Ce module est essentiel pour votre formation.', 8, '45min'),
('f25_c9', 'f25', 'Estimation', 'Dans ce cours, vous allez approfondir vos connaissances sur estimation. Ce module est essentiel pour votre formation.', 9, '45min'),
('f25_c10', 'f25', 'Agile Transformation', 'Dans ce cours, vous allez approfondir vos connaissances sur agile transformation. Ce module est essentiel pour votre formation.', 10, '45min');

-- F26: Finance pour Entrepreneurs
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f26_c1', 'f26', 'Finance Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur finance basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f26_c2', 'f26', 'Comptabilite', 'Dans ce cours, vous allez approfondir vos connaissances sur comptabilite. Ce module est essentiel pour votre formation.', 2, '45min'),
('f26_c3', 'f26', 'Cash Flow', 'Dans ce cours, vous allez approfondir vos connaissances sur cash flow. Ce module est essentiel pour votre formation.', 3, '45min'),
('f26_c4', 'f26', 'Budgeting', 'Dans ce cours, vous allez approfondir vos connaissances sur budgeting. Ce module est essentiel pour votre formation.', 4, '45min'),
('f26_c5', 'f26', 'Financial Statements', 'Dans ce cours, vous allez approfondir vos connaissances sur financial statements. Ce module est essentiel pour votre formation.', 5, '45min'),
('f26_c6', 'f26', 'Forecasting', 'Dans ce cours, vous allez approfondir vos connaissances sur forecasting. Ce module est essentiel pour votre formation.', 6, '45min'),
('f26_c7', 'f26', 'Investissement', 'Dans ce cours, vous allez approfondir vos connaissances sur investissement. Ce module est essentiel pour votre formation.', 7, '45min'),
('f26_c8', 'f26', 'Levee de Fonds', 'Dans ce cours, vous allez approfondir vos connaissances sur levee de fonds. Ce module est essentiel pour votre formation.', 8, '45min'),
('f26_c9', 'f26', 'Valuation', 'Dans ce cours, vous allez approfondir vos connaissances sur valuation. Ce module est essentiel pour votre formation.', 9, '45min'),
('f26_c10', 'f26', 'Financial Plan', 'Dans ce cours, vous allez approfondir vos connaissances sur financial plan. Ce module est essentiel pour votre formation.', 10, '45min');

-- F27: Leadership & Management
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f27_c1', 'f27', 'Leadership Styles', 'Dans ce cours, vous allez approfondir vos connaissances sur leadership styles. Ce module est essentiel pour votre formation.', 1, '45min'),
('f27_c2', 'f27', 'Communication', 'Dans ce cours, vous allez approfondir vos connaissances sur communication. Ce module est essentiel pour votre formation.', 2, '45min'),
('f27_c3', 'f27', 'Team Building', 'Dans ce cours, vous allez approfondir vos connaissances sur team building. Ce module est essentiel pour votre formation.', 3, '45min'),
('f27_c4', 'f27', 'Conflict Resolution', 'Dans ce cours, vous allez approfondir vos connaissances sur conflict resolution. Ce module est essentiel pour votre formation.', 4, '45min'),
('f27_c5', 'f27', 'Decision Making', 'Dans ce cours, vous allez approfondir vos connaissances sur decision making. Ce module est essentiel pour votre formation.', 5, '45min'),
('f27_c6', 'f27', 'Emotional Intelligence', 'Dans ce cours, vous allez approfondir vos connaissances sur emotional intelligence. Ce module est essentiel pour votre formation.', 6, '45min'),
('f27_c7', 'f27', 'Coaching', 'Dans ce cours, vous allez approfondir vos connaissances sur coaching. Ce module est essentiel pour votre formation.', 7, '45min'),
('f27_c8', 'f27', 'Change Management', 'Dans ce cours, vous allez approfondir vos connaissances sur change management. Ce module est essentiel pour votre formation.', 8, '45min'),
('f27_c9', 'f27', 'Strategic Thinking', 'Dans ce cours, vous allez approfondir vos connaissances sur strategic thinking. Ce module est essentiel pour votre formation.', 9, '45min'),
('f27_c10', 'f27', 'Leadership Plan', 'Dans ce cours, vous allez approfondir vos connaissances sur leadership plan. Ce module est essentiel pour votre formation.', 10, '45min');

-- F28: E-commerce & Dropshipping
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f28_c1', 'f28', 'E-commerce Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur e-commerce basics. Ce module est essentiel pour votre formation.', 1, '45min'),
('f28_c2', 'f28', 'Platform Choice', 'Dans ce cours, vous allez approfondir vos connaissances sur platform choice. Ce module est essentiel pour votre formation.', 2, '45min'),
('f28_c3', 'f28', 'Product Sourcing', 'Dans ce cours, vous allez approfondir vos connaissances sur product sourcing. Ce module est essentiel pour votre formation.', 3, '45min'),
('f28_c4', 'f28', 'Store Setup', 'Dans ce cours, vous allez approfondir vos connaissances sur store setup. Ce module est essentiel pour votre formation.', 4, '45min'),
('f28_c5', 'f28', 'Payment Processing', 'Dans ce cours, vous allez approfondir vos connaissances sur payment processing. Ce module est essentiel pour votre formation.', 5, '45min'),
('f28_c6', 'f28', 'Shipping', 'Dans ce cours, vous allez approfondir vos connaissances sur shipping. Ce module est essentiel pour votre formation.', 6, '45min'),
('f28_c7', 'f28', 'Customer Service', 'Dans ce cours, vous allez approfondir vos connaissances sur customer service. Ce module est essentiel pour votre formation.', 7, '45min'),
('f28_c8', 'f28', 'Marketing', 'Dans ce cours, vous allez approfondir vos connaissances sur marketing. Ce module est essentiel pour votre formation.', 8, '45min'),
('f28_c9', 'f28', 'Analytics', 'Dans ce cours, vous allez approfondir vos connaissances sur analytics. Ce module est essentiel pour votre formation.', 9, '45min'),
('f28_c10', 'f28', 'Scale E-commerce', 'Dans ce cours, vous allez approfondir vos connaissances sur scale e-commerce. Ce module est essentiel pour votre formation.', 10, '45min');

-- F29: Negociation & Ventes B2B
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f29_c1', 'f29', 'Sales Fundamentals', 'Dans ce cours, vous allez approfondir vos connaissances sur sales fundamentals. Ce module est essentiel pour votre formation.', 1, '45min'),
('f29_c2', 'f29', 'Prospecting', 'Dans ce cours, vous allez approfondir vos connaissances sur prospecting. Ce module est essentiel pour votre formation.', 2, '45min'),
('f29_c3', 'f29', 'Qualification', 'Dans ce cours, vous allez approfondir vos connaissances sur qualification. Ce module est essentiel pour votre formation.', 3, '45min'),
('f29_c4', 'f29', 'Presentation', 'Dans ce cours, vous allez approfondir vos connaissances sur presentation. Ce module est essentiel pour votre formation.', 4, '45min'),
('f29_c5', 'f29', 'Objection Handling', 'Dans ce cours, vous allez approfondir vos connaissances sur objection handling. Ce module est essentiel pour votre formation.', 5, '45min'),
('f29_c6', 'f29', 'Closing Techniques', 'Dans ce cours, vous allez approfondir vos connaissances sur closing techniques. Ce module est essentiel pour votre formation.', 6, '45min'),
('f29_c7', 'f29', 'Account Management', 'Dans ce cours, vous allez approfondir vos connaissances sur account management. Ce module est essentiel pour votre formation.', 7, '45min'),
('f29_c8', 'f29', 'CRM', 'Dans ce cours, vous allez approfondir vos connaissances sur crm. Ce module est essentiel pour votre formation.', 8, '45min'),
('f29_c9', 'f29', 'Sales Metrics', 'Dans ce cours, vous allez approfondir vos connaissances sur sales metrics. Ce module est essentiel pour votre formation.', 9, '45min'),
('f29_c10', 'f29', 'Sales Strategy', 'Dans ce cours, vous allez approfondir vos connaissances sur sales strategy. Ce module est essentiel pour votre formation.', 10, '45min');

-- F30: Business Intelligence
INSERT INTO cours (id, formation_id, titre, description, ordre, duree) VALUES
('f30_c1', 'f30', 'BI Fundamentals', 'Dans ce cours, vous allez approfondir vos connaissances sur bi fundamentals. Ce module est essentiel pour votre formation.', 1, '45min'),
('f30_c2', 'f30', 'Data Warehousing', 'Dans ce cours, vous allez approfondir vos connaissances sur data warehousing. Ce module est essentiel pour votre formation.', 2, '45min'),
('f30_c3', 'f30', 'ETL Process', 'Dans ce cours, vous allez approfondir vos connaissances sur etl process. Ce module est essentiel pour votre formation.', 3, '45min'),
('f30_c4', 'f30', 'Power BI Basics', 'Dans ce cours, vous allez approfondir vos connaissances sur power bi basics. Ce module est essentiel pour votre formation.', 4, '45min'),
('f30_c5', 'f30', 'DAX Formulas', 'Dans ce cours, vous allez approfondir vos connaissances sur dax formulas. Ce module est essentiel pour votre formation.', 5, '45min'),
('f30_c6', 'f30', 'Dashboards', 'Dans ce cours, vous allez approfondir vos connaissances sur dashboards. Ce module est essentiel pour votre formation.', 6, '45min'),
('f30_c7', 'f30', 'KPI Design', 'Dans ce cours, vous allez approfondir vos connaissances sur kpi design. Ce module est essentiel pour votre formation.', 7, '45min'),
('f30_c8', 'f30', 'Data Governance', 'Dans ce cours, vous allez approfondir vos connaissances sur data governance. Ce module est essentiel pour votre formation.', 8, '45min'),
('f30_c9', 'f30', 'Predictive Analytics', 'Dans ce cours, vous allez approfondir vos connaissances sur predictive analytics. Ce module est essentiel pour votre formation.', 9, '45min'),
('f30_c10', 'f30', 'BI Project', 'Dans ce cours, vous allez approfondir vos connaissances sur bi project. Ce module est essentiel pour votre formation.', 10, '45min');


-- ============================================
-- VERIFICATION
-- ============================================
SELECT 'Formations' as table_name, COUNT(*) as count FROM formations
UNION ALL
SELECT 'Cours', COUNT(*) FROM cours;
