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
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
    

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
          <p style={{ transform: 'translate(95%, 35%)',fontSize:'12px',marginTop:'-100px',color:'gray',fontWeight:'700'}}> <p style={{ transform: 'translate(0%, 45%)',color:'#FCA311',fontWeight:'700',fontSize:'28px',marginBottom:'10px'}}><AirplaneTicketIcon style={{fontSize:'1.7rem',transform: 'translate(0%, 15%)'}}/> 65$</p>cheapest at</p>
       <div style={{display:'inline'}}>
       <p style={{marginLeft:'-200px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-20px'}}><FlightTakeoffIcon sx={{fontSize:'0.9rem'}}/> BER</p>
       <p style={{marginLeft:'0px',fontSize:'12px',marginTop:'-5px',color:'gray',marginBottom:'-18px'}}>3h10m</p>
       <p style={{marginLeft:'200px',fontSize:'12px',marginTop:'-5px',color:'gray'}}><FontAwesomeIcon icon={faMapMarkerAlt} /> CAI</p>
       </div>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p style={{color:'gray',fontSize:'10px',fontWeight:'700',marginTop:'-10'}}>Benefits and cost per adult passenger.</p>
              <Button variant="contained" style={{backgroundColor:'#05004E'}}>85$</Button>
          <Button variant="outlined" style={{borderColor:'#05004E',color:'#05004E'}}>120$</Button>
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
