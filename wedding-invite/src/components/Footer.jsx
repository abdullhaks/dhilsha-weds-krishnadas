import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/weddingData';
import Mandala from '../assets/motifs/Mandala';
import GarlandBorder from '../assets/patterns/GarlandBorder';
import OrnamentDivider from './shared/OrnamentDivider';

const Footer = () => {
  return (
    <footer id="footer" className="relative w-full velvet-bg overflow-hidden">
      {/* Background mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate pointer-events-none">
        <Mandala size={350} color="var(--color-gold)" opacity={0.04} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 py-12 sm:py-16">
        {/* Ornamental mandala */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Mandala size={90} color="var(--color-gold)" opacity={0.25} />
        </motion.div>

        {/* Couple names */}
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-4xl gold-shimmer mb-1"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {wedding.bride}
        </motion.h2>
        <motion.span
          className="font-script text-xl sm:text-2xl text-gold inline-block my-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          &
        </motion.span>
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-4xl gold-shimmer mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {wedding.groom}
        </motion.h2>

        {/* Thank you quote */}
        <motion.p
          className="font-body text-sm sm:text-base text-ivory/60 italic leading-relaxed mb-6 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          "We thank you for your beautiful prayers, warm blessings, and for being a part of our lifelong journey."
        </motion.p>

        {/* Closing message */}
        <motion.p
          className="font-heading text-[10px] sm:text-xs tracking-[0.2em] text-gold-light/50 uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {wedding.closingMessage}
        </motion.p>

        {/* Decorative line */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-6" />

        {/* Copyright */}
        <motion.p
          className="font-heading text-[9px] sm:text-[10px] text-gold/25 tracking-[0.15em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          © 2026 Wedding of {wedding.bride} & {wedding.groom}
        </motion.p>
        <motion.p
          className="font-heading text-[9px] sm:text-[10px] text-gold/30 tracking-[0.1em] uppercase mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Designed with ❤️ By <a href="https://www.instagram.com/abdullha_kalamban" target="_blank" rel="noopener noreferrer"> <span  className="gold-shimmer">AKS</span></a>
        </motion.p>
      </div>

      {/* Bottom garland border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20">
        <div className="garland-marquee whitespace-nowrap" style={{ width: '200%' }}>
          <div className="inline-block" style={{ width: '50%' }}>
            <GarlandBorder color="var(--color-gold)" />
          </div>
          <div className="inline-block" style={{ width: '50%' }}>
            <GarlandBorder color="var(--color-gold)" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
