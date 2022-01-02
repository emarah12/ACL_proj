import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SimpleAccordion from './flightsAccordion';
import EventIcon from '@mui/icons-material/Event';



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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');
  //to load return flights
const [open, setOpen] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <h5 style={{textAlign:'left',marginBottom:'0'}}>* Please select departure flight<p style={{display:'inline-block',marginLeft:'28rem'}}><EventIcon style={{marginBottom:'-7px'}}/> 25/01/2022</p></h5>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'#05004E'}}>
          <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>BER <FlightLandIcon/> CAI</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <SimpleAccordion/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h5 style={{textAlign:'left',marginBottom:'0'}}>* Please select return flight <p style={{display:'inline-block',marginLeft:'29rem'}}><EventIcon style={{marginBottom:'-7px'}}/> 25/02/2022</p></h5>
      {open === false? <div>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disabled>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'#05004E'}}>
        <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>CAI <FlightLandIcon/> BER</h2>
        </AccordionSummary> 
      </Accordion></div>:<div><Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disabled>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'#05004E'}}>
        <h2 style={{color:'#FFFFFF',marginLeft:'17rem'}}>CAI <FlightLandIcon/> BER</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion></div>}
      
    </div>
  );
}
