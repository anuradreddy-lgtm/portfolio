import React from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { motion } from 'framer-motion';

const renderProjectGraphic = (project) => {
  const title = project.title.toLowerCase();
  
  if (title.includes('trust us')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <path d="M 50,10 L 75,18 L 75,38 C 75,48 50,55 50,55 C 50,55 25,48 25,38 L 25,18 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 50,17 L 67,23 L 67,37 C 67,44 50,49 50,49 C 50,49 33,44 33,37 L 33,23 Z" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
        <line x1="50" y1="10" x2="50" y2="55" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="30" r="4" fill="currentColor" />
      </svg>
    );
  }
  if (title.includes('quickart')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <circle cx="50" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="38" y="18" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" transform="rotate(45 50 30)" />
        <circle cx="50" cy="30" r="6" fill="currentColor" />
      </svg>
    );
  }
  if (title.includes('student management') || title.includes('sms')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <rect x="25" y="12" width="50" height="36" fill="none" stroke="currentColor" strokeWidth="1" rx="4" />
        <line x1="25" y1="24" x2="75" y2="24" stroke="currentColor" strokeWidth="0.6" />
        <line x1="25" y1="36" x2="75" y2="36" stroke="currentColor" strokeWidth="0.6" />
        <line x1="40" y1="12" x2="40" y2="48" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
        <circle cx="32" cy="30" r="2" fill="currentColor" />
        <circle cx="32" cy="42" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (title.includes('powertools') || title.includes('pmtc')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <circle cx="50" cy="30" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="10"
            x2="50"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.2"
            transform={`rotate(${angle} 50 30)`}
          />
        ))}
        <circle cx="50" cy="30" r="3" fill="currentColor" />
      </svg>
    );
  }
  if (title.includes('crm') || title.includes('event')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <rect x="25" y="12" width="50" height="36" fill="none" stroke="currentColor" strokeWidth="1" rx="4" />
        <line x1="25" y1="20" x2="75" y2="20" stroke="currentColor" strokeWidth="0.8" />
        {[32, 39, 46, 53, 60, 67].map((x) => (
          <line key={x} x1={x} y1="24" x2={x} y2="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
        ))}
        <rect x="42" y="27" width="16" height="10" fill="currentColor" opacity="0.15" rx="1" />
      </svg>
    );
  }
  if (title.includes('child') || title.includes('health') || title.includes('allergy')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <path d="M 15,30 L 35,30 L 40,15 L 45,45 L 50,25 L 53,35 L 57,30 L 85,30" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="45" r="2" fill="currentColor" />
        <circle cx="40" cy="15" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (title.includes('attendance')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <rect x="30" y="15" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" rx="1.5" />
        <path d="M 32,19 L 34,21 L 37,17" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="27" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" rx="1.5" />
        <path d="M 32,31 L 34,33 L 37,29" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="39" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" rx="1.5" />
        <line x1="45" y1="19" x2="70" y2="19" stroke="currentColor" strokeWidth="0.8" />
        <line x1="45" y1="31" x2="70" y2="31" stroke="currentColor" strokeWidth="0.8" />
        <line x1="45" y1="43" x2="70" y2="43" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    );
  }
  if (title.includes('hunger') || title.includes('bites')) {
    return (
      <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
        <path d="M 25,38 C 25,23 75,23 75,38 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="22" r="2.5" fill="currentColor" />
        <circle cx="50" cy="32" r="2" fill="currentColor" />
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 100 60" className="w-24 h-14 text-cyber-indigo dark:text-cyber-teal opacity-45 group-hover:opacity-75 transition-opacity duration-300">
      <circle cx="50" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
      <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
      <rect x="44" y="24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
};

export const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative asymmetric-rounded overflow-hidden glass-panel flex flex-col h-full border border-slate-200/10 dark:border-white/5 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Card Visual Header Cover */}
      <div className="relative aspect-video overflow-hidden w-full bg-[#020304]/80 border-b border-slate-200/10 dark:border-white/5 p-4 flex items-center justify-center">
        {/* Soft radial glow */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
        
        {/* Blueprint markers */}
        <div className="absolute top-2 left-3 coordinate-mono select-none text-[8px] opacity-40">// CASE_0{project.id}</div>
        <div className="absolute top-2 right-3 coordinate-mono select-none text-[8px] opacity-40">[DRAFT_SYS]</div>
        <div className="absolute bottom-2 left-3 coordinate-mono select-none text-[8px] opacity-40">+</div>
        <div className="absolute bottom-2 right-3 coordinate-mono select-none text-[8px] opacity-40">+</div>

        {/* Dynamic Project SVG Diagram representation */}
        <div className="relative z-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
          {renderProjectGraphic(project)}
        </div>

        {/* Hover overlay with detail view buttons */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyber-indigo text-white hover:bg-cyber-indigo/95 transition-colors text-xs font-bold shadow-lg cursor-pointer uppercase tracking-wider"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Explore Case</span>
          </button>
        </div>
      </div>

      {/* Card Body Information */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white transition-all group-hover:text-cyber-indigo dark:group-hover:text-cyber-teal group-hover:underline decoration-cyber-indigo dark:decoration-cyber-teal decoration-1.5 underline-offset-4 mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Links footer */}
        <div className="flex items-center justify-between border-t border-slate-200/50 dark:border-white/5 pt-4 mt-auto">
          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-bold text-cyber-indigo dark:text-cyber-teal hover:underline flex items-center gap-1 cursor-pointer"
          >
            Explore Case Study &rarr;
          </button>
          
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-slate-200/50 dark:border-white/5 bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              title="View Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-slate-200/50 dark:border-white/5 bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              title="Live Deployment"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
