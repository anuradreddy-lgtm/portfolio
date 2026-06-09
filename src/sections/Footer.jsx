import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/BrandIcons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/20 backdrop-blur-md relative select-text">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white "
          >
            <span className="p-1 rounded bg-gradient-to-br from-cyber-indigo to-cyber-teal text-white">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span>
              Dev<span className="text-cyber-teal">Portfolio</span>
            </span>
          </a>
          <p className="text-[11px] font-semibold text-slate-500 font-sans">
            &copy; {currentYear} Anurad Panyam. Built with React &amp; Tailwind. All Rights Reserved.
          </p>
        </div>

        {/* Directory links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-500">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Experience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
          ].map((lnk) => (
            <a
              key={lnk.name}
              href={lnk.href}
              onClick={(e) => handleNavClick(e, lnk.href)}
              className="hover:text-cyber-teal transition-colors "
            >
              {lnk.name}
            </a>
          ))}
        </div>

        {/* Social connections and Back to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/anuradreddy-lgtm', label: 'GitHub' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/anurad-panyam-77407939b/', label: 'LinkedIn' },
              { icon: <Mail className="w-4 h-4" />, href: 'mailto:anuradreddy@gmail.com', label: 'Email' }
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/5 bg-white/5 text-slate-500 hover:text-cyber-teal hover:border-cyber-teal/30 transition-all "
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Floating Back to top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl border border-white/10 hover:border-cyber-indigo/35 text-slate-400 hover:text-white transition-all bg-white/5 shadow-md shadow-black/10 group"
            title="Scroll Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
