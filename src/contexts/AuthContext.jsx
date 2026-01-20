import React, { createContext, useState, useEffect } from 'react';
import { mockUsers } from '../data/mockUsers';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for a logged-in user session
    try {
      const storedUser = localStorage.getItem('farmChainUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('farmChainUser');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (email, password) => {
    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password // In a real app, password would be hashed
    );

    if (foundUser) {
      const userToStore = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        avatar: foundUser.avatar,
      };
      setUser(userToStore);
      localStorage.setItem('farmChainUser', JSON.stringify(userToStore));
      return userToStore;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('farmChainUser');
  };
  
  const register = (userData) => {
    // This is a mock registration. In a real app, this would hit an API.
    const newUser = { ...userData, id: `user-${Date.now()}` };
    mockUsers.push(newUser); // Note: This adds to the in-memory array, won't persist on refresh
    console.log("Registered new user (in-memory):", newUser);
    return newUser;
  };


  const value = { user, loading, login, logout, register, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};