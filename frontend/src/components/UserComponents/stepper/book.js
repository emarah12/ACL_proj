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
    </Stack> </Item>
    </Grid>
      <Grid item xs={4}>
       <Item elevation={8}><h2 style={{color:'#05004E'}}>YOUR BOOKING</h2></Item>
       </Grid>
    </Grid>
    </Box>
  );
}
