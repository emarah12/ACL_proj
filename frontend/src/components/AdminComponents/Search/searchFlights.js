import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

export default class SearchFlights extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {flight_number:' ',departure:' ',arrival:' ',arr_airport:' ',econ_seats:' ',business_seats:' ',dep_airport:' ',
    arr_terminal:' ',dep_terminal:' ',Flights:{}}
  }

  componentDidMount(){
    const flight = this.props.match.params.id;
  }
  
  handleSubmit =async e=>{
    e.preventDefault();
    let searchlink = "";
   if(this.state.flight_number!== " ")
    searchlink+="flight_number="+ this.state.flight_number +"&";
   
    if(this.state.departure!== " ")
    searchlink+="departure="+ this.state.departure +"&";

     if(this.state.arrival!== " ")
     searchlink+="arrival="+ this.state.arrival +"&";

     if(this.state.arr_airport!== " ")
     searchlink+="arr_airport="+ this.state.arr_airport +"&";

     if(this.state.econ_seats!== " ")
     searchlink+="econ_seats="+ this.state.econ_seats +"&";
     if(this.state.business_seats!== " ")
     searchlink+="business_seats="+ this.state.business_seats +"&";
     if(this.state.dep_airport!= " ")
     searchlink+="dep_airport="+ this.state.dep_airport +"&";
     if(this.state.dep_terminal!= " ")
     searchlink+="dep_terminal="+ this.state.dep_terminal +"&";
     if(this.state.arr_terminal!= " ")
     searchlink+="arr_terminal="+ this.state.arr_terminal +"&";

     searchlink= searchlink.substring(0,(searchlink.length-1));
     
     localStorage.setItem("f","f");
     localStorage.setItem("searchlink",searchlink);

     window.location.href="/list-search/"+searchlink;

    
}
handleChange = function(event) {
  this.setState({value: event.target.value});
  this.state.Flights={...this.state.Flights,[event.target.name]:[event.target.value]};
}
  render() {
    return(
      <div>
<h2>Search Flight</h2>
<TextField
  id="flight_number"
  label="Flight Number"
  //value={this.state.flightNumber}
  onChange={e => this.state.flight_number = e.target.value}
  margin="normal"
/>
<br/>
<TextField
  id="departure"
  label="Departure Time"
 // value={this.state.name}
  onChange={e => this.state.departure = e.target.value}

  margin="normal"
/>
<br/>
<TextField
  id="arrival"
  label="Arrival Time"
 // value={this.state.name}
  onChange={e => this.state.arrival = e.target.value}
  margin="normal"
/><br/>
<TextField
  id="arr_airport"
  label="Arrival Airport"
 // value={this.state.name}
  onChange={e => this.state.arr_airport = e.target.value}
  margin="normal"
/>
<br/>
<TextField
  id="econ_seats"
  label="Number Of Economy Seats"
 // value={this.state.name}
  onChange={e => this.state.econ_seats = e.target.value}
  margin="normal"
/>
<br/>
<TextField
  id="business_seats"
  label="Number Of Business Seats"
 // value={this.state.name}
  onChange={e => this.state.business_seats= e.target.value}
  margin="normal"
/>
<br/>

<TextField
  id="dep_airport"
  label="Departure Airport"
 // value={this.state.name}
  onChange={e => this.state.dep_airport = e.target.value}
  margin="normal"
/>
<br/>

<TextField
  id="dep_terminal"
  label="Departure Terminal"
 // value={this.state.name}
  onChange={e => this.state.dep_terminal = e.target.value}
  margin="normal"
/>
<br/>

<TextField
  id="arr_terminal"
  label="Arrival Terminal"
 // value={this.state.name}
  onChange={e => this.state.arr_terminal = e.target.value}
  margin="normal"
/>
<br/>

 <div>
 <Button  variant="contained" color="primary" display = "flex"   marginright onClick={this.handleSubmit}>Search</Button>
      </div>
  <br/>
 </div>
     
       
    );
    
  }
}