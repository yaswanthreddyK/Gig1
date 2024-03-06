import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery
} from "@mui/material";
import "./Dashboard.css"

import { WorkOutline, PeopleAlt, PersonAdd } from "@mui/icons-material";
import ApplicantList from "../../components/applicantList/ApplicantList";

const Meter = ({ icon, count, name }) => {
  return (
    <Paper
      style={{
        padding: "10px",
        textAlign: "center",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div>{icon}</div>
      <div>
        <Typography variant="h4" style={{ margin: "10px 0" }}>
          {count}
        </Typography>
        <Typography variant="subtitle1">{name}</Typography>
      </div>
    </Paper>
  );
};

const ClientDashboard = () => {
  const jobPostedCount = 50;
  const totalApplicantsCount = 100;
  const totalPeopleOnHireCount = 2;
  const TabletWidth = useMediaQuery('(max-width: 750px)')
  const meters = [
    { icon: <WorkOutline fontSize="large" />, count: 50, name: "Jobs Posted" },
    {
      icon: <PeopleAlt fontSize="large" />,
      count: 100,
      name: "Total Applicants",
    },
    {
      icon: <PersonAdd fontSize="large" />,
      count: 25,
      name: "On Hire",
    },
  ];

  

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginBottom: "2em",
          "@media (max-width: 750px)": {}
        }}
      >
        {meters.map((meter, index) => (
          <Grid item xs={ TabletWidth ? 12 : 3} key={index} >
            <Meter {...meter} />
          </Grid>
        ))}
      </Grid>
          <h3 className="list-heading">On Hire</h3>
          <div className="scroll-function">

            <ApplicantList />
          </div>
      
    </div>
  );
};

export default ClientDashboard;
