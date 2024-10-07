// src/components/StudentDetails.jsx
import React, { useState } from 'react';
import BehaviorTracking from './BehaviorTracking';

const StudentDetails = () => {
  const [activeTab, setActiveTab] = useState('behavior');

  return (
    <div>
      <h2>Alice Johnson</h2>
      <div>
        <button onClick={() => setActiveTab('overview')}>Overview</button>
        <button onClick={() => setActiveTab('academics')}>Academics</button>
        <button onClick={() => setActiveTab('behavior')}>Behavior</button>
        <button onClick={() => setActiveTab('progress')}>Progress</button>
      </div>

      {activeTab === 'behavior' && <BehaviorTracking />}
      {/* Other components for overview, academics, progress */}
    </div>
  );
};

export default StudentDetails;
