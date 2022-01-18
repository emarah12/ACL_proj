import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Link from '@mui/material/Link';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export default function Booking () {

    return (
        <div>
  <p style={{marginTop:'-15px'}}> <PersonIcon style={{fontSize:'14px'}}></PersonIcon> 1 passenger(s)</p>
  <hr></hr>
  <h5 style={{marginTop:'-3px',marginBottom:'-1px'}}>Berlin <FlightLandIcon></FlightLandIcon> Cairo</h5>
  <div>
  <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold'}}>Sun,25 Jan 2022</h3>
  <h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',fontWeight:'bold'}}>65$</h3>
  <h4 style={{textAlign:'left',marginTop:'-10px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Departure</h4>
  <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>11:50:00</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'25px'}}>|</h4>
 <h4 style={{textAlign:'left',marginTop:'-35px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Arrival</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>15:00:00</h4>
 <h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'120px'}}>ECONOMY</h5>
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
<IconButton aria-label="delete" size="large" style={{transform: 'translate(380%, 5%)',color:'black'}}>
   <DeleteOutlineIcon />
 </IconButton>
  </div>
  <hr></hr>
  <h5 style={{marginTop:'-3px',marginBottom:'-1px'}}>Cairo <FlightLandIcon></FlightLandIcon> Berlin</h5>
  <div>
  <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold'}}>Sun,25 Jan 2022</h3>
  <h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',fontWeight:'bold'}}>65$</h3>
  <h4 style={{textAlign:'left',marginTop:'-10px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Departure</h4>
  <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>11:50:00</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'25px'}}>|</h4>
 <h4 style={{textAlign:'left',marginTop:'-35px',color:'#FCA311'}}><CircleOutlinedIcon style={{fontSize:'12px',color:'#FCA311'}}/> Arrival</h4>
 <h4 style={{textAlign:'left',marginTop:'-20px',fontSize:'12px'}}>15:00:00</h4>
 <h5 style={{textAlign:'right',marginTop:'-120px',marginBottom:'120px'}}>ECONOMY</h5>
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
<IconButton aria-label="delete" size="large" style={{transform: 'translate(380%, 5%)',color:'black'}}>
   <DeleteOutlineIcon />
 </IconButton>
  </div>
  <hr></hr>
 <div style={{backgroundColor:'#E5E5E5'}}> <h2 style={{display:'inline-block',color:'#05004E',fontWeight:'700'}}>Total</h2> <h2 style={{display:'inline-block',marginLeft:'280px',color:'#05004E',fontWeight:'700'}}>130$</h2></div>
{/* //conditionally render this button */}
 

 </div>
    )
}

