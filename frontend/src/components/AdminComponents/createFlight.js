import React,{Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class CreateFlight extends Component{
    constructor(props){
        super(props);

        this.onChangeFlightNumber = this.onChangeFlightNumber.bind(this); 
        this.onChangeDeparture = this.onChangeDeparture.bind(this);  
        this.onChangeArrival = this.onChangeArrival.bind(this); 
        this.onChangeDepartureAirport = this.onChangeDepartureAirport.bind(this);
        this.onChangeArrivalAirport = this.onChangeArrivalAirport.bind(this);
        this.onChangeEconmySeats = this.onChangeEconmySeats.bind(this);
        this.onChangeBusinessSeats = this.onChangeBusinessSeats.bind(this);
        this.onChangeDepartureTerminal = this.onChangeDepartureTerminal.bind(this);
        this.onChangeArrivalTerminal = this.onChangeArrivalTerminal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            flight_number:'',
            departure:'',
            arrival:'',
            dep_airport:'',
            arr_airport:'',
            econ_seats:'',
            business_seats:'',
            dep_terminal:'',
            arr_terminal:'',
        }        
    
    }

    onChangeFlightNumber(e) {
        this.setState({
            flight_number: e.target.value
        });
    }


    onChangeDeparture(e) {
        this.setState({
            departure: e.target.value
        });
    }

    onChangeArrival(e) {
        this.setState({
            arrival: e.target.value
        });
    }

    onChangeDepartureAirport(e) {
        this.setState({
            dep_airport: e.target.value
        });
    }
    onChangeArrivalAirport(e) {
        this.setState({
            arr_airport: e.target.value
        });
    }

    onChangeEconmySeats(e) {
        this.setState({
        econ_seats: e.target.value
        });
    }

    onChangeBusinessSeats(e) {
        this.setState({
            business_seats: e.target.value
        });
    }

    onChangeDepartureTerminal(e) {
        this.setState({
            dep_terminal: e.target.value
        });
    }

    onChangeArrivalTerminal(e) {
        this.setState({
            arr_terminal: e.target.value
        });
     }

     onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.flight_number}`);
        console.log(`Todo Responsible: ${this.state.departure}`);
        console.log(`Todo Priority: ${this.state.arrival}`);
        console.log(`Todo Priority: ${this.state.dep_airport}`);
        console.log(`Todo Priority: ${this.state.arr_airport}`);
        console.log(`Todo Priority: ${this.state.econ_seats}`);
        console.log(`Todo Priority: ${this.state.business_seats}`);
        console.log(`Todo Priority: ${this.state.dep_terminal}`);
        console.log(`Todo Priority: ${this.state.arr_terminal}`);


        const newFlight = {
            flight_number: this.state.flight_number,
            departure: this.state.departure,
            arrival: this.state.arrival,
            dep_airport: this.state.dep_airport,
            arr_airport: this.state.arr_airport,
            econ_seats:this.state.econ_seats,
            business_seats:this.state.business_seats,
            dep_terminal:this.state.dep_terminal,
            arr_terminal:this.state.arr_terminal
        };

        axios.post('http://localhost:3001/api/flight/create', newFlight)
            .then(res => console.log(res.data)).then(
              () =>{
                alert("Flight Creadted Successfully!");
              });

            this.setState({
                flight_number:'',
                departure:'',
                arrival:'',
                dep_airport:'',
                arr_airport:'',
                econ_seats:'',
                business_seats:'',
                dep_terminal:'',
                arr_terminal:'',
            })
        }
        render(){
            return(
                <Box
        
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <form onSubmit={this.onSubmit}>
            <div className="Flight">
                        <label>Flight Number: </label>
                        <input  type="text"
                                className="form-control"
                               value={this.state.flight_number}
                                onChange={this.onChangeFlightNumber}
                                />
                    </div>

                    <div className="form-group">
                        <label>Departure Date: </label>
                        <input  type="text"
                                className="form-control"
                               value={this.state.departure}
                                onChange={this.onChangeDeparture}
                                />
                    </div>
                    <div className="form-group">
                        <label>Arrival Date: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.arrival}
                                onChange={this.onChangeArrival}
                                />
                    </div>

                    <div className="form-group">
                        <label>Departure Airport: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.dep_airport}
                                onChange={this.onChangeDepartureAirport}
                                />
                    </div>

                    <div className="form-group">
                        <label>Arrival Airport: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.arr_airport}
                                onChange={this.onChangeArrivalAirport}
                                />
                    </div>

                    <div className="form-group">
                        <label>Econmy Seats Available : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.econ_seats}
                                onChange={this.onChangeEconmySeats}
                                />
                    </div>

                    <div className="form-group">
                        <label>Business Seats Available : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.business_seats}
                                onChange={this.onChangeBusinessSeats}
                                />
                    </div>

                    <div className="form-group">
                        <label>Departure Terminal : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.dep_terminal}
                                onChange={this.onChangeDepartureTerminal}
                                />
                    </div>

                    <div className="form-group">
                        <label>Arrival Terminal : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.arr_terminal}
                                onChange={this.onChangeArrivalTerminal}
                                />
                    </div>      
                    {/* <div className="form-group">
                        <input  type="submit"
                                value = "CREATE"
                                className="btn btn-primary"
                                />
                    </div>    */}

    <Button variant="Create Flight" type = "submit">Create Flight</Button>  
          </form>
        </Box>
            )
        }
    }