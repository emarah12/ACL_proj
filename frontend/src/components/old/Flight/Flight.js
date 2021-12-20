import React from 'react';
import UseStyles from './styles';

const Flight = () => {
    const classes = UseStyles();
    return(
   <h1 className={classes.title}>Flight</h1>
    );
}

export default Flight;