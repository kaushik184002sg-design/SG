import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';
import HomepageContent from './components/HomepageContent';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after component mounts to ensure a smooth start
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <main className="text-[var(--text-main)] h-auto lg:h-screen flex flex-col p-4 md:p-6 gap-2 lg:overflow-hidden">
        <Header isLoaded={isLoaded} />
        <div className="flex-1 flex flex-col lg:flex-row gap-2">
          <LeftPanel isLoaded={isLoaded} />
          <MiddlePanel isLoaded={isLoaded} />
          <RightPanel isLoaded={isLoaded} />
        </div>
      </main>
      <HomepageContent />
    </div>
  );
};

export default App;
