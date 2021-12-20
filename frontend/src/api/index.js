import axios from 'axios';

const url ='http://localhost:3001/api/flight';

export const fetchFlights = () => axios.get(url);