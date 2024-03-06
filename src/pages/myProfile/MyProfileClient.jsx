import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const useStyles = makeStyles({
  root: {
    padding: '16px',
    width: "100%",
    "@media (max-width: 450px)" : {
      padding: 0,
    }
  },
  avatar: {
    width: '80px',
    height: '80px',
  },
  card: {
    marginBottom: '16px',
  },
  aboutMeSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  skillsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px',
  },
  skillChip: {
    marginRight: '8px',
  },
  sectionHeader: {
    marginTop: '16px',
  },
});

const MyProfileClient = () => {

  const classes = useStyles();
  // Dummy data for the profile
  const profile = {
    name: 'Yaswanth Kumar',
    title: 'Climate Camp',
    location: 'New York, USA',
    email: 'john@example.com',
    phone: '+1234567890',
    aboutMe:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit augue eu ligula ullamcorper, eu scelerisque neque interdum. Duis ac interdum ipsum. Nam vestibulum erat ut quam aliquet volutpat. Sed malesuada euismod magna, a pretium leo eleifend sit amet. Sed nec sapien ligula.',
    portfolioProjects: [
      { title: 'Project 1', description: 'Description of project 1' },
      { title: 'Project 2', description: 'Description of project 2' },
    ],
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} sx={{backgroundColor: "white"}}>
        <Grid item xs={12} md={4} sx={{borderRight: "1px solid #e5e5e5"}}>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar alt="Profile Picture" src="../../../public/img/" className={classes.avatar} />}
              title={profile.name}
              subheader={profile.title}
            />
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                <LocationOnIcon fontSize="small" /> {profile.location}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <EmailIcon fontSize="small" /> {profile.email}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <PhoneIcon fontSize="small" /> {profile.phone}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* About Me section */}
          <div className={classes.aboutMeSection}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph sx={{paddingRight: "1em"}}>
              {profile.aboutMe}
            </Typography>
            
          </div>
          {/* Portfolio Projects section */}
          <div>
            <Typography variant="h5" gutterBottom className={classes.sectionHeader}>
            Projects
            </Typography>
            {profile.portfolioProjects.map((project, index) => (
              <Card key={index} className={classes.card}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Work Experience section */}
       
        </Grid>
      </Grid>
    </div>
  );
};

export default MyProfileClient;
