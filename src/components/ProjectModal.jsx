import React from 'react';
import { X, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { motion } from 'framer-motion';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-text">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel shadow-2xl border border-white/10 z-10 flex flex-col md:flex-row cursor-default overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-slate-900/60 text-slate-400 hover:text-white hover:border-white/25 transition-all z-20 "
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Mockup Showcase */}
        <div className={`md:w-1/2 w-full min-h-[200px] md:min-h-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5`}>
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="relative z-10 font-mono text-xs text-white/50 w-full overflow-hidden leading-relaxed select-none">
            <div className="mb-2 text-cyber-teal font-bold">// CASE STUDY SUMMARY</div>
            <div className="mb-1"><span className="text-cyber-pink">const</span> project = <span className="text-white">"{project.title}"</span>;</div>
            <div className="mb-1"><span className="text-cyber-pink">const</span> scope = <span className="text-white">"Full Stack Application"</span>;</div>
            <div className="mb-3"><span className="text-cyber-pink">const</span> difficulty = <span className="text-white">"Enterprise Level"</span>;</div>
            
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-[10px] space-y-1">
              <div><span className="text-slate-400"># Core features implemented:</span></div>
              {project.features ? project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-slate-300">
                  <span className="text-green-400">&bull;</span> {feat}
                </div>
              )) : (
                <>
                  <div className="flex items-center gap-1.5 text-slate-300"><span className="text-green-400">&bull;</span> Real-time synchronizations</div>
                  <div className="flex items-center gap-1.5 text-slate-300"><span className="text-green-400">&bull;</span> OAuth authentication integrations</div>
                  <div className="flex items-center gap-1.5 text-slate-300"><span className="text-green-400">&bull;</span> Database replication optimizations</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions & Metadata */}
        <div className="md:w-1/2 w-full p-8 md:p-10 flex flex-col justify-between overflow-y-auto bg-cyber-deep dark:bg-cyber-deep bg-slate-900">
          <div>
            {/* Category tag */}
            <span className="text-xs font-bold tracking-widest text-cyber-teal uppercase mb-2 block">
              {project.category || 'Featured Application'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
              {project.title}
            </h2>

            {/* Description narrative */}
            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {project.longDescription || project.description}
            </p>

            {/* Technologies list */}
            <h3 className="font-display text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-lg border border-white/5 bg-white/5 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Technical Highlights / Challenges */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">The Challenge</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{project.challenge || 'Solving high latency issues and optimizing database response times under heavy user concurrency.'}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 text-cyber-indigo shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">The Solution</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{project.solution || 'Implemented specialized caching patterns using Redis alongside query index optimizations, reducing API loads by 45%.'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5 mt-auto">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyber-indigo to-cyber-teal text-white hover:opacity-95 transition-all text-sm font-bold shadow-lg shadow-cyber-indigo/25"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Site</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-800 dark:text-white transition-all text-sm font-bold "
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
