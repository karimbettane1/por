import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CvModal } from './components/CvModal';

function PortfolioContent() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCvOpen) {
        setIsCvOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCvOpen]);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#0b1329] dark:text-[#e6f0ff] overflow-x-hidden selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <About onOpenCv={() => setIsCvOpen(true)} />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact onOpenCv={() => setIsCvOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenCv={() => setIsCvOpen(true)} />

      {/* Scroll to Top floating button */}
      <ScrollToTop />

      {/* Curriculum Vitae Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
