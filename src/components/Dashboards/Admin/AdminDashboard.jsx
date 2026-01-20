import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../Shared/DashboardLayout';
import SystemOverview from './SystemOverview';
import UserManagement from './UserManagement';
import DataAnalytics from './DataAnalytics';
import PlatformControl from './PlatformControl';
import { platformUsers } from '../../../data/mockAdminData';

const AdminDashboard = () => {
  const [users, setUsers] = useState(platformUsers);

  // Function to handle user status changes
  const handleUpdateUserStatus = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<SystemOverview />} />
        <Route path="users" element={<UserManagement users={users} onUpdateStatus={handleUpdateUserStatus} />} />
        <Route path="analytics" element={<DataAnalytics />} />
        <Route path="settings" element={<PlatformControl />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminDashboard;