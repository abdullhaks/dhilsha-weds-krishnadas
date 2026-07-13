import React from 'react';

const Mandala = ({ size = 200, color = 'var(--color-gold)', opacity = 0.15, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
  >
    {/* Outer ring */}
    <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="0.8" />
    <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="0.5" />
    
    {/* Petal layers - outer */}
    {[...Array(16)].map((_, i) => (
      <g key={`outer-${i}`} transform={`rotate(${i * 22.5} 100 100)`}>
        <path
          d="M100 15 Q108 50 100 70 Q92 50 100 15"
          stroke={color}
          strokeWidth="0.6"
          fill={color}
          fillOpacity="0.08"
        />
      </g>
    ))}
    
    {/* Petal layers - middle */}
    {[...Array(12)].map((_, i) => (
      <g key={`mid-${i}`} transform={`rotate(${i * 30} 100 100)`}>
        <path
          d="M100 35 Q106 55 100 68 Q94 55 100 35"
          stroke={color}
          strokeWidth="0.5"
          fill={color}
          fillOpacity="0.1"
        />
      </g>
    ))}
    
    {/* Inner petal ring */}
    {[...Array(8)].map((_, i) => (
      <g key={`inner-${i}`} transform={`rotate(${i * 45} 100 100)`}>
        <ellipse
          cx="100"
          cy="60"
          rx="4"
          ry="12"
          stroke={color}
          strokeWidth="0.5"
          fill={color}
          fillOpacity="0.12"
        />
      </g>
    ))}
    
    {/* Dot ring - outer */}
    {[...Array(24)].map((_, i) => (
      <circle
        key={`dot-o-${i}`}
        cx={100 + 82 * Math.cos((i * 15 * Math.PI) / 180)}
        cy={100 + 82 * Math.sin((i * 15 * Math.PI) / 180)}
        r="1.2"
        fill={color}
        fillOpacity="0.4"
      />
    ))}
    
    {/* Dot ring - inner */}
    {[...Array(16)].map((_, i) => (
      <circle
        key={`dot-i-${i}`}
        cx={100 + 45 * Math.cos((i * 22.5 * Math.PI) / 180)}
        cy={100 + 45 * Math.sin((i * 22.5 * Math.PI) / 180)}
        r="1"
        fill={color}
        fillOpacity="0.5"
      />
    ))}
    
    {/* Center flower */}
    <circle cx="100" cy="100" r="18" stroke={color} strokeWidth="0.6" fill={color} fillOpacity="0.06" />
    <circle cx="100" cy="100" r="10" stroke={color} strokeWidth="0.5" fill={color} fillOpacity="0.1" />
    <circle cx="100" cy="100" r="4" fill={color} fillOpacity="0.3" />
    
    {/* Connecting arcs */}
    {[...Array(8)].map((_, i) => (
      <g key={`arc-${i}`} transform={`rotate(${i * 45} 100 100)`}>
        <path
          d="M100 12 Q115 30 100 50"
          stroke={color}
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M100 12 Q85 30 100 50"
          stroke={color}
          strokeWidth="0.4"
          fill="none"
        />
      </g>
    ))}
  </svg>
);

export default Mandala;
