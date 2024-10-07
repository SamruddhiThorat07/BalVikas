// src/components/StudentItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentItem = ({ student }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.grade}</td>
      <td>
        <button onClick={() => navigate(`/student/${student.id}`)}>View</button>
      </td>
    </tr>
  );
};

export default StudentItem;
