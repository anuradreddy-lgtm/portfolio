import React from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden glass-card flex flex-col h-full border border-slate-200/50 dark:border-white/5"
    >
      {/* Card Visual Header Cover */}
      <div className="relative aspect-video overflow-hidden w-full bg-cyber-gray border-b border-slate-200/10 dark:border-white/5 p-4 flex items-center justify-center">
        {/* Soft radial glow */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`} />
        
        {/* Sleek abstract mini editor mockup */}
        <div className="w-full h-full rounded-xl bg-black/50 border border-white/5 p-3 font-mono text-[9px] text-slate-500 dark:text-slate-400 overflow-hidden select-none pointer-events-none relative shadow-inner">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            <span className="text-[8px] text-slate-600 font-sans ml-1">system.js</span>
          </div>
          <code>
            {`// ${project.title}\nconst stack = ${JSON.stringify(project.technologies.slice(0,2))};\nawait initialize(stack);\nconsole.log("Status: Live");`}
          </code>
        </div>

        {/* Hover overlay with detail view buttons */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-indigo text-white hover:bg-cyber-indigo/90 transition-colors text-xs font-semibold shadow-lg cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
            <span>View Details</span>
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

          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyber-indigo dark:group-hover:text-cyber-teal transition-colors mb-2 tracking-tight">
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
