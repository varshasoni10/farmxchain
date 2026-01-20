import React, { createContext, useContext, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { user } = useAuth();

  useEffect(() => {
    // Clear previous theme classes
    document.body.classList.remove(
      'theme-farmer',
      'theme-dealer',
      'theme-retailer',
      'theme-customer',
      'theme-admin'
    );

    if (user && user.role) {
      const themeClass = `theme-${user.role.toLowerCase()}`;
      document.body.classList.add(themeClass);
    }
  }, [user]);

  // The provider doesn't need to pass any value, it just sets the body class
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);