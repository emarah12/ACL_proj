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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LoginModal from './select/loginPopper';
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
import Booking from './booking';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';

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
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    firstname:'',
    lastname:'',
    passport:'',
    email:'',
    address:'',
    country_code:'',
    mobile_number:'',
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
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} style={{marginLeft:'10px'}}>
         <Grid item xs={7} >
             <Item> 
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper 
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
                {(steps.indexOf(label) === 1 || steps.indexOf(label) === 0) 
                ?<h5 style={{color:'#05004E'}}>{label}</h5>: <h5 style={{color:'#E5E5E5'}}>{label}</h5>}  
              </StepLabel>
          </Step>
        ))}
      </Stepper>
      <h1>Passenger details</h1>
    </Stack> </Item>
    
    <Item style={{marginTop:'20px',backgroundColor:'#E5E5E5'}}>
      <h3 style={{backgroundColor:'#05004E',color:'#FFFFFF',marginTop:'0px'}}>Create an account</h3>
      <Typography><p>* choose a username and a password to autosave your data for future use</p>
      <div style={{marginLeft:'20px'}}>
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Username</InputLabel>
          <FilledInput
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            aria-describedby="filled-username-helper-text"
            inputProps={{
              'aria-label': 'username',
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> </div>
      </Typography>
    
    <LoginModal />
    </Item>
    <Item style={{marginTop:'15px',backgroundColor:'#E5E5E5'}}>
    <h3 style={{backgroundColor:'#05004E',color:'#FFFFFF',marginTop:'0px'}}>Account holder details</h3>
      <h3 style={{textAlign:'left',color:'#05004E',fontWeight:'700'}}><BorderColorIcon /> Personal details</h3>
    
   
    <TextField
          label="First name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '43ch' }}
          id="filled-adornment-firstname"
          value={values.firstname}
          onChange={handleChange('firstname')}
          inputProps={{
            'aria-label': 'firstname',
          }}
        />

      
<TextField
          label="Last name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '43ch' }}
          id="filled-adornment-lastname"
          value={values.lastname}
          onChange={handleChange('lastname')}
          inputProps={{
            'aria-label': 'lastname',
          }}
        />
       <TextField
          label="Address"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '88ch' }}
          id="filled-adornment-passport"
          value={values.address}
          onChange={handleChange('address')}
          inputProps={{
            'aria-label': 'address',
          }}
        />
    <h3 style={{textAlign:'left',color:'#05004E',fontWeight:'700'}}><ContactsIcon /> Passport details</h3>
     <TextField
          label="Passport Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '90ch' }}
          id="filled-adornment-passport"
          value={values.passport}
          onChange={handleChange('passport')}
          inputProps={{
            'aria-label': 'passport',
          }}
        />
   
     <h3 style={{textAlign:'left',color:'#05004E',fontWeight:'700'}}><AlternateEmailIcon /> Contact details</h3>
     <TextField
          label="Country Code"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          id="filled-adornment-country_code"
          value={values.country_code}
          onChange={handleChange('country_code')}
          InputProps={{
            'aria-label': 'country_code',
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
          
          }}
        />
         <TextField
          label="Telephone Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '67ch' }}
          id="filled-adornment-telephone_number"
          value={values.country_code}
          onChange={handleChange('telephone_number')}
          inputProps={{
            'aria-label': 'telephone_number',
         
          }}
          
        />
     <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '90ch' }}
          id="filled-adornment-email"
          value={values.passport}
          onChange={handleChange('email')}
          InputProps={{
            'aria-label': 'email',
            endAdornment: <InputAdornment position="end">.com</InputAdornment>,
          }}
        />
        <p style={{textAlign:'left',marginTop:'-5px',transform: 'translate(2%, 0%)'}}>* please provide a valid email to send your tickets on</p>
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        style={{backgroundColor:'#05004E',transform: 'translate(320%, 0%)',color:'white'}}
      >
        Save
      </LoadingButton>
     </Item>
    </Grid>
      <Grid item xs={4}>
       <Item elevation={8}><h2 style={{color:'#05004E'}}>YOUR TRIP SUMMARY</h2>
       <Booking />
       </Item>
       </Grid>
    </Grid>
    </Box>
  );
}
