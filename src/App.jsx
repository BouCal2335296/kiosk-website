import { useState } from "react";
import "./App.css";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  const [selectedProject, setSelectedProject] = useState(0);

  // Données des projets R&D
  const projects = [
    {
      id: 1,
      title: "Nats.io Monitoring System",
      subtitle: "Système de monitoring en temps réel",
      description:
        "Un système intelligent qui surveille et analyse les flux de travail en temps réel. Imaginez un tableau de bord qui vous montre instantanément ce qui se passe dans vos systèmes : combien de personnes sont connectées, quels messages circulent, et comment tout fonctionne ensemble.",
      technologies: [
        "NATS.io",
        "Prometheus",
        "Grafana",
        "Docker",
        "Python",
        "JavaScript",
      ],
      videoUrl: "/videos/demo-nats.mp4", // Chemin corrigé pour la vidéo
      videoPoster: null,
      keyPoints: [
        {
          icon: "📊",
          title: "Visualisation en temps réel",
          description:
            "Des graphiques interactifs qui montrent l'activité de vos systèmes en direct, comme un moniteur cardiaque pour vos applications.",
        },
        {
          icon: "⚡",
          title: "Messagerie ultra-rapide",
          description:
            "Un système de communication lightning-fast entre vos applications, capable de gérer des milliers de messages par seconde.",
        },
        {
          icon: "🐳",
          title: "Déploiement simplifié",
          description:
            "Tout fonctionne dans des conteneurs Docker, ce qui rend l'installation et la maintenance beaucoup plus simples.",
        },
        {
          icon: "🔍",
          title: "Monitoring intelligent",
          description:
            "Collecte automatique de métriques importantes : connexions, abonnés, messages échangés, performance du système.",
        },
      ],
      benefits: [
        "Détection rapide des problèmes avant qu'ils n'impactent les utilisateurs",
        "Compréhension claire de l'utilisation des systèmes en temps réel",
        "Tableaux de bord personnalisables pour chaque besoin",
        "Architecture moderne et scalable pour supporter la croissance",
        "Réduction du temps de diagnostic grâce à la visualisation instantanée",
      ],
      additionalInfo:
        "Ce projet a été développé pour améliorer notre capacité à surveiller et maintenir nos systèmes en production. Il combine des technologies de pointe pour offrir une solution complète de monitoring, de la collecte de données à la visualisation, en passant par l'analyse en temps réel.",
    },
    {
      id: 2,
      title: "Dashboard Accelerator",
      subtitle: "Pré-génération automatique de graphiques",
      description:
        "Un système qui pré-génère automatiquement les graphiques pour éliminer les temps de chargement. Imaginez que vos graphiques soient déjà prêts avant même que l'utilisateur ne clique : au lieu d'attendre qu'Apache Superset crée les graphiques à chaque visite (ce qui peut prendre plusieurs secondes), Airflow les génère à l'avance chaque nuit. C'est comme préparer des plats à l'avance au lieu de cuisiner à la commande !",
      technologies: [
        "Apache Airflow",
        "Apache Superset",
        "Jupyter Notebook",
        "Python",
        "Docker",
        "Pandas",
        "Numpy",
      ],
      videoUrl: "/videos/demo-airflow.mp4",
      videoPoster: null,
      keyPoints: [
        {
          icon: "⚡",
          title: "Performance optimale",
          description:
            "Les graphiques sont pré-générés et stockés, donc affichage instantané sur le site web. Fini les temps de chargement interminables !",
        },
        {
          icon: "🔄",
          title: "Pipeline automatisé",
          description:
            "Apache Airflow extrait automatiquement les graphiques depuis Superset selon un calendrier : chaque jour à minuit, chaque semaine, chaque mois... vous décidez !",
        },
        {
          icon: "🔬",
          title: "Analyse avancée",
          description:
            "Jupyter Notebook permet aux développeurs de faire des analyses de données poussées avec Pandas et Numpy avant de créer les graphiques finaux.",
        },
        {
          icon: "💾",
          title: "Export intelligent",
          description:
            "Les graphiques générés sont exportés dans un format optimisé, prêts à être intégrés directement dans le projet web sans calcul supplémentaire.",
        },
      ],
      benefits: [
        "Affichage instantané des graphiques pour les utilisateurs",
        "Réduction drastique de la charge sur Apache Superset",
        "Actualisation programmée selon vos besoins (quotidien, hebdomadaire, mensuel)",
        "Environnement d'analyse pour les développeurs avec Jupyter",
        "Pas de requêtes en temps réel qui ralentissent l'expérience utilisateur",
        "Architecture scalable qui supporte de nombreux utilisateurs simultanés",
      ],
      additionalInfo:
        "Ce projet résout un problème crucial de performance web : au lieu que chaque visite d'utilisateur déclenche une requête vers Superset (qui doit interroger la base de données, calculer et générer le graphique), Airflow pré-génère tous les graphiques pendant les heures creuses. Le résultat ? Une expérience utilisateur ultra-rapide et fluide. Jupyter Notebook sert d'atelier pour les développeurs qui peuvent expérimenter et créer de nouvelles analyses avec Pandas et Numpy avant de les automatiser.",
    },
    {
      id: 3,
      title: "AI Database Assistant",
      subtitle: "Interrogez votre base de données en langage naturel",
      description:
        "Un assistant intelligent qui comprend vos questions et cherche les réponses dans la base de données. Imaginez pouvoir demander 'Combien de patients ont été admis ce mois-ci ?' et obtenir la réponse instantanément, sans connaître SQL ou la structure de la base. C'est comme avoir un expert bases de données disponible 24/7 qui comprend le langage humain !",
      technologies: [
        "N8N",
        "AI Agent",
        "LLM",
        "Oracle Database",
        "SQL",
        "Webhook",
        "JavaScript",
      ],
      videoUrl: "videos/demo-agentAI.mp4",
      videoPoster: null,
      keyPoints: [
        {
          icon: "💬",
          title: "Interface conversationnelle",
          description:
            "Une fenêtre de chat simple sur le site web. Posez votre question en français, comme si vous parliez à un collègue.",
        },
        {
          icon: "🤖",
          title: "Intelligence artificielle",
          description:
            "L'agent AI analyse votre question, comprend ce que vous cherchez, et génère automatiquement la requête SQL appropriée grâce au LLM.",
        },
        {
          icon: "🔌",
          title: "Connexion Oracle custom",
          description:
            "Customisation de N8N avec un noeud spécial pour se connecter à la base de données Oracle et exécuter les requêtes générées.",
        },
        {
          icon: "✨",
          title: "Réponses formatées",
          description:
            "Un second agent AI transforme les résultats bruts de la base en réponses claires et compréhensibles. Si la requête échoue, un message explicatif est renvoyé.",
        },
      ],
      benefits: [
        "Pas besoin de connaître SQL pour interroger la base de données",
        "Gain de temps considérable : questions répondues en secondes",
        "Accessible aux non-techniques : médecins, gestionnaires, analystes",
        "L'agent connaît déjà toute la structure de la base (colonnes, descriptions)",
        "Workflow automatisé via N8N garantit la fiabilité",
        "Gestion intelligente des erreurs avec messages clairs",
      ],
      additionalInfo:
        "Ce projet révolutionne l'accès aux données : au lieu que seuls les techniciens puissent extraire des informations de la base Oracle, n'importe qui peut maintenant poser une question en langage naturel. Le workflow N8N orchestre tout le processus : réception via webhook, analyse par l'agent AI qui génère le SQL, exécution sur Oracle, puis formatage de la réponse. L'agent possède déjà une connaissance complète de la base de données (noms et descriptions des colonnes), ce qui lui permet de créer des requêtes précises et pertinentes.",
    },
    {
      id: 4,
      title: "Meeting AI Docs",
      subtitle: "Comptes-rendus automatiques de réunions",
      description:
        "Un assistant qui transforme vos enregistrements audio en comptes-rendus professionnels. Imaginez : vous posez un micro sur la table pendant votre réunion client, et à la fin, vous récupérez automatiquement un document Word avec une synthèse complète et détaillée. Plus besoin de prendre des notes manuellement ou de réécouter l'enregistrement pendant des heures !",
      technologies: [
        "N8N",
        "Whisper AI",
        "AI Agent",
        "LLM",
        "docx-service",
        "HTTP Request",
        "Python",
      ],
      videoUrl: "videos/demo-meetingAIDocs.mp4",
      videoPoster: null,
      keyPoints: [
        {
          icon: "🎤",
          title: "Enregistrement simple",
          description:
            "Posez votre micro, enregistrez la réunion (MP3, MP4, etc.), et c'est tout. Le reste est automatique.",
        },
        {
          icon: "📝",
          title: "Transcription automatique",
          description:
            "Whisper AI transforme l'audio en texte écrit avec une précision remarquable, capturant chaque détail de la conversation.",
        },
        {
          icon: "🧠",
          title: "Analyse intelligente",
          description:
            "Un agent AI analyse la transcription, identifie les points clés, décisions prises, actions à mener, et structure le tout de manière cohérente.",
        },
        {
          icon: "📄",
          title: "Document professionnel",
          description:
            "docx-service génère automatiquement un document Word formaté, prêt à être partagé avec vos collègues ou clients.",
        },
      ],
      benefits: [
        "Fini la prise de notes pendant les réunions : concentrez-vous sur l'échange",
        "Gain de temps massif : plus besoin de réécouter et rédiger manuellement",
        "Comptes-rendus complets sans oublier de détails importants",
        "Documents professionnels générés automatiquement",
        "Traçabilité parfaite de ce qui a été dit et décidé",
        "Partage facile avec les participants après la réunion",
      ],
      additionalInfo:
        "Ce projet automatise complètement le processus fastidieux de création de comptes-rendus. Le workflow N8N orchestre toute la chaîne : réception de l'enregistrement audio, envoi à Whisper pour la transcription, analyse par l'agent AI qui structure et synthétise les informations importantes, puis génération du document Word final via docx-service. Le résultat est un compte-rendu professionnel, complet et prêt à l'emploi, sans intervention manuelle.",
    },
    {
      id: 5,
      title: "Quality Assurance Suite",
      subtitle: "Tests automatisés avec Cypress",
      description:
        "Un système qui vérifie automatiquement que tous les projets fonctionnent correctement. Imaginez un inspecteur infatigable qui teste chaque fonctionnalité de vos applications 24/7 : il clique sur les boutons, remplit les formulaires, vérifie que les pages se chargent correctement, et s'assure que tout fonctionne comme prévu. Si quelque chose ne va pas, il vous le dit immédiatement !",
      technologies: [
        "Cypress",
        "JavaScript",
        "E2E Testing",
        "API Testing",
        "Node.js",
        "CI/CD",
      ],
      videoUrl: "videos/demo-cypress.mp4",
      videoPoster: null,
      keyPoints: [
        {
          icon: "🔄",
          title: "Tests End-to-End (E2E)",
          description:
            "Simule un utilisateur réel qui navigue dans l'application : clics, saisies, navigation entre pages. Vérifie que tout le parcours utilisateur fonctionne.",
        },
        {
          icon: "🔌",
          title: "Tests d'endpoints API",
          description:
            "Vérifie que tous les points de connexion de vos applications répondent correctement, avec les bonnes données et sans erreurs.",
        },
        {
          icon: "🤖",
          title: "Automatisation complète",
          description:
            "Les tests s'exécutent automatiquement sans intervention humaine. Lancez-les à chaque modification de code pour garantir que rien n'est cassé.",
        },
        {
          icon: "📊",
          title: "Rapports détaillés",
          description:
            "Cypress génère des rapports visuels avec captures d'écran et vidéos des tests. Vous voyez exactement ce qui fonctionne et ce qui ne fonctionne pas.",
        },
      ],
      benefits: [
        "Détection immédiate des bugs avant qu'ils n'atteignent la production",
        "Gain de temps : plus besoin de tester manuellement après chaque modification",
        "Couverture complète : tests unitaires et tests d'intégration",
        "Confiance accrue lors des déploiements",
        "Documentation vivante : les tests montrent comment l'application doit fonctionner",
        "Qualité constante sur tous les projets de l'équipe",
      ],
      additionalInfo:
        "Ce projet établit une culture de qualité à travers tous les projets R&D. Cypress teste automatiquement chaque fonctionnalité : de l'interface utilisateur (tests E2E) aux connexions backend (tests d'endpoints API). Chaque projet JavaScript bénéficie de cette couverture de tests, garantissant que les nouvelles fonctionnalités n'introduisent pas de régressions. C'est comme avoir un filet de sécurité qui attrape les problèmes avant qu'ils ne deviennent critiques.",
    },
    {
      id: 6,
      title: "Claude Kali Security",
      subtitle: "Pentesting automatisé par IA",
      description:
        "Un expert en cybersécurité virtuel qui teste la sécurité de vos systèmes. Imaginez : au lieu d'avoir besoin d'années d'expertise en cybersécurité, vous demandez simplement à Claude Code de trouver les failles de sécurité. Il utilise Kali Linux (la distribution spécialisée pour le pentesting) et génère automatiquement un rapport professionnel détaillé. C'est comme avoir un hacker éthique à votre service !",
      technologies: [
        "Claude Code",
        "Kali Linux",
        "WSL",
        "OpenSSH",
        "Pandoc",
        "Pentesting Tools",
        "Python",
      ],
      videoUrl: null,
      videoPoster: null,
      keyPoints: [
        {
          icon: "🐧",
          title: "Kali Linux sur WSL",
          description:
            "Machine Kali Linux complète installée sur Windows via WSL, avec tous les outils de pentesting professionnels préinstallés et configurés.",
        },
        {
          icon: "🔐",
          title: "Connection SSH sécurisée",
          description:
            "OpenSSH Server configuré et optimisé pour permettre à Claude Code de se connecter et d'exécuter des tests de sécurité de manière puissante.",
        },
        {
          icon: "🤖",
          title: "Pentesting par IA",
          description:
            "Claude Code analyse les systèmes, identifie les failles potentielles, exécute les tests appropriés et interprète les résultats. Pas besoin d'expertise en cybersécurité !",
        },
        {
          icon: "📄",
          title: "Rapports professionnels",
          description:
            "Génération automatique de documents Word ultra-détaillés via Pandoc, avec toutes les vulnérabilités trouvées, leur criticité et les recommandations de correction.",
        },
      ],
      benefits: [
        "Accessible sans expertise en cybersécurité - l'IA fait le travail complexe",
        "Démocratisation du pentesting pour toutes les équipes",
        "Tests de sécurité réguliers sans embaucher un expert",
        "Rapports détaillés et professionnels générés automatiquement",
        "Détection proactive des vulnérabilités avant les attaquants",
        "Gain de temps massif : tests qui prendraient des jours faits en heures",
      ],
      additionalInfo:
        "Ce projet révolutionne l'approche de la sécurité en rendant le pentesting accessible à tous. L'installation de Kali Linux via WSL sur Windows offre un environnement de test complet. Claude Code se connecte en SSH à cette machine et utilise son intelligence pour orchestrer les tests de pénétration : scan de ports, détection de vulnérabilités, tests d'injection, etc. Le plus impressionnant ? Tout est automatisé et documenté dans un rapport Word généré par Pandoc, avec un script personnalisé. Plus besoin d'être un expert en cybersécurité pour sécuriser ses systèmes !",
    },
    {
      id: 11,
      title: "Project Launcher",
      subtitle: "Gestionnaire de projets GitHub avec interface WPF",
      description:
        "Une application de bureau WPF qui révolutionne la gestion de projets GitHub. Imaginez pouvoir cloner tous les projets de votre organisation, gérer les branches, créer des commits, et ouvrir vos projets dans votre IDE favori, le tout depuis une seule interface élégante. Plus besoin de jongler entre plusieurs terminaux et fenêtres GitHub : tout est centralisé et simplifié !",
      technologies: [
        "WPF (.NET)",
        "C#",
        "Octokit",
        "GitHub API",
        "Git",
        "XAML",
        "Visual Studio",
      ],
      videoUrl: null,
      videoPoster: null,
      keyPoints: [
        {
          icon: "🖥️",
          title: "Interface WPF moderne",
          description:
            "Application de bureau avec une interface graphique intuitive développée en WPF. Onglets Available/Installed pour organiser vos projets, notifications en temps réel, et contrôles Git intégrés.",
        },
        {
          icon: "🔌",
          title: "Intégration GitHub via Octokit",
          description:
            "Communication directe avec l'API GitHub grâce à Octokit. Récupération automatique de tous les repos publics et privés d'une organisation, sans construire manuellement les requêtes HTTP.",
        },
        {
          icon: "⚙️",
          title: "Gestion Git complète",
          description:
            "Clonage, pull, checkout de branches, détection des fichiers modifiés, création de commits avec titre et description, push automatique. Détecte même les merges en cours pour éviter les conflits !",
        },
        {
          icon: "🚀",
          title: "Lancement IDE intelligent",
          description:
            "Ouvrez vos projets directement dans Visual Studio Code ou Visual Studio depuis l'application. Installation automatique des dépendances avant le lancement pour un workflow fluide.",
        },
      ],
      benefits: [
        "Centralisation : tous vos projets GitHub accessibles depuis une seule fenêtre",
        "Gain de temps massif : clonage et configuration automatisés",
        "Interface visuelle : plus besoin de mémoriser les commandes Git en terminal",
        "Gestion sécurisée : authentification par token GitHub dans appsettings.json",
        "Workflow optimisé : installation des dépendances et ouverture IDE en un clic",
        "Notifications claires : chaque action et problème est affiché à l'utilisateur",
      ],
      additionalInfo:
        "Ce projet simplifie radicalement le workflow de développement en équipe. L'architecture repose sur deux services principaux : ServiceGitHub (communication avec l'API via Octokit) et ServiceGit (exécution de commandes Git locales via Process C#). L'interface WPF offre trois composants clés : MainWindow (gestion des projets et détails), CommitDialog (création de commits avec liste des fichiers modifiés), et IDESelectionDialog (choix de l'IDE et installation des dépendances). Octokit élimine la complexité des appels HTTP manuels : au lieu de configurer HttpClient, construire les URLs, gérer la désérialisation JSON et la pagination, tout se fait en une ligne de code. Le résultat ? Une application professionnelle qui transforme la gestion de multiples projets GitHub en une expérience fluide et intuitive.",
    },
    {
      id: 12,
      title: "Chart.js Data",
      subtitle: "Graphiques interactifs pour applications web",
      description:
        "Une solution de visualisation de données moderne et interactive pour le web. Imaginez transformer vos données brutes en magnifiques graphiques animés et responsives : barres, lignes, camemberts, radars... Chart.js rend la visualisation de données accessible et personnalisable à l'infini. Créez des dashboards professionnels qui s'adaptent automatiquement à tous les écrans, du mobile au desktop !",
      technologies: [
        "Chart.js",
        "JavaScript",
        "React",
        "Next.js",
        "HTML5 Canvas",
        "NPM",
      ],
      videoUrl: null,
      videoPoster: null,
      keyPoints: [
        {
          icon: "📊",
          title: "Bibliothèque modulaire et légère",
          description:
            "Chart.js est open-source, gratuite et utilise un système modulaire. Importez uniquement les composants nécessaires (CategoryScale, LinearScale, BarElement, etc.) pour garder votre application performante et légère.",
        },
        {
          icon: "🎨",
          title: "Personnalisation totale",
          description:
            "Contrôle complet sur tous les aspects visuels : couleurs, types de graphiques (Bar, Line, Pie, Doughnut, Radar), titres, légendes, tooltips. Créez l'identité visuelle parfaite pour vos données.",
        },
        {
          icon: "📱",
          title: "Responsive par défaut",
          description:
            "Les graphiques s'adaptent automatiquement à toutes les tailles d'écrans. Un seul code fonctionne parfaitement sur mobile, tablette et desktop sans configuration supplémentaire.",
        },
        {
          icon: "⚡",
          title: "Intégration React simplifiée",
          description:
            "Installation facile via NPM, imports modulaires propres, et intégration native dans les composants React/Next.js. Utilisez des composants comme <Bar />, <Line />, <Pie /> directement dans votre JSX.",
        },
      ],
      benefits: [
        "Simplicité d'intégration : npm install chart.js et c'est prêt",
        "Performance optimale : ne charge que les modules utilisés",
        "Documentation exhaustive : exemples et guides facilement accessibles",
        "Compatibilité universelle : fonctionne avec tous les frameworks modernes",
        "Interactivité native : tooltips, animations, et légendes intégrées",
        "Écosystème actif : communauté large et mises à jour régulières",
      ],
      additionalInfo:
        "Chart.js transforme la complexité de la visualisation de données en quelques lignes de code élégantes. L'architecture modulaire signifie que vous importez Chart as ChartJS (le moteur principal), puis uniquement les scales (CategoryScale pour les catégories, LinearScale pour les valeurs numériques), les éléments (BarElement, ArcElement), et les features (Title, Tooltip, Legend). Après l'enregistrement avec ChartJS.register(), vous créez vos graphiques en définissant un objet de configuration simple avec labels (catégories sur l'axe X), datasets (vos données avec leurs styles), et options. Le résultat ? Des visualisations professionnelles, animées, interactives et responsives qui rivalisent avec des solutions payantes complexes. Parfait pour créer des dashboards, rapports analytiques, ou présenter des statistiques de manière visuellement impactante.",
    },
    {
      id: 13,
      title: "Umami Analytics",
      subtitle: "Solution d'analytics open-source et respectueuse de la vie privée",
      description:
        "Un système d'analytics moderne qui suit vos visiteurs sans compromettre leur vie privée. Imaginez Google Analytics, mais open-source, auto-hébergé, et sans collecter aucune donnée personnelle. Umami vous montre quelles pages sont les plus populaires, combien de visiteurs vous avez, et toutes les statistiques importantes en temps réel, tout en respectant la confidentialité de vos utilisateurs !",
      technologies: [
        "Umami",
        "Docker",
        "PostgreSQL",
        "Next.js",
        "JavaScript",
        "API REST",
        "React",
      ],
      videoUrl: null,
      videoPoster: null,
      keyPoints: [
        {
          icon: "🔒",
          title: "Respect de la vie privée",
          description:
            "Aucune donnée personnelle collectée, 100% conforme au RGPD. Open-source et auto-hébergeable sur vos propres serveurs Docker. Vous contrôlez entièrement vos données analytics.",
        },
        {
          icon: "🐳",
          title: "Déploiement Docker simplifié",
          description:
            "Stack complète avec docker-compose : serveur Umami + PostgreSQL. Configuration via variables d'environnement (DATABASE_URL, APP_SECRET, TRACKER_SCRIPT_NAME). Démarrage en une commande : docker compose up -d.",
        },
        {
          icon: "📡",
          title: "Intégration Next.js transparente",
          description:
            "Script de tracking intégré via Next.js Script component. Endpoints API personnalisés (/api/popular, /api/stats) qui interrogent l'API Umami côté serveur avec authentification sécurisée par token Bearer.",
        },
        {
          icon: "📊",
          title: "Composants React réactifs",
          description:
            "Composants UI personnalisés (MostViewed) avec rafraîchissement automatique. Filtrage intelligent par préfixe ou URL exacte. Affichage temps réel des pages les plus consultées et statistiques sur 30 jours.",
        },
      ],
      benefits: [
        "Aucun tracking invasif : respect total de la vie privée des utilisateurs",
        "Auto-hébergement : vos données restent chez vous, jamais chez un tiers",
        "Léger et performant : ne ralentit pas votre site web",
        "API flexible : créez vos propres dashboards et visualisations personnalisées",
        "Gratuit et open-source : aucun coût de licence ou frais mensuels",
        "Sécurité renforcée : token d'API protégé côté serveur uniquement",
      ],
      additionalInfo:
        "Ce projet offre une alternative éthique et professionnelle à Google Analytics. L'architecture repose sur un serveur Umami dockerisé connecté à PostgreSQL, exposé sur le port 3003. Le site Next.js intègre le script de tracking personnalisé (ex: cinewiki.js) qui envoie automatiquement les page views. Deux endpoints API Next.js (/api/popular et /api/stats) interrogent l'API Umami côté serveur avec un token Bearer sécurisé, jamais exposé au client. L'endpoint /api/popular supporte le filtrage par préfixe (ex: /article pour trouver l'article le plus vu) ou URL exacte, avec une limite configurable. Le composant React MostViewed affiche dynamiquement la page la plus consultée avec rafraîchissement automatique toutes les 60 secondes. Configuration via .env avec NEXT_PUBLIC_UMAMI_URL, NEXT_PUBLIC_UMAMI_SCRIPT, NEXT_PUBLIC_UMAMI_WEBSITE_ID (public) et UMAMI_TOKEN (privé serveur uniquement). Bonnes pratiques : jamais exposer le token, éviter les refresh trop fréquents, utiliser des noms de sites clairs, sécuriser l'accès admin Umami. Cas d'usage avancés : page Statistiques pour admins, tracking d'événements custom (clics boutons), comparaisons temporelles mois par mois.",
    },
  ];

  return (
    <div className="kiosk-container">
      {/* Ruban à gauche avec la liste des projets */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/R&D-logo-rmbg.png" alt="R&D Logo" className="logo" />
        </div>
        <nav className="project-list">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-item ${
                selectedProject === index ? "active" : ""
              }`}
              onClick={() => setSelectedProject(index)}
            >
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-name">{project.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Zone d'affichage principale */}
      <main className="main-content">
        <div className="project-display">
          <ProjectDisplay project={projects[selectedProject]} />
        </div>
      </main>
    </div>
  );
}

export default App;
