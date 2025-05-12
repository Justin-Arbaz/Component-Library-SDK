import React, { createContext, useState, useContext } from 'react';
import { User, UserContextProps } from '../types';

const initialContext: UserContextProps = {
  user: null,
  setUser: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
};

const UserContext = createContext<UserContextProps>(initialContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isSubmitted, setIsSubmitted }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);