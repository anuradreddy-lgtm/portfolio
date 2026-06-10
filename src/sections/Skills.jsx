import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Settings, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Layout className="w-4 h-4" />,
    skills: [
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'React.js', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Responsive Web Design', level: 88 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Database',
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask Framework', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'SQLite & MySQL', level: 85 },
      { name: 'DBMS Concepts', level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & GenAI',
    icon: <Cloud className="w-4 h-4" />,
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code IDE', level: 90 },
      { name: 'Basic GenAI', level: 75 },
    ],
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200/10 dark:border-white/5 pb-8 mb-16 relative">
          <div className="text-left">
            <span className="coordinate-mono text-xs text-cyber-indigo dark:text-cyber-teal mb-3 block">
              // TOOLKIT_REF // 03
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Technical <span className="font-editorial italic font-normal text-cyber-indigo dark:text-cyber-teal">Skills</span>
            </h2>
          </div>
          <div className="coordinate-mono text-xs text-slate-400 dark:text-slate-500 mt-4 md:mt-0 select-none">
            [STACK // CAPABILITIES]
          </div>
          {/* Blueprint Crosshair */}
          <div className="absolute -bottom-1 -left-1 text-[10px] text-cyber-teal/30 select-none">+</div>
          <div className="absolute -bottom-1 -right-1 text-[10px] text-cyber-teal/30 select-none">+</div>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Category Menu list */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {skillCategories.map((category) => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'border-cyber-indigo bg-cyber-indigo/5 text-cyber-indigo dark:border-cyber-indigo dark:text-cyber-indigo shadow-md'
                      : 'border-slate-200 dark:border-slate-800 bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`}
                >
                  {/* Corner crosses on select */}
                  {isSelected && (
                    <>
                      <div className="absolute top-1 left-1 text-[8px] text-cyber-indigo/50 select-none">+</div>
                      <div className="absolute top-1 right-1 text-[8px] text-cyber-indigo/50 select-none">+</div>
                    </>
                  )}

                  <div className="flex items-center gap-3.5 z-10">
                    <span className={`p-2 rounded-xl transition-colors ${
                      isSelected ? 'bg-cyber-indigo text-white dark:bg-cyber-indigo dark:text-white' : 'bg-slate-100 dark:bg-slate-900/60 text-slate-500'
                    }`}>
                      {category.icon}
                    </span>
                    <span className="font-display text-sm font-bold tracking-widest uppercase">
                      {category.label}
                    </span>
                  </div>
                  <Award className={`w-4 h-4 transition-transform z-10 ${isSelected ? 'scale-115 text-cyber-indigo' : 'text-slate-500 opacity-0 group-hover:opacity-100'}`} />
                  
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-cyber-indigo/5 to-cyber-indigo/10 -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side: Skill indicator progress cards grid */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 md:p-10 asymmetric-rounded-lg border border-slate-200/10 dark:border-white/5 min-h-[420px] flex flex-col justify-center relative">
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 coordinate-mono select-none">+</div>
              <div className="absolute top-3 right-3 coordinate-mono select-none">+</div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
                >
                  {activeSkills.map((skill) => {
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col gap-3.5 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/50 hover:border-cyber-indigo/35 dark:hover:border-cyber-indigo/35 transition-all duration-300 group shadow-sm text-left"
                      >
                        {/* Title and descriptions */}
                        <div className="flex justify-between items-center text-left">
                          <div>
                            <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyber-indigo dark:group-hover:text-cyber-teal transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-bold">
                              {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-cyber-indigo dark:text-cyber-teal">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Premium Horizontal meter bar */}
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-cyber-deep/80 rounded-full overflow-hidden border border-slate-200/10 dark:border-white/5 relative p-0.5">
                          <motion.div
                             initial={{ width: 0 }}
                             animate={{ width: `${skill.level}%` }}
                             transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                             className="h-full rounded-full bg-cyber-indigo dark:bg-cyber-teal relative"
                          >
                             <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950 border border-cyber-indigo dark:border-cyber-teal" />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
