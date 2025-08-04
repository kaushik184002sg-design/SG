import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/company1.jpg',
    alt: 'Company Image 1',
  },
  {
    src: '/images/company2.jpg',
    alt: 'Company Image 2',
  },
  {
    src: '/images/company3.jpg',
    alt: 'Company Image 3',
  },
  {
    src: '/images/company4.jpg',
    alt: 'Company Image 4',
  },
];

export const CompanyImages: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col gap-6 w-1/3 min-w-[300px] pl-12">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeOut"
          }}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--glass-bg)] border border-[var(--glass-bg)] backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
