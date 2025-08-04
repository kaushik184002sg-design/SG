import React from 'react';

interface SystemsGroupLogoProps {
  className?: string;
}

export const SystemsGroupLogo: React.FC<SystemsGroupLogoProps> = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="0" y="0" width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
    <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="currentColor" />
    <path d="M16 12L20 16L16 20L12 16L16 12Z" fill="currentColor" fillOpacity="0.5" />
  </svg>
);
