import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { platformStats, usersByRoleData } from '../../../data/mockAdminData';
import './SystemOverview.css';

const SystemOverview = () => {
  const COLORS = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0']; // Farmer, Dealer, Retailer, Customer

  return (
    <div className="system-overview">
      <h1>System Overview</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>₹{platformStats.totalRevenue.toLocaleString('en-IN')}</h2>
          <p>Total Revenue</p>
        </div>
        <div className="stat-card">
          <h2>{platformStats.totalUsers}</h2>
          <p>Total Users</p>
        </div>
        <div className="stat-card">
          <h2>{platformStats.totalProducts}</h2>
          <p>Tracked Products</p>
        </div>
        <div className="stat-card">
          <h2>{platformStats.activeTransactions}</h2>
          <p>Active Transactions</p>
        </div>
      </div>

      <div className="admin-widgets-grid">
        <div className="widget">
          <h3>User Distribution by Role</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={usersByRoleData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {usersByRoleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="widget">
          <h3>Real-time Activity Feed</h3>
          <ul className="activity-feed">
            <li>✅ User 'customer@demo.com' verified product 'Organic Roma Tomatoes'.</li>
            <li>📝 New order ORD-2025-09-A4B1 placed by 'FreshLink Distributors'.</li>
            <li>🌾 Farmer 'farmer@demo.com' added new batch 'BATCH-2025-CRN-004'.</li>
            <li>⚠️ System alert: QR Generation Service is experiencing high latency.</li>
            <li>👤 New user 'new@farmer.com' registered. Pending approval.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;