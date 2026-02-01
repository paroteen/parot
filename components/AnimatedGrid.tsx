import React, { useEffect, useRef } from 'react';

const AnimatedGrid: React.FC<{ className?: string }> = ({ className = '' }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const createGridLines = () => {
      const lines: Array<{ x: number; y: number; length: number; angle: number }> = [];
      const spacing = 50;
      const cols = Math.ceil(window.innerWidth / spacing);
      const rows = Math.ceil(window.innerHeight / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.7) {
            lines.push({
              x: i * spacing,
              y: j * spacing,
              length: Math.random() * 30 + 10,
              angle: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      grid.innerHTML = '';
      lines.forEach((line) => {
        const lineEl = document.createElement('div');
        lineEl.className = 'absolute w-px h-px bg-paroblue/20';
        lineEl.style.left = `${line.x}px`;
        lineEl.style.top = `${line.y}px`;
        lineEl.style.width = `${line.length}px`;
        lineEl.style.transform = `rotate(${line.angle}rad)`;
        lineEl.style.animation = 'pulse 2s ease-in-out infinite';
        grid.appendChild(lineEl);
      });
    };

    createGridLines();
    window.addEventListener('resize', createGridLines);

    return () => {
      window.removeEventListener('resize', createGridLines);
    };
  }, []);

  return <div ref={gridRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};

export default AnimatedGrid;
