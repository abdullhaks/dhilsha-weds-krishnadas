import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/weddingData';
import SectionWrapper, { childVariants } from './shared/SectionWrapper';
import OrnamentDivider from './shared/OrnamentDivider';
import Diya from '../assets/motifs/Diya';

const VenueCard = ({ venue, index }) => (
  <motion.div
    className="relative text-center"
    variants={childVariants}
  >
    {/* Venue badge */}
    <div className="mb-3">
      <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full font-heading text-[10px] sm:text-xs tracking-[0.15em] text-gold uppercase">
        {venue.title}
      </span>
    </div>

    {/* Venue name */}
    <h4 className="font-display text-lg sm:text-xl md:text-2xl text-ivory mb-1">
      {venue.venue}
    </h4>
    {venue.location && (
      <p className="font-body text-xs sm:text-sm text-ivory/50 mb-1">
        {venue.location}
      </p>
    )}

    {/* Date & Time */}
    <p className="font-numeral text-sm text-gold/70 mb-1">{venue.date}</p>
    <p className="font-numeral text-sm text-gold-light/80">{venue.time}</p>

    {/* Get Directions button */}
    <div className="mt-4">
      <motion.a
        href={`https://www.google.com/maps/search/?api=1&query=${venue.mapQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2 px-5 py-2.5
          bg-gradient-to-r from-gold via-gold-foil to-gold
          text-maroon-deep font-heading text-[11px] tracking-[0.15em] uppercase
          rounded-full cursor-pointer
          shadow-[0_0_15px_rgba(201,162,75,0.2)]
          hover:brightness-110 active:scale-[0.98]
          transition-all duration-200
        "
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(201,162,75,0.4)' }}
        whileTap={{ scale: 0.97 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>Get Directions</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

const VenueMap = () => {
  const venues = [
    { ...wedding.talikettu },
    { ...wedding.reception },
  ];

  return (
    <SectionWrapper id="venue" className="velvet-bg">
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-center font-heading text-[10px] sm:text-xs tracking-[0.3em] text-gold/60 uppercase mb-1"
          variants={childVariants}
        >
          Venue
        </motion.h2>
        <motion.h3
          className="text-center font-decorative text-xl sm:text-2xl text-gold-light mb-8"
          variants={childVariants}
        >
          Where to Find Us
        </motion.h3>

        <div className="space-y-6">
          {venues.map((venue, index) => (
            <React.Fragment key={index}>
              <VenueCard venue={venue} index={index} />
              {index < venues.length - 1 && (
                <OrnamentDivider className="my-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VenueMap;
