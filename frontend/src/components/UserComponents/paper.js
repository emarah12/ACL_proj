import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import InputAdornments from './searchForm'
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '80%',
          height: '40%',
        },
      }}
    >
      <Paper elevation={8} style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, 0%)',
        background: '#E5E5E5'
    }}>
          <Typography>
              <div style={{background:'#05004E',color:'#FFFFFF',textAlign:'center',fontSize:'1.5rem'}}>Where to? <FlightTakeoffIcon style={{fontSize:'1.5rem'}}/></div>
             <FormGroup >
         <InputAdornments />
         <FormControl component="fieldset" style={{marginLeft:'3rem'}}>
      <FormLabel component="legend" >Class</FormLabel>
      <RadioGroup row aria-label="Class" name="row-radio-buttons-group"  defaultValue="Economy">
        <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
        <FormControlLabel value="Business" control={<Radio />} label="Business" /> 
      </RadioGroup>
    </FormControl>
          <Button variant="contained" endIcon={<FlightTakeoffIcon />} 
          style={{background:'#FCA311',color:'#05004E', position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(210%, 180%)',}}>Show flights</Button>
          </FormGroup>
          </Typography>
      </Paper>
    </Box>
  );
}
