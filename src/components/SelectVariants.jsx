import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: props.minWidth }}>
          <InputLabel id="simple-select-standard-label">项目</InputLabel>
          <Select
              labelId="simple-select-standard-label"
              id="simple-select-standard"
              value={age}
              onChange={handleChange}
              label="项目"
          >
            <MenuItem value="">
              <em>无</em>
            </MenuItem>
            <MenuItem value={10}>xx改造项目</MenuItem>
            <MenuItem value={20}>xx改造项目</MenuItem>
            <MenuItem value={30}>xx改造项目</MenuItem>
          </Select>
        </FormControl>
      </div>
  );
}
