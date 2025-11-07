
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
  glassmorphism?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  glassmorphism = false,
  onClick
}: CardProps) {
  const baseClasses = 'rounded-2xl border border-slate-200/50';
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg shadow-slate-200/50'
  };
  
  const glassClass = glassmorphism 
    ? 'bg-white/80 backdrop-blur-sm border-white/20' 
    : 'bg-white';
  
  return (
    <div className={`${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${glassClass} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
