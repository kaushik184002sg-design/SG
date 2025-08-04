import React from 'react';
import { motion } from 'framer-motion';
import { CompanyImages } from './CompanyImages';

const milestones = [
  {
    year: '2018',
    title: 'Foundation',
    description: 'SystemsGroup was founded with a mission to decentralize the digital world, starting with a small team of passionate engineers.',
  },
  {
    year: '2020',
    title: 'First Major Protocol',
    description: 'Launched our first-generation blockchain protocol, achieving industry-leading transaction speeds and security benchmarks.',
  },
  {
    year: '2022',
    title: 'Ecosystem Growth',
    description: 'Surpassed 1 million active users across our ecosystem and secured strategic partnerships with key industry players.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Pioneered the integration of AI-driven analytics on-chain, unlocking new possibilities for decentralized applications.',
  },
  {
    year: 'Future',
    title: 'Vision for Tomorrow',
    description: 'Expanding into new frontiers, including decentralized physical infrastructure networks (DePIN) and a fully autonomous, AI-managed cloud.',
  },
];

export const JourneyChart: React.FC = () => {
  return (
    <div className="relative container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8">
      <div className="relative flex-1 flex flex-col space-y-4 md:space-y-8">
        <motion.div 
          className="absolute w-0.5 md:w-1 h-full bg-[var(--text-main)]/10 left-[12px] md:left-1/2 md:-translate-x-1/2"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-center w-full">
            <motion.div 
              className={`w-full md:w-1/2 flex justify-start pl-8 md:${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}
              initial={{ 
                opacity: 0,
                x: -50
              }}
              whileInView={{ 
                opacity: 1,
                x: 0 
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <div className={`w-full max-w-sm p-4 md:p-6 bg-[var(--glass-bg)] border border-[var(--glass-bg)] backdrop-blur-lg rounded-2xl text-left md:${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <p className="text-xl font-bold text-green-600 mb-1">{milestone.year}</p>
                <h3 className="text-lg font-semibold text-[var(--text-heading)] mb-2">{milestone.title}</h3>
                <p className="text-sm text-[var(--text-main)]">{milestone.description}</p>
              </div>
            </motion.div>
            <motion.div 
              className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-600 left-[12px] md:left-1/2 md:-translate-x-1/2 border-2 md:border-4 border-[var(--bg-main)]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.3,
                ease: "backOut"
              }}
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <CompanyImages />
      </div>
    </div>
  );
};