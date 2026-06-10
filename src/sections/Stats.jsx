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
      className="glass-panel p-8 asymmetric-rounded text-center flex flex-col items-center justify-center relative group border border-slate-200/10 dark:border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Corner Crosshairs */}
      <div className="absolute top-2.5 left-2.5 coordinate-mono select-none text-[8px] opacity-30">+</div>
      <div className="absolute top-2.5 right-2.5 coordinate-mono select-none text-[8px] opacity-30">+</div>

      <motion.span 
        className="font-display text-4xl sm:text-5xl font-black text-slate-900 dark:text-white select-none"
      >
        {stat.id === 3 ? (count / 10).toFixed(1) : count}{stat.suffix}
      </motion.span>
      <span className="font-mono text-[9px] font-bold text-slate-500 mt-4 uppercase tracking-widest leading-normal">
        // {stat.label}
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
