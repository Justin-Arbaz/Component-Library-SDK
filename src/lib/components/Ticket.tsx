import React from 'react';
import { TicketProps } from '../types';
import Logo from './Logo';
import { Github } from 'lucide-react';

const Ticket: React.FC<TicketProps> = ({ user }) => {
  return (
    <div className="max-w-md mx-auto mt-8 perspective">
      <div className="ticket relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:rotate-y-10">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Logo size="sm" />
            <div className="text-xs text-white/70">
              Jan 31, 2025 / Austin, TX
            </div>
          </div>
          
          <div className="flex items-center">
            {user.avatarUrl && (
              <div className="mr-4">
                <img 
                  src={user.avatarUrl} 
                  alt={user.fullName} 
                  className="h-16 w-16 rounded-md object-cover border border-white/20"
                />
              </div>
            )}
            
            <div>
              <h3 className="font-medium text-lg">{user.fullName}</h3>
              <div className="flex items-center mt-1 text-sm text-white/70">
                <Github className="mr-1" size={16} />
                <span>@{user.githubUsername.replace('https://github.com/', '')}</span>
              </div>
            </div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-16 flex flex-col items-center justify-center border-l border-dashed border-white/20">
            <div className="transform -rotate-90 whitespace-nowrap text-xs tracking-widest text-white/50">
              #098603
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;