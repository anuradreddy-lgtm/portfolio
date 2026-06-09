import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl border border-white/10 dark:border-white/5 bg-white/10 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:text-cyber-teal hover:border-cyber-indigo/30 transition-all duration-300 shadow-sm outline-none overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
        )}
      </motion.div>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-indigo/10 to-cyber-teal/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl -z-10" />
    </button>
  );
};
