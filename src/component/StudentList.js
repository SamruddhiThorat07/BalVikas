// src/components/StudentList.jsx
import React from 'react';
import StudentItem from './StudentItem';

const students = [
  { id: 1, name: 'Alice Johnson', age: 15, grade: '10th' },
  { id: 2, name: 'Bob Smith', age: 16, grade: '11th' },
  { id: 3, name: 'Charlie Brown', age: 14, grade: '9th' },
];

const StudentList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <StudentItem key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
