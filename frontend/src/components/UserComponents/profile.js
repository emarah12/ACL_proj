import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FlightIcon from '@mui/icons-material/Flight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Input from '@mui/material/Input';
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
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import WeekendIcon from '@mui/icons-material/Weekend';
import WcIcon from '@mui/icons-material/Wc';
import ExplicitIcon from '@mui/icons-material/Explicit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import orangeTicket from './orangeTicket.jpg'
import whiteTicket from './whiteTicket.jpg'
import blueTicket from './blueTicket.jpg'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import MailIcon from '@mui/icons-material/Mail';
import ButtonGroup from '@mui/material/ButtonGroup';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Profile() {
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
  const [firstname, setFirstName] = React.useState('Lobna');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const [lastname, setLastName] = React.useState('El Nahas');

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const [passport, setPassport] = React.useState('A2134513');

  const handlePassportChange = (event) => {
    setPassport(event.target.value);
  };
  const [email, setEmail] = React.useState('lobnaelnahas10@gmail.com');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [address, setAddress] = React.useState('Exerzierstrasse 17');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const [code, setCode] = React.useState('+49');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  const [telephone, setTelephone] = React.useState('1283933663');

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };
//   const [values, setValues] = React.useState({
//     username: '',
//     password: '',
//     firstname:'Lobna',
//     lastname:'El Nahas',
//     passport:'A2513321',
//     email:'lobnaelnahas10@gmail.com',
//     address:'Exerzierstrasse 17',
//     country_code:'+49',
//     telephone_number:'1283933663',
//     showPassword: false,
//   });
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };


//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={4} style={{marginLeft:'10px'}}>
    <Grid item xs={4} >
   <Item elevation={8} style={{backgroundColor:'#05004E'}}><h2 style={{color:'white'}}>PASSENGER DETAILS</h2><hr></hr>
 <div>
 <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>First Name</InputLabel>
        <Input id="component-simple" 
         startAdornment={
            <InputAdornment position="start">
              <PersonIcon  style={{color:'white'}} />
            </InputAdornment>
          }
        value={firstname} onChange={handleFirstNameChange} style={{marginBottom:'10px',color:'white',width:'190px'}}/>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>Last Name</InputLabel>
        <Input id="component-simple" value={lastname} onChange={handleLastNameChange} style={{marginBottom:'10px',width:'190px',color:'white'}}/>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>Code</InputLabel>
        <Input id="component-simple" 
          startAdornment={
            <InputAdornment position="start">
              <CallIcon style={{color:'white'}} />
            </InputAdornment>
          }
        value={code} onChange={handleCodeChange} style={{marginBottom:'10px',color:'white',width:'190px'}}/>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>Telephone Number</InputLabel>
        <Input id="component-simple" value={telephone} 
        onChange={handleTelephoneChange} style={{marginBottom:'10px',color:'white'}}/>
         {/* <Fab  aria-label="add" size='small' style={{backgroundColor:'#FCA311',transform:'scale(0.5)',marginTop:'-46px',marginLeft:'160px'}}>
        <AddIcon style={{color:'#05004E'}} />
      </Fab> */}
      <Button style={{transform:'translate(200%,-120%)',width:'50px',marginBottom:'-35px'}}>ADD</Button>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>Address</InputLabel>
        <Input id="component-simple" 
          startAdornment={
            <InputAdornment position="start">
              <HomeIcon style={{color:'white'}} />
            </InputAdornment>
          }
        value={address} onChange={handleAddressChange} style={{marginBottom:'10px',color:'white',width:'380px'}}/>
      </FormControl>
    
     
      
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>Passport Number</InputLabel>
        <Input id="component-simple" 
          startAdornment={
            <InputAdornment position="start">
              <ContactsIcon style={{color:'white'}} />
            </InputAdornment>
          }
        value={passport} onChange={handlePassportChange} style={{marginBottom:'10px',color:'white',width:'380px'}}/>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple" style={{color:'#E5E5E5'}}>Email</InputLabel>
        <Input id="component-simple" value={email} onChange={handleEmailChange}
           startAdornment={
            <InputAdornment position="start">
              <MailIcon style={{color:'white'}} />
            </InputAdornment>
          }
         style={{marginBottom:'10px',color:'white',width:'380px'}}/>
      </FormControl>
      <LoadingButton style={{transform:'translate(140%,0%)',backgroundColor:'#E5E5E5',color:'#FCA311',fontWeight:700}}
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Save
      </LoadingButton>
   
        {/* {/* <Input defaultValue="Lobna"  style={{marginBottom:'10px',color:'white'}}/> */}
        {/* <Input defaultValue="El Nahas"  style={{marginBottom:'10px',color:'white'}}/>
        <Input defaultValue="Exerzierstrasse 17"  style={{marginBottom:'10px',color:'white'}}/>
        <Input defaultValue="A2115321"  style={{marginBottom:'10px',color:'white'}}/>
        <Input defaultValue="+20"  style={{marginBottom:'10px',color:'white',width:'40px'}}/>
        <Input defaultValue="1283933663"  style={{marginBottom:'10px',color:'white',width:'140px'}}/>
        <Input defaultValue="lobna.elnahas10@gmail.com"  style={{marginBottom:'10px',color:'white',width:'230px'}}/> */} 
 </div>
   </Item>
   </Grid>
     <Grid item xs={7} >
         <Item> 
<Stack sx={{ width: '100%' }} spacing={4}>
<h2 style={{color:'#05004E'}}>UPCOMING FLIGHTS</h2> 
<h3 style={{textAlign:'left'}}> <CalendarTodayIcon style={{fontSize:'14px'}} />14/1/2022</h3> <hr style={{width:'150px'}}></hr>

<Item style={{backgroundColor:'#E5E5E5'}}>
    <h1 style={{backgroundColor:'#05004e',color:'white',marginTop:'-5px'}}>BER <FlightLandIcon/> CAI</h1>
{/* <h1 style={{color:'#05004e',transform:'translate(-110%,0%)',display:'inline-block',fontWeight:'700'}}>BER </h1>
<h1 style={{color:'#05004e',display:'inline-block',fontWeight:'700',transform:'translate(10%,0%)'}}> <FlightLandIcon /> </h1>
<h1 style={{color:'#05004e',transform:'translate(150%,0%)',display:'inline-block',fontWeight:'700'}}>CAI </h1> */}
{/* <h5 style={{marginTop:'-3px',marginBottom:'-1px'}}>Berlin <FlightLandIcon></FlightLandIcon> Cairo</h5> */}
  <div>
  <h3 style={{display:'inline-block',transform:'translate(490%,-37%)',color:'#000000',fontWeight:'700',fontSize:'20px'}}>17D</h3>
  <h4 style={{textAlign:'left',marginTop:'-70px',fontSize:'12px'}}><FlightTakeoffIcon style={{fontSize:'12px'}}/> Departure</h4>
  <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'20px',fontWeight:'700',color:'black'}}>11:50:00</h4>
 <h4 style={{marginTop:'-20px',fontSize:'12px',transform:'translate(24.5%,-270%)'}}><AirlineSeatReclineNormalIcon  style={{fontSize:'13px'}} />Seat</h4>
 <h4 style={{textAlign:'right',marginTop:'-20px',fontSize:'12px',transform:'translate(-3%,-370%)'}}>Cabin</h4>
 <h4 style={{textAlign:'center',marginTop:'-35px',fontSize:'12px',transform:'translate(-20%,-340%)'}}><FlightLandIcon style={{fontSize:'12px'}}/> Arrival</h4>
 <h4 style={{textAlign:'center',marginTop:'-20px',fontSize:'20px',fontWeight:'700',color:'black',transform:'translate(-20%,-210%)'}}>15:00:00</h4>
 <h4 style={{textAlign:'center',marginTop:'-35px',fontSize:'12px',transform:'translate(4%,-530%)'}}><LocalAirportIcon style={{fontSize:'12px'}}/> Flight Nr.</h4>
 <h4 style={{textAlign:'center',marginTop:'-20px',fontSize:'20px',fontWeight:'700',color:'black',transform:'translate(4.5%,-330%)'}}>MS731</h4>
 <h5 style={{textAlign:'right',marginTop:'-150px',marginBottom:'110px',fontWeight:'700',fontSize:'16px',color:'black'}}>ECONOMY</h5>
 <Box
 sx={{
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'right',
   marginTop:'-100px',
   marginBottom:'20px',
   '& > :not(style) + :not(style)': {
     ml: 2,
   },
 }}

>
</Box>
</div>
<hr></hr>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
         <ButtonGroup variant="text" aria-label="text button group" >
        <Button style={{color:'#05004E'}}>Change Seat</Button>
        <Button style={{color:'#05004E'}}>Change Flight</Button>
        <Button style={{color:'#05004E'}}>Cancel Flight</Button>
      </ButtonGroup>
    </Box>
</Item>
</Stack> </Item>


   
   </Grid>
  

</Grid>

</Box>

   
  );
}
