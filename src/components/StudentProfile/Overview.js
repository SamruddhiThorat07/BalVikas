import * as React from 'react';
import { Box, Grid, TextField, Typography, Avatar, Divider } from '@mui/material';
import { profileData } from './ProfileData'; // Adjust path as necessary
import { useParams } from 'react-router-dom';

export default function Overview() {
  const { rollNumber } = useParams(); // Get rollNumber from URL params

  // Debugging logs
  console.log("Captured roll number from URL:", rollNumber);
  console.log("Profile Data:", profileData);

  // Ensure rollNumber is treated as a string for comparison
  const student = profileData.find((s) => String(s.rollNumber) === String(rollNumber)); 

  console.log("Student found:", student); // This should show the correct student object

  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      {student ? (
        <>
          <Grid container spacing={3} alignItems="center" sx={{ marginBottom: '20px' }}>
            <Grid item>
              <Avatar
                alt="Student Profile"
                src="/path-to-student-image.jpg" // Replace with dynamic image path if available
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">{student.name}</Typography>
              <Typography variant="subtitle1">
                Roll Number: {student.rollNumber} | Age: {new Date().getFullYear() - new Date(student.dob).getFullYear()} | {student.gender} | Date of Birth: {student.dob}
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="h6">Personal Information</Typography>
          <Divider sx={{ marginBottom: '20px' }} />

          {/* Personal Information Fields */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                defaultValue={student.address}
                InputProps={{ readOnly: true }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone Number"
                defaultValue={student.contact}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                defaultValue={student.email} // Assuming email is part of student data
                InputProps={{ readOnly: true }}
              />
            </Grid>

            {/* Parent Information */}
            <Grid item xs={12}>
              <Typography variant="h6">Parent Information</Typography>
            </Grid>

            {/* Mother's Information */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mother's Name"
                defaultValue={student.parent?.mother?.name || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mother's Phone Number"
                defaultValue={student.parent?.mother?.contact || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mother's Occupation"
                defaultValue={student.parent?.mother?.occupation || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>

            {/* Father's Information */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Father's Name"
                defaultValue={student.parent?.father?.name || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Father's Phone Number"
                defaultValue={student.parent?.father?.contact || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Father's Occupation"
                defaultValue={student.parent?.father?.occupation || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>

            {/* Emergency Contact */}
            <Grid item xs={12}>
              <Typography variant="h6">Emergency Contact</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Emergency Contact Name"
                defaultValue={student.emergencyContact?.name || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Emergency Contact Phone"
                defaultValue={student.emergencyContact?.phone || 'N/A'} // Use optional chaining and a fallback
                InputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="h6">Student not found.</Typography>
      )}
    </Box>
  );
}
