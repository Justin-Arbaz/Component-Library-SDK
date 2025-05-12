import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../lib/components/PageLayout';
import Input from '../lib/components/Input';
import Button from '../lib/components/Button';
import AvatarUploader from '../lib/components/AvatarUploader';
import { useUser } from '../lib/context/UserContext';

const RegistrationForm: React.FC = () => {
  const { setUser, setIsSubmitted } = useUser();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    githubUsername: '',
    avatarUrl: null as string | null,
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    githubUsername: '',
  });
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      githubUsername: '',
    };
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.githubUsername.trim()) {
      newErrors.githubUsername = 'GitHub username is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setUser({
        fullName: formData.fullName,
        email: formData.email,
        githubUsername: formData.githubUsername,
        avatarUrl: formData.avatarUrl || undefined,
      });
      
      setIsSubmitted(true);
      navigate('/confirmation');
    }
  };
  
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    
    // Clear error when typing
    if (errors[field as keyof typeof errors]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };
  
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
      
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <AvatarUploader 
            avatarUrl={formData.avatarUrl} 
            onAvatarChange={(url) => setFormData({ ...formData, avatarUrl: url })}
          />
          
          <Input
            id="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={(value) => handleInputChange('fullName', value)}
            required
            error={errors.fullName}
          />
          
          <Input
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            required
            error={errors.email}
          />
          
          <Input
            id="githubUsername"
            label="GitHub Username"
            value={formData.githubUsername}
            onChange={(value) => handleInputChange('githubUsername', value)}
            placeholder="https://github.com/username"
            required
            error={errors.githubUsername}
          />
          
          <div className="mt-8 flex justify-center">
            <Button type="submit" size="lg">
              Register Now
            </Button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default RegistrationForm;