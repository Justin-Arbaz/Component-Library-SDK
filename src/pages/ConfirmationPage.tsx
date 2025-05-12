import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../lib/components/PageLayout';
import Ticket from '../lib/components/Ticket';
import { useUser } from '../lib/context/UserContext';

const ConfirmationPage: React.FC = () => {
  const { user, isSubmitted } = useUser();
  const navigate = useNavigate();
  
  // Redirect if accessed directly without submitting the form
  useEffect(() => {
    if (!isSubmitted || !user) {
      navigate('/');
    }
  }, [isSubmitted, user, navigate]);
  
  if (!user) {
    return null;
  }
  
  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Your Journey to Coding Conf 2025 Starts Here
        </h1>
        <p className="text-lg text-white/70">
          Secure your spot at next year's biggest coding conference
        </p>
      </div>
      
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Congrats, <span className="text-coral-500">{user.fullName}</span>!
        </h2>
        <h3 className="text-2xl mb-6">Your ticket is ready.</h3>
        
        <p className="text-white/70 mb-8">
          We've emailed your ticket to <span className="text-coral-500">{user.email}</span> and will send updates in 
          the run up to the event.
        </p>
        
        <Ticket user={user} />
      </div>
    </PageLayout>
  );
};

export default ConfirmationPage;