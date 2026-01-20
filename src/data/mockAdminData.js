import { mockUsers } from './mockUsers'; // We will use the existing users data

export const platformStats = {
  totalRevenue: 8550000, // INR
  totalUsers: 278,
  totalProducts: 452,
  activeTransactions: 121,
};

export const usersByRoleData = [
  { name: 'Farmers', value: 68 },
  { name: 'Dealers', value: 25 },
  { name: 'Retailers', value: 45 },
  { name: 'Customers', value: 140 },
];

// Combine mockUsers with additional admin-specific fields
export const platformUsers = mockUsers.map(user => ({
  ...user,
  status: 'Active', // Active, Suspended, Pending Approval
  lastActivity: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 7).toISOString(),
  createdAt: new Date(user.createdAt).toISOString(),
}));

// Add some more mock users for demonstration
platformUsers.push(
  { id: 'user-new-1', name: 'New Farmer Inc.', email: 'new@farmer.com', role: 'farmer', status: 'Pending Approval', createdAt: new Date().toISOString(), lastActivity: new Date().toISOString() },
  { id: 'user-suspended-1', name: 'Suspended User', email: 'suspended@dealer.com', role: 'dealer', status: 'Suspended', createdAt: '2025-01-01T12:00:00Z', lastActivity: '2025-08-01T12:00:00Z' }
);


export const systemHealth = [
    { component: 'API Gateway', status: 'Operational' },
    { component: 'User Authentication', status: 'Operational' },
    { component: 'Database Connection', status: 'Operational' },
    { component: 'QR Generation Service', status: 'Degraded Performance' },
    { component: 'Blockchain Node', status: 'Major Outage' },
];