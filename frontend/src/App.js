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
import Select from './components/UserComponents/stepper/select/select';
import SwipeableTextMobileStepper from './components/UserComponents/home';
import Book from './components/UserComponents/stepper/book';
import ChildModal from './components/UserComponents/stepper/select/selectSeats';
import Menu from './components/UserComponents/menu/menu';
import LoginModal from './components/UserComponents/stepper/select/loginPopper';
import Profile from './components/UserComponents/profile'

const App = () => {
    return(
    <Router>
            <div>
                <Menu />
                {/* <Navbar /> */}
                <Route path="/api/flight" exact component={AllFlights} />
                <Route path="/api/flight/create"exact component={CreateFlight} />
                <Route path="/api/flight/updateFlightbyadmin/:id" exact component={Edit} />
                <Route path = "/api/flight/searchFlight" exact component = {SearchFlights}/> 
                <Route path="/list-search/:id" exact component={SearchResults}/>
                <Route path="/select" exact component={Select}></Route>
                <Route path="/book" exact component={Book}></Route>
                <Route path="/home" exact component={SwipeableTextMobileStepper}></Route>
                <Route path="/selectSeats" exact component={ChildModal}></Route>
                <Route path="/login" exact component={LoginModal}></Route>
                <Route path="/profile" exact component={Profile}></Route>
            </div>
        </Router>
     
    );
}

export default App;