import React from 'react';
import { PageLayoutProps } from '../types';
import Logo from './Logo';

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-navy-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-32 bottom-0 w-80 h-80 bg-gradient-to-br from-coral-500/30 via-coral-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -right-32 top-0 w-96 h-96 bg-gradient-to-bl from-indigo-600/20 via-indigo-600/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="flex justify-center mb-12">
          <Logo size="lg" />
        </header>
        
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;