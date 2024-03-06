import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from "@mui/material";
import ViewClientContract from "../viewContract/ViewContractClient"
function ApplicantList() {

    const hiredPeople = [
        {
          id: 1,
          name: "John Doe",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          name: "Jane Smith",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          name: "John Doe",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 4,
          name: "Jane Smith",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 5,
          name: "Albus Severus Potter",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 6,
          name: "Jane Smith",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
      ];

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px", width: "1000px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Job Hired For</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hiredPeople.map((person, index) => (
              <TableRow
                key={person.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "white",
                }}
                sx={{width: "100%"}}
              >
                <TableCell sx={{ padding: "0.2em" }}>
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ padding: "0.2em" }}>{person.name}</TableCell>
                <TableCell sx={{ padding: "0.2em" }}>
                  {person.jobTitle}
                </TableCell>
                <TableCell sx={{ padding: "0.2em" }}>
                  {person.startDate}
                </TableCell>
                <TableCell sx={{ padding: "0.2em" }}>
                <ViewClientContract />
                </TableCell>
                <TableCell sx={{ padding: "0.2em" }}>
                  <button className="message-btn">Message</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default ApplicantList