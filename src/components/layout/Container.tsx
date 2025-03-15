import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 mx-auto ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container; 