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
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CustomizedAccordions from './accordion';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

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

export default function Select() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} style={{marginLeft:'10px'}}>
         <Grid item xs={7} >
             <Item > 
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper 
        alternativeLabel
        activeStep={0}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
                {(steps.indexOf(label) === 0) 
                ?<h5 style={{color:'#05004E'}}>{label}</h5>: <h5 style={{color:'#E5E5E5'}}>{label}</h5>}  
              </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack> </Item>
    <Item>
      < CustomizedAccordions />
    </Item>
    </Grid>
      <Grid item xs={4}>
       <Item elevation={8}><h2 style={{color:'#05004E'}}>YOUR BOOKING</h2>
       <hr></hr>
       <h5 >Berlin <FlightLandIcon></FlightLandIcon> Cairo</h5>
       <div>
       <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold'}}>Sun,25 Jan 2022</h3>
       <h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',fontWeight:'bold'}}>65$</h3>
       <h4 style={{textAlign:'left',marginTop:'-10px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Departure</h4>
       <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>11:50:00</h4>
      <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'25px'}}>|</h4>
      <h4 style={{textAlign:'left',marginTop:'-35px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Arrival</h4>
      <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>15:00:00</h4>
      <h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'100px'}}>ECONOMY</h5>
       </div>
       <hr></hr>
       <h5 >Cairo <FlightLandIcon></FlightLandIcon> Berlin</h5>
       <h6 style={{textAlign:'left'}}>Sun,25 Jan 2022</h6>
       <hr></hr>
      <div style={{backgroundColor:'#E5E5E5'}}> <h2 style={{display:'inline-block',color:'#05004E',fontWeight:'700'}}>Total</h2> <h2 style={{display:'inline-block',marginLeft:'280px',color:'#05004E',fontWeight:'700'}}>300$</h2></div>
       </Item>
       <button>continue</button>
       </Grid>
    </Grid>
    </Box>
  );
}
