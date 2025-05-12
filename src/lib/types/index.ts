export interface User {
  fullName: string;
  email: string;
  githubUsername: string;
  avatarUrl?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}

export interface AvatarUploaderProps {
  avatarUrl: string | null;
  onAvatarChange: (url: string | null) => void;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface PageLayoutProps {
  children: React.ReactNode;
}

export interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

export interface TicketProps {
  user: User;
}