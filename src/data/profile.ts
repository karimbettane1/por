export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  role: string;
  status: string;
  city: string;
  region: string;
  country: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bioShort: string;
  bioLong: string;
  avatarUrl: string;
  stats: {
    value: number;
    suffix: string;
    label: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Karim Bettane",
  firstName: "Karim",
  lastName: "Bettane",
  title: "Full Stack Developer",
  role: "Développeur Full Stack Junior",
  status: "En recherche d'opportunités & projets",
  city: "Boulemane",
  region: "Fès-Meknès",
  country: "Maroc",
  email: "karimbettane94@gmail.com",
  phone: "+212 687 238 961",
  github: "https://github.com/karimbettane1",
  linkedin: "https://www.linkedin.com/in/karim-bettane/",
  bioShort:
    "Développeur Full Stack Junior passionné par la création d'applications web modernes, performantes et intuitives. Je conçois des solutions complètes, du frontend au backend, en mettant l'accent sur la qualité du code et l'expérience utilisateur.",
  bioLong:
    "Stagiaire à l'OFPPT en Développement Digital, option Développeur Web Full Stack (2024-2026) à l'ISTA Sefrou. Originaire de Boulemane, je cultive une passion sincère pour les technologies du web moderne. Mon objectif est de transformer des besoins fonctionnels en applications élégantes, robustes et scalables, en alliant rigueur algorithmique, architecture logicielle propre et sens affûté du design.",
  avatarUrl: "/images/image.png",
  stats: [
    { value: 6, suffix: "+", label: "Projets Réalisés" },
    { value: 8, suffix: "+", label: "Technologies Clés" },
    { value: 100, suffix: "%", label: "Engagement & Rigueur" },
    { value: 24, suffix: "h", label: "Délai de Réponse Max" },
  ],
};
