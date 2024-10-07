// src/components/TeacherDashboard.jsx
import React from 'react';
import StudentList from './StudentList';

const TeacherDashboard = () => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <button>+ Add Student</button>
      <StudentList />
    </div>
  );
};

export default TeacherDashboard;
