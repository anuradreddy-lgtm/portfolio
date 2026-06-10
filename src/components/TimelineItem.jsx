import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const TimelineItem = ({ item, index }) => {
  const isWork = item.type === 'work';

  return (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-9 md:gap-8 group select-text">
      {/* Date section for Desktop (left side for odd items, right side for even items) */}
      <div className={`hidden md:block md:col-span-4 ${index % 2 === 0 ? 'text-right' : 'md:order-last text-left'}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 coordinate-mono text-cyber-indigo dark:text-cyber-teal"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{item.date}</span>
        </motion.div>
      </div>

      {/* Vertical center node line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-white/5 md:left-1/2 md:-translate-x-1/2 md:col-span-1 flex justify-center">
        {/* Pulsating technical indicator node */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute top-2 w-3.5 h-3.5 rounded-full border border-cyber-indigo bg-white dark:bg-cyber-dark flex items-center justify-center shadow-md z-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyber-indigo dark:bg-cyber-teal animate-ping" />
        </motion.div>
      </div>

      {/* Info card (left/right distribution) */}
      <div className={`md:col-span-4 ${index % 2 === 0 ? 'md:order-last' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-panel p-6 md:p-8 asymmetric-rounded relative border border-slate-200/10 dark:border-white/5 transition-transform duration-300 group-hover:-translate-y-1"
        >
          {/* Corner crosses */}
          <div className="absolute top-2.5 left-2.5 coordinate-mono select-none text-[8px] opacity-40">+</div>
          <div className="absolute top-2.5 right-2.5 coordinate-mono select-none text-[8px] opacity-40">+</div>

          {/* Date for Mobile View */}
          <div className="md:hidden flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-cyber-indigo dark:text-cyber-teal text-[10px] font-bold w-fit mb-4">
            <Calendar className="w-3 h-3" />
            <span>{item.date}</span>
          </div>

          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 transition-all group-hover:text-cyber-indigo dark:group-hover:text-cyber-teal group-hover:underline decoration-cyber-indigo dark:decoration-cyber-teal decoration-1.5 underline-offset-4 tracking-tight">
            {item.role}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-4 font-bold">
            <span className="text-slate-800 dark:text-slate-200">{item.company}</span>
            <span className="text-slate-300 dark:text-slate-800 select-none">&bull;</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {item.location}
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {item.description}
          </p>

          {item.points && (
            <ul className="space-y-2.5 border-t border-slate-200/10 dark:border-white/5 pt-4">
              {item.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  <span className={`w-1 h-1 rounded-full shrink-0 mt-2 ${isWork ? 'bg-cyber-indigo' : 'bg-cyber-teal'}`} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
};
