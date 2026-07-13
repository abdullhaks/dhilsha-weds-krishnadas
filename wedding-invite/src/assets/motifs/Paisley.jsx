import React from 'react';

const Paisley = ({ size = 60, color = 'var(--color-gold)', opacity = 0.2, className = '', flip = false }) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 60 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, transform: flip ? 'scaleX(-1)' : 'none' }}
  >
    <path
      d="M30 4 C45 4 56 20 56 40 C56 60 40 80 30 80 C20 80 8 65 8 45 C8 30 15 20 25 15 C28 13 30 10 30 4Z"
      stroke={color}
      strokeWidth="1"
      fill={color}
      fillOpacity="0.06"
    />
    <path
      d="M30 14 C40 14 48 25 48 40 C48 55 38 70 30 70 C22 70 14 58 14 43 C14 30 20 22 28 18"
      stroke={color}
      strokeWidth="0.6"
      fill="none"
    />
    {/* Inner details */}
    <path
      d="M30 24 C36 24 40 32 40 40 C40 50 35 58 30 58 C25 58 20 50 20 40 C20 32 24 24 30 24"
      stroke={color}
      strokeWidth="0.5"
      fill={color}
      fillOpacity="0.08"
    />
    {/* Curl tip */}
    <path
      d="M30 4 C32 2 36 3 35 7 C34 10 30 12 28 10"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
    />
    {/* Dots */}
    <circle cx="30" cy="35" r="2" fill={color} fillOpacity="0.2" />
    <circle cx="30" cy="45" r="1.5" fill={color} fillOpacity="0.2" />
    <circle cx="30" cy="53" r="1" fill={color} fillOpacity="0.2" />
  </svg>
);

export default Paisley;
