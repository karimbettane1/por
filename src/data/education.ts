export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  description: string;
  skillsAcquired: string[];
  isCurrent?: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: "digital-dev",
    period: "2024 — 2026",
    degree: "Diplôme de Technicien Spécialisé en Développement Digital",
    institution: "ISTA SEFROU (OFPPT)",
    location: "Sefrou, Maroc",
    status: "Formation en cours — Option Développeur Web Full Stack",
    description:
      "Formation approfondie et professionnalisante couvrant l'ensemble du cycle de développement logiciel : conception de maquettes UX/UI, développement front-end réactif, programmation back-end orientée objet, gestion de bases de données relationnelles et non relationnelles, et travail en équipe selon les principes Agile Scrum.",
    skillsAcquired: [
      "Développement Frontend : HTML5, CSS3, JavaScript ES6+, React.js, Bootstrap",
      "Développement Backend : PHP 8, Laravel Framework, Architecture MVC, APIs REST",
      "Bases de données : Conception MCD/MLD, MySQL, SQL Avancé, MongoDB",
      "Gestion de versions : Git, GitHub, GitLab, branches et pull requests",
      "Méthodologies agiles : Scrum, sprints, rétrospectives, modélisation UML",
      "Projets pratiques et études de cas réels en entreprise",
    ],
    isCurrent: true,
  },
  {
    id: "baccalaureate",
    period: "2023",
    degree: "Baccalauréat Scientifique",
    institution: "Lycée Qualifiant Badr",
    location: "Boulemane, Maroc",
    status: "Obtenu avec succès",
    description:
      "Formation scientifique générale renforçant le raisonnement logique, les mathématiques, la résolution de problèmes analytiques et la rigueur scientifique.",
    skillsAcquired: [
      "Raisonnement logique et mathématiques appliquées",
      "Analyse méthodique et résolution de problèmes complexes",
      "Méthode de travail autonome et persévérance",
    ],
    isCurrent: false,
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  badge: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "frontend",
    title: "Développement Front-End",
    description:
      "Création d'interfaces web dynamiques, modernes et responsives avec React.js, Tailwind CSS et JavaScript moderne. Priorité accordée à l'ergonomie et la vitesse d'affichage.",
    icon: "FaReact",
    color: "#38bdf8",
    badge: "React & Modern UI",
  },
  {
    id: "backend",
    title: "Développement Back-End & APIs",
    description:
      "Conception d'architectures serveurs fiables avec PHP et Laravel. Développement d'APIs RESTful sécurisées, authentification par tokens et logique métier claire.",
    icon: "FaLaravel",
    color: "#ff2d20",
    badge: "Laravel & PHP",
  },
  {
    id: "database",
    title: "Bases de Données & Modélisation",
    description:
      "Structuration des données avec MySQL et MongoDB. Optimisation des requêtes SQL, intégrité référentielle, indexation et schémas modulaires.",
    icon: "FaDatabase",
    color: "#00758f",
    badge: "MySQL & MongoDB",
  },
  {
    id: "integration",
    title: "Intégration Web & Responsive",
    description:
      "Transformation de maquettes graphiques en pages web pixel-perfect, compatibles avec tous les navigateurs et tous les formats d'écrans (smartphones, tablettes, PC).",
    icon: "FaLaptopCode",
    color: "#a855f7",
    badge: "100% Mobile Ready",
  },
  {
    id: "maintenance",
    title: "Maintenance & Optimisation",
    description:
      "Audit de code, correction de bugs, amélioration du temps de chargement, mises à jour de sécurité et refactorisation de projets existants.",
    icon: "FaTools",
    color: "#10b981",
    badge: "Performance & Debug",
  },
  {
    id: "collaboration",
    title: "Gestion de Version & Agile",
    description:
      "Collaboration fluide via Git et GitHub, organisation des tâches en sprints Scrum, respect des bonnes pratiques et documentation de projet.",
    icon: "FaUsers",
    color: "#f59e0b",
    badge: "Scrum & Git Flow",
  },
];
