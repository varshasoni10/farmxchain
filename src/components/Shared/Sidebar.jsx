import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Sidebar.css';

const navLinks = {
  farmer: [
    { name: 'Dashboard', path: '/farmer' },
    { name: 'Products', path: '/farmer/products' },
    { name: 'Sales & Orders', path: '/farmer/orders' },
    { name: 'Analytics', path: '/farmer/analytics' },
    // { name: 'Compliance', path: '/farmer/compliance' }, // <-- This line has been removed
  ],
  dealer: [
    { name: 'Dashboard', path: '/dealer' },
    { name: 'Inventory', path: '/dealer/inventory' },
    { name: 'Supply Chain', path: '/dealer/supply' },
    { name: 'Analytics', path: '/dealer/analytics' },
  ],
  retailer: [
    { name: 'Dashboard', path: '/retailer' },
    { name: 'Inventory', path: '/retailer/inventory' },
    { name: 'Sales', path: '/retailer/sales' },
    { name: 'Customers', path: '/retailer/customers' },
  ],
  customer: [
    { name: 'Home', path: '/customer' },
    { name: 'Product Verification', path: '/customer/verify' },
    { name: 'My Orders', path: '/customer/orders' },
    { name: 'Favorites', path: '/customer/favorites' },
  ],
  admin: [
    { name: 'Overview', path: '/admin' },
    { name: 'User Management', path: '/admin/users' },
    { name: 'Analytics', path: '/admin/analytics' },
    { name: 'Platform Control', path: '/admin/settings' },
  ],
};

const roleIcons = {
  farmer: '🌾',
  dealer: '🚛',
  retailer: '🏪',
  customer: '👥',
  admin: '👨‍💼',
};

const Sidebar = ({ role }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const links = navLinks[role] || [];
  const icon = roleIcons[role] || '⚙️';

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>{icon} FarmChainX</h3>
        <span className="sidebar-role">{role.charAt(0).toUpperCase() + role.slice(1)}</span>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end={link.path.split('/').length <= 2}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
            <img src={user?.avatar} alt="User" className="user-avatar" />
            <span className="user-name">{user?.name}</span>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;