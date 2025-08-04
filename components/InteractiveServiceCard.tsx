import React, { useRef, useEffect, useState } from 'react';

interface InteractiveServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  vx: number;
  vy: number;
  
  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.vx = 0;
    this.vy = 0;
  }

  draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean) {
    ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  
  update(mouse: { x: number | null, y: number | null, radius: number }) {
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        this.vx -= directionX;
        this.vy -= directionY;
      }
    }
    
    // Spring back to base position
    this.vx += (this.baseX - this.x) * 0.05;
    this.vy += (this.baseY - this.y) * 0.05;

    // Damping / friction
    this.vx *= 0.95;
    this.vy *= 0.95;

    this.x += this.vx;
    this.y += this.vy;
  }
}


export const InteractiveServiceCard: React.FC<InteractiveServiceCardProps> = ({ icon, title, description }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(!document.body.classList.contains('light-mode'));
  
  const mouse = useRef({
    x: null as number | null,
    y: null as number | null,
    radius: 100
  });

  useEffect(() => {
    // Observer for theme changes
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
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const init = () => {
      setCanvasSize();
      particlesRef.current = [];
      const gap = 8;
      for (let y = 0; y < canvas.height / window.devicePixelRatio; y += gap) {
        for (let x = 0; x < canvas.width / window.devicePixelRatio; x += gap) {
          particlesRef.current.push(new Particle(x, y, 1));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(particle => {
        particle.update(mouse.current);
        particle.draw(ctx, isDarkMode);
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(container);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
    };
  }, [isDarkMode]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if(rect) {
        mouse.current.x = event.clientX - rect.left;
        mouse.current.y = event.clientY - rect.top;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouse.current.x = null;
    mouse.current.y = null;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative bg-[var(--glass-bg)] border border-[var(--glass-bg)] backdrop-blur-lg rounded-2xl p-6 md:p-8 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-[var(--glass-bg)] rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[var(--text-heading)] mb-2">{title}</h3>
        <p className="text-[var(--text-main)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
