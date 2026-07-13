import React from 'react';
import { motion } from 'framer-motion';

const GoldButton = ({ children, onClick, className = '', icon = null }) => (
  <motion.button
    onClick={onClick}
    className={`
      relative inline-flex items-center gap-3 px-8 py-4
      font-heading text-sm tracking-[0.2em] uppercase
      text-maroon-deep bg-gradient-to-r from-gold via-gold-light to-gold
      rounded-full cursor-pointer
      shadow-[0_0_20px_rgba(201,162,75,0.3)]
      transition-all duration-300
      hover:shadow-[0_0_30px_rgba(201,162,75,0.5)]
      gold-glow-pulse
      ${className}
    `}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
    {icon && <span className="text-lg">{icon}</span>}
    {children}
  </motion.button>
);

export default GoldButton;
