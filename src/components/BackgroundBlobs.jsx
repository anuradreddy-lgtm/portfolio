import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Dark Theme Background */}
      <div className="absolute inset-0 bg-cyber-dark dark:bg-cyber-dark bg-[#0f172a] transition-colors duration-500" />
      
      {/* Glowing Blob 1 - Indigo */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-cyber-indigo/20 dark:bg-cyber-indigo/15 blur-[100px] md:w-[600px] md:h-[600px]"
      />

      {/* Glowing Blob 2 - Teal */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -80, 0],
          scale: [1.2, 0.9, 1.1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-10 right-10 w-80 h-80 rounded-full bg-cyber-teal/20 dark:bg-cyber-teal/15 blur-[120px] md:w-[500px] md:h-[500px]"
      />

      {/* Glowing Blob 3 - Pink */}
      <motion.div
        animate={{
          x: [0, 120, -100, 0],
          y: [0, 80, 100, 0],
          scale: [0.9, 1.1, 0.8, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-cyber-pink/20 dark:bg-cyber-pink/10 blur-[110px] md:w-[450px] md:h-[450px]"
      />

      {/* Interactive Mesh overlay for grid effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};
