import React from 'react';
import { motion } from 'framer-motion';
import GoldCornerFrame from '../assets/motifs/GoldCornerFrame';
import Paisley from '../assets/motifs/Paisley';
import Diya from '../assets/motifs/Diya';

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      className="relative flex-1 min-w-[280px] max-w-lg"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="relative velvet-bg gold-rope-border rounded-xl p-8 md:p-10 text-center overflow-hidden group">
        {/* Velvet texture */}
        <div className="velvet-texture absolute inset-0 rounded-xl" />

        {/* Corner frames */}
        <div className="absolute top-2 left-2 opacity-40 group-hover:opacity-60 transition-opacity">
          <GoldCornerFrame size={40} />
        </div>
        <div className="absolute top-2 right-2 opacity-40 group-hover:opacity-60 transition-opacity" style={{ transform: 'scaleX(-1)' }}>
          <GoldCornerFrame size={40} />
        </div>
        <div className="absolute bottom-2 left-2 opacity-40 group-hover:opacity-60 transition-opacity" style={{ transform: 'scaleY(-1)' }}>
          <GoldCornerFrame size={40} />
        </div>
        <div className="absolute bottom-2 right-2 opacity-40 group-hover:opacity-60 transition-opacity" style={{ transform: 'scale(-1)' }}>
          <GoldCornerFrame size={40} />
        </div>

        {/* Paisley accent - top corner */}
        <div className="absolute -top-2 -right-2 opacity-20">
          <Paisley size={40} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Wax seal style icon */}
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/40 flex items-center justify-center shadow-[0_0_15px_rgba(201,162,75,0.15)]">
            <span className="font-heading text-gold text-xs tracking-wider uppercase">
              {index === 0 ? '🪔' : '🎊'}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-decorative text-xl sm:text-2xl text-gold-light tracking-[0.1em] mb-6">
            {event.title}
          </h3>

          {/* Diya divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <Diya size={20} color="var(--color-gold)" opacity={0.4} />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* Date */}
          <div className="mb-4">
            <p className="font-heading text-xs tracking-[0.2em] text-gold/50 uppercase mb-1">Date</p>
            <p className="font-numeral text-lg text-gold-light tracking-wide">{event.date}</p>
          </div>

          {/* Diya mini divider */}
          <div className="flex items-center justify-center gap-2 my-3">
            <div className="w-8 h-px bg-gold/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            <div className="w-8 h-px bg-gold/20" />
          </div>

          {/* Venue */}
          <div className="mb-4">
            <p className="font-heading text-xs tracking-[0.2em] text-gold/50 uppercase mb-1">Venue</p>
            <p className="font-body text-base text-ivory/90">{event.venue}</p>
            {event.location && (
              <p className="font-body text-sm text-ivory/60 mt-0.5">{event.location}</p>
            )}
          </div>

          {/* Diya mini divider */}
          <div className="flex items-center justify-center gap-2 my-3">
            <div className="w-8 h-px bg-gold/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            <div className="w-8 h-px bg-gold/20" />
          </div>

          {/* Time */}
          <div>
            <p className="font-heading text-xs tracking-[0.2em] text-gold/50 uppercase mb-1">Time</p>
            <p className="font-numeral text-lg text-gold-light tracking-wide">{event.time}</p>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 40px rgba(201,162,75,0.15) inset' }} />
      </div>
    </motion.div>
  );
};

export default EventCard;
