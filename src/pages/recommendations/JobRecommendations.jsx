import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Divider, Chip } from '@mui/material';

const JobRecommendations = () => {
  const [open, setOpen] = useState(false);

  const jobs = [
    {
      title: 'Need a Full Stack Developer',
      description: 'We are looking for a full stack developer who has expertise in MERN stack.',
      skills: ["NodeJS", "MongoDB", "ReactJS"],
      type: 'Hourly',
      duration: 'Full-Time'
    },
    {
      title: 'Frontend Developer',
      description: 'We need a frontend developer proficient in ReactJS and CSS.',
      skills: ["ReactJS", "CSS"],
      type: 'Fixed',
      duration: 'Part-Time'
    },
    {
      title: 'Frontend Developer',
      description: 'We need a frontend developer proficient in ReactJS and CSS.',
      skills: ["ReactJS", "CSS"],
      type: 'Fixed',
      duration: 'Part-Time'
    },
    // Add more job objects as needed
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{ border: "0", color: "#2b2b2b", fontSize: "0.8rem", textDecoration: "underline", "&:hover": { backgroundColor: "#24ae81", color: "white" } }}>Recommendations</Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Job Recommendations</DialogTitle>
        <DialogContent>
          {jobs.map((job, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Typography variant="subtitle1">{job.title}</Typography>
              <Typography>{job.description}</Typography>
              <Typography variant="subtitle1">Skills Required:</Typography>
              <div>
                {job.skills.map((skill, skillIndex) => (
                  <Chip key={skillIndex} label={skill} style={{ marginRight: '4px' }} />
                ))}
              </div>
              <Typography variant="subtitle1">Type:</Typography>
              <Typography>{job.type}</Typography>
              <Typography variant="subtitle1">Duration:</Typography>
              <Typography>{job.duration}</Typography>
              {index !== jobs.length - 1 && <Divider style={{ margin: '16px 0' }} />}
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default JobRecommendations;
