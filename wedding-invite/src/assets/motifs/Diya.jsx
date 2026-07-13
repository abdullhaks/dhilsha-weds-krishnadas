import React from 'react';

const Diya = ({ size = 40, color = 'var(--color-gold)', opacity = 1, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
  >
    {/* Flame */}
    <path
      d="M20 6 C22 10 24 13 22 16 C21 18 20 18 20 18 C20 18 19 18 18 16 C16 13 18 10 20 6Z"
      fill={color}
      fillOpacity="0.6"
    />
    <path
      d="M20 9 C21 11 22 13 21 15 C20.5 16 20 16 20 16 C20 16 19.5 16 19 15 C18 13 19 11 20 9Z"
      fill={color}
      fillOpacity="0.9"
    />
    {/* Wick */}
    <line x1="20" y1="16" x2="20" y2="20" stroke={color} strokeWidth="0.6" />
    {/* Lamp body */}
    <path
      d="M12 22 C12 20 15 18 20 18 C25 18 28 20 28 22 C28 24 26 26 20 26 C14 26 12 24 12 22Z"
      stroke={color}
      strokeWidth="0.8"
      fill={color}
      fillOpacity="0.1"
    />
    {/* Base */}
    <path
      d="M16 26 L15 30 C15 31 16 32 20 32 C24 32 25 31 25 30 L24 26"
      stroke={color}
      strokeWidth="0.8"
      fill={color}
      fillOpacity="0.08"
    />
    {/* Bottom stand */}
    <ellipse cx="20" cy="33" rx="6" ry="1.5" stroke={color} strokeWidth="0.6" fill={color} fillOpacity="0.06" />
    {/* Light rays */}
    <line x1="20" y1="4" x2="20" y2="2" stroke={color} strokeWidth="0.3" strokeOpacity="0.4" />
    <line x1="24" y1="5" x2="26" y2="3" stroke={color} strokeWidth="0.3" strokeOpacity="0.4" />
    <line x1="16" y1="5" x2="14" y2="3" stroke={color} strokeWidth="0.3" strokeOpacity="0.4" />
  </svg>
);

export default Diya;
