import React, { useRef, useState } from 'react';
import { AvatarUploaderProps } from '../types';
import Button from './Button';
import { Camera, X } from 'lucide-react';

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ avatarUrl, onAvatarChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onAvatarChange(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onAvatarChange(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-8">
      <p className="block text-white font-medium mb-2">Upload Avatar</p>
      <div 
        className={`w-full h-40 border-2 border-dashed rounded-lg flex items-center justify-center mb-3 transition-all
          ${isDragging ? 'border-coral-500 bg-white/10' : 'border-white/30'}
          ${avatarUrl ? 'border-solid border-coral-500/50' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {avatarUrl ? (
          <div className="relative h-24 w-24">
            <img 
              src={avatarUrl} 
              alt="User avatar" 
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        ) : (
          <div className="text-center p-4">
            <Camera className="mx-auto h-12 w-12 text-white/50 mb-2" />
            <p className="text-white/70 text-sm">
              Drop your image here or click to browse
            </p>
          </div>
        )}
      </div>
      
      <div className="flex space-x-3">
        <Button variant="outline" size="sm" onClick={handleClick}>
          Change Image
        </Button>
        {avatarUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onAvatarChange(null)}
          >
            Remove Image
          </Button>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png"
        className="hidden"
      />
      
      <div className="mt-2 flex items-center text-white/50 text-xs">
        <span className="mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Upload your photo (JPG or PNG, max size: 500KB)
      </div>
    </div>
  );
};

export default AvatarUploader;