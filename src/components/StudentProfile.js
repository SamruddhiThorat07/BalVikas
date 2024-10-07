//StudentProfile.js
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Overview from './StudentProfile/Overview';
import Academics from './StudentProfile/Academics';
import Behavior from './StudentProfile/Behavior';
import Progress from './StudentProfile/Progress';

export default function StudentProfile() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="student profile tabs">
          <Tab label="Profile" />
          <Tab label="Academics" />
          <Tab label="Behavior" />
          <Tab label="Progress" />
        </Tabs>
      </Box>
      
      {/* Render the selected tab content */}
      <Box sx={{ p: 3 }}>
        {selectedTab === 0 && <Overview  />}
        {selectedTab === 1 && <Academics />}
        {selectedTab === 2 && <Behavior  />}
        {selectedTab === 3 && <Progress />}
      </Box>
    </Box>
  );
}