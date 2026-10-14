import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaPhp, 
  FaLaravel, 
  FaNodeJs, 
  FaGitAlt, 
  FaGitlab, 
  FaUsers, 
  FaDatabase, 
  FaCodeBranch, 
  FaJs 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { skillCategories } from '../data/skills';

// Helper to map icon names to icon components
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'FaReact': return FaReact;
    case 'SiJavascript': return FaJs;
    case 'FaHtml5': return FaHtml5;
    case 'FaCss3Alt': return FaCss3Alt;
    case 'FaBootstrap': return FaBootstrap;
    case 'SiTailwindcss': return SiTailwindcss;
    case 'FaPhp': return FaPhp;
    case 'FaLaravel': return FaLaravel;
    case 'FaServer': return Server;
    case 'FaNodeJs': return FaNodeJs;
    case 'SiMysql': return SiMysql;
    case 'FaDatabase': return FaDatabase;
    case 'SiMongodb': return SiMongodb;
    case 'FaGitAlt': return FaGitAlt;
    case 'FaGitlab': return FaGitlab;
    case 'FaUsers': return FaUsers;
    case 'SiVisualstudiocode': return VscVscode;
    case 'FaCodeBranch': return FaCodeBranch;
    default: return CheckCircle2;
  }
};

const getCategoryIcon = (index: number) => {
  switch (index) {
    case 0: return Layout;
    case 1: return Server;
    case 2: return Database;
    case 3: return Wrench;
    default: return Code2;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient element */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/25 text-blue-700 dark:text-[#93c5fd] text-[12.5px] font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Compétences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 dark:text-white font-poppins tracking-tight transition-colors">
            Compétences{' '}
            <span
              style={{
                background: 'linear-gradient(92deg, #2563eb, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="dark:hidden"
            >
              Techniques
            </span>
            <span
              style={{
                background: 'linear-gradient(92deg, #60a5fa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="hidden dark:inline"
            >
              Techniques
            </span>
          </h2>
          <p className="text-slate-600 dark:text-[#9bb7de] text-[15.5px] mt-3 transition-colors">
            Un écosystème complet de technologies modernes pour concevoir, développer et déployer des applications web complètes et robustes.
          </p>
        </div>

        {/* Categories Grid (2x2) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, catIdx) => {
            const CatIcon = getCategoryIcon(catIdx);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-md hover:border-blue-500/40 transition-all shadow-md dark:shadow-xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-white/[0.08] transition-colors">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-slate-900 dark:text-white transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#8daecf] transition-colors">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = getIconComponent(skill.iconName);
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-[13.5px] mb-1.5">
                          <span className="flex items-center gap-2 text-slate-800 dark:text-[#e2eeff] font-medium transition-colors">
                            <SkillIcon style={{ color: skill.color }} className="text-base" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 dark:text-[#8eb0dc] transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-white/[0.07] overflow-hidden transition-colors">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIdx * 0.08 }}
                            className="h-full rounded-full"
                            style={{
                              background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 85%)',
                              boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)',
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Tech Icons Ribbon */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08] text-center transition-colors">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#7e9fc8] mb-6">
            Stack Technologique Maîtrisée
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {[
              { icon: FaReact, name: 'React', color: '#0284c7' },
              { icon: FaLaravel, name: 'Laravel', color: '#ff2d20' },
              { icon: FaPhp, name: 'PHP', color: '#6366f1' },
              { icon: FaJs, name: 'JavaScript', color: '#ca8a04' },
              { icon: SiMysql, name: 'MySQL', color: '#00758f' },
              { icon: SiMongodb, name: 'MongoDB', color: '#16a34a' },
              { icon: FaBootstrap, name: 'Bootstrap', color: '#7952b3' },
              { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#0284c7' },
              { icon: FaGitAlt, name: 'Git', color: '#f05032' },
              { icon: VscVscode, name: 'VS Code', color: '#007acc' },
            ].map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.8 + (idx % 4) * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.1,
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-white/[0.025] border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-white/[0.06] transition-all shadow-xs group cursor-default"
                >
                  <TechIcon style={{ color: tech.color }} className="text-lg group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] font-semibold text-slate-800 dark:text-[#cfe0f8] transition-colors">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
