import React, { useState, useEffect } from 'react';
import { Mail, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/BrandIcons';
import { motion } from 'framer-motion';

const roles = ['Aspiring Full Stack Developer', 'Software Engineering Student', 'React & Python Developer', 'Tech Enthusiast'];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Simple typewriter effect for roles
  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentFullRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullRole.substring(0, displayText.length - 1)
            : currentFullRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    // Generate a temporary mock Resume download trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Anurad_Panyam_Resume.pdf');
    // We can also trigger window.print() on a hidden resume page or mock alert for demo
    alert("Resume download triggered! (In production, place your resume.pdf inside the /public folder)");
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden select-text grid-bg">
      {/* Soft gradient blur lights for designer aesthetics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-indigo/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyber-teal/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Heading and Action triggers */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-indigo/20 bg-cyber-indigo/5 text-cyber-indigo dark:text-cyber-teal font-sans text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-teal animate-ping" />
            <span>Available for Hire</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
          >
            Hi, I'm <span className="text-gradient">Anurad</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center h-10"
          >
            <span className="text-cyber-indigo dark:text-cyber-teal font-mono mr-2">&lt;</span>
            <span className="border-r-2 border-cyber-pink pr-1 terminal-cursor">{displayText}</span>
            <span className="text-cyber-indigo dark:text-cyber-teal font-mono ml-2">/&gt;</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8"
          >
            Enthusiastic and technically skilled Aspiring Full Stack Developer with foundational knowledge in JavaScript, React, and Node.js. Passionate about building functional, user-centric web applications and full-stack solutions.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-indigo text-white hover:bg-cyber-indigo/90 transition-all font-semibold text-sm shadow-md shadow-cyber-indigo/20 hover:shadow-cyber-indigo/35 group"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 transition-all font-semibold text-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </motion.div>
 
          {/* Social media connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Find me on:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="w-4.5 h-4.5" />, href: 'https://github.com/anuradreddy-lgtm', label: 'GitHub' },
                { icon: <Linkedin className="w-4.5 h-4.5" />, href: 'https://www.linkedin.com/in/anurad-panyam-77407939b/', label: 'LinkedIn' },
                { icon: <Mail className="w-4.5 h-4.5" />, href: 'mailto:anuradreddy@gmail.com', label: 'Email' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
 
        {/* Right Column: Dynamic floating cube graphic in 3D wireframe style (SVG-CSS based) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Background glowing circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyber-indigo to-cyber-teal blur-[70px] opacity-10 animate-pulse-slow" />
            
            {/* Moving grid container */}
            <div className="w-full h-full flex items-center justify-center animate-float">
              <svg viewBox="0 0 200 200" className="w-full h-full max-w-[340px]">
                <defs>
                  <pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(99, 102, 241, 0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#heroGrid)" rx="24" />
                
                {/* Outer rotating dashboard circle */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" strokeDasharray="5 5" className="origin-center animate-[spin_40s_linear_infinite]" />
                
                {/* Inner decorative shapes */}
                <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(13, 148, 136, 0.1)" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                
                {/* Tech compiler code window simulation box */}
                <rect x="50" y="65" width="100" height="70" rx="8" fill="rgba(6, 7, 10, 0.85)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1" className="shadow-2xl" />
                {/* Window Controls */}
                <circle cx="62" cy="75" r="2.5" fill="#ef4444" />
                <circle cx="70" cy="75" r="2.5" fill="#f59e0b" />
                <circle cx="78" cy="75" r="2.5" fill="#10b981" />
                {/* Simulated Code Lines */}
                <rect x="62" y="87" width="45" height="3" rx="1.5" fill="rgba(99, 102, 241, 0.5)" />
                <rect x="62" y="95" width="75" height="3" rx="1.5" fill="rgba(255, 255, 255, 0.2)" />
                <rect x="62" y="103" width="60" height="3" rx="1.5" fill="rgba(13, 148, 136, 0.5)" />
                <rect x="62" y="111" width="35" height="3" rx="1.5" fill="rgba(236, 72, 153, 0.4)" />
                
                {/* Orbiting Tech Nodes */}
                <g className="origin-center animate-[spin_20s_linear_infinite]">
                  <circle cx="100" cy="20" r="4.5" fill="#4f46e5" filter="drop-shadow(0 0 6px #4f46e5)" />
                  <path d="M100,20 L100,35" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="0.75" />
                </g>
                <g className="origin-center animate-[spin_12s_linear_infinite_reverse]">
                  <circle cx="20" cy="100" r="4.5" fill="#0d9488" filter="drop-shadow(0 0 6px #0d9488)" />
                  <path d="M20,100 L35,100" stroke="rgba(13, 148, 136, 0.3)" strokeWidth="0.75" />
                </g>
                <g className="origin-center animate-[spin_15s_linear_infinite]">
                  <circle cx="100" cy="180" r="4.5" fill="#7c3aed" filter="drop-shadow(0 0 6px #7c3aed)" />
                </g>
              </svg>
            </div>
            
            {/* Visual tech metrics tags */}
            <div className="absolute top-10 right-0 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2 border-slate-200/5 dark:border-white/5 animate-pulse-slow">
              <span className="text-xl font-bold text-cyber-teal">2026</span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">Standard<br/>Ready</span>
            </div>
 
            <div className="absolute bottom-10 -left-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2 border-slate-200/5 dark:border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-teal shrink-0" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">React Stack</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
