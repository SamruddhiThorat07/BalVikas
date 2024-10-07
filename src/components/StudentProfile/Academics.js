import React from 'react';
import { Box, Grid, Typography, Divider, TextField } from '@mui/material';
import { academicsData } from './AcademicData'; // Adjust path if needed
import { useParams } from 'react-router-dom';

export default function Academics() {
  const { rollNumber } = useParams(); // Get rollNumber from URL params

  const studentAcademics = academicsData.find(
    (student) => String(student.rollNumber) === String(rollNumber)
  );

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Academic Information
      </Typography>

      <Divider sx={{ marginBottom: '20px' }} />

      {studentAcademics ? (
        <Grid container spacing={3}>
          {/* School Information */}
          <Grid item xs={12}>
            <Typography variant="h6">School Information</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="School Name"
              defaultValue="Springfield High School"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Grade"
              defaultValue={studentAcademics.class}
              InputProps={{ readOnly: true }}
            />
          </Grid>

          {/* Subjects */}
          <Grid item xs={12}>
            <Typography variant="h6">Subjects</Typography>
          </Grid>
          {studentAcademics.subjects.map((subject, index) => (
            <Grid item xs={4} key={index}>
              <TextField
                fullWidth
                label={`Subject ${index + 1}`}
                defaultValue={subject.subject}
                InputProps={{ readOnly: true }}
              />
            </Grid>
          ))}

          {/* Attendance */}
          <Grid item xs={12}>
            <Typography variant="h6">Attendance</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Days Attended"
              defaultValue={studentAcademics.attendance.daysAttended}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Days Absent"
              defaultValue={studentAcademics.attendance.daysAbsent}
              InputProps={{ readOnly: true }}
            />
          </Grid>

          {/* Academic Performance */}
          <Grid item xs={12}>
            <Typography variant="h6">Academic Performance</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Overall GPA"
              defaultValue={studentAcademics.gpa}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Class Rank"
              defaultValue={studentAcademics.rank}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Awards"
              defaultValue={studentAcademics.awards}
              InputProps={{ readOnly: true }}
            />
          </Grid>

          {/* Extracurricular Activities */}
          <Grid item xs={12}>
            <Typography variant="h6">Extracurricular Activities</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Club"
              defaultValue="Debate Club" // Placeholder or dynamic data if available
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sports"
              defaultValue="Basketball" // Placeholder or dynamic data if available
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6">Student academic data not found.</Typography>
      )}
    </Box>
  );
}
