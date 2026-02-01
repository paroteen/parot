import React from 'react';

interface GlowLineProps {
  className?: string;
  color?: string;
}

const GlowLine: React.FC<GlowLineProps> = ({ className = '', color = '#2596BE' }) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          height: '2px',
          filter: 'blur(1px)',
          opacity: 0.6,
          animation: 'glow-pulse 2s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          height: '1px',
          opacity: 0.8,
        }}
      />
    </div>
  );
};

export default GlowLine;
