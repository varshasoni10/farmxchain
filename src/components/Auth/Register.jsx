import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Register.css'; // Reusing some styles from Login

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Call the mock register function from context
    const newUser = register({
      name: formData.name,
      email: formData.email,
      password: formData.password, // In a real app, hash this before sending
      role: formData.role,
    });

    if (newUser) {
      // Automatically log the user in after registration
      alert('Registration successful! Please log in.');
      navigate('/login');
    } else {
      setError('Registration failed. The email might already be in use.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="role">Register as a:</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange}>
              <option value="customer">Customer</option>
              <option value="farmer">Farmer</option>
              <option value="dealer">Dealer</option>
              <option value="retailer">Retailer</option>
            </select>
          </div>

          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Register</button>
        </form>
        <p className="register-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;