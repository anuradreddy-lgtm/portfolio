import React, { useState } from 'react';
import { User, Code, Compass, Heart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'story',
    label: 'My Journey',
    icon: <User className="w-4 h-4" />,
    content: (
      <div className="space-y-4">
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          I am an enthusiastic and technically skilled Aspiring Full Stack Developer. Currently, I am pursuing my Bachelor of Technology in Computer Science and Engineering at NxtWave Institute of Technology (2026 - 2029).
        </p>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          My developer journey focuses on building functional, user-centric web applications and full-stack solutions. Through building academic and hands-on projects, I have developed a strong foundation in frontend technologies (HTML, CSS, JavaScript, React.js) and backend/database systems (Python, Flask, SQLite, MongoDB, MySQL).
        </p>
      </div>
    ),
  },
  {
    id: 'philosophy',
    label: 'Philosophy',
    icon: <Code className="w-4 h-4" />,
    content: (
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-cyber-teal">Engineered for Longevity</h4>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          I believe code should not just work—it should be written to adapt. I prioritize readability, maintainable architectures, and thorough documentation over quick-fix solutions.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {[
            'Modular, DRY code principles',
            'Strong validations & safety',
            'Accessibility-first layouts',
            'Component-driven state design',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'interests',
    label: 'Interests & Languages',
    icon: <Heart className="w-4 h-4" />,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-cyber-indigo dark:text-cyber-teal mb-2">Languages</h4>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            • <strong>Telugu</strong> — Native<br />
            • <strong>English</strong> — Intermediate<br />
            • <strong>Hindi</strong> — Intermediate
          </p>
        </div>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Beyond technical specifications, I am deeply interested in responsive layout designs, user interactions, and visual layouts. When my screen is closed, I enjoy staying updated with the latest industry trends, exploring tech blogs, and learning new concepts.
        </p>
      </div>
    ),
  },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 border-t border-white/5 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-indigo dark:text-cyber-teal mb-3 block">
            Profile Bio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Myself</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-indigo to-cyber-teal rounded-full mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Visual Pillars Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-indigo/10 blur-[40px] rounded-full" />
              
              <Compass className="w-10 h-10 text-cyber-indigo mb-6 animate-pulse-slow" />
              
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                Core Objectives
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                To build digital solutions that enable business growth, minimize system complexity, and offer immersive experiences to users worldwide.
              </p>
              
              <div className="border-t border-white/5 pt-6 space-y-4">
                {[
                  { title: 'Clean Architecture', desc: 'Maintainable layer-isolated source files.' },
                  { title: 'Performance Polish', desc: 'Fast rendering, optimized bundle sizes.' },
                  { title: 'Full Stack Mastery', desc: 'Seamless interface to database operations.' },
                ].map((pill, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyber-teal/10 flex items-center justify-center text-cyber-teal text-xs font-bold font-mono">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{pill.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{pill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tab Layout */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card p-8 md:p-10 rounded-3xl flex-1 flex flex-col">
              
              {/* Tab Selector Segmented Control */}
              <div className="flex p-1.5 bg-slate-100 dark:bg-cyber-deep/80 rounded-2xl border border-slate-200/50 dark:border-white/5 gap-1.5 mb-8 w-fit select-none">
                {tabs.map((tab) => {
                  const isTabActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                        isTabActive
                          ? 'text-cyber-indigo dark:text-cyber-teal'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                      {isTabActive && (
                        <motion.div
                          layoutId="aboutActiveTab"
                          className="absolute inset-0 bg-white dark:bg-cyber-gray border border-slate-200/80 dark:border-white/10 rounded-xl shadow-md -z-10"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <div className="flex-1 flex flex-col justify-center min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {tabs.find((t) => t.id === activeTab)?.content}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
