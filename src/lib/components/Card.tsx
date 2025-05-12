import React from 'react';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;