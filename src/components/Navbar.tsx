import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Send, 
  FileText, 
  Code2, 
  User, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  FolderGit2 
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenCv: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Sparkles },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'skills', label: 'Compétences', icon: Code2 },
    { id: 'projects', label: 'Projets', icon: FolderGit2 },
    { id: 'experience', label: 'Parcours', icon: GraduationCap },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/90 dark:bg-[#0a1128]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
              aria-label="Retour à l'accueil"
            >
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white font-extrabold text-lg font-poppins shadow-lg transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 65%, #06b6d4 100%)',
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
                }}
              >
                KB
              </div>
              <div>
                <div className="font-poppins font-bold text-[15px] sm:text-[16px] text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 transition-colors">
                  Karim Bettane
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Disponible pour opportunités" />
                </div>
                <div className="text-[11px] text-slate-500 dark:text-[#93b4dd] font-medium tracking-wide transition-colors">
                  Full Stack Developer
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md transition-colors">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-blue-600 dark:text-white font-semibold'
                        : 'text-slate-600 hover:text-slate-900 dark:text-[#9bb7dc] dark:hover:text-[#e0edff]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                          border: '1px solid rgba(59, 130, 246, 0.35)',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <button
                onClick={onOpenCv}
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13px] font-semibold text-slate-700 dark:text-[#cfe2ff] border border-slate-200 dark:border-white/[0.12] bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] transition-all cursor-pointer shadow-xs hover:scale-[1.02]"
                title="Consulter et imprimer le CV"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-[#60a5fa]" />
                <span>Mon CV</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-white text-[13px] sm:text-[14px] font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(100deg, #2563eb 0%, #7c3aed 100%)',
                  boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)',
                }}
              >
                <span>Me Contacter</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-white/[0.12] bg-white dark:bg-white/[0.04] text-slate-700 dark:text-[#cfe2ff] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden px-4"
          >
            <div className="bg-white/95 dark:bg-[#0f1a38]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/[0.12] rounded-2xl p-4 shadow-2xl space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-[14.5px] font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600/15 text-blue-600 dark:text-white border border-blue-500/40 font-semibold'
                        : 'text-slate-600 dark:text-[#9bb7dc] hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-[#7394be]'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCv();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-white/[0.12] bg-slate-50 dark:bg-white/[0.04] text-slate-800 dark:text-[#cfe2ff] text-[13.5px] font-semibold"
                >
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Consulter le CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
