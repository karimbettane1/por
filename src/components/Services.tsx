import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  ArrowRight, 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Wrench, 
  Users 
} from 'lucide-react';
import { servicesData } from '../data/education';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'frontend': return Code2;
    case 'backend': return Server;
    case 'database': return Database;
    case 'integration': return Smartphone;
    case 'maintenance': return Wrench;
    case 'collaboration': return Users;
    default: return Layers;
  }
};

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#93c5fd] text-[12.5px] font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Prestations & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white font-poppins tracking-tight">
            Mes Services{' '}
            <span
              style={{
                background: 'linear-gradient(92deg, #60a5fa, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Professionnels
            </span>
          </h2>
          <p className="text-[#9bb7de] text-[15.5px] mt-3">
            Ingénierie web de qualité avec une sensibilité affirmée pour le design, la performance et l'expérience utilisateur.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {servicesData.map((service, idx) => {
            const Icon = getServiceIcon(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                {/* Glowing Hover Spotlight in corner */}
                <div
                  className="absolute -right-8 -top-8 w-28 h-28 rounded-full blur-[45px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ background: service.color }}
                />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, #1e3a8a)`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#b3cbe8]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-poppins font-bold text-lg text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#9bb7db] mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer link */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
                >
                  <span>Discuter d'un projet</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
