import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { wedding } from '../data/weddingData';
import Diya from '../assets/motifs/Diya';
import Mandala from '../assets/motifs/Mandala';
import NamesReveal from './NamesReveal';

const HeroVideo = ({ onStart, onFinish }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [videoEnding, setVideoEnding] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const handleStart = useCallback(() => {
    setStarted(true);
    if (onStart) onStart();

    // Play video (muted to comply with mobile autoplay policies and allow simultaneous background audio)
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = true;
      video.play().catch(() => {});
    }

    // Play background music
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.7;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }, [onStart]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= wedding.VIDEO_OUTRO_START_SECONDS && !videoEnding) {
        setVideoEnding(true);
      }
    };

    const handleEnded = () => {
      setVideoFinished(true);
      if (audioRef.current) {
        audioRef.current.volume = 0.7;
      }
      // Show scroll indicator after names animation
      setTimeout(() => {
        setShowScrollIndicator(true);
        if (onFinish) onFinish();
      }, 3500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoEnding]);

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    if (audioRef.current) audioRef.current.muted = newMuted;
  };

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-shadow">
      {/* Background layer - always present */}
      <div className="absolute inset-0 velvet-bg velvet-texture" />
      
      {/* Background mandala decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate pointer-events-none">
        <Mandala size={500} opacity={0.04} />
      </div>

      {/* Poster image - shown before start */}
      <AnimatePresence>
        {!started && (
          <motion.div
            className="absolute inset-0 z-10"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/invitation-poster.jpg)',
                filter: 'brightness(0.4) saturate(0.8)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-shadow/80 via-maroon-deep/50 to-shadow/90" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video element - always in DOM, visibility controlled */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black transition-opacity duration-1000 ${
          started && !videoFinished ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${videoEnding ? 'opacity-0' : ''}`}
      >
        <video
          ref={videoRef}
          className="video-portrait"
          playsInline
          muted
          preload="auto"
          poster="/invitation-poster.jpg"
        >
          <source src="https://res.cloudinary.com/dklat3f8w/video/upload/v1783953613/opening-vid_qsenmg.mov" type="video/mp4" />
        </video>
      </div>

      {/* Audio element - always in DOM */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/Asaimugam.m4a" type="audio/mp4" />
        <source src="/audio/Asaimugam.m4a" type="audio/x-m4a" />
      </audio>

      {/* Tap to Begin button */}
      <AnimatePresence>
        {!started && (
          <motion.div
            className="relative z-30 flex flex-col items-center gap-5 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Top ornament */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mandala size={80} color="var(--color-gold)" opacity={0.3} />
            </motion.div>

            {/* Couple names preview */}
            <div className="text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-light tracking-wide leading-snug">
                {wedding.bride} <span className="font-script text-gold">&</span> {wedding.groom}
              </h1>
              <p className="font-body text-xs sm:text-sm text-gold/50 mt-2 tracking-[0.15em] uppercase">
                Wedding Invitation
              </p>
            </div>

            {/* The button */}
            <motion.button
              onClick={handleStart}
              className="
                relative flex items-center gap-3 px-8 py-4
                bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10
                border border-gold/50 rounded-full
                text-gold font-heading text-xs sm:text-sm tracking-[0.25em] uppercase
                cursor-pointer backdrop-blur-sm
                hover:border-gold hover:bg-gold/15
                transition-colors duration-300
              "
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 0 20px rgba(201,162,75,0.2)',
                  '0 0 40px rgba(201,162,75,0.45)',
                  '0 0 20px rgba(201,162,75,0.2)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              whileTap={{ scale: 0.95 }}
            >
              <Diya size={22} color="var(--color-gold)" opacity={0.8} />
              <span>Tap to Open</span>
            </motion.button>

            {/* Bottom ornament */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg width="100" height="12" viewBox="0 0 100 12" fill="none">
                <path d="M0 6 Q25 0 50 6 Q75 12 100 6" stroke="var(--color-gold)" strokeWidth="0.6" strokeOpacity="0.3" />
                <circle cx="50" cy="6" r="1.5" fill="var(--color-gold)" fillOpacity="0.3" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Names reveal layer - appears after video ends */}
      <AnimatePresence>
        {(videoFinished || videoEnding) && (
          <motion.div
            className="relative z-25 flex items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <NamesReveal />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute toggle - fixed bottom right like reference */}
      <AnimatePresence>
        {started && (
          <motion.button
            onClick={toggleMute}
            className="
              fixed bottom-6 right-6 z-50
              w-12 h-12 flex items-center justify-center
              bg-maroon-deep/80 backdrop-blur-sm
              border border-gold/30 rounded-full
              text-gold cursor-pointer
              hover:border-gold/60 transition-colors
              shadow-lg
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={muted ? 'muted' : 'unmuted'}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {muted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll down indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-gold/40 font-heading text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 7 L10 13 L16 7" stroke="var(--color-gold)" strokeWidth="1.5" strokeOpacity="0.4" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroVideo;
