// Behavior.js
import React from 'react';
import { Checkbox, FormControlLabel, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Behavior() {
  return (
    <div>
      <h2>Daily Behavior Tracking</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
      <div>
        <FormControlLabel control={<Checkbox />} label="Completed homework" />
        <FormControlLabel control={<Checkbox />} label="Participated in class" />
        <FormControlLabel control={<Checkbox />} label="Helped others" />
        <FormControlLabel control={<Checkbox />} label="Showed improvement" />
        <FormControlLabel control={<Checkbox />} label="Disruptive behavior" />
      </div>
      <Button variant="contained" color="primary">
        Save Behavior Report
      </Button>
    </div>
  );
}
