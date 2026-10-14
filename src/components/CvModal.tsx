import React from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Code, 
  Layers 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { skillCategories, languages, qualities } from '../data/skills';
import { educationData } from '../data/education';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#0f172a] text-slate-100 rounded-3xl border border-white/15 shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:px-6 bg-[#090f1d] border-b border-white/10 flex items-center justify-between no-print">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Curriculum Vitae — Karim Bettane</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
              title="Imprimer ou enregistrer en PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible bg-white text-slate-900 rounded-b-3xl print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-blue-600 pb-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black font-poppins text-slate-900 tracking-tight uppercase">
                Karim Bettane
              </h1>
              <div className="text-base sm:text-lg font-bold text-blue-600 mt-1">
                Développeur Web Full Stack
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Stagiaire OFPPT en Développement Digital (Option Web Full Stack)
              </p>
            </div>

            {/* Coordinates */}
            <div className="text-xs text-slate-600 space-y-1.5 sm:text-right font-medium">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+212 687 238 961</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>karimbettane94@gmail.com</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Boulemane / Sefrou — Maroc</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>github.com/karimbettane1</span>
              </div>
            </div>
          </div>

          {/* Profil */}
          <div className="mb-6">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-700 mb-2 border-b border-slate-200 pb-1">
              Profil Professionnel
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Stagiaire à l'OFPPT en Développement Digital, option Développeur Web Full Stack (2024-2026) à l'ISTA Sefrou. Passionné par l'écosystème web, je développe des compétences avancées en création d'applications front-end réactives et back-end scalables, avec un accent prononcé sur la qualité du code, l'expérience utilisateur et les méthodes Agiles.
            </p>
          </div>

          {/* Formation */}
          <div className="mb-6">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-700 mb-3 border-b border-slate-200 pb-1">
              Formation Académique
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{edu.degree}</span>
                    <span className="text-blue-600">{edu.period}</span>
                  </div>
                  <div className="text-slate-600 font-semibold">{edu.institution} — {edu.location}</div>
                  <p className="text-xs text-slate-500 mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences Techniques */}
          <div className="mb-6">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-700 mb-3 border-b border-slate-200 pb-1">
              Compétences Techniques
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-blue-700 mb-1.5">{cat.title}</div>
                  <ul className="space-y-0.5 text-slate-700">
                    {cat.skills.map((s) => (
                      <li key={s.name}>• {s.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Langues & Qualités */}
          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-700 mb-2 border-b border-slate-200 pb-1">
                Langues
              </h2>
              <ul className="space-y-1 text-slate-700">
                {languages.map((l) => (
                  <li key={l.name} className="flex justify-between">
                    <span className="font-semibold">{l.name}</span>
                    <span className="text-slate-500">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-blue-700 mb-2 border-b border-slate-200 pb-1">
                Qualités Personnelles
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {qualities.slice(0, 6).map((q) => (
                  <span key={q} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200 text-[11px]">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
