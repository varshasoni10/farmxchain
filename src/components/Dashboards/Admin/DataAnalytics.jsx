import React from 'react';
// Re-using some mock data for demonstration
import { monthlyRevenueData } from '../../../data/mockFarmerAnalytics';
import { usersByRoleData } from '../../../data/mockAdminData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DataAnalytics.css';

const DataAnalytics = () => {
  return (
    <div className="data-analytics">
      <h1>Platform Data Analytics</h1>
      <p>High-level insights into supply chain efficiency and platform growth.</p>
      <div className="charts-grid">
        <div className="widget full-width">
          <h3>Platform Revenue Growth (Last 12 Months)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenueData.map(d => ({...d, revenue: d.revenue * (Math.random() * 20 + 50)}))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`} />
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#616161" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="widget">
          <h3>Platform Growth (Users)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usersByRoleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#757575" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;