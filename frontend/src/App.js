import React, {useEffect , Component} from 'react';
import { Container,AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import AllFlights from './components/AdminComponents/allFlights';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import CreateFlight from './components/AdminComponents/createFlight';
import Navbar from './components/AdminComponents/Navbar/navbar'
import Edit from './components/AdminComponents/edit';
import SearchFlights from './components/AdminComponents/Search/searchFlights';
import SearchResults from './components/AdminComponents/Search/searchResults';
import CustomizedSteppers from './components/UserComponents/stepper/select';
import SwipeableTextMobileStepper from './components/UserComponents/home';




const App = () => {
    return(
    <Router>
            <div>
                <Navbar />
                <Route path="/api/flight" exact component={AllFlights} />
                <Route path="/api/flight/create"exact component={CreateFlight} />
                <Route path="/api/flight/updateFlightbyadmin/:id" exact component={Edit} />
                <Route path = "/api/flight/searchFlight" exact component = {SearchFlights}/> 
                <Route path="/list-search/:id" exact component={SearchResults}/>
                <Route path="/select" exact component={CustomizedSteppers}></Route>
                <Route path="/home" exact component={SwipeableTextMobileStepper}></Route>
            </div>
        </Router>
     
    );
}

export default App;