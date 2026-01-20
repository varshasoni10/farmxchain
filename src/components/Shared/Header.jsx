import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user } = useAuth();
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h2>Welcome back, {user?.name}!</h2>
        <p>{today}</p>
      </div>
      <div className="header-right">
        {/* Can add search bar or notifications here later */}
      </div>
    </header>
  );
};

export default Header;