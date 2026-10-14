import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Eye, 
  PlayCircle 
} from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'frontend' | 'javascript'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'Tous les projets', count: projectsData.length },
    { id: 'fullstack', label: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Front-End', count: projectsData.filter(p => p.category === 'frontend').length },
    { id: 'javascript', label: 'JavaScript & Jeux', count: projectsData.filter(p => p.category === 'javascript').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#93c5fd] text-[12.5px] font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Portfolio & Réalisations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white font-poppins tracking-tight">
            Mes Projets{' '}
            <span
              style={{
                background: 'linear-gradient(92deg, #60a5fa, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Réalisés
            </span>
          </h2>
          <p className="text-[#9bb7de] text-[15.5px] mt-3">
            Une sélection de projets concrets démontrant mes compétences en développement full-stack, front-end réactif et algorithmique web.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-[13.5px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                    : 'bg-white/[0.03] text-[#93b4dd] hover:text-white border border-white/[0.08] hover:bg-white/[0.06]'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-white/[0.06] text-[#8aa9cf]'
                }`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/[0.09] bg-white/[0.025] overflow-hidden backdrop-blur-md shadow-xl flex flex-col hover:border-blue-500/40 transition-colors group"
              >
                {/* Visual Banner Header */}
                <div
                  className="h-48 sm:h-52 relative flex items-center justify-center p-6 text-white overflow-hidden cursor-pointer"
                  style={{ background: project.gradient }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Subtle Grid / Radial Dots */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />

                  {/* Top Badge: Featured */}
                  {project.featured && (
                    <div className="absolute top-3.5 right-3.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>En Vedette</span>
                    </div>
                  )}

                  {/* Center Graphic */}
                  <div className="relative z-10 text-center transition-transform duration-300 group-hover:scale-105">
                    <div className="text-[11px] font-extrabold tracking-widest uppercase opacity-80 mb-1">
                      PROJET
                    </div>
                    <div className="font-poppins font-black text-2xl sm:text-3xl text-white">
                      {project.title.split(' ')[0]}
                    </div>
                    <div className="text-xs text-white/80 mt-1 font-medium max-w-[200px] truncate">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-xl">
                      <PlayCircle className="w-4 h-4 text-blue-600" />
                      Tester la Démo
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-poppins font-bold text-lg text-white group-hover:text-blue-300 transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>
                    <p className="text-[13.8px] leading-relaxed text-[#9fb8db] line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#c8dbf5] bg-white/[0.04] border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2 py-1 rounded-lg text-[11px] font-semibold text-[#8ca8cd] bg-white/[0.02]">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.08]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                      style={{ background: project.gradient }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Voir le projet</span>
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-[#d6e5fa] text-xs font-semibold flex items-center gap-1.5 transition-all"
                        title="Code source sur GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal Preview */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
