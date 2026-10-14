import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Phone, 
  FileText, 
  Languages, 
  CheckCircle, 
  Sparkles, 
  Briefcase 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { languages, qualities } from '../data/skills';

interface AboutProps {
  onOpenCv: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCv }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#93c5fd] text-[12.5px] font-semibold mb-3">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>À Propos de Moi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white font-poppins tracking-tight">
            Passionné par le Web & <br />
            <span
              style={{
                background: 'linear-gradient(92deg, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              l'Ingénierie Logicielle
            </span>
          </h2>
          <p className="text-[#9bb7de] text-[15.5px] mt-3">
            Découvrez mon profil, mes valeurs de travail et les compétences linguistiques et humaines que j'apporte aux projets.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Story Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-white">Mon Parcours & Vision</h3>
                  <p className="text-xs text-[#8caecc]">Développeur Full Stack Junior • Boulemane, Maroc</p>
                </div>
              </div>

              <div className="space-y-4 text-[15.2px] leading-relaxed text-[#b6cae6]">
                <p>
                  Je m'appelle <strong className="text-white font-semibold">Karim Bettane</strong>. Stagiaire à l'OFPPT en Développement Digital, avec une spécialisation en <strong className="text-white font-semibold">Développement Web Full Stack</strong> (2024-2026) à l'ISTA Sefrou, j'ai développé une solide base technique alliant front-end réactif et logiques back-end performantes.
                </p>
                <p>
                  Mon approche repose sur trois principes clés : la clarté du code, le respect des standards industriels (architectures MVC, REST APIs, Git Flow) et une attention pointue accordée à l'expérience utilisateur et à la responsivité mobile.
                </p>
                <p>
                  Curieux et autodidacte, je veille constamment sur les évolutions de l'écosystème web (React, Laravel, TypeScript) pour enrichir mes projets et répondre efficacement aux besoins des équipes et des clients.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={onOpenCv}
                  className="px-5 py-3 rounded-xl text-white text-[13.8px] font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
                  style={{
                    background: 'linear-gradient(100deg, #2563eb, #7c3aed)',
                  }}
                >
                  <FileText className="w-4 h-4" />
                  <span>Consulter le CV Complet</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-[#8caecc]">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Disponible pour stage et opportunités</span>
                </div>
              </div>
            </div>

            {/* Qualities Grid */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl">
              <h3 className="font-poppins font-bold text-base text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Qualités Personnelles & Atouts
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {qualities.map((q, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[13px] text-[#cfe0f8] font-medium hover:border-blue-500/40 transition-colors"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quick Info & Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Profile Info Card */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl space-y-4">
              <h3 className="font-poppins font-bold text-base text-white pb-3 border-b border-white/[0.08]">
                Informations Clés
              </h3>

              <div className="space-y-3.5 text-[13.8px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#84a5d0] flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    Nom complet
                  </span>
                  <span className="text-white font-medium">{profileData.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#84a5d0] flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    Spécialité
                  </span>
                  <span className="text-white font-medium">{profileData.title}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#84a5d0] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    Formation
                  </span>
                  <span className="text-white font-medium">ISTA Sefrou (OFPPT)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#84a5d0] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    Ville
                  </span>
                  <span className="text-white font-medium">{profileData.city}, {profileData.country}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#84a5d0] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Email
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-blue-400 hover:text-blue-300 font-medium truncate max-w-[190px]"
                  >
                    {profileData.email}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#84a5d0] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Téléphone
                  </span>
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                    className="text-white font-medium hover:text-emerald-300"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl">
              <h3 className="font-poppins font-bold text-base text-white mb-5 flex items-center gap-2">
                <Languages className="w-4 h-4 text-blue-400" />
                Langues Maîtrisées
              </h3>

              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-[13.5px] mb-1.5">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-xs text-[#8caecc]">{lang.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.08] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.15 }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
