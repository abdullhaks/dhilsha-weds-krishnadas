import React from 'react';
import { motion } from 'framer-motion';
import Diya from '../../assets/motifs/Diya';

const OrnamentDivider = ({ className = '', showDiya = true, width = '200px' }) => (
  <motion.div
    className={`flex items-center justify-center gap-4 my-8 ${className}`}
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div
      className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      style={{ width }}
    />
    {showDiya && <Diya size={28} opacity={0.5} />}
    <div
      className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      style={{ width }}
    />
  </motion.div>
);

export default OrnamentDivider;
