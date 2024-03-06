import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchInput from "../../components/searchInput/SearchInput";
import "./Jobs.css";
import JobCard from "../../components/jobCard/JobCard";
import {Link} from "react-router-dom";

function Jobs() {
  const job = {
    name: "Google",
    image: "../../../public/img/03.jpg",
    profession: "full stack developer",
    hourlyRate: 5,
    location: "Chennai, India",
    fullTime: true,
    skills: ["NodeJS", "ReactJS", "MongoDB", "lkdfkls" ,"fekwjfk", "ejfwej", "ieojfe", "dfjel", "fjek", "feojfwfoef"],
    intro: "I am a passionate and experienced full-stack developer with expertise in JavaScript, React, Node.js, and MongoDB. I have worked on various projects ranging from web applications to mobile app development. My goal is to deliver high-quality solutions that meet the client's requirements and exceed their expectations."
  };
  const [jobTypes, setJobTypes] = useState({
    partTime: false,
    hourly: false,
    fullTime: false,
    singleContract: false,
  });

  const [experienceLevels, setExperienceLevels] = useState({
    entryLevel: false,
    intermediate: false,
    expert: false,
  });

  const [fixedPrice, setFixedPrice] = useState([0, 100]);

  const [searchQuery, setSearchQuery] = useState("");

  const [technologies, setTechnologies] = useState("");

  const handleTechnologyChange = (event) => {};

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobTypes({ ...jobTypes, [event.target.name]: event.target.checked });
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevels({
      ...experienceLevels,
      [event.target.name]: event.target.checked,
    });
  };

  const handleFixedPriceChange = (event, newValue) => {
    setFixedPrice(newValue);
  };
  return (
    <div className="job-container">
      <SearchInput />
      <div className="job-content">
        <div className="left-side">
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="subtitle1">Hourly rate</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <Slider
                defaultValue={[0, 100]}
                aria-labelledby="range-slider"
                getAriaValueText={(value) => `${value}$`}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                step={5}
                sx={{ width: "80%" }} // Adjust size of range bar
                marks={[
                  { value: 0, label: "$0" },
                  { value: 100, label: "$100" },
                  { value: 200, label: "$200" },
                  { value: 300, label: "$300" },
                  { value: 400, label: "$400" },
                  { value: 500, label: "$500" },
                ]}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography variant="subtitle1">Fixed Price</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <Slider
                value={fixedPrice}
                onChange={handleFixedPriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={(value) => `${value}$`}
                min={0}
                max={1000}
                step={10}
                sx={{ width: "80%" }} // Adjust size of range bar
                marks={[
                  { value: 0, label: "$0" },
                  { value: 250, label: "$250" },
                  { value: 500, label: "$500" },
                  { value: 750, label: "$750" },
                  { value: 1000, label: "$1000+" },
                ]}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="subtitle1">Experience Level</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Entry Level"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Intermediate"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Expert"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography variant="subtitle1">Skills</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="JavaScript"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="MongoDB"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="React"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Node.js"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="right-side">
          <Link to="1">
          <JobCard job={job} />
          </Link>
          <Link to="2">
          <JobCard job={job} />
          </Link>
          <Link to="3">
          <JobCard job={job} />
          </Link>
          <Link to="4">
          <JobCard job={job} />
          </Link>
          
          
        </div>
      </div>
    </div>
  );
}

export default Jobs;
