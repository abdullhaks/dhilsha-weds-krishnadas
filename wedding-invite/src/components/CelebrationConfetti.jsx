import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONFETTI_COLORS = [
  '#C9A24B', // gold
  '#D4AF37', // gold-foil
  '#E8D4A0', // gold-light
  '#F7F0E3', // ivory
  '#8B1E2B', // maroon-rich
  '#FFD700', // bright gold
  '#FF6B6B', // rose
  '#FF9E9E', // light rose
];

const SHAPES = ['circle', 'square', 'strip'];

const generateConfetti = (count = 60) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: Math.random() * 8 + 4,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 2,
    swing: (Math.random() - 0.5) * 100,
  }));
};

const CelebrationConfetti = ({ trigger = false, duration = 5000 }) => {
  const [show, setShow] = useState(false);
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (trigger) {
      setPieces(generateConfetti(50));
      setShow(true);
      const timer = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden">
      {pieces.map((p) => {
        const style = {
          left: `${p.x}%`,
          '--fall-duration': `${p.duration}s`,
          '--fall-delay': `${p.delay}s`,
        };

        return (
          <div
            key={p.id}
            className="confetti-piece"
            style={style}
          >
            {p.shape === 'circle' && (
              <div
                style={{
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  backgroundColor: p.color,
                }}
              />
            )}
            {p.shape === 'square' && (
              <div
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  transform: `rotate(${Math.random() * 45}deg)`,
                }}
              />
            )}
            {p.shape === 'strip' && (
              <div
                style={{
                  width: p.size * 0.4,
                  height: p.size * 1.8,
                  backgroundColor: p.color,
                  borderRadius: 2,
                  transform: `rotate(${Math.random() * 90}deg)`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CelebrationConfetti;
