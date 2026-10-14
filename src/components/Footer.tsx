import React from 'react';
import { 
  Heart, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUp 
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { profileData } from '../data/profile';

interface FooterProps {
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCv }) => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070d1e] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-base font-poppins shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                }}
              >
                KB
              </div>
              <div>
                <span className="font-poppins font-black text-lg text-white tracking-tight">
                  Karim Bettane
                </span>
                <div className="text-xs text-[#8caecc]">Full Stack Developer</div>
              </div>
            </div>

            <p className="text-[13.8px] leading-relaxed text-[#9ab7dc] max-w-sm">
              Développeur Web Full Stack Junior passionné par la création d'expériences numériques élégantes, rapides et centrées sur l'utilisateur.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400 hover:bg-white/[0.08] flex items-center justify-center text-[#d7e5f8] hover:text-white transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400 hover:bg-white/[0.08] flex items-center justify-center text-[#60a5fa] hover:text-white transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>

              <a
                href={`https://wa.me/${profileData.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-emerald-400 hover:bg-white/[0.08] flex items-center justify-center text-[#4ade80] hover:text-white transition-all hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-400 hover:bg-white/[0.08] flex items-center justify-center text-[#93c5fd] hover:text-white transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#9bb7dc]">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  À propos de moi
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Compétences techniques
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Galerie des projets
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Formation & Parcours
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Services proposés
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Contact direct
                </button>
              </li>
            </ul>
          </div>

          {/* Coordinates & CV */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">
              Coordonnées
            </h4>
            <div className="space-y-2 text-xs text-[#9bb7dc]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{profileData.city}, {profileData.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {profileData.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCv}
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-blue-300 transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Consulter la version CV</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e9ec9]">
          <p>© {currentYear} Karim Bettane. Tous droits réservés.</p>
          <div className="flex items-center gap-1.5">
            <span>Développé avec</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>au Maroc (Boulemane / Sefrou)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
