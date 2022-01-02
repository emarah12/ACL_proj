import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LuggageIcon from '@mui/icons-material/Luggage';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
    
export default function SimpleAccordion() {
  return (
    <div>
      <Accordion style={{backgroundColor:'#E5E5E5',borderLeft:'5px solid #FCA311'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            {/* <p style={{color:'#FCA311',fontWeight:'700',marginTop:'0',marginBottom:'-10px'}}>MS731</p> */}
            <p style={{color:'#FCA311',fontWeight:'700',marginTop:'10px'}}>MS731</p>
          <Typography style={{color:'black',fontSize:'20px',fontWeight:'700',marginLeft:'5rem'}}>11:50:00 <AccessTimeIcon sx={{ fontSize: '1.3rem' ,marginLeft:'4rem',marginRight:'3rem',color:'black'}}/> 15:00:00
          <p style={{ transform: 'translate(95%, 35%)',fontSize:'12px',marginTop:'-100px',color:'gray',fontWeight:'700'}}> <p style={{ transform: 'translate(0%, 45%)',color:'#FCA311',fontWeight:'700',fontSize:'28px',marginBottom:'10px'}}><AirplaneTicketIcon style={{fontSize:'1.7rem',transform: 'translate(0%, 15%)'}}/> 65$</p>Best fare</p>
       <div style={{display:'inline'}}>
       <p style={{marginLeft:'-200px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-20px'}}><FlightTakeoffIcon sx={{fontSize:'0.9rem'}}/> BER</p>
       <p style={{marginLeft:'0px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-18px'}}>3h10m</p>
       <p style={{marginLeft:'200px',fontSize:'12px',marginTop:'-5px',color:'gray'}}><FontAwesomeIcon icon={faMapMarkerAlt} /> CAI</p>
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
                  65$
                  </Typography></Paper>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10',marginBottom:'-10px'}}><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/>Piece(s) 2, per piece 23 Kg checked baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-5px',marginBottom:'-10px'}}><BusinessCenterIcon style={{fontSize:'10px'}}/> Pieces 1, Total weight 7 kg hand baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-90px',}}><AirlineSeatReclineNormalIcon style={{fontSize:'12px'}}/> Standard seat selection</p>
                  <Button variant="outlined" style={{borderColor:'#05004E',color:'#FFFFFF',width:'300px',backgroundColor:'#05004E'}}> select fare </Button>
              </Typography>
              </Paper>
              
            </Grid>
            <Grid item xs={6} md={6}>
            <Paper elevation={3} style={{backgroundColor:'#FFFFFF',transform: 'translate(5%, -5%)',width:'300px'}}> 
              <Typography>
                <p style={{color:'#FCA311',marginBottom:'20px',paddingTop:'10px'}}>Business from</p>
                <Paper style={{backgroundColor:'#FFFFFF',color:'#FCA311',border:'2px solid #FCA311',transform: 'translate(90%, -50%)',width:'100px'}}><Typography>
                  95$
                  </Typography></Paper>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10',marginBottom:'-10px'}}><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/><LuggageIcon style={{fontSize:'10px'}}/>Piece(s) 3, per piece 32 Kg checked baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-5px',marginBottom:'-10px'}}><BusinessCenterIcon style={{fontSize:'10px'}}/><BusinessCenterIcon style={{fontSize:'10px'}}/> Pieces 2, Total weight 15 kg hand baggage</p>
                  <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginLeft:'-105px',}}><AirlineSeatReclineNormalIcon style={{fontSize:'12px'}}/> Free seat selection</p>
                  <Button variant="outlined" style={{borderColor:'#FCA311',color:'#FFFFFF',width:'300px',backgroundColor:'#FCA311'}}> select fare </Button>
              </Typography>
              </Paper>
              
            </Grid>
              </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion style={{backgroundColor:'#E5E5E5',borderLeft:'5px solid #FCA311'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
