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
    <section id="home" className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden select-text grid-bg">
      {/* Geolocation coordinate tags to establish handcrafted design theme */}
      <div className="absolute top-24 left-8 coordinate-mono select-none hidden md:block">
        LOC: 17.3850° N / 78.4867° E (HYD)
      </div>
      <div className="absolute top-24 right-8 coordinate-mono select-none hidden md:block">
        [SYS_REF // B_2026]
      </div>
      <div className="absolute bottom-10 left-8 coordinate-mono select-none hidden md:block">
        PORTFOLIO_DRAFT // SEC_01
      </div>

      {/* Soft gradient blur lights for designer aesthetics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyber-indigo/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyber-teal/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative">
        
        {/* Left Column: Heading and Action triggers */}
        <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-indigo/15 bg-cyber-indigo/5 text-cyber-indigo dark:text-cyber-teal font-sans text-[10px] font-bold uppercase tracking-wider mb-8 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-teal animate-ping" />
            <span>Available for Hire</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-6"
          >
            Hi, I'm <span className="text-gradient">Anurad</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center h-10"
          >
            <span className="text-cyber-indigo dark:text-cyber-teal font-mono mr-2">&lt;</span>
            <span className="border-r-2 border-cyber-pink pr-1.5 terminal-cursor">{displayText}</span>
            <span className="text-cyber-indigo dark:text-cyber-teal font-mono ml-2">/&gt;</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10"
          >
            Enthusiastic and technically skilled Aspiring Full Stack Developer with foundational knowledge in JavaScript, React, and Node.js. Passionate about building functional, user-centric web applications and full-stack solutions.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-cyber-indigo text-white hover:bg-cyber-indigo/95 transition-all font-semibold text-xs uppercase tracking-wider shadow-lg shadow-cyber-indigo/10 hover:shadow-cyber-indigo/25 group"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/5 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 transition-all font-semibold text-xs uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Links:</span>
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
                  className="p-2.5 rounded-full border border-slate-200/50 dark:border-white/5 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
 
        {/* Right Column: Drafting sketch blueprint diagram in minimal style */}
        <div className="lg:col-span-5 flex items-center justify-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-80 h-80 sm:w-96 sm:h-96"
          >
            {/* Soft grid blueprint alignment container */}
            <div className="w-full h-full flex items-center justify-center animate-float">
              <svg viewBox="0 0 200 200" className="w-full h-full max-w-[360px]">
                {/* Dotted Grid Background */}
                <defs>
                  <pattern id="blueprintGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.5" fill="rgba(99, 102, 241, 0.12)" />
                  </pattern>
                </defs>
                
                {/* Blueprint Border Layout */}
                <rect x="8" y="8" width="184" height="184" fill="url(#blueprintGrid)" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="0.8" rx="12" />
                
                {/* Corner Crosshair Coordinates (+) */}
                <path d="M 4,8 L 12,8 M 8,4 L 8,12" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.8" />
                <path d="M 188,8 L 196,8 M 192,4 L 192,12" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.8" />
                <path d="M 4,192 L 12,192 M 8,188 L 8,196" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.8" />
                <path d="M 188,192 L 196,192 M 192,188 L 192,196" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.8" />
                
                {/* Layout axes intersecting at center */}
                <line x1="8" y1="100" x2="192" y2="100" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="100" y1="8" x2="100" y2="192" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Handcrafted coordinate circle targets */}
                <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(99, 102, 241, 0.04)" strokeWidth="0.8" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(13, 148, 136, 0.06)" strokeWidth="0.8" />

                {/* Simulated Wireframe browser mockup representing case folders */}
                <g transform="translate(32, 45)">
                  <rect x="0" y="0" width="136" height="100" fill="rgba(6, 7, 10, 0.7)" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.8" rx="8" />
                  
                  {/* Mock browser header divider line */}
                  <line x1="0" y1="20" x2="136" y2="20" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
                  
                  {/* Browser window circles */}
                  <circle cx="10" cy="10" r="2" fill="rgba(239, 68, 68, 0.5)" />
                  <circle cx="17" cy="10" r="2" fill="rgba(245, 158, 11, 0.5)" />
                  <circle cx="24" cy="10" r="2" fill="rgba(16, 185, 129, 0.5)" />

                  <text x="40" y="13" className="fill-slate-500 font-mono text-[5px] tracking-widest uppercase">schema_draft.jsx</text>
                  
                  {/* Schematic outline lines */}
                  <line x1="12" y1="36" x2="62" y2="36" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
                  <line x1="12" y1="46" x2="112" y2="46" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                  <line x1="12" y1="56" x2="92" y2="56" stroke="rgba(13, 148, 136, 0.3)" strokeWidth="1" />
                  <line x1="12" y1="66" x2="72" y2="66" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                  <line x1="12" y1="76" x2="42" y2="76" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="1" />

                  {/* Intersecting technical ticks */}
                  <path d="M 112,43 L 112,49 M 92,53 L 92,59" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                </g>

                {/* Draft measurement labels */}
                <text x="14" y="24" className="fill-slate-600 dark:fill-slate-500 font-mono text-[5px] tracking-widest">GRID // scale_0.5</text>
                <text x="148" y="180" className="fill-cyber-teal font-mono text-[5px] tracking-widest">REF: HYD_26</text>
              </svg>
            </div>
            
            {/* Visual tech metrics tags styled as designer notes */}
            <div className="absolute top-8 right-2 glass-card px-4 py-2 rounded-full flex items-center gap-1.5 border-slate-200/5 dark:border-white/5 animate-pulse-slow">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">DRAFT_ID</span>
              <span className="text-xs font-bold text-cyber-teal">#001</span>
            </div>
 
            <div className="absolute bottom-8 left-0 glass-card px-4 py-2.5 rounded-full flex items-center gap-2 border-slate-200/5 dark:border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-indigo animate-ping" />
              <span className="text-[9px] font-mono tracking-widest text-slate-800 dark:text-slate-200 uppercase font-bold">Vite // React Stack</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
