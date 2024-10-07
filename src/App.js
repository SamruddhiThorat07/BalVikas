// App.js
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentLists from './components/StudentLists';
import StudentProfile from './components/StudentProfile';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the student list */}
        <Route path="/" element={<StudentLists />} />

        {/* Dynamic route for student profiles based on student ID */}
        <Route path="/student/:rollNumber" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}
