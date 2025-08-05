import React, { useState } from 'react';

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  isLarge?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, title, bio, isLarge }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div 
      className={`team-card-container ${isLarge ? 'h-full' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className={`team-card ${isFlipped ? 'flipped' : ''} relative w-full ${isLarge ? 'h-full' : 'aspect-square'}`}>
        {/* Front of the card */}
        <div className="team-card-front absolute w-full h-full bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <div className={`w-24 h-24 mx-auto rounded-full bg-[var(--glass-bg)] border border-[var(--glass-bg)] mb-4 flex items-center justify-center`}>
              <svg className="w-12 h-12 text-[var(--text-main)] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </div>
          <h3 className={`font-bold text-[var(--text-heading)] ${isLarge ? 'text-2xl' : 'text-xl'}`}>{name}</h3>
          <p className="text-[var(--text-main)] opacity-70">{title}</p>
        </div>

        {/* Back of the card */}
        <div className="team-card-back absolute w-full h-full bg-[var(--glass-bg)] border border-[var(--glass-bg)] rounded-2xl p-6 flex flex-col justify-center text-center">
          <p className="text-sm text-[var(--text-main)] opacity-90">{bio}</p>
        </div>
      </div>
    </div>
  );
};