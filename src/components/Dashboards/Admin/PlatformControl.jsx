import React from 'react';
import { systemHealth } from '../../../data/mockAdminData';
import './PlatformControl.css';

const PlatformControl = () => {
  return (
    <div className="platform-control">
      <h1>Platform Control & Settings</h1>
      <div className="admin-widgets-grid">
        <div className="widget">
          <h3>System Health Status</h3>
          <ul className="health-status-list">
            {systemHealth.map(service => (
              <li key={service.component}>
                <span>{service.component}</span>
                <span className={`health-badge health-${service.status.toLowerCase().replace(' ', '-')}`}>
                  {service.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h3>Configuration Settings</h3>
          <form className="settings-form">
            <div className="form-group">
              <label>Platform Name</label>
              <input type="text" value="FarmChainX" disabled />
            </div>
            <div className="form-group">
              <label>Transaction Fee (%)</label>
              <input type="number" value="2.5" disabled />
            </div>
            <div className="form-group">
              <label>Maintenance Mode</label>
              <select disabled>
                <option>Disabled</option>
                <option>Enabled</option>
              </select>
            </div>
            <button type="button" disabled>Save Settings</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PlatformControl;