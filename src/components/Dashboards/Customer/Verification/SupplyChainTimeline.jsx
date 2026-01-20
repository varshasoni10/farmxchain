import React from 'react';
import { format } from 'date-fns';
import './SupplyChainTimeline.css';

const stageIcons = {
    "Farm Origin": "🌱",
    "Harvest": "🚜",
    "Processing": "🏭",
    "Distribution": "🚚",
    "Retail": "🛒"
};


const SupplyChainTimeline = ({ stages }) => {
  return (
    <div className="timeline">
      {stages.map((stage, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-icon">{stageIcons[stage.stage] || '📦'}</div>
          <div className="timeline-content">
            <h4>{stage.stage}</h4>
            <p><strong>Location:</strong> {stage.location}</p>
            <p><strong>Date:</strong> {format(new Date(stage.date), 'PPp')}</p>
            <div className="quality-check">
                Quality Check: <span className={`status-${stage.qualityCheck.status}`}>{stage.qualityCheck.status}</span> ({stage.qualityCheck.score}/100)
            </div>
            <img src={stage.photos[0]} alt={stage.stage} className="stage-photo" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplyChainTimeline;