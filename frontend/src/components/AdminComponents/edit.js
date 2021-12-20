import React, { useEffect, useState } from 'react';
import { Container ,Paper,Button} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import axios from 'axios';
export default function Edit(props)
{ 
    const[flight,setFlight]=useState({});
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/api/flight/updateFlightbyadmin/'+props.match.params.id,flight)
        .then(res => console.log(res.data))
        .then(
          ()=>{
            alert("Flight Updated!");
          })
    }
    const handleChange =(e)=>{
        setFlight({...flight,[e.target.name]:e.target.value});
    };

    return(
        <div>
        <h2>Update Flight</h2>;
        <TextField
          id="flightNr"
          label="Flight Number"
          name="flight_number"
        //   value={this.state.flightNumber}
         onChange={handleChange}
          margin="normal"
        />
        <br/>
        <TextField
          id="depTime"
          label="Departure Time"
          name="departure"
        //  value={this.state.name}
          onChange={handleChange}
          margin="normal"
        />
        <br/>
        <TextField
          id="arrTime"
          label="Arrival Time"
          name="arrival"
        //  value={this.state.name}
          onChange={handleChange}
          margin="normal"
        /><br/>
        <TextField
          id="date"
          label="Departure Airport"
          name="dep_airport"
        //  value={this.state.name}
          onChange={handleChange}
          margin="normal"
        />
        <br/>
        <TextField
          id="nrEco"
          label="Number Of Economy Seats"
          name="econ_seats"
        //  value={this.state.name}
         onChange={handleChange}
          margin="normal"
        />
        <br/>
        <TextField
          id="nrBusiness"
          label="Business Seats"
          name="business_seats"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
        <br/>
        
        <TextField
          id="airport"
          label="Arrival Airport"
          name="arr_airport"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
        <br/>

       < TextField
          id="airport"
          label="Arrival Terminal"
          name="arr_terminal"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
         < TextField
          id="airport"
          label="Departure Terminal"
          name="dep_terminal"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
        <br/>
        
         <div>
         <Button  variant="contained" color="primary" display = "flex"   marginright onClick={handleSubmit}>Update</Button>
              </div>
          <br/>
        
              </div>
               
            );
    
}