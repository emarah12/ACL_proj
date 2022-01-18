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
import Autocomplete from '@mui/material/Autocomplete';

export default class InputAdornments extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {flight_number:' ',departure:' ',arrival:' ',arr_airport:' ',econ_seats:' ',business_seats:' ',dep_airport:' ',
    arr_terminal:' ',dep_terminal:' ',Flights:{},value:[null]}
  }
  // const [values, setValues] = React.useState({
  //   from: '',
  //   to: '',
  // });
  

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  componentDidMount(){
    const flight = this.props.match.params.id;
  }
  
  handleSubmit =async e=>{
    e.preventDefault();
    let searchlink = "";
   if(this.state.flight_number!== " ")
    searchlink+="flight_number="+ this.state.flight_number +"&";
   
    if(this.state.departure!== " ")
    searchlink+="departure="+ this.state.departure +"&";

     if(this.state.arrival!== " ")
     searchlink+="arrival="+ this.state.arrival +"&";

     if(this.state.arr_airport!== " ")
     searchlink+="arr_airport="+ this.state.arr_airport +"&";

     if(this.state.econ_seats!== " ")
     searchlink+="econ_seats="+ this.state.econ_seats +"&";
     if(this.state.business_seats!== " ")
     searchlink+="business_seats="+ this.state.business_seats +"&";
     if(this.state.dep_airport!= " ")
     searchlink+="dep_airport="+ this.state.dep_airport +"&";
     if(this.state.dep_terminal!= " ")
     searchlink+="dep_terminal="+ this.state.dep_terminal +"&";
     if(this.state.arr_terminal!= " ")
     searchlink+="arr_terminal="+ this.state.arr_terminal +"&";

     searchlink= searchlink.substring(0,(searchlink.length-1));
     
     localStorage.setItem("f","f");
     localStorage.setItem("searchlink",searchlink);

     window.location.href="/select?"+searchlink;

    
}
handleChange = function(event) {
  this.setState({value: event.target.value});
  this.state.Flights={...this.state.Flights,[event.target.name]:[event.target.value]};
}
  render() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' ,marginLeft:'3rem'}}>
     <div>
     {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) =>
        <TextField {...params}
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
     }
    /> */}
          <TextField 
          label="From"
          // onChange={handleChange('from')}
        //  onChange={e => this.state.dep_airport = e.target.value}
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
          // onChange={handleChange('to')}
          onChange={e => this.state.arr_airport = e.target.value}
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
       value={this.state.value}
        onChange={(newValue) => {
          this.state.departure = newValue;
         // setValue(newValue);
        }}
      //  onChange={e => this.state.departure = e.target.value}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField 
            {...startProps}  
            id="departure" 
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
          //onChange={handleChange}
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
          //onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="(2-11 years)"
          variant="filled"
        > </TextField>
        </div>
    </Box>
  );
        }
}
