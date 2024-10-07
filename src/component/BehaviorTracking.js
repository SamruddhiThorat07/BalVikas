// src/components/BehaviorTracking.jsx
import React, { useState } from 'react';

const BehaviorTracking = () => {
  const [behavior, setBehavior] = useState({
    homework: false,
    participated: false,
    helped: false,
    improvement: false,
    disruptive: false,
  });

  const handleChange = (e) => {
    setBehavior({
      ...behavior,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log('Behavior data submitted:', behavior);
  };

  return (
    <div>
      <h3>Daily Behavior Tracking</h3>
      <div>
        <input type="checkbox" name="homework" onChange={handleChange} />
        <label>Completed homework</label>
      </div>
      <div>
        <input type="checkbox" name="participated" onChange={handleChange} />
        <label>Participated in class</label>
      </div>
      <div>
        <input type="checkbox" name="helped" onChange={handleChange} />
        <label>Helped others</label>
      </div>
      <div>
        <input type="checkbox" name="improvement" onChange={handleChange} />
        <label>Showed improvement</label>
      </div>
      <div>
        <input type="checkbox" name="disruptive" onChange={handleChange} />
        <label>Disruptive behavior</label>
      </div>
      <button onClick={handleSubmit}>Save Behavior Report</button>
    </div>
  );
};

export default BehaviorTracking;
