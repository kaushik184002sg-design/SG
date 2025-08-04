import React from 'react';

export const ScrollArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 20.5V1H20.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M40 1L1 40" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
    </svg>
);
