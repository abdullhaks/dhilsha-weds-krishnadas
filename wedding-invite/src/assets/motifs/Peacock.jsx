import React from 'react';

const Peacock = ({ size = 80, color = 'var(--color-gold)', opacity = 0.15, className = '' }) => (
  <svg
    width={size}
    height={size * 1.2}
    viewBox="0 0 80 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
  >
    {/* Body */}
    <path
      d="M40 85 C38 75 36 65 38 55 C40 45 42 40 40 35"
      stroke={color}
      strokeWidth="1.2"
      fill="none"
    />
    {/* Head */}
    <circle cx="40" cy="32" r="4" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15" />
    {/* Crown feathers */}
    <line x1="38" y1="28" x2="36" y2="22" stroke={color} strokeWidth="0.6" />
    <line x1="40" y1="28" x2="40" y2="21" stroke={color} strokeWidth="0.6" />
    <line x1="42" y1="28" x2="44" y2="22" stroke={color} strokeWidth="0.6" />
    <circle cx="36" cy="21" r="1" fill={color} fillOpacity="0.4" />
    <circle cx="40" cy="20" r="1" fill={color} fillOpacity="0.4" />
    <circle cx="44" cy="21" r="1" fill={color} fillOpacity="0.4" />
    {/* Beak */}
    <path d="M44 32 L48 31 L44 33" stroke={color} strokeWidth="0.6" fill={color} fillOpacity="0.3" />
    {/* Tail feathers - fan spread */}
    {[-50, -35, -20, -5, 10, 25, 40].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 40 55)`}>
        <path
          d="M40 55 Q42 35 40 10"
          stroke={color}
          strokeWidth="0.5"
          fill="none"
        />
        <ellipse
          cx="40"
          cy="14"
          rx="4"
          ry="6"
          stroke={color}
          strokeWidth="0.5"
          fill={color}
          fillOpacity="0.08"
        />
        <circle cx="40" cy="14" r="2" stroke={color} strokeWidth="0.4" fill={color} fillOpacity="0.12" />
        <circle cx="40" cy="14" r="0.8" fill={color} fillOpacity="0.3" />
      </g>
    ))}
    {/* Feet */}
    <path d="M38 85 L36 92 M38 85 L38 93 M42 85 L44 92 M42 85 L42 93" stroke={color} strokeWidth="0.5" />
  </svg>
);

export default Peacock;
