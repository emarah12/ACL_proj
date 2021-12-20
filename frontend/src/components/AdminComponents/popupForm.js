import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useState, useEffect } from "react";
import AllFlights from './allFlights';
  

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [flight,setFlight] = React.useState({});
  const [FormValues,setFormValues] = React.useState({
   flight_num: "",
  });

  const handleClickOpen = () => {
    console.log(props.id);
    console.log("open");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (e) => {
    setFlight({...flight,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/api/flight/updateFlightbyadmin/"+props.id,flight)
    .then(res => console.log(res.data)).then(
      () =>{
        alert("Flight Updated!");
       window.location.reload(true);
      }
    )
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="outlined" startIcon={<EditIcon fontSize="small" />} onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Flight</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in only the fields you which to change.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name ="flight_number"
            id="flight_num"
            label="Flight Number"
            type="String"
            variant="standard"
            fullWidth
            // onChange={handleChange}
            margin="normal"
          />
        <br/>
        <TextField
          autoFocus
          variant="standard"
          margin="dense"
          id="depTime"
          label="Departure Time"
          name="departure"
        //  value={this.state.name}
          onChange={handleChange}
          margin="normal"
        />
        
        <TextField
        variant="standard"
          autoFocus
          margin="dense"
          id="arrTime"
          label="Arrival Time"
          name="arrival"
        //  value={this.state.name}
          onChange={handleChange}
          margin="normal"
        /><br/>
        <TextField
          autoFocus
          variant="standard"
          margin="dense"
          id="date"
          label="Departure Airport"
          name="dep_airport"
        //  value={this.state.name}
          onChange={handleChange}
          margin="normal"
        />
           <TextField
          autoFocus
          variant="standard"
          margin="dense"
          id="airport"
          label="Arrival Airport"
          name="arr_airport"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
        <br/>
        <TextField
        variant="standard"
          autoFocus
          margin="dense"
          id="nrEco"
          label="Economy Seats"
          name="econ_seats"
        //  value={this.state.name}
         onChange={handleChange}
          margin="normal"
        />
        <TextField
        variant="standard"
          autoFocus
          margin="dense"
          id="nrBusiness"
          label="Business Seats"
          name="business_seats"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
        <br/>
        

       < TextField
         autoFocus
         variant="standard"
         margin="dense"
          id="airport"
          label="Arrival Terminal"
          name="arr_terminal"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
         < TextField
           autoFocus
           variant="standard"
           margin="dense"
          id="airport"
          label="Departure Terminal"
          name="dep_terminal"
        //  value={this.state.name}
        onChange={handleChange}
          margin="normal"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

