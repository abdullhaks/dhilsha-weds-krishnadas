import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { childVariants } from './shared/SectionWrapper';

const WEDDING_DATE = new Date('2026-08-23T10:30:00+05:30').getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <SectionWrapper id="countdown" className="velvet-bg w-full">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          className="font-heading text-[10px] sm:text-xs tracking-[0.3em] text-gold/60 uppercase mb-1"
          variants={childVariants}
        >
          Counting Down To
        </motion.h2>
        <motion.h3
          className="font-decorative text-xl sm:text-2xl text-gold-light mb-8"
          variants={childVariants}
        >
          The Big Day
        </motion.h3>

        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap"
          variants={childVariants}
        >
          {units.map((unit, index) => (
            <div key={unit.label} className="flex items-center gap-4 sm:gap-6 md:gap-8">
              {/* Medallion */}
              <div className="relative">
                {/* Outer ring */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full gold-border flex flex-col items-center justify-center bg-maroon-deep/60 backdrop-blur-sm">
                  {/* Inner ring */}
                  <div className="absolute inset-2 rounded-full border border-gold/15" />
                  
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      className="font-numeral text-2xl sm:text-3xl md:text-4xl text-gold-light"
                      initial={{ scale: 1.3, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>

                  <span className="font-heading text-[10px] sm:text-xs tracking-[0.15em] text-gold/60 uppercase mt-1">
                    {unit.label}
                  </span>
                </div>
              </div>

              {/* Separator dots between medallions */}
              {index < units.length - 1 && (
                <div className="hidden sm:flex flex-col gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Countdown;
