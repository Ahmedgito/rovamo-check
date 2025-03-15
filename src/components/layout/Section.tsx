import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  bgColor?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  fullWidth = false,
  bgColor = 'bg-white',
  id
}) => {
  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`} id={id}>
      <div className={`px-4 mx-auto ${fullWidth ? '' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section; 