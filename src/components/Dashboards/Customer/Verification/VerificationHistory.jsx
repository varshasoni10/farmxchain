import React from 'react';
import { format } from 'date-fns';
import './VerificationHistory.css';

const VerificationHistory = ({ history }) => {
  return (
    <div className="verification-history widget">
      <h2>My Verification History</h2>
      {history.length === 0 ? (
        <p>You haven't scanned any products yet.</p>
      ) : (
        <div className="history-list">
          {history.map(item => (
            <div key={item.scanId} className="history-item">
              <img src={item.image} alt={item.name} className="history-item-img" />
              <div className="history-item-info">
                <h4>{item.name}</h4>
                <p>from {item.farm}</p>
                <p className="scan-date">Scanned on: {format(new Date(item.scanDate), 'PPp')}</p>
              </div>
              <span className={`status-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VerificationHistory;