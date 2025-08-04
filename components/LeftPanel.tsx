import React from 'react';

interface LeftPanelProps {
  isLoaded: boolean;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isLoaded }) => {
  return (
    <aside 
      className={`w-full lg:w-1/5 p-6 md:p-8 flex flex-col justify-center bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg rounded-2xl transition-all duration-[2000ms] ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
    >
        <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Our Mission</h2>
        <p className="text-base text-neutral-300 leading-relaxed">
            To provide the foundation for a decentralized digital future. We empower developers and enterprises to build secure, scalable, and efficient blockchain applications that redefine industries.
        </p>
    </aside>
  );
};

export default LeftPanel;
