import React from 'react';
import { format } from 'date-fns';
import './UserManagement.css';

const UserManagement = ({ users, onUpdateStatus }) => {
  return (
    <div className="user-management">
      <h1>User Management</h1>
      <p>Approve, suspend, or manage all users on the FarmChainX platform.</p>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Registered On</th>
              <th>Last Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="user-info">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                </td>
                <td><span className={`role-badge role-${user.role}`}>{user.role}</span></td>
                <td><span className={`status-badge status-${user.status.toLowerCase().replace(' ', '-')}`}>{user.status}</span></td>
                <td>{format(new Date(user.createdAt), 'PP')}</td>
                <td>{format(new Date(user.lastActivity), 'PPp')}</td>
                <td>
                  <div className="action-buttons">
                    {user.status === 'Pending Approval' && 
                      <button onClick={() => onUpdateStatus(user.id, 'Active')} className="btn-approve">Approve</button>}
                    {user.status === 'Active' && 
                      <button onClick={() => onUpdateStatus(user.id, 'Suspended')} className="btn-suspend">Suspend</button>}
                    {user.status === 'Suspended' && 
                      <button onClick={() => onUpdateStatus(user.id, 'Active')} className="btn-activate">Re-activate</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;