//StudentListsData.js
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// Import the students data
import { students } from './StudentData';

export default function StudentLists() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Roll Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.rollNumber}>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">{student.class}</TableCell>
              <TableCell align="right">{student.division}</TableCell>
              <TableCell align="right">
                <Button variant="contained" sx={{ backgroundColor: '#C4D7FF', color: 'white', '&:hover': { backgroundColor: '#87A2FF' } }} >
                 <Link to={`/student/${student.rollNumber}`} style={{ textDecoration: 'none', color: 'white' }}>
                    View
                      </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}