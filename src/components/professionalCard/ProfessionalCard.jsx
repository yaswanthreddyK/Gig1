import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  Divider,
  Chip,
  Box
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./ProfessionalCard.css"

function ProfessionalCard({ professional }) {
  const { name, image, profession, hourlyRate, location, fullTime, intro, skills } = professional;

  return (
    <div className='professional-card'>

    <Card sx={{ display: 'flex', flexDirection: 'column', padding: "1em", backgroundColor: "white", margin: "1em", width: "100%"}}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left side (image) */}
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover'}}
          image={image}
          alt={name}
          />
        {/* Right side (name, profession, and skills) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, ml: { xs: 0, md: 1 } }}>
          {/* Name and profession */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="subtitle1">{profession}</Typography>
            </div>
            {/* Hourly rate */}
            <Typography variant="subtitle1">${hourlyRate}/hr</Typography>
          </Box>
          {/* Introduction */}
          <Divider sx={{ my: 1 }} />
          {/* Skills */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {/* Replace with actual skills */}
            {skills.map(skill => (
              <Chip key={skill} label={skill} />
              ))}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      {/* Location and full-time/part-time */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle2">{location}</Typography>
        </Box>
        <Typography variant="subtitle2">{fullTime ? 'Full-Time' : 'Part-Time'}</Typography>
      </Box>
    </Card>
              </div>
  );
}

export default ProfessionalCard;




