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
import Box from '@mui/material/Box';
import CustomizedAccordions from './accordion';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PersonIcon from '@mui/icons-material/Person';
import ChildModal from './selectSeats';
import SendIcon from '@mui/icons-material/Send';
import Booking from '../booking';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SimpleAccordion from './flightsAccordion';
import EventIcon from '@mui/icons-material/Event';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "axios";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LuggageIcon from '@mui/icons-material/Luggage';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
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


export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleBookingBusiness = this.handleBookingBusiness.bind(this);
    this.handleClickBusiness = this.handleClickBusiness.bind(this);
    this.handleDeleteDep = this.handleDeleteDep.bind(this);
    this.handleDeleteArr = this.handleDeleteArr.bind(this);
    this.state={Flights:[],open:false,expanded:'panel1',returnOpen:false,flight:null,
  departureFlight:false,returnFlight:false,openButton:false,FlightsReturn:[],
  chosenDepFlight:null,chosenRetFlight:null,economy:false,economyReturn:false,depPrice:0,
  retPrice:0,totalPrice:0
  }
  } 
  componentDidMount()
{  
  const url =window.location.href.substring(29) ;
  const adultSeats =JSON.parse(window.location.href.substring(81,82));
  const childSeats =JSON.parse(window.location.href.substring(92,93));
  const totalSeats = adultSeats + childSeats;
  alert(totalSeats)
    axios.get('http://localhost:3001/api/flight/searchFlights?'+url).then((response) => {
       this.setState({Flights:response.data});
     //  this.state.Flights.filter(flight => flight.econ_seats >= window.location.href.substring())
       localStorage.setItem("f","f");   
      });
     
  }
  handleDeleteArr = () => {
  this.setState({openButton:false})
  this.setState({returnFlight:false})
  }

  handleDeleteDep = () => {
    this.setState({returnOpen:false})
    this.setState({departureFlight:false})  
  }
  //select fare for return flight
  handleBooking = () => {
    this.setState({open:true});
    this.setState({economyReturn:true});
    this.setState({returnFlight:true});
    this.setState({openButton:true});
    this.setState({retPrice:this.state.chosenRetFlight.econ_price})
    this.state.totalPrice = this.state.retPrice +this.state.depPrice;
  }
  handleBookingBusiness = () => {
    this.setState({open:true});
    this.setState({returnFlight:true});
    this.setState({openButton:true});
    this.setState({retPrice:this.state.chosenRetFlight.business_price})
    this.state.totalPrice = this.state.retPrice +this.state.depPrice;
  }
  // const [open, setOpen] = React.useState(false);

  //select fare departure flight button & economy
   handleClick = () => {
   this.setState({open:true});
   this.setState({returnOpen:true});
   this.setState({departureFlight:true})
   this.setState({economy:true})
   const arr_airport = window.location.href.substring(41,44);
   const dep_airport = window.location.href.substring(57,60);
   this.setState({depPrice:this.state.chosenDepFlight.econ_price})
   //alert(this.state.chosenDepFlight)
   let searchlink ="arr_airport="+dep_airport+"&"+"dep_airport="+arr_airport;
   let Link = window.location.href.substring(60);
   searchlink+=Link;
   axios.get('http://localhost:3001/api/flight/searchFlights?'+searchlink).then((response) => {
       this.setState({FlightsReturn:response.data});
      // alert(this.state.FlightsReturn)
       localStorage.setItem("f","f");   
      });
     
  };
  handleClickBusiness = () => {
    this.setState({open:true});
    this.setState({returnOpen:true});
    this.setState({departureFlight:true})
    this.setState({depPrice:this.state.chosenDepFlight.business_price})
    // this.setState({economy:true})
    const arr_airport = window.location.href.substring(41,44);
    const dep_airport = window.location.href.substring(57,60);
   //alert(this.state.chosenDepFlight)
    let searchlink ="arr_airport="+dep_airport+"&"+"dep_airport="+arr_airport;
    let Link = window.location.href.substring(60);
    searchlink+=Link;
    axios.get('http://localhost:3001/api/flight/searchFlights?'+searchlink).then((response) => {
        this.setState({FlightsReturn:response.data});
       // alert(this.state.FlightsReturn)
        localStorage.setItem("f","f");   
       });
      
   };

   handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open:false});
 // this.state.open=true;
    // setOpen(false);
  };
//  const [expanded, setExpanded] = React.useState('panel1');
  //to load return flights
//const [openReturn, setOpenReturn] = React.useState(false);

   handleChange = (panel) => (event, newExpanded) => {
     this.setState({expanded:newExpanded ? panel : false})
  //  this.state.expanded=newExpanded ? panel : false;
  };
   handleContinue = (event) => {
     //add chosen flights to user
    window.location.href="/book";
  };
  render(){
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
      {/* class 3 */}
      <div>
       {this.state.Flights.map(flight=>(
    <div>
        <h5 style={{textAlign:'left',marginBottom:'0'}}>* Please select departure flight<p style={{display:'inline-block',marginLeft:'28rem'}}><EventIcon style={{marginBottom:'-7px'}}/> {flight.departure.substring(0,(flight.departure.length-14))}</p></h5>
        {this.state.returnOpen === true?  <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')} disabled>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'#05004E'}}>
        <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>{(flight.dep_airport)} <FlightLandIcon/> {flight.arr_airport}</h2>
        </AccordionSummary> 
      </Accordion>:
      <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')} onClick={() =>{this.setState({chosenDepFlight:flight}) }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'#05004E'}}>
          <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>{(flight.dep_airport)} <FlightLandIcon/> {flight.arr_airport}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* <SimpleAccordion/> */}
          {/* class 2 */}

          <div>
           {/* {this.state.Flights.map(flight=>( */}
      <Accordion style={{backgroundColor:'#E5E5E5',borderLeft:'5px solid #FCA311'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            {/* <p style={{color:'#FCA311',fontWeight:'700',marginTop:'0',marginBottom:'-10px'}}>MS731</p> */}
            <p style={{color:'#FCA311',fontWeight:'700',marginTop:'10px'}}>{flight.flight_number}</p>
          <Typography style={{color:'black',fontSize:'20px',fontWeight:'700',marginLeft:'5rem'}}>{flight.departure.substring(11,(flight.departure.length-5))}<AccessTimeIcon sx={{ fontSize: '1.3rem' ,marginLeft:'4rem',marginRight:'3rem',color:'black'}}/> {flight.arrival.substring(11,(flight.arrival.length-5))}
          <p style={{ transform: 'translate(95%, 35%)',fontSize:'12px',marginTop:'-100px',color:'gray',fontWeight:'700'}}> <p style={{ transform: 'translate(0%, 45%)',color:'#FCA311',fontWeight:'700',fontSize:'28px',marginBottom:'10px'}}><AirplaneTicketIcon style={{fontSize:'1.7rem',transform: 'translate(0%, 15%)'}}/> {flight.econ_price}$</p>Best fare</p>
       <div style={{display:'inline'}}>
       <p style={{marginLeft:'-200px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-20px'}}><FlightTakeoffIcon sx={{fontSize:'0.9rem'}}/> {flight.dep_airport}</p>
       <p style={{marginLeft:'0px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-18px'}}>{flight.duration}</p>
       <p style={{marginLeft:'200px',fontSize:'12px',marginTop:'-5px',color:'gray'}}><FontAwesomeIcon icon={faMapMarkerAlt} /> {flight.arr_airport}</p>
       </div>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10'}}>Benefits and fees per adult passenger.</p>
              <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
            <Paper elevation={3} style={{backgroundColor:'#FFFFFF',transform: 'translate(15%, -5%)',width:'300px'}}> 
              <Typography>
                <p style={{color:'#05004E',marginBottom:'20px',paddingTop:'10px'}}>Economy from</p>
                <Paper style={{backgroundColor:'#FFFFFF',color:'#05004E',border:'2px solid #05004E',transform: 'translate(90%, -50%)',width:'100px'}}><Typography>
                  {flight.econ_price}$
                  </Typography></Paper>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10',marginBottom:'-10px'}}><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/>Piece(s) 2, per piece 23 Kg checked baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-5px',marginBottom:'-10px'}}><BusinessCenterIcon style={{fontSize:'10px'}}/> Pieces 1, Total weight 7 kg hand baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-90px',}}><AirlineSeatReclineNormalIcon style={{fontSize:'12px'}}/> Standard seat selection</p>
                  <Button variant="outlined" style={{borderColor:'#05004E',color:'#FFFFFF',width:'300px',backgroundColor:'#05004E'}} onClick={this.handleClick}> select fare </Button>
              </Typography>   
              </Paper>  
            </Grid>
         <Grid item xs={6} md={6}>
            <Paper elevation={3} style={{backgroundColor:'#FFFFFF',transform: 'translate(5%, -5%)',width:'300px'}}> 
              <Typography>
                <p style={{color:'#FCA311',marginBottom:'20px',paddingTop:'10px'}}>Business from</p>
                <Paper style={{backgroundColor:'#FFFFFF',color:'#FCA311',border:'2px solid #FCA311',transform: 'translate(90%, -50%)',width:'100px'}}><Typography>
                  {flight.business_price}$
                  </Typography></Paper>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10',marginBottom:'-10px'}}><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/>Piece(s) 3, per piece 32 Kg checked baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-5px',marginBottom:'-10px'}}><BusinessCenterIcon style={{fontSize:'10px'}}/><BusinessCenterIcon style={{fontSize:'10px'}}/> Pieces 2, Total weight 15 kg hand baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-105px',}}><AirlineSeatReclineNormalIcon style={{fontSize:'12px'}}/> Free seat selection</p>
                  <Button variant="outlined" style={{borderColor:'#FCA311',color:'#FFFFFF',width:'300px',backgroundColor:'#FCA311'}} onClick={this.handleClickBusiness}> select fare </Button>
              </Typography>
              </Paper>
              
            </Grid>
              </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        {/* //  ))
        // }   */}
        
    </div>
          {/* end class 2 */}
          </Typography>
        </AccordionDetails>
      </Accordion>
  }
      <h5 style={{textAlign:'left',marginBottom:'0'}}>* Please select return flight <p style={{display:'inline-block',marginLeft:'29rem'}}><EventIcon style={{marginBottom:'-7px'}}/> {flight.arrival.substring(0,(flight.arrival.length-14))}</p></h5>
      {this.state.returnOpen === true? 
<div>
{this.state.FlightsReturn.map(flightreturn=>(
<Accordion expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')} onClick={() =>{this.setState({chosenRetFlight:flight}) }}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'#05004E'}}>
          <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>{(flightreturn.dep_airport)} <FlightLandIcon/> {flightreturn.arr_airport}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* <SimpleAccordion/> */}
          {/* class 2 */}

          {/* <div> */}
           {/* {this.state.Flights.map(flight=>( */}
      <Accordion style={{backgroundColor:'#E5E5E5',borderLeft:'5px solid #FCA311'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
            {/* <p style={{color:'#FCA311',fontWeight:'700',marginTop:'0',marginBottom:'-10px'}}>MS731</p> */}
            <p style={{color:'#FCA311',fontWeight:'700',marginTop:'10px'}}>{flightreturn.flight_number}</p>
          <Typography style={{color:'black',fontSize:'20px',fontWeight:'700',marginLeft:'5rem'}}>{flightreturn.departure.substring(11,(flightreturn.departure.length-5))}<AccessTimeIcon sx={{ fontSize: '1.3rem' ,marginLeft:'4rem',marginRight:'3rem',color:'black'}}/> {flightreturn.arrival.substring(11,(flightreturn.arrival.length-5))}
          <p style={{ transform: 'translate(95%, 35%)',fontSize:'12px',marginTop:'-100px',color:'gray',fontWeight:'700'}}> <p style={{ transform: 'translate(0%, 45%)',color:'#FCA311',fontWeight:'700',fontSize:'28px',marginBottom:'10px'}}><AirplaneTicketIcon style={{fontSize:'1.7rem',transform: 'translate(0%, 15%)'}}/> {flightreturn.econ_price}$</p>Best fare</p>
       <div style={{display:'inline'}}>
       <p style={{marginLeft:'-200px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-20px'}}><FlightTakeoffIcon sx={{fontSize:'0.9rem'}}/> {flightreturn.dep_airport}</p>
       <p style={{marginLeft:'0px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-18px'}}>{flightreturn.duration}</p>
       <p style={{marginLeft:'200px',fontSize:'12px',marginTop:'-5px',color:'gray'}}><FontAwesomeIcon icon={faMapMarkerAlt} /> {flightreturn.arr_airport}</p>
       </div>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10'}}>Benefits and fees per adult passenger.</p>
              <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
            <Paper elevation={3} style={{backgroundColor:'#FFFFFF',transform: 'translate(15%, -5%)',width:'300px'}}> 
              <Typography>
                <p style={{color:'#05004E',marginBottom:'20px',paddingTop:'10px'}}>Economy from</p>
                <Paper style={{backgroundColor:'#FFFFFF',color:'#05004E',border:'2px solid #05004E',transform: 'translate(90%, -50%)',width:'100px'}}><Typography>
                  {flightreturn.econ_price}$
                  </Typography></Paper>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10',marginBottom:'-10px'}}><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/>Piece(s) 2, per piece 23 Kg checked baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-5px',marginBottom:'-10px'}}><BusinessCenterIcon style={{fontSize:'10px'}}/> Pieces 1, Total weight 7 kg hand baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-90px',}}><AirlineSeatReclineNormalIcon style={{fontSize:'12px'}}/> Standard seat selection</p>
                  <Button variant="outlined" style={{borderColor:'#05004E',color:'#FFFFFF',width:'300px',backgroundColor:'#05004E'}} onClick={this.handleBooking}> select fare </Button>
              </Typography>   
              </Paper>  
            </Grid>
         <Grid item xs={6} md={6}>
            <Paper elevation={3} style={{backgroundColor:'#FFFFFF',transform: 'translate(5%, -5%)',width:'300px'}}> 
              <Typography>
                <p style={{color:'#FCA311',marginBottom:'20px',paddingTop:'10px'}}>Business from</p>
                <Paper style={{backgroundColor:'#FFFFFF',color:'#FCA311',border:'2px solid #FCA311',transform: 'translate(90%, -50%)',width:'100px'}}><Typography>
                  {flightreturn.business_price}$
                  </Typography></Paper>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10',marginBottom:'-10px'}}><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/>Piece(s) 3, per piece 32 Kg checked baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-5px',marginBottom:'-10px'}}><BusinessCenterIcon style={{fontSize:'10px'}}/><BusinessCenterIcon style={{fontSize:'10px'}}/> Pieces 2, Total weight 15 kg hand baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-105px',}}><AirlineSeatReclineNormalIcon style={{fontSize:'12px'}}/> Free seat selection</p>
                  <Button variant="outlined" style={{borderColor:'#FCA311',color:'#FFFFFF',width:'300px',backgroundColor:'#FCA311'}} onClick={this.handleBooking}> select fare </Button>
              </Typography>
              </Paper>
              
            </Grid>
              </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    {/* </div> */}
          {/* end class 2 */}
          </Typography>
        </AccordionDetails>
      </Accordion> ))
        }  
</div>    :
      <div><Accordion expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')} disabled>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'#05004E'}}>
        <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>{flight.arr_airport} <FlightLandIcon/> {flight.dep_airport}</h2>
        </AccordionSummary>
      </Accordion>
      </div>}
      <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
  <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }} >
    Flight added successfully!
  </Alert>
</Snackbar>
    </div>
    ))
        } 
        
    </div>
      {/* < CustomizedAccordions /> */}
      {/* class 3 */}
    </Item>
    </Grid>
      <Grid item xs={4}>
       <Item elevation={8}><h2 style={{color:'#05004E'}}>YOUR BOOKING</h2>
       {/* booking */}
       <div>
  <p style={{marginTop:'-15px'}}> <PersonIcon style={{fontSize:'14px'}}></PersonIcon> 1 passenger(s)</p>
  <hr></hr>
  {this.state.departureFlight === true ?<div>
    <h5 style={{marginTop:'-3px',marginBottom:'-1px'}}>{this.state.chosenDepFlight.dep_airport} <FlightLandIcon></FlightLandIcon> {this.state.chosenDepFlight.arr_airport}</h5>
  <div>
  <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold',transform:'translate(-30%,0)'}}>{this.state.chosenDepFlight.departure.substring(0,10)}</h3>
  {this.state.economy === true ?<h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',fontWeight:'bold'}}>{this.state.chosenDepFlight.econ_price}$</h3>:<h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',fontWeight:'bold'}}>{this.state.chosenDepFlight.business_price}$</h3>}
  <h4 style={{textAlign:'left',marginTop:'-10px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Departure</h4>
  <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>{this.state.chosenDepFlight.departure.substring(11,19)}</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'25px'}}>|</h4>
 <h4 style={{textAlign:'left',marginTop:'-35px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Arrival</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>{this.state.chosenDepFlight.arrival.substring(11,19)}</h4>
 {this.state.economy === true? <h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'120px'}}>ECONOMY</h5>:<h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'120px'}}>BUSINESS</h5>}
 
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
<IconButton aria-label="delete" size="large" 
onClick={this.handleDeleteDep}
style={{transform: 'translate(380%, 5%)',color:'black'}}>
   <DeleteOutlineIcon />
 </IconButton>
  </div>
  <hr></hr>
  </div>:<div></div>}
  {this.state.returnFlight === true ?
<div><h5 style={{marginTop:'-3px',marginBottom:'-1px'}}>{this.state.chosenRetFlight.dep_airport} <FlightLandIcon></FlightLandIcon> {this.state.chosenRetFlight.arr_airport} </h5>
  <div>
  <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold',transform:'translate(-30%,0)'}}>{this.state.chosenRetFlight.departure.substring(0,10)}</h3>
  <h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',fontWeight:'bold'}}>{this.state.retPrice} $</h3>
  <h4 style={{textAlign:'left',marginTop:'-10px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Departure</h4>
  <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>{this.state.chosenRetFlight.departure.substring(11,19)}</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'25px'}}>|</h4>
 <h4 style={{textAlign:'left',marginTop:'-35px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Arrival</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>{this.state.chosenRetFlight.arrival.substring(11,19)}</h4>
 {this.state.economy === true ? <h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'120px'}}>ECONOMY</h5>:
 <h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'120px'}}>BUSINESS</h5>}
 
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
<IconButton aria-label="delete" size="large" 
onClick={this.handleDeleteArr}
style={{transform: 'translate(380%, 5%)',color:'black'}}>
   <DeleteOutlineIcon />
 </IconButton>
  </div>
  <hr></hr>
 <div style={{backgroundColor:'#E5E5E5'}}> <h2 style={{display:'inline-block',color:'#05004E',fontWeight:'700'}}>Total</h2> 
 <h2 style={{display:'inline-block',marginLeft:'280px',color:'#05004E',fontWeight:'700'}}>{this.state.totalPrice}$</h2>
 </div>
{/* //conditionally render this button */}
 

 </div>:<div></div>  
}
</div>
  
      {/* end booking */}
      {this.state.openButton === true ?  <Button variant="contained" endIcon={<SendIcon />} 
      onClick={this.handleContinue}
      style={{width:'405px',backgroundColor:'#05004E'}}
 >Continue</Button>:<div></div>}
       </Item>
       
       </Grid>
    </Grid>
    </Box>
  );
}
}
