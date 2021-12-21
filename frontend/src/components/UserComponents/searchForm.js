import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import EventIcon from '@mui/icons-material/Event';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ManIcon from '@mui/icons-material/Man';

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    from: '',
    to: '',
  });
  const [value, setValue] = React.useState([null, null]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' ,marginLeft:'3rem'}}>
     <div>
        <TextField
          label="From"
          onChange={handleChange('from')}
          id="filled-start-adornment"
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
          id="filled-start-adornment"
          onChange={handleChange('to')}
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField 
            {...startProps}  
            id="filled-start-adornment" 
            label="Depart"
            sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><EventIcon />
              </InputAdornment>,
            }}
            variant="filled"/>
            {/* <Box sx={{ mx: 2 }}> to </Box> */}
            <TextField {...endProps}
            id="filled-start-adornment"
             label="Return"
             sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
             InputProps={{
               startAdornment: <InputAdornment position="start"><EventIcon />
               </InputAdornment>,
             }}
             variant="filled"/>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    <div>
    <TextField
          id="filled-number"
          type="number"
          label="Adult(s)"
          sx={{ m: 1, width: '11ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><ManIcon />
            </InputAdornment>,
          }}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="(12+ years)"
          variant="filled"
          defaultValue={1}
          min="1"
        > </TextField>
        <TextField
          id="filled-number"
          type="number"
          label="Child(ren)"
          min="0"
          sx={{ m: 1, width: '11ch',marginTop:'3rem' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EscalatorWarningIcon />
            </InputAdornment>,
          }}
          defaultValue={0}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="(2-11 years)"
          variant="filled"
        > </TextField>
    {/* <InputLabel htmlFor="grouped-native-select"></InputLabel>
        <Select 
        
        id="filled-start-adornment" 
        select
        label="Passenger/(s)"
        sx={{ m: 1, width: '20ch',marginTop:'4rem' }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><EventIcon />
          </InputAdornment>,
        }}
        variant="filled"

        native defaultValue="" id="grouped-native-select" label="Passenger/(s)">
          <option aria-label="None" value="1 Passenger" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
          helperText="Please select your currency"
        </Select> */}
        </div>
    </Box>
  );
}
