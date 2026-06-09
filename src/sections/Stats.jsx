import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { id: 1, label: 'Projects Completed', value: 7, suffix: '+' },
  { id: 2, label: 'Technologies Learned', value: 12, suffix: '+' },
  { id: 3, label: 'B.Tech CGPA', value: 37, suffix: ' / 4.0' },
  { id: 4, label: 'GitHub Repositories', value: 9, suffix: '' }
];

const IndividualStat = ({ stat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1500; // 1.5 seconds count duration
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div 
      ref={ref}
      className="glass-card p-8 rounded-3xl text-center flex flex-col items-center justify-center relative group border border-slate-200/50 dark:border-white/5 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-indigo/5 to-cyber-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />
      {/* Top right design dot indicator */}
      <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10 group-hover:bg-cyber-teal transition-colors duration-500" />

      <motion.span 
        className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-indigo via-cyber-teal to-cyber-pink select-none"
      >
        {stat.id === 3 ? (count / 10).toFixed(1) : count}{stat.suffix}
      </motion.span>
      <span className="font-sans text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 mt-3.5 uppercase tracking-widest">
        {stat.label}
      </span>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-16 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <IndividualStat key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
