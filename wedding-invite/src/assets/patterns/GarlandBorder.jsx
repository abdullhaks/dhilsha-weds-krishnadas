import React from 'react';

const GarlandBorder = ({ color = 'var(--color-gold)', height = 30, className = '' }) => (
  <svg
    height={height}
    viewBox="0 0 400 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    style={{ width: '100%' }}
  >
    {/* Marigold garland - scalloped swag pattern */}
    {[...Array(10)].map((_, i) => (
      <g key={i}>
        {/* Main swag curve */}
        <path
          d={`M${i * 40} 8 Q${i * 40 + 20} 26 ${(i + 1) * 40} 8`}
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Flower clusters along the swag */}
        {[0.2, 0.4, 0.5, 0.6, 0.8].map((t, j) => {
          const x = i * 40 + t * 40;
          const y = 8 + Math.sin(t * Math.PI) * 18;
          return (
            <g key={j}>
              <circle cx={x} cy={y} r="2.5" fill={color} fillOpacity="0.2" />
              <circle cx={x} cy={y} r="1.2" fill={color} fillOpacity="0.35" />
            </g>
          );
        })}
        {/* Top connecting dot */}
        <circle cx={i * 40} cy="8" r="2" fill={color} fillOpacity="0.3" />
      </g>
    ))}
    {/* Top line */}
    <line x1="0" y1="5" x2="400" y2="5" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" />
  </svg>
);

export default GarlandBorder;
