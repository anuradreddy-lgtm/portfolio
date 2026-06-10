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
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200/10 dark:border-white/5 pb-8 mb-16 relative">
          <div className="text-left">
            <span className="coordinate-mono text-xs text-cyber-indigo dark:text-cyber-teal mb-3 block">
              // REVIEWS_REF // 07
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Client <span className="font-editorial italic font-normal text-cyber-indigo dark:text-cyber-teal">Testimonials</span>
            </h2>
          </div>
          <div className="coordinate-mono text-xs text-slate-400 dark:text-slate-500 mt-4 md:mt-0 select-none">
            [REVIEWS // VERDICTS]
          </div>
          {/* Blueprint Crosshairs */}
          <div className="absolute -bottom-1 -left-1 text-[10px] text-cyber-teal/30 select-none">+</div>
          <div className="absolute -bottom-1 -right-1 text-[10px] text-cyber-teal/30 select-none">+</div>
        </div>

        {/* Carousel slide container */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 md:p-12 asymmetric-rounded-lg relative w-full text-center border border-slate-200/10 dark:border-white/5"
            >
              {/* Corner coordinate crosses */}
              <div className="absolute top-3 left-3 coordinate-mono select-none">+</div>
              <div className="absolute top-3 right-3 coordinate-mono select-none">+</div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                ))}
              </div>

              {/* Text review in elegant serif italic */}
              <p className="font-editorial italic text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 select-text">
                "{current.text}"
              </p>

              {/* Reviewer Details */}
              <div className="border-t border-slate-200/10 dark:border-white/5 pt-6 inline-block">
                <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {current.name}
                </h4>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                  {current.role} &bull; <span className="text-cyber-indigo dark:text-cyber-teal">{current.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-slate-200/10 dark:border-white/5 bg-slate-100/50 dark:bg-cyber-deep/80 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-slate-200/10 dark:border-white/5 bg-slate-100/50 dark:bg-cyber-deep/80 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bullet Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8 select-none">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? 'w-4 bg-cyber-indigo dark:bg-cyber-teal' : 'bg-slate-700/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
