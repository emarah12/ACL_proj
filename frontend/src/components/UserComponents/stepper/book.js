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
    3: <CreditCardIcon />,
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
  'PAY',
];

export default function Book() {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });
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
   
    <Item style={{marginTop:'15px'}}><h3 style={{textAlign:'left',backgroundColor:'#05004E',color:'#FFFFFF'}}><BorderColorIcon /> Personal details</h3>
    <Item>
    <FormControl sx={{ m: 1, width: '43ch',transform: 'translate(0%, 0%)' }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">First name</InputLabel>
          <FilledInput
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            aria-describedby="filled-username-helper-text"
            inputProps={{
              'aria-label': 'firstname',
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '43ch',transform: 'translate(0%, 0%)' }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Last name</InputLabel>
          <FilledInput
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            aria-describedby="filled-username-helper-text"
            inputProps={{
              'aria-label': 'lastname',
            }}
          />
        </FormControl>
     </Item>
     <Item style={{marginTop:'15px'}}><h3 style={{textAlign:'left',backgroundColor:'#05004E',color:'#FFFFFF'}}><ContactsIcon /> Passport details</h3>
     <FormControl sx={{ m: 1, width: '90ch' ,transform: 'translate(0%, 0%)'}} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Passport Number</InputLabel>
          <FilledInput
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            aria-describedby="filled-username-helper-text"
            inputProps={{
              'aria-label': 'passportnumber',
            }}
          />
        </FormControl>
        
     </Item>
     <Item style={{marginTop:'15px'}}><h3 style={{textAlign:'left',backgroundColor:'#05004E',color:'#FFFFFF'}}><AlternateEmailIcon /> Contact details</h3>
   
     <FormControl sx={{ m: 1, width: '90ch' ,transform: 'translate(0%, 0%)'}} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Email</InputLabel>
          <FilledInput
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            aria-describedby="filled-username-helper-text"
            inputProps={{
              'aria-label': 'passportnumber',
            }}
            endAdornment={
              <InputAdornment position="end">
               .com
              </InputAdornment>
            }
          />
        </FormControl>
        <p style={{textAlign:'left',marginTop:'-5px',transform: 'translate(2%, 0%)'}}>* please provide a valid email to send your tickets on</p>
     </Item>
     </Item>
    </Grid>
      <Grid item xs={4}>
       <Item elevation={8}><h2 style={{color:'#05004E'}}>YOUR TRIP SUMMARY</h2></Item>
       </Grid>
    </Grid>
    </Box>
  );
}
