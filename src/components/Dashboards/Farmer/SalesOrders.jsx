import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { mockFarmerOrders } from '../../../data/mockFarmerOrders';
import './SalesOrders.css';

const SalesOrders = () => {
  const [orders, setOrders] = useState(mockFarmerOrders);
  const [filterStatus, setFilterStatus] = useState('All');

  const salesStats = useMemo(() => {
    const totalRevenue = orders
      .filter(o => o.paymentStatus === 'Paid')
      .reduce((sum, order) => sum + order.totalAmount, 0);
    
    const pendingOrders = orders.filter(o => o.status === 'Pending').length;
    
    return {
      totalRevenue,
      totalOrders: orders.length,
      pendingOrders,
    };
  }, [orders]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.orderId === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = orders.filter(order =>
    filterStatus === 'All' || order.status === filterStatus
  );

  const statusOptions = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <div className="sales-orders">
      <h1>Sales & Orders</h1>

      <div className="stats-grid">
        <div className="stat-card">
          {/* CHANGED: Currency symbol and formatting */}
          <h2>₹{salesStats.totalRevenue.toLocaleString('en-IN')}</h2>
          <p>Total Revenue</p>
        </div>
        <div className="stat-card">
          <h2>{salesStats.totalOrders}</h2>
          <p>Total Orders</p>
        </div>
        <div className="stat-card">
          <h2>{salesStats.pendingOrders}</h2>
          <p>Pending Orders</p>
        </div>
      </div>

      <div className="orders-container widget">
        <div className="orders-header">
          <h2>Manage Orders</h2>
          <div className="filter-controls">
            <label htmlFor="statusFilter">Filter by Status:</label>
            <select
              id="statusFilter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="order-list">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <div key={order.orderId} className={`order-card status-${order.status.toLowerCase()}`}>
                <div className="order-card-header">
                  <div>
                    <h3>Order #{order.orderId}</h3>
                    <p>Date: {format(new Date(order.orderDate), 'MMM d, yyyy')}</p>
                  </div>
                  <div className="order-total">
                    <span>Total</span>
                    {/* CHANGED: Currency symbol */}
                    <p>₹{order.totalAmount.toFixed(2)}</p>
                  </div>
                </div>
                <div className="order-card-body">
                  <h4>Customer: {order.customerName} ({order.customerType})</h4>
                  <ul>
                    {order.items.map(item => (
                      <li key={item.productName}>
                        {item.productName} <span>({item.quantity} units)</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-card-footer">
                  <span className={`payment-status status-${order.paymentStatus.toLowerCase()}`}>{order.paymentStatus}</span>
                  <div className="status-updater">
                    <label>Update Status:</label>
                    <select 
                      value={order.status} 
                      onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                      className="status-select"
                    >
                      {statusOptions.slice(1).map(status => (
                         <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-orders-msg">No orders match the selected filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesOrders;