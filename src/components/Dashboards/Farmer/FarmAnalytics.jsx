import React, { useMemo } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { monthlyRevenueData, revenueByCropData, quantityByCropData, ordersByCustomerData } from '../../../data/mockFarmerAnalytics';
import './FarmAnalytics.css';

const FarmAnalytics = () => {
  // Memoized calculations for KPIs
  const kpiStats = useMemo(() => {
    const totalRevenue = monthlyRevenueData.reduce((acc, item) => acc + item.revenue, 0);
    const busiestMonth = monthlyRevenueData.reduce((prev, current) => (prev.revenue > current.revenue) ? prev : current);
    const topCrop = revenueByCropData.reduce((prev, current) => (prev.value > current.value) ? prev : current);
    return { totalRevenue, busiestMonth, topCrop };
  }, []);

  const COLORS = ['#2E7D32', '#4CAF50', '#81C784', '#A5D6A7'];

  return (
    <div className="farm-analytics">
      <h1>Farm Analytics</h1>

      <div className="kpi-grid">
        <div className="kpi-card">
          <h4>Total Revenue (Last 12 Mo.)</h4>
          <p>₹{kpiStats.totalRevenue.toLocaleString('en-IN')}</p>
        </div>
        <div className="kpi-card">
          <h4>Busiest Month</h4>
          <p>{kpiStats.busiestMonth.month} (₹{kpiStats.busiestMonth.revenue.toLocaleString('en-IN')})</p>
        </div>
        <div className="kpi-card">
          <h4>Top Earning Crop</h4>
          <p>{kpiStats.topCrop.name}</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-widget">
          <h3>Monthly Revenue (₹)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#2E7D32" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-widget">
          <h3>Revenue by Crop</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={revenueByCropData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {revenueByCropData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-widget">
          <h3>Sales Quantity by Crop (kg)</h3>
           <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quantityByCropData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} kg`} />
              <Legend />
              <Bar dataKey="quantity" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-widget">
          <h3>Orders by Customer</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersByCustomerData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#81C784" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FarmAnalytics;