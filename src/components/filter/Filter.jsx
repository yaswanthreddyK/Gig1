import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  formControl: {
    margin: '8px', // Adjust margin as needed
    minWidth: '120px',
  },
});

const Filter = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="filter-by-label">Filter by</InputLabel>
      <Select
        labelId="filter-by-label"
        id="filter-by-select"
        value={filter}
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
        {/* Add more MenuItem components for additional options */}
      </Select>
    </FormControl>
  );
};

export default Filter;
