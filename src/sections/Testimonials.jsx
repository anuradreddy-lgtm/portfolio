import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    company: 'Innovate Inc.',
    text: "Anurag delivered our analytics dashboard system ahead of schedule. The quality of backend optimization was top-notch, reducing our server load by 40% while preserving a highly responsive front-end dashboard.",
    stars: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CTO',
    company: 'CloudScale',
    text: "Working with Anurag was an absolute pleasure. His attention to modern UI micro-interactions and performance polish on our React frontend resulted in immediate praises from our platform users.",
    stars: 5,
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Founder',
    company: 'DesignFlow',
    text: "Anurag has a unique capability to bridge engineering specs with visual ergonomics. The real-time canvas collaboration system he designed is both highly performant and visually stunning.",
    stars: 5,
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Shift every 6 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden select-text">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-indigo dark:text-cyber-teal mb-3 block">
            Reviews
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-indigo to-cyber-teal rounded-full mt-4" />
        </div>

        {/* Carousel slide container */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 rounded-3xl relative w-full text-center"
            >
              {/* Quote Mark Background */}
              <Quote className="absolute top-6 left-8 w-14 h-14 text-cyber-indigo/10 dark:text-cyber-teal/5 pointer-events-none" />
              
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                ))}
              </div>

              {/* Text review */}
              <p className="font-sans text-sm md:text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8 select-text">
                "{current.text}"
              </p>

              {/* Reviewer Details */}
              <div>
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {current.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {current.role} &bull; <span className="text-cyber-teal">{current.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 rounded-xl border border-white/5 bg-slate-950/20 text-slate-400 hover:text-white hover:border-cyber-indigo/35 transition-all "
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 rounded-xl border border-white/5 bg-slate-950/20 text-slate-400 hover:text-white hover:border-cyber-teal/35 transition-all "
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === idx ? 'w-6 bg-cyber-teal' : 'bg-slate-700/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
