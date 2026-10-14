import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Award 
} from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#93c5fd] text-[12.5px] font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>Formation & Parcours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white font-poppins tracking-tight">
            Expérience &{' '}
            <span
              style={{
                background: 'linear-gradient(92deg, #60a5fa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Formation
            </span>
          </h2>
          <p className="text-[#9bb7de] text-[15.5px] mt-3">
            Mon parcours académique rigoureux et mes apprentissages continus dans le domaine du numérique.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] md:-translate-x-1/2 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 60%, #06b6d4 100%)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            }}
          />

          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-start"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`${
                      isEven ? 'md:text-right md:pr-4' : 'md:order-2 md:text-left md:pl-4'
                    }`}
                  >
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-blue-300 bg-blue-500/15 border border-blue-400/30 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="font-poppins font-black text-xl sm:text-2xl text-white">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-semibold text-blue-400 mt-1 flex items-center gap-1.5 justify-start md:justify-end">
                      <Award className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="text-xs text-[#8caecc] mt-1 flex items-center gap-1 justify-start md:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Glowing Timeline Marker Dot */}
                  <div className="absolute left-2.5 md:left-1/2 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#0b1329] bg-blue-500 shadow-[0_0_0_5px_rgba(59,130,246,0.25)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Right Column (Desktop) / Main Card */}
                  <div
                    className={`${
                      isEven ? 'md:pl-4 mt-3 md:mt-0' : 'md:order-1 md:pr-4 md:text-right mt-3 md:mt-0'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl text-left">
                      <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </div>
                      <p className="text-[13.8px] leading-relaxed text-[#b1c7e6] mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#8daecf]">
                          Compétences & Enseignements
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#c8dbf5]">
                          {item.skillsAcquired.map((skill, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note / Configurable Notice */}
        <div className="mt-16 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center max-w-xl mx-auto">
          <p className="text-xs text-[#82a4ce] leading-relaxed">
            <strong className="text-white">Note de transparence :</strong> Les dates et informations académiques reflètent le cursus officiel suivi à l'OFPPT ISTA Sefrou et au Lycée Qualifiant Badr à Boulemane.
          </p>
        </div>

      </div>
    </section>
  );
};
