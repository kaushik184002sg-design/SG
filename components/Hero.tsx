import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex-1 flex items-center justify-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400 leading-tight">
          Pioneering the Future of Decentralized Technology
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          At Avalanche, we build high-performance blockchain solutions that empower developers and businesses to create a more connected and equitable digital world. Our platform provides the scalability, security, and efficiency needed for next-generation applications.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="text-base font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
          >
            Explore Our Products
          </a>
          <a
            href="#"
            className="text-base font-medium px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
          >
            Read Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
