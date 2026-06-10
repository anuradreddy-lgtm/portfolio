import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Trust Us',
    category: 'Frontend',
    description: 'A responsive and modern cybersecurity service website showcasing services like penetration testing and cloud security.',
    longDescription: 'Developed a responsive and modern cybersecurity service website inspired by real-world enterprise platforms. The project showcases services such as penetration testing, cloud security, compliance management, managed IT services, and risk assessment through an interactive interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    gradient: 'from-emerald-600 to-teal-500',
    github: 'https://github.com/anuradreddy-lgtm/Trust-us',
    demo: 'https://github.com/anuradreddy-lgtm/Trust-us',
    features: ['Responsive service showcase layout', 'Modern aesthetic graphics', 'Client contact and enquiry forms'],
    challenge: 'Ensuring absolute responsiveness of cybersecurity grids and tables across various older device displays.',
    solution: 'Utilized CSS custom properties with feature-query (@supports) fallbacks and flexbox/grid models for fluid responsive layouts.'
  },
  {
    id: 2,
    title: 'QuickArt Marketplace',
    category: 'Full Stack',
    description: 'A single-page digital portfolio application using React, Fetch/Axios, and Context API for global state.',
    longDescription: 'Developed a single-page application using React JS, leveraging React Hooks such as useState and useEffect for state management. Integrated REST API endpoints using Fetch API and Axios for data retrieval, custom image galleries with lazy loading/infinite scroll, and React Context API for global state.',
    technologies: ['React JS', 'JavaScript (ES6)', 'REST API', 'Fetch API', 'Axios', 'Context API', 'Jest'],
    gradient: 'from-violet-600 to-fuchsia-500',
    github: 'https://github.com/anuradreddy-lgtm/Quickart',
    demo: 'https://github.com/anuradreddy-lgtm/Quickart',
    features: ['React Hooks state management', 'Custom lazy loading & infinite scroll', 'Context API state architecture', 'Jest testing suite integration'],
    challenge: 'Handling API rate limits during testing and initial render operations.',
    solution: 'Implemented client-side caching strategies and local state buffers to reduce redundant API fetches.'
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Backend',
    description: 'A Python-powered academic portal connecting student profiles, grades, and relational SQL queries.',
    longDescription: 'Designed and implemented a Python-based backend using Flask for handling HTTP requests and responses. Developed a SQL database schema for storing student records, courses, and enrollment information, and created CRUD operations for managing data.',
    technologies: ['Python', 'Flask', 'SQL', 'SQLite'],
    gradient: 'from-blue-600 to-indigo-700',
    github: 'https://github.com/anuradreddy-lgtm/student-management-system',
    demo: 'https://github.com/anuradreddy-lgtm/student-management-system',
    features: ['Flask route controllers', 'SQLite relational tables schema', 'GPA calculation scripts', 'Secure parameterized queries'],
    challenge: 'Safely handling relational cohort query pipelines without using high-overhead database ORMs.',
    solution: 'Designed custom parameterized SQL query builders to prevent SQL injections and execute complex data checks.'
  },
  {
    id: 4,
    title: 'PMTC Powertools Portal',
    category: 'Full Stack',
    description: 'An online e-commerce catalog created to expand sales and list inventory catalog specifications.',
    longDescription: 'An online web portal designed to boost shop sales and coordinate listings. Customers can view tool specs, catalog details, and check pricing information, while administrators can update catalogs.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB'],
    gradient: 'from-amber-600 to-orange-600',
    github: 'https://github.com/anuradreddy-lgtm/PMTCpowertools',
    demo: 'https://github.com/anuradreddy-lgtm/PMTCpowertools',
    features: ['Dynamic inventory listing catalog', 'Admin listings coordinator', 'Sales promotion filters'],
    challenge: 'Ensuring shop owners can easily update catalogs without database administration knowledge.',
    solution: 'Engineered a JSON data parser schema connecting inventory lists directly to responsive layouts.'
  },
  {
    id: 5,
    title: 'Event Enquiry & Booking CRM',
    category: 'Full Stack',
    description: 'A customer relationship manager for event centers to organize booking queues and calendar slots.',
    longDescription: 'A full-stack CRM solution built for event managers to handle client schedules, booking queues, calendar time slots to prevent overlaps, quotation negotiations, and automated notifications.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
    gradient: 'from-indigo-600 to-purple-500',
    github: 'https://github.com/anuradreddy-lgtm/Event-Enquiry-Booking-CRM',
    demo: 'https://github.com/anuradreddy-lgtm/Event-Enquiry-Booking-CRM',
    features: ['Automated conflict scheduler', 'Interactive calendar dashboards', 'CRM client pipeline tracking'],
    challenge: 'Preventing double-booking of slots during high concurrent client bookings requests.',
    solution: 'Implemented date-lock SQL triggers and database transaction isolations to enforce slot exclusion.'
  },
  {
    id: 6,
    title: 'Child Health & Allergy Tracker',
    category: 'Full Stack',
    description: 'A pediatric logger for vaccines schedules, milestones, and dietary allergy registers.',
    longDescription: 'A helper dashboard helping pediatricians and parents track immunization schedules, pediatric growth markers, dietary allergic reactions, and medical checkups logs over time.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'HTML5', 'CSS3'],
    gradient: 'from-teal-500 to-cyan-600',
    github: 'https://github.com/anuradreddy-lgtm/Child-Health-Allergy-Tracker',
    demo: 'https://github.com/anuradreddy-lgtm/Child-Health-Allergy-Tracker',
    features: ['Milestone maps visualization', 'Immunization calendar alarms', 'Allergic reaction logs database'],
    challenge: 'Structuring flexible form components to track varied allergy symptoms and severity.',
    solution: 'Designed a dynamic JSON form schema that lets users specify custom symptom levels dynamically.'
  },
  {
    id: 7,
    title: 'Smart Student Attendance Tracker',
    category: 'Frontend',
    description: 'A register dashboard for coaching centres to log roster attendance, checks, and analytics.',
    longDescription: 'An intuitive registration dashboard engineered for coaching centers. Educators can record student check-ins, check rosters, generate attendance graphics, and flag missing students.',
    technologies: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Local Storage'],
    gradient: 'from-pink-500 to-rose-600',
    github: 'https://github.com/anuradreddy-lgtm/Smart-Student-Attendance-Tracker-for-Tuition-Coaching-Centres',
    demo: 'https://github.com/anuradreddy-lgtm/Smart-Student-Attendance-Tracker-for-Tuition-Coaching-Centres',
    features: ['Quick check-in widgets', 'Roster attendance logs', 'Local Storage synchronization', 'Absentee alert flags'],
    challenge: 'Persisting student records without requiring remote API databases.',
    solution: 'Created an automated sync interface saving logs to LocalStorage, with import/export capabilities.'
  },
  {
    id: 8,
    title: 'Hunger Bites',
    category: 'Frontend',
    description: 'A modern, responsive food ordering application built with React, TypeScript, and Vite.',
    longDescription: 'Hunger Bites is a modern, responsive web application built to streamline the food ordering experience. Designed with a focus on performance and clean UI, this project demonstrates a robust implementation of modern frontend technologies including React component architectures, type-safe development using TypeScript, and optimized build setups using Vite.',
    technologies: ['React JS', 'TypeScript', 'Vite', 'CSS3', 'TailwindCSS'],
    gradient: 'from-amber-500 to-red-600',
    github: 'https://github.com/anuradreddy-lgtm/hunger-bites',
    demo: 'https://hunger-bites-one.vercel.app',
    features: ['Interactive component-driven UI', 'Type-safe state and prop systems', 'Vite-powered fast page loads', 'Clean responsive menus and ordering flow'],
    challenge: 'Enforcing type-safety across dynamic cart item calculations and custom theme parameters.',
    solution: 'Designed robust TypeScript interfaces and generics to handle varying order details safely without casting types.'
  },
  {
    id: 9,
    title: 'Developer Portfolio',
    category: 'Frontend',
    description: 'A premium, handcrafted developer portfolio website with a built-in interactive CLI terminal console.',
    longDescription: 'Developed a premium, highly responsive developer portfolio website showcasing projects, skills, experience, and certifications. Features custom interactive elements, an editorial layout with asymmetric spacing, micro-animations, custom dark mode, and an interactive macOS-style bash shell terminal emulator.',
    technologies: ['React JS', 'Vite', 'Framer Motion', 'TailwindCSS', 'JavaScript (ES6)'],
    gradient: 'from-blue-600 to-indigo-600',
    github: 'https://github.com/anuradreddy-lgtm/portfolio',
    demo: 'https://portfolio-ten-steel-29.vercel.app',
    features: ['Interactive developer CLI terminal Console', 'Premium dark/light mode toggle', 'Asymmetric layout grid design', 'Framer Motion custom page transitions'],
    challenge: 'Designing a fully functional shell emulator with matrix digital code waterfall and commands history in React.',
    solution: 'Constructed custom react custom hooks to handle input buffers, tab completion, history tracking, and HTML5 canvas matrix rendering.'
  }
];

const filterCategories = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-indigo dark:text-cyber-teal mb-3 block">
            Case Studies
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-indigo to-cyber-teal rounded-full mt-4" />
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Tab Categories */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {filterCategories.map((category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-cyber-indigo text-white border-cyber-indigo dark:bg-cyber-indigo dark:border-cyber-indigo dark:text-white'
                      : 'border-slate-200 dark:border-slate-800 bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl glass-card border border-slate-200 dark:border-slate-800/80 focus:border-cyber-indigo/40 focus:ring-0 text-sm outline-none text-slate-800 dark:text-white placeholder-slate-500 transition-all"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setActiveProjectModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="glass-panel p-12 rounded-3xl text-center text-slate-400 font-medium">
            No projects matched your filters or search terms. Try searching "React" or "Docker"!
          </div>
        )}

        {/* Details Modal */}
        <AnimatePresence>
          {activeProjectModal && (
            <ProjectModal
              project={activeProjectModal}
              onClose={() => setActiveProjectModal(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
