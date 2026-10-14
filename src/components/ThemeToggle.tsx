import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
        isDark
          ? 'bg-white/[0.04] border-white/12 text-amber-300 hover:text-amber-200 hover:bg-white/[0.08] hover:border-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
          : 'bg-white border-slate-200 text-indigo-600 hover:text-indigo-700 hover:bg-slate-50 hover:border-indigo-400/40 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      title={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 fill-amber-300/20" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/20" />
        )}
      </motion.div>
    </button>
  );
};
