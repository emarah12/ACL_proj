import React from 'react';
import Flight from '../Flight/Flight';
import UseStyles from './styles';
import { useSelector } from 'react-redux';

const Flights = () => {
    const flights = useSelector((state) => state.flights);
    const classes = UseStyles();
    console.log(flights);

    return(
    <>
   <h1 className={classes.title}>Flights</h1>
   <Flight className={classes.details}></Flight>
   <Flight className={classes.details}></Flight>
   </>
    );
}

export default Flights;