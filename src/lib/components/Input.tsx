import React from 'react';
import { InputProps } from '../types';

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  error,
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor={id} 
        className="block text-white font-medium mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
          error ? 'border-red-500' : 'border-white/20'
        } rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all duration-200`}
      />
      {error && (
        <p className="mt-1 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default Input;