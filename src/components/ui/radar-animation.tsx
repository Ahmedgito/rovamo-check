import React from 'react';

interface RadarAnimationProps {
  className?: string;
  color?: string;
}

export function RadarAnimation({ className = "", color = "#FFFFFF" }: RadarAnimationProps) {
  return (
    <div className={`relative w-40 h-40 ${className}`}>
      <div 
        className="absolute w-full h-full rounded-full border"
        style={{ borderColor: color, borderWidth: '1px' }}
      >
        <div className="absolute w-full h-full animate-[spin_3s_linear_infinite]">
          <div 
            className="absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 top-0 left-1/2" 
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}80`,
              transform: 'translate(-50%, -50%) translateY(0px)'
            }}
          />
        </div>
      </div>
    </div>
  );
} 