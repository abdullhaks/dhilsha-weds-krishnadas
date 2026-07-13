import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/weddingData';
import SectionWrapper, { childVariants } from './shared/SectionWrapper';
import OrnamentDivider from './shared/OrnamentDivider';
import Mandala from '../assets/motifs/Mandala';

const CoupleIntro = () => {
  return (
    <SectionWrapper id="couple" className="overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4">
        <motion.div
          className="relative w-full flex flex-col md:flex-row rounded-2xl overflow-hidden gold-rope-border"
          variants={childVariants}
        >
          {/* Left panel - Maroon */}
          <div className="relative flex-1 bg-gradient-to-br from-maroon-rich to-maroon-deep p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[280px]">
            {/* Velvet texture overlay */}
            <div className="velvet-texture absolute inset-0" />
            
            {/* Rotating mandala */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ willChange: 'transform' }}
            >
              <div className="mandala-rotate">
                <Mandala size={250} color="var(--color-gold)" opacity={0.08} />
              </div>
            </motion.div>

            <div className="relative z-10">
              <p className="font-heading text-xs tracking-[0.25em] text-gold/60 uppercase mb-4">The Bride</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-shimmer leading-tight">
                {wedding.bride}
              </h2>
              <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
            </div>
          </div>

          {/* Center divider - ornamental */}
          <div className="relative flex items-center justify-center bg-gold/10 p-4 md:p-0 md:w-16">
            <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-maroon-deep border-2 border-gold flex items-center justify-center shadow-[0_0_15px_rgba(201,162,75,0.3)]">
                <span className="font-script text-2xl text-gold">&</span>
              </div>
            </div>
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-gold/5 via-gold/10 to-gold/5" />
          </div>

          {/* Right panel - Ivory */}
          <div className="relative flex-1 bg-gradient-to-br from-ivory to-cream-card p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[280px]">
            <div className="relative z-10">
              <p className="font-heading text-xs tracking-[0.25em] text-maroon-rich/60 uppercase mb-4">The Groom</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-maroon-deep leading-tight">
                {wedding.groom}
              </h2>
              <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-maroon-rich/30 to-transparent mx-auto" />
            </div>

            {/* Subtle mandala on light panel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate pointer-events-none">
              <Mandala size={250} color="var(--color-maroon-rich)" opacity={0.04} />
            </div>
          </div>
        </motion.div>

        <OrnamentDivider className="mt-12" />
      </div>
    </SectionWrapper>
  );
};

export default CoupleIntro;
