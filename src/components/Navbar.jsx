import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ onTerminalToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection on scroll
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-4 px-4 sm:px-8' : 'py-6 px-0'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 py-3 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'glass-panel rounded-2xl shadow-xl shadow-black/20 bg-white/80 dark:bg-cyber-dark/85 backdrop-blur-md border-slate-200/10 dark:border-white/5'
            : 'bg-transparent border-b border-transparent'
        }`}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white group"
          >
            <span className="p-1.5 rounded-lg bg-cyber-indigo text-white group-hover:rotate-12 transition-transform duration-300">
              <Terminal className="w-4 h-4" />
            </span>
            <span>
              Anurad<span className="text-cyber-indigo">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 px-3.5 py-2 rounded-xl ${
                    isActive
                      ? 'text-cyber-indigo dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-cyber-indigo/5 dark:bg-white/5 border border-cyber-indigo/15 dark:border-white/10 rounded-xl -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Quick Terminal Launcher Button */}
            <button
              onClick={onTerminalToggle}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-cyber-indigo/35 text-cyber-indigo dark:text-white bg-cyber-indigo/5 hover:bg-cyber-indigo hover:text-white transition-all duration-300 text-xs font-bold shadow-sm cursor-pointer"
              title="Launch Recruiter CLI Console"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Console</span>
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onTerminalToggle}
              className="p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:scale-105 transition-transform"
              title="Launch Recruiter CLI Console"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-panel border-t border-white/5"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-cyber-indigo/10 text-cyber-teal'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
