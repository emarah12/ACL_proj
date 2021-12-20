import * as api from '../api';

//action creators
export const getFlights = () => async (dispatch)=> {
    try{
     const{data} = await api.fetchFlights();
     dispatch({type: 'FETCH_ALL',payload: data});
    }catch(e){ 
    console.log(e.message);
    }
}