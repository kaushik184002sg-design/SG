import React, { useEffect, useRef, useState } from 'react';
import '../styles/smoothScroll.css';

export default function MiddlePanel({ isLoaded }: { isLoaded: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(!document.body.classList.contains('light-mode'));

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target === document.body && mutation.attributeName === 'class') {
          setIsDarkMode(!document.body.classList.contains('light-mode'));
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Enable smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const handleScroll = (e: React.WheelEvent) => {
    const scrollSpeed = 1.5; // Adjust this value to change scroll sensitivity
    window.scrollBy({
      top: e.deltaY * scrollSpeed,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className={`relative z-20 w-full lg:flex-1 flex flex-col justify-center items-center text-center p-4 md:p-8 min-h-[80vh] md:min-h-0 bg-white/10 border border-white/20 rounded-2xl transition-all duration-[2000ms] ease-in-out ${isLoaded ? 'scale-100' : 'scale-[2.5] !rounded-none'}`}
      onWheel={handleScroll}
    >
    </section>
  );
}
