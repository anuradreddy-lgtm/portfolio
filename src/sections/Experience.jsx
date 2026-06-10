import React, { useState } from 'react';
import { TimelineItem } from '../components/TimelineItem';

const timelineData = [
  {
    type: 'education',
    role: 'Bachelor of Technology in Computer Science and Engineering',
    company: 'NxtWave Institute of Technology',
    location: 'Hyderabad, India',
    date: 'Sept 2026 - July 2029 (Expected)',
    description: 'Acquiring deep foundations in web technologies, software development, database management systems, and core algorithms.',
    points: [
      'Maintaining a cumulative CGPA of 3.7 / 4.0.',
      'Developed academic projects including Trust Us Cybersecurity Website, Student Management System, and Quickart.',
      'Acquired core computing science foundations, algorithms, object-oriented concepts, and project lifecycle patterns.'
    ],
  },
  {
    type: 'work',
    role: 'Full Stack Developer (Academic Project)',
    company: 'Event Enquiry & Booking CRM',
    location: 'Academic Project',
    date: '2026',
    description: 'Designed and built a full-stack Customer Relationship Management tool for booking and coordinating events spaces.',
    points: [
      'Created PostgreSQL schemas with date-locking transaction isolations to prevent concurrent booking slot conflicts.',
      'Engineered an interactive frontend dashboard using React JS and responsive Tailwind CSS cards.',
      'Constructed robust Node.js and Express REST API endpoints with query validators.'
    ],
  },
  {
    type: 'work',
    role: 'React & Frontend Developer (Academic Project)',
    company: 'QuickArt & PMTC Portals',
    location: 'Academic Project',
    date: '2025',
    description: 'Engineered lightweight creator portfolios and retail inventory coordination dashboards.',
    points: [
      'Implemented client-side image compression pre-processing, lazy loading, and infinite scroll for high-resolution galleries.',
      'Utilized React Context API for global state management and client-side caching to tackle API rate limits.',
      'Connected custom CSS grid structures with JSON inventory schema buffers for easy maintenance.'
    ],
  },
  {
    type: 'work',
    role: 'Backend Developer (Academic Project)',
    company: 'Student Management & Roster Systems',
    location: 'Academic Project',
    date: '2025',
    description: 'Constructed Python Flask backend controllers and SQLite database relational queries.',
    points: [
      'Formulated SQLite database schemas with GPA calculator helper scripts and search filter indices.',
      'Implemented dynamic check-in and attendance warning triggers utilizing Local Storage synchronization models.'
    ],
  }
];

export const Experience = () => {
  const [filter, setFilter] = useState('all');

  const filteredTimeline = timelineData.filter((item) => {
    if (filter === 'work') return item.type === 'work';
    if (filter === 'education') return item.type === 'education';
    return true;
  });

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200/10 dark:border-white/5 pb-8 mb-16 relative">
          <div className="text-left">
            <span className="coordinate-mono text-xs text-cyber-indigo dark:text-cyber-teal mb-3 block">
              // MILESTONES_REF // 05
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              History & <span className="font-editorial italic font-normal text-cyber-indigo dark:text-cyber-teal">Experience</span>
            </h2>
          </div>
          <div className="coordinate-mono text-xs text-slate-400 dark:text-slate-500 mt-4 md:mt-0 select-none">
            [LEDGER // JOURNEY]
          </div>
          {/* Blueprint Crosshairs */}
          <div className="absolute -bottom-1 -left-1 text-[10px] text-cyber-teal/30 select-none">+</div>
          <div className="absolute -bottom-1 -right-1 text-[10px] text-cyber-teal/30 select-none">+</div>
        </div>

        {/* Timeline Filters */}
        <div className="flex justify-center gap-3 mb-20 select-none">
          {[
            { id: 'all', label: 'All History' },
            { id: 'work', label: 'Project Milestones' },
            { id: 'education', label: 'Education' },
          ].map((btn) => {
            const isSelected = filter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-cyber-indigo border-cyber-indigo text-white shadow-md dark:bg-cyber-teal dark:text-slate-950 dark:border-cyber-teal'
                    : 'border-white/5 bg-slate-900/10 hover:bg-slate-900/25 text-slate-600 dark:text-slate-400 dark:bg-slate-950/20 hover:border-white/10'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central stem line background */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-white/5 md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16 relative z-10">
            {filteredTimeline.map((item, idx) => (
              <TimelineItem
                key={`${item.role}-${idx}`}
                item={item}
                index={idx}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
