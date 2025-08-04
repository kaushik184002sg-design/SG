import React from 'react';

interface MenuIconProps {
  isOpen: boolean;
  className?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, className }) => (
  <svg
    className={`h-6 w-6 transition-transform duration-300 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    />
  </svg>
);
