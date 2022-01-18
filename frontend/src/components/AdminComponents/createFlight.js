import React,{Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import addWeeks from 'date-fns/addWeeks';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputAdornment from '@mui/material/InputAdornment';
import EventIcon from '@mui/icons-material/Event';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
export default function CreateFlight() {
  
    const [flight_number,setFlightNumber]= useState('');
    const [departure,setDepartureTime]= useState();
    const [arrival,setArrivalTime]= useState();
    const [econ_seats,setNrEconomySeats]= useState('');
    const[business_seats,setNrBusinessSeats]=useState('');
    //const[date,setDate]=useState();
    const[arr_airport,setArrivalAirport]=useState('');
    const[dep_airport,setDepartureAirport]=useState('');
    const[econ_price,setPriceEconomy]=useState('');
    const[business_price,setPriceBusiness]=useState('');
    const[duration,setDuration]=useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
         if(flight_number==null ||flight_number =="" ){
           //setError("Please enter a valid Flight Number")
         }
         else if(departure==null || departure=="" ){
          //setError("Please enter a valid Departure Time")
         }
         else if(arrival==null || arrival=="" ){
            //setError("Please enter a valid Arrival Time")
           }
         else if(econ_seats==null || econ_seats=="" ){
            //setError("Please enter a valid Number of Economy Seats")
           } 
        else if(business_seats==null || business_seats=="" ){
            //setError("Please enter a valid Number of Business Seats")
           }
         else if(arr_airport==null || arr_airport=="" ){
            //setError("Please enter a valid Airport Name")
           }    
         else{ 
           var reservedEconomy=[];
           for(var i=0;i<econ_seats;i++)
           {
             reservedEconomy.push({SeatId: "S"+i, Available:1});
           }
           var reserevedBusiness=[];
           for(var i=0;i<business_seats;i++)
           {
             reserevedBusiness.push({SeatId:"S"+i, Available:1});
           }
    
           const flight ={flight_number:flight_number,
            departure:departure,arrival:arrival,
            econ_seats:econ_seats,business_seats:business_seats,
            dep_airport:dep_airport,
            arr_airport:arr_airport,
            econ_price:econ_price,business_price:business_price,duration:duration}
          //  localStorage.setItem("flightnumber",FlightNumber)
          //  localStorage.setItem("depTime",DepartureTime)
            axios.post('http://localhost:3001/api/flight/create',flight)
            .then(res => console.log(res.data)).then(
              ()=>{
                alert("Flight Created Successfully!");
              })
                   
            
         }}
         return (
            <div   style={{
              // backgroundImage: "linear-gradient(to right,#800080 0%,#ff9800 100%)",
              height: "101vh",
              margin:-10,
              padding:0,
              textAlign: "center"
            }}>
            <div className="App" maxwidth="xs">
              <form className="form_login" noValidate onSubmit = {handleSubmit}>
              <div  background-color="#ffffff">
              <Typography component="h1" variant="h5">
                    Create A Flight
                  </Typography>
              <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="flight_number"
                      label="Flight Number"
                      name="flight number"
                      autoComplete="flight number"
                      autoFocus
                      onChange = {e =>setFlightNumber(e.target.value)}
                    />
              <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="departure time"
                      label="Departure Time"
                      id="departure"
                      //autoComplete="current-password"
                      onChange = {e =>setDepartureTime(e.target.value)}
                    />
             <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="arrival time"
                      label="Arrival Time"
                      id="arrival"
                      //autoComplete="current-password"
                      onChange = {e =>setArrivalTime(e.target.value)}
                    />
                     {/* <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="Date"
                      label="Date"
                      id="date"
                      //autoComplete="current-password"
                      onChange = {e =>setDate(e.target.value)}
                    /> */}
             <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="number economy seats"
                      label="Number Of Economy Seats"
                      id="econ_seats"
                      //autoComplete="current-password"
                      onChange = {e =>setNrEconomySeats(e.target.value)}
                    />
            <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="number business seats"
                      label="Number Of Business Seats"
                      id="business_seats"
                      //autoComplete="current-password"
                      onChange = {e =>setNrBusinessSeats(e.target.value)}
                    />
            <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="departureAirport"
                      label="Departure Airport"
                      id="dep_airport"
                      //autoComplete="current-password"
                      onChange = {e =>setDepartureAirport(e.target.value)}
                    />
          
          <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="Arrival Airport"
                      label="Arrival Airport"
                      id="arr_airport"
                      //autoComplete="current-password"
                      onChange = {e =>setArrivalAirport(e.target.value)}
                    />
          
          <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="Price Economy"
                      label="Price Economy"
                      id="econ_price"
                      //autoComplete="current-password"
                      onChange = {e =>setPriceEconomy(e.target.value)}
                    />
          
          <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="Price Business"
                      label="Price Business"
                      id="business_price"
                      //autoComplete="current-password"
                      onChange = {e =>setPriceBusiness(e.target.value)}
                    />
          
          <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="Duration"
                      label="Duration"
                      id="duration"
                      //autoComplete="current-password"
                      onChange = {e =>setDuration(e.target.value)}
                    />
               
          
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                 Create 
                  </Button>
          
               
          
                   
          
                </div>
             
              </form>
            </div>
            </div>
          );
          
            
            }
// function getWeeksAfter(date, amount) {
//     return date ? addWeeks(date, amount) : undefined;
//   }
// export default class CreateFlight extends Component{
//     constructor(props){
//         super(props);

//         // this.onChangeFlightNumber = this.onChangeFlightNumber.bind(this); 
//         // this.onChangeDeparture = this.onChangeDeparture.bind(this);  
//         // this.onChangeArrival = this.onChangeArrival.bind(this); 
//         // this.onChangeDepartureAirport = this.onChangeDepartureAirport.bind(this);
//         // this.onChangeArrivalAirport = this.onChangeArrivalAirport.bind(this);
//         // this.onChangeEconmySeats = this.onChangeEconmySeats.bind(this);
//         // this.onChangeBusinessSeats = this.onChangeBusinessSeats.bind(this);
//         // this.onChangeDepartureTerminal = this.onChangeDepartureTerminal.bind(this);
//         // this.onChangeArrivalTerminal = this.onChangeArrivalTerminal.bind(this);
//         this.setValue = this.setValue.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             flight_number:'',
//             departure:'',
//             arrival:'',
//             dep_airport:'',
//             arr_airport:'',
//             econ_seats:'',
//             business_seats:'',
//             dep_terminal:'',
//             arr_terminal:'',
//             business_price:0,
//             econ_price:0,
//             duration:'',
//             value:[null],
//         }        
    
//     }

//     // onChangeFlightNumber(e) {
//     //     this.setState({
//     //         flight_number: e.target.value
//     //     });
//     // }


//     // onChangeDeparture(e) {
//     //     this.setState({
//     //         departure: e.target.value
//     //     });
//     // }

//     // onChangeArrival(e) {
//     //     this.setState({
//     //         arrival: e.target.value
//     //     });
//     // }

//     // onChangeDepartureAirport(e) {
//     //     this.setState({
//     //         dep_airport: e.target.value
//     //     });
//     // }
//     // onChangeArrivalAirport(e) {
//     //     this.setState({
//     //         arr_airport: e.target.value
//     //     });
//     // }

//     // onChangeEconmySeats(e) {
//     //     this.setState({
//     //     econ_seats: e.target.value
//     //     });
//     // }

//     // onChangeBusinessSeats(e) {
//     //     this.setState({
//     //         business_seats: e.target.value
//     //     });
//     // }

//     // onChangeDepartureTerminal(e) {
//     //     this.setState({
//     //         dep_terminal: e.target.value
//     //     });
//     // }

//     // onChangeArrivalTerminal(e) {
//     //     this.setState({
//     //         arr_terminal: e.target.value
//     //     });
//     //  }
// setValue (e)
// {
//     this.setState({value:e.target.value})
// }
//      onSubmit(e) {
//         e.preventDefault();
//         const newFlight = {
//             flight_number: this.state.flight_number,
//             departure: this.state.departure,
//             arrival: this.state.arrival,
//             dep_airport: this.state.dep_airport,
//             arr_airport: this.state.arr_airport,
//             econ_seats:this.state.econ_seats,
//             business_seats:this.state.business_seats,
//             dep_terminal:this.state.dep_terminal,
//             arr_terminal:this.state.arr_terminal,
//             econ_price:this.state.econ_price,
//             business_price:this.state.business_price,
//             duration:this.state.duration
//         };

//         axios.post('http://localhost:3001/api/flight/create', newFlight)
//             .then(res => console.log(res.data)).then(
//               () =>{
//                 alert("Flight Created Successfully!");
//               });

//             // this.setState({
//             //     flight_number:'',
//             //     departure:'',
//             //     arrival:'',
//             //     dep_airport:'',
//             //     arr_airport:'',
//             //     econ_seats:'',
//             //     business_seats:'',
//             //     dep_terminal:'',
//             //     arr_terminal:'',
//             // })
//         }
//         render(){
//             return(
//                 <Box
        
//           component="form"
//           sx={{
//             '& .MuiTextField-root': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//             <form onSubmit={this.onSubmit}>
//                         <label>Flight Number: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                value={this.state.flight_number}
//                                onChange={e => this.state.flight_number = e.target.value}
//                                // onChange={this.onChangeFlightNumber}
//                                 />
//                   <br></br>
//                   <label>Business Price: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                value={this.state.business_price}
//                                onChange={e => this.state.business_price = e.target.value}
//                                // onChange={this.onChangeFlightNumber}
//                                 />
//                   <br></br>
//                   <label>Economy Price: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                value={this.state.econ_price}
//                                onChange={e => this.state.econ_price = e.target.value}
//                                // onChange={this.onChangeFlightNumber}
//                                 />
//                   <br></br>
//                   <label>duration: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                value={this.state.duration}
//                                onChange={e => this.state.duration = e.target.value}
//                                // onChange={this.onChangeFlightNumber}
//                                 />
//                   <br></br>
//                   {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DesktopDateRangePicker
//       disablePast
//        value={this.state.value}
//        maxDate={getWeeksAfter(this.state.value[0], 4)}
//        onChange={(newValue) => {
//          //  this.state.value=newValue.target.value;
//         setValue(newValue);
//       }}
//         onChange={handleChange('date')}
//         onChange={this.setValue}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField 
//             {...startProps}  
//             id="departure" 
//             label="Depart"
//             sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
//             InputProps={{
//               startAdornment: <InputAdornment position="start"><EventIcon />
//               </InputAdornment>,
//             }}
//             variant="filled"/>
//             {/* <Box sx={{ mx: 2 }}> to </Box> */}
//             {/* <TextField {...endProps}
//             id="return"
//              label="Return"
//              sx={{ m: 1, width: '20ch',marginTop:'3rem' }}
//              InputProps={{
//                startAdornment: <InputAdornment position="start"><EventIcon />
//                </InputAdornment>,
//              }}
//              variant="filled"/>
//           </React.Fragment>
//         )}
//       />
//     </LocalizationProvider>  */}

//                        <label>Departure Date: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                value={this.state.departure}
//                                onChange={e => this.state.departure = e.target.value}
//                                // onChange={this.onChangeDeparture}
//                                 />
//                    <br></br>
//                         <label>Arrival Date: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.arrival}
//                                 onChange={e => this.state.arrival = e.target.value}
//                                 //onChange={this.onChangeArrival}
//                                 />
//                  <br></br> 
//                         <label>Departure Airport: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.dep_airport}
//                                 onChange={e => this.state.dep_airport = e.target.value}
//                                 //onChange={this.onChangeDepartureAirport}
//                                 />
//                  <br></br>
//                         <label>Arrival Airport: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.arr_airport}
//                                 onChange={e => this.state.arr_airport = e.target.value}
//                                 //onChange={this.onChangeArrivalAirport}
//                                 />
//                  <br></br>
//                         <label>Economy Seats Available : </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.econ_seats}
//                                 onChange={e => this.state.econ_seats = e.target.value}
//                              //   onChange={this.onChangeEconmySeats}
//                                 />
//                 <br></br>
//                         <label>Business Seats Available : </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.business_seats}
//                                 onChange={e => this.state.business_seats = e.target.value}
//                               //  onChange={this.onChangeBusinessSeats}
//                                 />
//                    <br></br>
//                         <label>Departure Terminal : </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.dep_terminal}
//                                 onChange={e => this.state.dep_terminal = e.target.value}
//                                 //onChange={this.onChangeDepartureTerminal}
//                                 />
//                 <br></br>
//                         <label>Arrival Terminal : </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.arr_terminal}
//                                 onChange={e => this.state.arr_terminal = e.target.value}
//                                // onChange={this.onChangeArrivalTerminal}
//                                 />
//                    <br></br>
//                     {/* <div className="form-group">
//                         <input  type="submit"
//                                 value = "CREATE"
//                                 className="btn btn-primary"
//                                 />
//                     </div>    */}

//     <Button variant="Create Flight" type = "submit" >Create Flight</Button>  
//           </form>
//         </Box>
//             )
//         }
//     }