import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/weddingData';
import SectionWrapper, { childVariants } from './shared/SectionWrapper';
import Mandala from '../assets/motifs/Mandala';
import GarlandBorder from '../assets/patterns/GarlandBorder';

const SaveTheDate = () => {
  const { date } = wedding;

  return (
    <SectionWrapper id="save-the-date" className="velvet-bg overflow-hidden">
      {/* Top garland marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-25">
        <div className="garland-marquee whitespace-nowrap" style={{ width: '200%' }}>
          <div className="inline-block" style={{ width: '50%' }}>
            <GarlandBorder color="var(--color-gold)" />
          </div>
          <div className="inline-block" style={{ width: '50%' }}>
            <GarlandBorder color="var(--color-gold)" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h2
          className="font-heading text-[10px] sm:text-xs tracking-[0.3em] text-gold/60 uppercase mb-8"
          variants={childVariants}
        >
          Save the Date
        </motion.h2>

        {/* Medallion / seal style date */}
        <motion.div
          className="relative"
          variants={childVariants}
        >
          {/* Rotating mandala behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate pointer-events-none">
            <Mandala size={280} color="var(--color-gold)" opacity={0.1} />
          </div>

          {/* Date circle */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full gold-rope-border flex flex-col items-center justify-center bg-maroon-deep/80 backdrop-blur-sm">
            {/* Inner ring */}
            <div className="absolute inset-2.5 rounded-full border border-gold/20" />
            <div className="absolute inset-4 rounded-full border border-gold/10" />

            <span className="font-heading text-[10px] tracking-[0.2em] text-gold/60 uppercase">
              {date.day}
            </span>
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-gold-light font-light mt-0.5">
              {date.date}
            </span>
            <span className="font-numeral text-base sm:text-lg tracking-[0.15em] text-gold mt-0.5">
              {date.month}
            </span>
            <span className="font-numeral text-xs text-gold/50 mt-0.5">
              {date.year}
            </span>
          </div>
        </motion.div>

        

        {/* Date text below */}
        <motion.p
          className="mt-5 font-numeral text-base sm:text-lg tracking-[0.1em] text-gold-light/70"
          variants={childVariants}
        >
          {date.month} {date.date}, {date.year} · {date.day}
        </motion.p>
      </div>

      {/* Bottom garland marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-25">
        <div className="garland-marquee whitespace-nowrap" style={{ width: '200%', animationDirection: 'reverse' }}>
          <div className="inline-block" style={{ width: '50%' }}>
            <GarlandBorder color="var(--color-gold)" />
          </div>
          <div className="inline-block" style={{ width: '50%' }}>
            <GarlandBorder color="var(--color-gold)" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SaveTheDate;
