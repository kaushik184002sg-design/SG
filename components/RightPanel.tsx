import React from 'react';
import Clock from './Clock';
import ScrollIndicator from './ScrollIndicator';
import { SystemsGroupLogo } from './icons/SystemsGroupLogo';

interface RightPanelProps {
    isLoaded: boolean;
}

const RightPanel: React.FC<RightPanelProps> = ({ isLoaded }) => {
  return (
    <aside 
      className={`w-full lg:w-1/5 p-6 md:p-8 flex flex-col justify-between bg-[var(--glass-bg)] border border-[var(--border-color)] backdrop-blur-lg shadow-lg rounded-2xl transition-all duration-[2000ms] ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
    >
      <div>
        <SystemsGroupLogo className="h-10 w-10 mb-8" />
        <Clock />
      </div>
      <ScrollIndicator />
    </aside>
  );
};

export default RightPanel;
