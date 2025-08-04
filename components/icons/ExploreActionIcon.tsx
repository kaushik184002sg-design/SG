import React from 'react';

export const ExploreActionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="11" fill="#E84142" stroke="white" strokeWidth="1" />
    <path
      d="M7 12C8.5 10 10.5 14 12 12C13.5 10 15.5 14 17 12"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
