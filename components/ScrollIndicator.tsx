import React from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const ScrollIndicator: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-end w-full">
      <button
        onClick={handleScroll}
        className="w-14 h-14 rounded-full flex items-center justify-center animate-bounce group focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Scroll down"
      >
        <ChevronDownIcon className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors" />
      </button>
    </div>
  );
};

export default ScrollIndicator;
