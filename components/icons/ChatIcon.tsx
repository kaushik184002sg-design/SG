import React from 'react';

export const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="11.5" fill="#E84142" stroke="white"></circle>
        <path d="M16.5 13.5H14C13.7239 13.5 13.5 13.2761 13.5 13V10.5C13.5 8.84315 12.1569 7.5 10.5 7.5H7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);
