import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const getDashboardPath = (role) => {
    switch (role) {
      case 'farmer': return '/farmer';
      case 'dealer': return '/dealer';
      case 'retailer': return '/retailer';
      case 'customer': return '/customer';
      case 'admin': return '/admin';
      default: return '/';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const user = login(email, password);
    if (user) {
      const path = getDashboardPath(user.role);
      navigate(path);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };
  
  const handleDemoLogin = (demoEmail, demoPassword) => {
    const user = login(demoEmail, demoPassword);
    if (user) {
      const path = getDashboardPath(user.role);
      navigate(path);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>FarmChainX Login</h2>
        <p className="login-subtitle">Traceability from Farm to Table</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
         <div className="demo-accounts">
          <h3>Quick Demo Logins</h3>
          <button onClick={() => handleDemoLogin('farmer@demo.com', 'password123')}>🌾 Farmer</button>
          <button onClick={() => handleDemoLogin('dealer@demo.com', 'password123')}>🚛 Dealer</button>
          <button onClick={() => handleDemoLogin('retailer@demo.com', 'password123')}>🏪 Retailer</button>
          <button onClick={() => handleDemoLogin('customer@demo.com', 'password123')}>👥 Customer</button>
          <button onClick={() => handleDemoLogin('admin@demo.com', 'password123')}>👨‍💼 Admin</button>
        </div>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;