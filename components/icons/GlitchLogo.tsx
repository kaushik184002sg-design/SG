import React from 'react';

export const GlitchLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <clipPath id="diamond-clip">
        <path d="M100 0 L200 100 L100 200 L0 100 Z" />
      </clipPath>
      <pattern id="grid-pattern" width="5" height="5" patternUnits="userSpaceOnUse">
        <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
      </pattern>
      <filter id="glitch-effect" x="-50%" y="-50%" width="200%" height="200%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 30" numOctaves="1" result="hNoise"/>
        <feDisplacementMap in="SourceGraphic" in2="hNoise" scale="10" xChannelSelector="R" yChannelSelector="B" />
      </filter>
      <mask id="glitch-mask">
        <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="black" />
            <stop offset="65%" stopColor="white" />
            <stop offset="100%" stopColor="white" />
        </linearGradient>
        <rect x="0" y="0" width="200" height="200" fill="url(#fade)" />
      </mask>
    </defs>
    
    <g clipPath="url(#diamond-clip)">
      {/* Base layer with grid and H */}
      <rect x="0" y="0" width="200" height="200" fill="url(#grid-pattern)" />
      <g fill="currentColor">
        <rect x="76" y="60" width="14" height="80" rx="7" />
        <rect x="110" y="60" width="14" height="80" rx="7" />
      </g>
      
      {/* Glitched layer on top, masked */}
      <g filter="url(#glitch-effect)" mask="url(#glitch-mask)">
        <rect x="0" y="0" width="200" height="200" fill="url(#grid-pattern)" />
        <g fill="currentColor">
          <rect x="76" y="60" width="14" height="80" rx="7" />
          <rect x="110" y="60" width="14" height="80" rx="7" />
        </g>
      </g>
    </g>
  </svg>
);
