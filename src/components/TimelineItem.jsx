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
          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/50 dark:border-white/5 bg-slate-100/50 dark:bg-cyber-deep/80 text-xs font-bold text-cyber-indigo dark:text-cyber-teal shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{item.date}</span>
        </motion.div>
      </div>

      {/* Vertical center node line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-indigo/30 via-cyber-teal/20 to-cyber-pink/10 md:left-1/2 md:-translate-x-1/2 md:col-span-1 flex justify-center">
        {/* Animated pulsating dot */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`absolute top-2 w-5.5 h-5.5 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-lg bg-white dark:bg-cyber-gray z-10 ${
            isWork ? 'text-cyber-indigo' : 'text-cyber-teal'
          }`}
        >
          {isWork ? <Briefcase className="w-2.5 h-2.5" /> : <GraduationCap className="w-2.5 h-2.5" />}
        </motion.div>
      </div>

      {/* Info card (left/right distribution) */}
      <div className={`md:col-span-4 ${index % 2 === 0 ? 'md:order-last' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-6 rounded-2xl relative border border-slate-200/50 dark:border-white/5"
        >
          {/* Dynamic shadow glow */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-750 bg-gradient-to-tr ${
            isWork ? 'from-cyber-indigo via-cyber-pink to-transparent' : 'from-cyber-teal via-cyber-indigo to-transparent'
          } pointer-events-none`} />

          {/* Date for Mobile View */}
          <div className="md:hidden flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-cyber-indigo dark:text-cyber-teal text-[10px] font-bold w-fit mb-3">
            <Calendar className="w-3 h-3" />
            <span>{item.date}</span>
          </div>

          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyber-indigo dark:group-hover:text-cyber-teal transition-colors tracking-tight">
            {item.role}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4 font-bold">
            <span className="text-slate-800 dark:text-slate-200">{item.company}</span>
            <span className="text-slate-300 dark:text-slate-800">&bull;</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {item.description}
          </p>

          {item.points && (
            <ul className="space-y-2">
              {item.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isWork ? 'bg-cyber-indigo' : 'bg-cyber-teal'}`} />
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
