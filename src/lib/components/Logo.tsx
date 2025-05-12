import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      <div className="mr-2 bg-coral-500 rounded-md p-1">
        <Sparkles className="text-white" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
      </div>
      <span className="font-bold text-white tracking-wide">Coding Conf</span>
    </div>
  );
};

export default Logo;