export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  category: 'fullstack' | 'frontend' | 'javascript';
  stack: string[];
  gradient: string;
  accentColor: string;
  featured: boolean;
  repoUrl: string;
  demoUrl?: string;
  interactiveDemoId?: 'medcare' | 'ecommerce' | 'portfolio' | 'todolist' | 'calculator' | 'rockpaper';
  features: string[];
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "medcare",
    title: "MedCare / Health-Plus",
    subtitle: "Plateforme de gestion de santé & rendez-vous médicaux",
    description:
      "Plateforme web moderne conçue pour faciliter le suivi des patients, la réservation de créneaux médicaux et la gestion centralisée des dossiers de santé.",
    detailedDescription:
      "MedCare (Health-Plus) est une solution médicale full stack complète intégrant un système d'authentification multi-rôles (médecins, patients, secrétariat), la gestion en temps réel du planning des consultations, l'historique des prescriptions et un tableau de bord analytique des consultations.",
    category: "fullstack",
    stack: ["Laravel", "React.js", "MySQL", "Bootstrap 5", "REST API"],
    gradient: "linear-gradient(135deg, #1d4ed8, #7c3aed 70%)",
    accentColor: "#3b82f6",
    featured: true,
    repoUrl: "https://github.com/karimbettane1",
    demoUrl: "https://karimbettane1.github.io/k.bettane/",
    interactiveDemoId: "medcare",
    features: [
      "Prise de rendez-vous en ligne avec choix des spécialités et créneaux",
      "Espace patient sécurisé et historique médical",
      "Tableau de bord praticien avec planning journalier et rappels",
      "API RESTful avec validation des requêtes et tokens sécurisés",
      "Interface responsive adaptée aux smartphones et tablettes",
    ],
    highlights: ["Architecture MVC", "Base MySQL relationnelle", "Sécurité des données"],
  },
  {
    id: "ecommerce",
    title: "Site E-Commerce",
    subtitle: "Boutique en ligne moderne & expérience d'achat fluide",
    description:
      "Boutique en ligne moderne avec catalogue de produits dynamique, panier d'achat interactif, authentification utilisateur et tunnel de commande.",
    detailedDescription:
      "Application e-commerce full stack avec gestion des catégories, filtres de prix, panier persistant, gestion des stocks et simulation de paiement sécurisé. Conçue avec une séparation claire entre frontend React et backend Laravel / MySQL.",
    category: "fullstack",
    stack: ["React.js", "Laravel", "MySQL", "Bootstrap 5", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #ea580c, #f59e0b 74%)",
    accentColor: "#f97316",
    featured: true,
    repoUrl: "https://github.com/karimbettane1/ecom",
    demoUrl: "https://github.com/karimbettane1/ecom",
    interactiveDemoId: "ecommerce",
    features: [
      "Catalogue produits dynamique avec recherche instantanée",
      "Panier d'achats avec calcul automatique des totaux et taxes",
      "Système d'authentification utilisateur et historique de commandes",
      "Panel d'administration pour gestion des articles et catégories",
      "Design soigné optimisé pour la conversion sur mobile",
    ],
    highlights: ["Persistance du panier", "Backend API Laravel", "CRUD Produits"],
  },
  {
    id: "portfolio",
    title: "Portfolio Personnel",
    subtitle: "Vitrine professionnelle & identité visuelle digitale",
    description:
      "Site web personnel haute performance présentant mes compétences, projets, parcours académique et coordonnées avec une expérience visuelle soignée.",
    detailedDescription:
      "Ce portfolio reflète mon savoir-faire technique : architecture de composants React réutilisables, animations fluides au défilement, gestion responsive stricte, visualisation de CV interactive et intégration de démos en direct.",
    category: "frontend",
    stack: ["React.js", "Vite", "Tailwind CSS", "Motion", "Bootstrap"],
    gradient: "linear-gradient(135deg, #0284c7, #6366f1 70%)",
    accentColor: "#0ea5e9",
    featured: true,
    repoUrl: "https://github.com/karimbettane1/k.bettane",
    demoUrl: "https://karimbettane1.github.io/k.bettane/",
    interactiveDemoId: "portfolio",
    features: [
      "Navigation fluide avec indicateur dynamique de section",
      "Visualisateur de CV interactif et exportable",
      "Simulateurs interactifs intégrés pour tester les projets",
      "Formulaire de contact avec validation des champs en temps réel",
      "Optimisation SEO complète, OpenGraph et responsive design",
    ],
    highlights: ["Design Dark Mode moderne", "Animations micro-interactions", "SEO & Accessibilité"],
  },
  {
    id: "todolist",
    title: "Todo List Application",
    subtitle: "Gestionnaire de tâches productif & persistant",
    description:
      "Application de gestion des tâches permettant de créer, catégoriser, modifier, filtrer et archiver des tâches avec persistance locale.",
    detailedDescription:
      "Une application intuitive de productivité personnelle construite pour offrir une expérience fluide sans latence. Comprend des filtres par statut (Toutes, En cours, Terminées), des priorités de couleur et la sauvegarde automatique dans le LocalStorage du navigateur.",
    category: "frontend",
    stack: ["React.js", "Bootstrap", "LocalStorage", "CSS3"],
    gradient: "linear-gradient(135deg, #2563eb, #8b5cf6 70%)",
    accentColor: "#3b82f6",
    featured: false,
    repoUrl: "https://github.com/karimbettane1/todolist",
    demoUrl: "https://github.com/karimbettane1/todolist",
    interactiveDemoId: "todolist",
    features: [
      "Ajout, modification, validation et suppression de tâches",
      "Filtrage dynamique (Toutes, Actives, Complétées)",
      "Persistance instantanée via LocalStorage",
      "Compteur de progression et statistiques d'accomplissement",
      "Raccourcis clavier (Entrée pour ajouter, Échap pour annuler)",
    ],
    highlights: ["Zéro latence", "Persistance locale", "State management React"],
  },
  {
    id: "calculator",
    title: "Calculatrice Moderne",
    subtitle: "Calculatrice scientifique & arithmétique responsive",
    description:
      "Application de calcul interactive dotée d'une interface ergonomique, gérant les opérations arithmétiques, l'historique et les calculs décimaux.",
    detailedDescription:
      "Calculatrice web interactive conçue avec un moteur d'évaluation arithmétique robuste prévenant les erreurs de division par zéro, supportant la saisie au clavier physique ou tactile, et gardant en mémoire l'historique des derniers calculs.",
    category: "javascript",
    stack: ["JavaScript ES6+", "HTML5", "CSS3", "Responsive Design"],
    gradient: "linear-gradient(135deg, #059669, #0d9488 70%)",
    accentColor: "#10b981",
    featured: false,
    repoUrl: "https://github.com/karimbettane1",
    demoUrl: "https://karimbettane1.github.io/k.bettane/",
    interactiveDemoId: "calculator",
    features: [
      "Opérations arithmétiques standards et calculs en chaîne",
      "Gestion précise des décimales et changements de signe (+/-)",
      "Historique déroulant des calculs récents",
      "Support complet des touches du clavier",
      "Effets sonores ou haptiques au clic (désactivables)",
    ],
    highlights: ["Logique JavaScript pure", "Gestion d'erreurs", "Support clavier"],
  },
  {
    id: "rockpaper",
    title: "Pierre - Papier - Ciseaux",
    subtitle: "Jeu interactif contre l'ordinateur avec suivi des scores",
    description:
      "Mini-jeu interactif et dynamique développé en JavaScript avec animations de confrontation, effets visuels et sauvegarde des scores.",
    detailedDescription:
      "Jeu ludique avec choix aléatoire de l'intelligence artificielle, calcul des victoires/défaites/égalités, animations de compte à rebours et réinitialisation de partie. Parfait exemple de manipulation du DOM et de state management en JavaScript.",
    category: "javascript",
    stack: ["JavaScript ES6+", "HTML5", "CSS3", "Animations"],
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4 70%)",
    accentColor: "#06b6d4",
    featured: false,
    repoUrl: "https://github.com/karimbettane1",
    demoUrl: "https://karimbettane1.github.io/k.bettane/",
    interactiveDemoId: "rockpaper",
    features: [
      "Mécanique de jeu équitable avec tirage aléatoire",
      "Tableau des scores (Victoires, Égalités, Défaites)",
      "Animations de duel et affichage instantané du résultat",
      "Option de remise à zéro du compteur",
      "Mode responsive mobile fluide",
    ],
    highlights: ["Gameplay interactif", "Animations CSS", "Suivi des scores"],
  },
];
