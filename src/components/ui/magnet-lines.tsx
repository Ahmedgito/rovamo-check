import React, { useEffect, useRef } from 'react';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
}

export const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 6,
  columns = 6,
  containerSize = '100%',
  lineColor = '#fff',
  lineWidth = '3px',
  lineHeight = '24px',
  baseAngle = -30,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const lines = useRef<HTMLDivElement[]>([]);
  const isTouch = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      mousePosition.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };

      lines.current.forEach((line, index) => {
        if (!line) return;
        
        const lineRect = line.getBoundingClientRect();
        const lineCenterX = lineRect.left + lineRect.width / 2 - rect.left;
        const lineCenterY = lineRect.top + lineRect.height / 2 - rect.top;

        const deltaX = mousePosition.current.x - lineCenterX;
        const deltaY = mousePosition.current.y - lineCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        const rotation = baseAngle + (angle - baseAngle) * Math.max(0, 1 - distance / maxDistance);

        line.style.transform = `rotate(${rotation}deg)`;
      });
    };

    // Add touch event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleMouseMove, { passive: true });
    container.addEventListener('touchstart', () => { isTouch.current = true; }, { passive: true });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleMouseMove);
      container.removeEventListener('touchstart', () => { isTouch.current = true; });
    };
  }, [baseAngle]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ 
        width: containerSize,
        aspectRatio: '1/1',
        perspective: '1000px',
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => (
        <div
          key={index}
          ref={(el) => el && (lines.current[index] = el)}
          className="absolute transform transition-transform duration-300 ease-out"
          style={{
            width: lineWidth,
            height: lineHeight,
            backgroundColor: lineColor,
            left: `${(index % columns) * (100 / columns)}%`,
            top: `${Math.floor(index / columns) * (100 / rows)}%`,
            transform: `rotate(${baseAngle}deg)`,
            transformOrigin: 'center',
            willChange: 'transform',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}; 