import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './DashboardLayout.css';
import '../../styles/themes.css'; // This import is critical

const DashboardLayout = ({ children }) => {
  // This logic finds the user's role from the URL (e.g., "dealer")
  const path = window.location.pathname.split('/')[1];
  const role = path || 'default';
  
  // This line applies the correct theme class (e.g., "dashboard-dealer")
  return (
    <div className={`dashboard-layout dashboard-${role}`}>
      <Sidebar role={role} />
      <div className="dashboard-main">
        <Header />
        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;