import React from 'react';

const GoldCornerFrame = ({ size = 60, color = 'var(--color-gold)', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* L-shaped corner bracket with ornamental details */}
    <path
      d="M5 55 L5 5 L20 5"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M5 55 L20 55"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    {/* Inner decorative lines */}
    <path
      d="M9 51 L9 9 L18 9"
      stroke={color}
      strokeWidth="0.5"
      strokeOpacity="0.5"
      fill="none"
    />
    <path
      d="M9 51 L18 51"
      stroke={color}
      strokeWidth="0.5"
      strokeOpacity="0.5"
      fill="none"
    />
    {/* Corner ornament */}
    <circle cx="5" cy="5" r="2" fill={color} fillOpacity="0.4" />
    <circle cx="5" cy="55" r="2" fill={color} fillOpacity="0.4" />
    {/* Small decorative curl */}
    <path
      d="M12 5 Q12 2 15 2"
      stroke={color}
      strokeWidth="0.5"
      fill="none"
    />
    <path
      d="M5 12 Q2 12 2 15"
      stroke={color}
      strokeWidth="0.5"
      fill="none"
    />
  </svg>
);

export default GoldCornerFrame;
