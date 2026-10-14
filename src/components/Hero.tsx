import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  Download, 
  Send, 
  MapPin, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { FaReact, FaLaravel, FaPhp, FaJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photoError, setPhotoError] = useState(false);

  // Typewriter effect phrases
  const phrases = [
    "Full Stack Developer",
    "Développeur React & Laravel",
    "Solutions Web Modernes & Scalables",
    "Conception Frontend & Backend",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  // Ambient interactive canvas particles like reference site
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(45, Math.floor(width / 32));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 149, 255, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />

      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#93c5fd] text-[12.5px] font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{profileData.status}</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-[#bfdbfe]">
                <MapPin className="w-3.5 h-3.5" />
                {profileData.city}, {profileData.country}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-poppins text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.08] text-white mb-4">
              KARIM <br />
              <span
                style={{
                  background: 'linear-gradient(95deg, #57c8ff 2%, #779aff 28%, #a46fff 58%, #d58aff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BETTANE
              </span>
            </h1>

            {/* Typing Subtitle */}
            <div className="text-xl sm:text-2xl text-[#d7e7ff] font-semibold h-10 mb-5 flex items-center justify-center lg:justify-start">
              <span>{currentText}</span>
              <span className="text-blue-400 font-normal animate-pulse ml-1 text-2xl">|</span>
            </div>

            {/* Official Description */}
            <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#b4c8e7] max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              {profileData.bioShort}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-9">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl text-white text-[14.5px] font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                style={{
                  background: 'linear-gradient(100deg, #2563eb 0%, #7c3aed 100%)',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.35)',
                }}
              >
                <span>Découvrir mes projets</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl text-[#e2eeff] text-[14.5px] font-semibold border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Me contacter</span>
                <Send className="w-4 h-4 text-blue-400" />
              </button>

              <button
                onClick={onOpenCv}
                className="px-5 py-3.5 rounded-xl text-[#93c5fd] text-[14px] font-semibold border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-all cursor-pointer flex items-center gap-2"
                title="Consulter et exporter le CV"
              >
                <Download className="w-4 h-4" />
                <span>Consulter CV</span>
              </button>
            </div>

            {/* Featured Tech Stack Badges */}
            <div className="pt-2 border-t border-white/[0.08]">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#7ea1ce] mb-3">
                Stack Principale
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {[
                  { icon: FaReact, name: 'React.js', color: '#58c4dc' },
                  { icon: FaLaravel, name: 'Laravel', color: '#ff2d20' },
                  { icon: FaPhp, name: 'PHP', color: '#8892be' },
                  { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
                  { icon: SiMysql, name: 'MySQL', color: '#00758f' },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[13px] text-[#cfe0f8] font-medium"
                    >
                      <Icon style={{ color: tech.color }} className="text-base" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Portrait Photo & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Glowing Conic Backdrop */}
            <div
              className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full blur-[70px] opacity-60 pointer-events-none"
              style={{
                background: 'conic-gradient(from 130deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)',
              }}
            />

            {/* Main Portrait Card */}
            <div
              className="relative w-[300px] sm:w-[370px] h-[350px] sm:h-[420px] rounded-3xl border border-white/15 p-3.5 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0e172e] border border-white/10">
                {!photoError ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center font-poppins font-black text-3xl mb-3 text-blue-300">
                      KB
                    </div>
                    <div className="font-poppins font-bold text-lg text-white">Karim Bettane</div>
                    <div className="text-sm text-blue-300">Full Stack Developer</div>
                  </div>
                )}

                {/* Subtle vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 60%, rgba(11, 19, 41, 0.75) 100%)',
                  }}
                />

                {/* Photo footer label */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-[#091124]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-bold text-white font-poppins">Karim Bettane</div>
                    <div className="text-[11px] text-blue-300">ISTA Sefrou (2024-2026)</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Floating Badge 1: Expert React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-10 px-3.5 py-2 rounded-xl text-[12.5px] font-bold text-[#e0f2fe] flex items-center gap-2 border border-white/15 backdrop-blur-md shadow-xl"
                style={{ background: 'rgba(15, 23, 42, 0.88)' }}
              >
                <FaReact className="text-[#38bdf8] text-base animate-spin" style={{ animationDuration: '10s' }} />
                <span>Expert React</span>
              </motion.div>

              {/* Floating Badge 2: Pro Laravel */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 top-1/2 px-3.5 py-2 rounded-xl text-[12.5px] font-bold text-[#fee2e2] flex items-center gap-2 border border-white/15 backdrop-blur-md shadow-xl"
                style={{ background: 'rgba(15, 23, 42, 0.88)' }}
              >
                <FaLaravel className="text-[#ff3823] text-base" />
                <span>Pro Laravel</span>
              </motion.div>

              {/* Floating Badge 3: Full Stack */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute left-6 -bottom-4 px-3.5 py-2 rounded-xl text-[12.5px] font-bold text-[#dcfce7] flex items-center gap-2 border border-white/15 backdrop-blur-md shadow-xl"
                style={{ background: 'rgba(15, 23, 42, 0.88)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Full Stack Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 4 Bottom Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mt-16 pt-8 border-t border-white/[0.08]"
        >
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-blue-500/30 transition-all hover:-translate-y-1 group"
            >
              <div className="font-poppins font-black text-2xl sm:text-3xl text-white group-hover:text-blue-400 transition-colors">
                {stat.value}
                <span className="text-blue-400 font-extrabold">{stat.suffix}</span>
              </div>
              <div className="text-[13px] text-[#90b2dc] font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1.5 text-[12px] font-medium text-[#7e9ec9] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Découvrir mon profil</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
};
