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
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EventIcon from '@mui/icons-material/Event';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ManIcon from '@mui/icons-material/Man';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { GridList } from '@material-ui/core';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import addWeeks from 'date-fns/addWeeks';

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

export default function SimplePaper() {
  const [value, setValue] = React.useState([null, null]);
  // const [cabin,setCabin] = React.useState(['Economy','Economy']);

  const [values, setValues] = React.useState({
    departure:' ',arrival:' ',arr_airport:' ',econ_seats:' ',business_seats:' ',
    dep_airport:' ',adult:1,children:0,Flights:{},cabin:'Economy'
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [cabin, setCabin] = React.useState('Economy');

  const handleRadioChange = (event) => {
    setCabin(event.target.cabin);
  };
  const handleSubmit =async e=>{
    e.preventDefault();
    let searchlink = "";
    if(values.arr_airport!== " ")
     searchlink+="arr_airport="+values.arr_airport +"&";
     if(values.dep_airport!== " ")
     searchlink+="dep_airport="+ values.dep_airport +"&";
    if(values.departure!== " ")
    searchlink+="departure="+ values.departure +"&";

     if(values.arrival!== " ")
     searchlink+="arrival="+ values.arrival +"&";
     
    

     if(values.econ_seats!== " ")
     searchlink+="econ_seats="+ values.econ_seats +"&";
     if(values.business_seats!== " ")
     searchlink+="business_seats="+ values.business_seats +"&";
    
     //concat cabin to searchlink
    searchlink+="cabin="+values.cabin +"&"
     //concat adult and children to searchlink
     searchlink+="adult="+values.adult +"&" +"children="+values.children+"&"
    //  if(value !== null){
    //   searchlink+="departure="+ value +"&";
    //  }
     
    //  if(values.adult !== null && values.econ_seats !== ' ')
    //  searchlink+="econ_seats="+ values.econ_seats +"&"; 
    
     searchlink= searchlink.substring(0,(searchlink.length-1));
     
     localStorage.setItem("f","f");
     localStorage.setItem("searchlink",searchlink);
 //make sure all values are filled in
     window.location.href="/select/"+searchlink;

    
}
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
        {/* search form */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap' ,marginLeft:'3rem'}}>
     
        <div>
          <TextField 
          label="From"
          required
           onChange={handleChange('dep_airport')}
          //onChange={e => this.state.dep_airport = e.target.value}
          id="dep_airport"
          sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start" ><FlightTakeoffIcon />
            </InputAdornment>,
          }}
          variant="filled"
          inputProps={{
            'aria-label': 'from',
          }}
        /> 
      </div>
      <div>
        <TextField
          label="To"
          id="arr_airport"
          required
           onChange={handleChange('arr_airport')}
          //onChange={e => this.state.arr_airport = e.target.value}
          sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><FlightLandIcon />
            </InputAdornment>,
          }}
          variant="filled"
          inputProps={{
            'aria-label': 'to',
          }}
        />       
      </div>
      <div>
        <TextField
          label="Departure"
          id="departure"
          // required
           onChange={handleChange('departure')}
          //onChange={e => this.state.arr_airport = e.target.value}
          sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EventIcon />
            </InputAdornment>,
          }}
          variant="filled"
          inputProps={{
            'aria-label': 'to',
          }}
        />       
      </div>
      <div>
        <TextField
          label="Arrival"
          id="arrival"
          // required
           onChange={handleChange('arrival')}
          //onChange={e => this.state.arr_airport = e.target.value}
          sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EventIcon />
            </InputAdornment>,
          }}
          variant="filled"
          inputProps={{
            'aria-label': 'to',
          }}
        />       
      </div>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateRangePicker
      disablePast
       value={value}
       maxDate={getWeeksAfter(value[0], 4)}
       onChange={(newValue) => {
        setValue(newValue);
      }} */}
        {/* onChange={handleChange('date')}
        onChange={e => this.state.departure = e.target.value}
        renderInput={(startProps, endProps) => ( */}
          {/* <React.Fragment> */}
            {/* <TextField 
            {...startProps}  
            id="departure" 
            label="Depart"
            sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><EventIcon />
              </InputAdornment>,
            }}
            variant="filled"/> */}
            {/* <Box sx={{ mx: 2 }}> to </Box> */}
            {/* <TextField {...endProps}
            id="return"
             label="Return"
             sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
             InputProps={{
               startAdornment: <InputAdornment position="start"><EventIcon />
               </InputAdornment>,
             }}
             variant="filled"/> */}
          {/* </React.Fragment>
        )}
      />
    </LocalizationProvider> */}
    <div>
    <TextField
          id="adult"
          type="number"
          label="Adult(s)"
          sx={{ m: 1, width: '11ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><ManIcon />
            </InputAdornment>,
          }}
         onChange={handleChange('adult')}
          SelectProps={{
            native: true,
          }}
          helperText="(12+ years)"
          variant="filled"
          defaultValue={1}
          minValue={1}
        > </TextField>
        <TextField
          id="children"
          type="number"
          label="Child(ren)"
          min="0"
          sx={{ m: 1, width: '11ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EscalatorWarningIcon />
            </InputAdornment>,
          }}
          defaultValue={0}
          onChange={handleChange('children')}
          SelectProps={{
            native: true,
          }}
          helperText="(2-11 years)"
          variant="filled"
        > </TextField>
        </div>
   </Box>
         <FormControl component="fieldset" style={{marginLeft:'3rem'}}>
      <FormLabel component="legend" >Class</FormLabel>
      <RadioGroup row aria-label="Class" name="row-radio-buttons-group"  defaultValue="Economy" 
      // value={cabin}
      onChange={handleChange('cabin')}
      >
        <FormControlLabel value="Economy" id='econ_seats' control={<Radio />} label="Economy" />
        <FormControlLabel value="Business" id='business_seats' control={<Radio />} label="Business" /> 
      </RadioGroup>
    </FormControl>
          <Button variant="contained" endIcon={<FlightTakeoffIcon />} 
          style={{background:'#FCA311',color:'#05004E', position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(210%, 180%)',}}onClick={handleSubmit}>Show flights</Button>
          </FormGroup>
          </Typography>
      </Paper>
    </Box>
  );
}
