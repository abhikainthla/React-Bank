import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function SelectYear(props) {
    const [tenure, settenure] = React.useState('');

    const handleChange = (event) => {
        settenure(event.target.value);
        props.setTenureParent(event.target.value);
        };
  return (
    <>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={tenure}
          value={tenure}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={5}>5 years</MenuItem>
          <MenuItem value={10}>10 years</MenuItem>
          <MenuItem value={15}>15 years</MenuItem>
          <MenuItem value={20}>20 years</MenuItem>
          <MenuItem value={25}>25 years</MenuItem>
        </Select>
      </FormControl>
</>
  )
}

export default SelectYear