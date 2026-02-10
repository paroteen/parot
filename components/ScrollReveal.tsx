import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom-in' | 'zoom-out' | 'skew-up';
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 1000,
  direction = 'up',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getStyles = () => {
    const styles: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1), transform ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
    };

    if (!isVisible) {
      switch (direction) {
        case 'up':
          styles.transform = 'translateY(40px)';
          break;
        case 'down':
          styles.transform = 'translateY(-40px)';
          break;
        case 'left':
          styles.transform = 'translateX(40px)';
          break;
        case 'right':
          styles.transform = 'translateX(-40px)';
          break;
        case 'zoom-in':
          styles.transform = 'scale(0.9)';
          break;
        case 'zoom-out':
          styles.transform = 'scale(1.1)';
          break;
        case 'skew-up':
          styles.transform = 'translateY(60px) skewY(2deg)';
          break;
        default:
          styles.transform = 'none';
      }
    } else {
      styles.transform = 'none';
    }

    return styles;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
