import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { wedding } from './data/weddingData';
import HeroVideo from './components/HeroVideo';
import SaveTheDate from './components/SaveTheDate';
import CoupleIntro from './components/CoupleIntro';
import EventCard from './components/EventCard';
import VenueMap from './components/VenueMap';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import SectionWrapper, { childVariants } from './components/shared/SectionWrapper';
import CelebrationConfetti from './components/CelebrationConfetti';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative w-full flex flex-col items-center ${scrollLocked ? 'h-[100dvh] overflow-hidden' : 'min-h-screen'}`}>
      {/* Celebration Popup */}
      <CelebrationConfetti trigger={celebrate} duration={6000} />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* A. Hero Section */}
      <HeroVideo onStart={() => setCelebrate(true)} onFinish={() => setScrollLocked(false)} />

      {/* B. Save the Date */}
      <SaveTheDate />

      {/* C. Couple Introduction */}
      <CoupleIntro />

      {/* D. Event Details - Two Ceremony Cards */}
      <SectionWrapper id="events" className="velvet-bg w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <motion.h2
            className="text-center font-heading text-[10px] sm:text-xs tracking-[0.3em] text-gold/60 uppercase mb-1"
            variants={childVariants}
          >
            Ceremonies
          </motion.h2>
          <motion.h3
            className="text-center font-decorative text-xl sm:text-2xl text-gold-light mb-8"
            variants={childVariants}
          >
            Join Us in Celebration
          </motion.h3>

          <motion.div
            className="w-full flex flex-col md:flex-row gap-6 justify-center items-stretch px-4"
            variants={childVariants}
          >
            <EventCard event={wedding.talikettu} index={0} />
            <EventCard event={wedding.reception} index={1} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* E. Venue Section */}
      <VenueMap />

      {/* F. Countdown Timer */}
      <Countdown />

      {/* G. Footer */}
      <Footer />
    </div>
  );
};

export default App;
