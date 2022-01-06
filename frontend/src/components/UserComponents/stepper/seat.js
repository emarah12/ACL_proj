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
import EditIcon from '@mui/icons-material/Edit';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export default function Seat() {

    return (
        <div>
  <hr></hr>
  <h3 style={{marginTop:'-3px',marginBottom:'-1px'}}><PersonIcon style={{transform:'translate(0%,20%)'}}/> Passenger 1
  </h3>
  <div>
  <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold'}}>    Berlin <FlightLandIcon></FlightLandIcon> Cairo</h3>
  <h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',transform:'translate(-90%,0%)',fontWeight:'700'}}>7C</h3>

 <h5 style={{textAlign:'right',marginTop:'-18px',marginBottom:'45px'}}>ECONOMY</h5>
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
<IconButton aria-label="edit"  style={{transform: 'translate(740%, -88%)',color:'black'}}>
   <EditIcon style={{fontSize:'18px'}}/>
 </IconButton>
 <h3 style={{display:'inline-block',color:'#000000',fontWeight:'bold',transform:'translate(-115%,100%)'}}>    Cairo <FlightLandIcon></FlightLandIcon> Berlin</h3>
  <h3 style={{display:'inline-block',marginLeft:'230px',color:'#000000',transform:'translate(200%,-120%)',fontWeight:'700'}}>3D</h3>

 <h5 style={{textAlign:'right',marginTop:'-45px',marginBottom:'45px'}}>ECONOMY</h5>
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
<IconButton aria-label="edit"  style={{transform: 'translate(560%, -28%)',color:'black'}}>
   <EditIcon style={{fontSize:'18px'}}/>
 </IconButton>
  
  </div>
 
 

 </div>
    )
}