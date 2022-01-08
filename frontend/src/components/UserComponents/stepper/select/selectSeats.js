import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FlightIcon from '@mui/icons-material/Flight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactsIcon from '@mui/icons-material/Contacts';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Booking from '../booking';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import WeekendIcon from '@mui/icons-material/Weekend';
import WcIcon from '@mui/icons-material/Wc';
import ExplicitIcon from '@mui/icons-material/Explicit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SendIcon from '@mui/icons-material/Send';
import Seat from '../seat';
import Menu from '../../menu/menu';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />;
});


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      'linear-gradient( 95deg,rgb(5,0, 78) 0%,rgb(5,0, 78) 0%,rgb(5,0, 78) 30%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      'linear-gradient( 95deg,rgb(5,0, 78) 0%,rgb(5,0, 78) 0%,rgb(5,0, 78) 30%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#E5E5E5',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#E5E5E5',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',

  ...(ownerState.active && {
    backgroundImage:
    'linear-gradient( 95deg,rgb(5,0, 78) 0%,rgb(5,0, 78) 0%,rgb(5,0, 78) 30%)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
    'linear-gradient( 95deg,rgb(5,0, 78) 0%,rgb(5,0, 78) 0%,rgb(5,0, 78) 30%)',
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <FlightIcon />,
    2: <CalendarTodayIcon />,
    3: <AirlineSeatReclineNormalIcon />,
    4: <CreditCardIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  'SELECT',
  'BOOK',
  'SEAT SELECTION',
  'PAY',
];

export default function Book() {
  const [open, setOpen] = React.useState(false);

  const handleClickSnackbar = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    firstname:'',
    lastname:'',
    passport:'',
    email:'',
    showPassword: false,
  });
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const abc =['A','B','C'];
  const def=['D','E','F'];
  const frontrows=[1,2,3,4,5,6,7]; //based on number of rows in db

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} style={{marginLeft:'10px'}}>
         <Grid item xs={7} >
             <Item> 
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper 
        alternativeLabel
        activeStep={2}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
                {(steps.indexOf(label) === 2 || steps.indexOf(label) === 1|| steps.indexOf(label) === 0) 
                ?<h5 style={{color:'#05004E'}}>{label}</h5>: <h5 style={{color:'#E5E5E5'}}>{label}</h5>}  
              </StepLabel>
          </Step>
        ))}
      </Stepper>
    <h3>Please select your seats on the following flights</h3>
    </Stack> </Item>

       <Item style={{marginTop:'15px',backgroundColor:'#E5E5E5'}}>
       <h1 style={{color:'#FCA311'}}>BER <FlightLandIcon/> CAI</h1>
       <Item elevation={7} style={{backgroundColor:'#E5E5E5'}}>
         <h2 style={{backgroundColor:'#05004E',color:'white',marginBottom:'-5px'}}><PersonIcon /> Passenger 1</h2>
         <h3 style={{backgroundColor:'#FCA311',color:'black',marginBottom:'-5px',marginTop:'10px'}}>Economy</h3>
         <Grid container spacing={0.5} style={{transform:'translate(0%,10%)'}}>
         <ExitToAppIcon style={{transform:'translate(170%,120%)',color:'black'}}/>
         <ExitToAppIcon style={{transform:'translate(90%,2080%)',color:'black'}}/>
      <ExplicitIcon style={{transform:'translate(0%,780%)',color:'red'}}/>
      <ExplicitIcon style={{transform:'translate(-100%,1030%)',color:'red'}}/>
         {abc.map((seat) => (
     <div>
                   <Grid item xs={0.5} style={{marginLeft:'10px'}}>
                     {seat}
                 </Grid>
                  <Grid item xs={0.5}>
                  <IconButton style={{color:'#E5E5E5'}} >
                  <WeekendIcon />
                </IconButton>
                </Grid>
               
                {frontrows.map((row) =>(
                  <div>
                  <Grid item xs={0.5}>
                    <LightTooltip  title={
          <React.Fragment>
          <AirlineSeatReclineNormalIcon sx={{fontSize:'14px'}}/>  {row} {seat}
          </React.Fragment>
        }>
                  <IconButton style={{color:'#05004E'}} onClick={handleClickSnackbar}>
                  <WeekendIcon />
                </IconButton>
                </LightTooltip>
        
                </Grid>
                {row}
                </div>
                ))}
                 <Grid item xs={0.5}>
                  <IconButton style={{color:'#E5E5E5'}}>
                  <WeekendIcon />
                </IconButton>
                </Grid>
            
                </div>
              ))}
    
          <Grid item xs={1}></Grid>
   
               <ExplicitIcon style={{transform:'translate(800%,780%)',color:'red'}}/>
      <ExplicitIcon style={{transform:'translate(700%,1000%)',color:'red'}} />
         {def.map((seat) => (
           <div>
       <Grid item xs={0.5} style={{marginLeft:'-15px',marginBottom:'-20px'}} >
         <div style={{transform:'translate(1500%,0%)'}}>
           {seat} 
           <LightTooltip  title={
          <React.Fragment>
          <AirlineSeatReclineNormalIcon sx={{fontSize:'14px'}}/>  0 {seat}
          </React.Fragment>
        }>
       <IconButton style={{color:'#05004E',transform:'translate(-26%,0%)'}} onClick={handleClickSnackbar}>
       <WeekendIcon />
     </IconButton>
     </LightTooltip>
     </div>
     </Grid>
     <p style={{marginBottom:'-9px',marginTop:'10px'}}>0</p>
      
    {frontrows.map((row) =>(
      <div> 
                  <Grid item xs={0.5}>   
                  <LightTooltip  title={
          <React.Fragment>
          <AirlineSeatReclineNormalIcon sx={{fontSize:'14px'}}/>  {row} {seat}
          </React.Fragment>
        }>
                  <IconButton style={{color:'#05004E'}} onClick={handleClickSnackbar}>
                  <WeekendIcon />
                </IconButton>
                </LightTooltip>
                </Grid>
                {row}
                </div>
                ))}
                
    </div>
    
  ))}
   
   <Grid item xs={2.5} style={{transform:'translate(-90%,95%)'}}>
   <div style={{color:'#000000',background:'	#DCDCDC ',border:'1px solid black'}}>
                  <WcIcon />
                </div>
                </Grid>   
           </Grid>
           <br></br>
           <Item elevation={8} style={{transform:'translate(330%,-170%)',width:'150px',marginBottom:'-170px'}}>
          <h4>Guide</h4> <hr></hr>
          <h5 style={{transform:'translate(-10%,0%)',marginBottom:'-20px',marginTop:'5px'}}><WeekendIcon style={{color:'#05004E',transform:'translate(0%,30%)'}}/> Empty Seat </h5>
          <h5 style={{transform:'translate(-5%,0%)',marginBottom:'-20px'}}><WeekendIcon style={{transform:'translate(0%,30%)'}}/> Occupied Seat</h5> 
          <h5 style={{transform:'translate(-3%,0%)',marginBottom:'-20px'}}><ExplicitIcon style={{color:'red',transform:'translate(0%,30%)'}}/> Emergency Exit </h5>
          <h5 style={{transform:'translate(-23%,0%)',marginBottom:'-20px'}}><ExitToAppIcon style={{color:'black',transform:'translate(0%,30%)'}}/> Door </h5>
          <h5 style={{transform:'translate(-23%,0%)'}}><WcIcon style={{color:'black',transform:'translate(0%,30%)'}}/> Toilet </h5>
           </Item>
           </Item>
           <Button variant="contained" endIcon={<SendIcon />} style={{width:'750px',backgroundColor:'#05004E'}}>Next</Button>
       </Item>
       
       </Grid>
      
      <Grid item xs={4}>
       <Item elevation={8}><h2 style={{color:'#05004E'}}>ALLOCATED SEATS</h2>
       <Seat />
       </Item>
       </Grid>
    </Grid>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} >
          Seat selected successfully!
        </Alert>
      </Snackbar>
    </Box>
   
  );
}
