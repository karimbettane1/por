export interface SkillItem {
  name: string;
  level: number;
  iconName: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    description: "Interfaces utilisateur interactives, réactives et orientées design",
    skills: [
      { name: "React.js", level: 88, iconName: "FaReact", color: "#54d7ff", category: "frontend" },
      { name: "JavaScript (ES6+)", level: 88, iconName: "SiJavascript", color: "#f7df1e", category: "frontend" },
      { name: "HTML5", level: 94, iconName: "FaHtml5", color: "#e34f26", category: "frontend" },
      { name: "CSS3", level: 90, iconName: "FaCss3Alt", color: "#1572b6", category: "frontend" },
      { name: "Bootstrap 5", level: 90, iconName: "FaBootstrap", color: "#7952b3", category: "frontend" },
      { name: "Tailwind CSS", level: 84, iconName: "SiTailwindcss", color: "#38bdf8", category: "frontend" },
    ],
  },
  {
    title: "Back-end",
    description: "Logique serveur, architectures MVC et APIs REST",
    skills: [
      { name: "PHP", level: 88, iconName: "FaPhp", color: "#8892be", category: "backend" },
      { name: "Laravel", level: 85, iconName: "FaLaravel", color: "#ff2d20", category: "backend" },
      { name: "REST APIs", level: 82, iconName: "FaServer", color: "#60a5fa", category: "backend" },
      { name: "Node.js (Bases)", level: 72, iconName: "FaNodeJs", color: "#22c55e", category: "backend" },
    ],
  },
  {
    title: "Bases de Données",
    description: "Modélisation relationnelle, requêtage et persistance",
    skills: [
      { name: "MySQL", level: 85, iconName: "SiMysql", color: "#00758f", category: "database" },
      { name: "SQL", level: 86, iconName: "FaDatabase", color: "#38bdf8", category: "database" },
      { name: "MongoDB", level: 75, iconName: "SiMongodb", color: "#47a248", category: "database" },
    ],
  },
  {
    title: "Outils & Méthodologies",
    description: "Environnement de travail collaboratif et organisation",
    skills: [
      { name: "Git & GitHub", level: 88, iconName: "FaGitAlt", color: "#f05032", category: "tools" },
      { name: "GitLab", level: 80, iconName: "FaGitlab", color: "#fc6d26", category: "tools" },
      { name: "Agile Scrum", level: 85, iconName: "FaUsers", color: "#38bdf8", category: "tools" },
      { name: "VS Code", level: 92, iconName: "SiVisualstudiocode", color: "#007acc", category: "tools" },
      { name: "Algorithmique", level: 86, iconName: "FaCodeBranch", color: "#a855f7", category: "tools" },
    ],
  },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle", percentage: 100 },
  { name: "Français", level: "Intermédiaire (Courant professionnel)", percentage: 75 },
  { name: "Anglais", level: "Intermédiaire (Technique)", percentage: 70 },
];

export const qualities = [
  "Sens de la responsabilité",
  "Esprit d'équipe & collaboration",
  "Capacité d'apprentissage rapide",
  "Rigueur & organisation",
  "Gestion efficace du temps",
  "Sens de la communication",
  "Curiosité technologique",
  "Résolution méthodique de problèmes",
];
