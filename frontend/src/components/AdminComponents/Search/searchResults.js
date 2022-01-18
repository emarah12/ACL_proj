import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';
export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state={Flights:[]}
  }
  
  componentDidMount()
{   const searchlink=this.props.match.params.id;
    localStorage.setItem("bom",searchlink);
    axios.get('http://localhost:3001/api/flight/searchFlights?'+searchlink).then((response) => {
       this.setState({Flights:response.data});
       localStorage.setItem("f","f");   
      });
     
  }
  render() {
    return(
     
    <div>
     {this.state.Flights.map(flight=>(
     <Grid container justifyContent="space-between" alignItems="center">
     <Grid item xl>
       <div class="wrapper">
       <b>FlightNumber: {flight.flight_number}</b><br/>
           DepartureTime: {flight.departure}<br/>
           ArrivalTime: {flight.arrival}<br/>
           ArrivalAirport: {flight.arr_airport}<br/>
           NrEconomySeats: {flight.econ_seats}<br/>
           NrBusinessSeats: {flight.business_seats}<br/>
           DepartureAirport: {flight.dep_airport}<br/>
           DepartureTerminal: {flight.dep_terminal}<br/>
           ArrivalTerminal: {flight.arr_terminal}
       </div>

    
     </Grid>
     <Grid item>
     </Grid>
   </Grid>
  
     
     
     ))
     }  
 </div>
    );
    
  }
}