import React from 'react';
import { AvalancheLogo } from './icons/AvalancheLogo';

interface LoadingScreenProps {
  show: boolean;
}

const LoadingSpinner: React.FC = () => (
    <div className="w-16 h-16 border-4 border-neutral-500/50 border-t-white rounded-full animate-spin"></div>
);

const LoadingScreen: React.FC<LoadingScreenProps> = ({ show }) => {
  return (
    <div className={`absolute inset-0 bg-black/20 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ease-out ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-30`}>
      <AvalancheLogo className="h-12 w-auto" />
      <LoadingSpinner />
      <p className="text-neutral-300">Loading Ecosystem...</p>
    </div>
  );
};

export default LoadingScreen;
