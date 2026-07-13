import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/weddingData';
import Mandala from '../assets/motifs/Mandala';

const NamesReveal = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const nameRightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const ampersandVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate pointer-events-none">
        <Mandala size={500} color="var(--color-gold)" opacity={0.06} />
      </div>

      {/* Top flourish */}
      <motion.div
        className="mb-6"
        variants={subtitleVariants}
      >
        <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
          <path d="M0 10 Q30 0 60 10 Q90 20 120 10" stroke="var(--color-gold)" strokeWidth="0.8" strokeOpacity="0.4" />
          <path d="M20 10 Q45 3 60 10 Q75 17 100 10" stroke="var(--color-gold)" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="60" cy="10" r="2" fill="var(--color-gold)" fillOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Bride name */}
      <motion.h1
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light gold-shimmer leading-tight"
        variants={nameVariants}
      >
        {wedding.bride}
      </motion.h1>

      {/* Ampersand */}
      <motion.div
        className="my-4 md:my-6 relative"
        variants={ampersandVariants}
      >
        <span className="font-script text-4xl md:text-6xl text-gold">
          &
        </span>
        {/* Small flourish SVGs around the & */}
        <svg className="absolute -left-8 top-1/2 -translate-y-1/2" width="24" height="2" viewBox="0 0 24 2">
          <line x1="0" y1="1" x2="24" y2="1" stroke="var(--color-gold)" strokeWidth="0.5" strokeOpacity="0.4" />
        </svg>
        <svg className="absolute -right-8 top-1/2 -translate-y-1/2" width="24" height="2" viewBox="0 0 24 2">
          <line x1="0" y1="1" x2="24" y2="1" stroke="var(--color-gold)" strokeWidth="0.5" strokeOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Groom name */}
      <motion.h1
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light gold-shimmer leading-tight"
        variants={nameRightVariants}
      >
        {wedding.groom}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-8 md:mt-10 font-heading text-xs sm:text-sm tracking-[0.2em] text-gold-light/70 uppercase max-w-md"
        variants={subtitleVariants}
      >
        {wedding.tagline}
      </motion.p>

      {/* Bottom flourish */}
      <motion.div
        className="mt-6"
        variants={subtitleVariants}
      >
        <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
          <path d="M0 10 Q30 20 60 10 Q90 0 120 10" stroke="var(--color-gold)" strokeWidth="0.8" strokeOpacity="0.4" />
          <path d="M20 10 Q45 17 60 10 Q75 3 100 10" stroke="var(--color-gold)" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="60" cy="10" r="2" fill="var(--color-gold)" fillOpacity="0.4" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default NamesReveal;
