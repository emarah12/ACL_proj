import React from 'react'
import {useEffect, useState} from 'react';

export const Flight_number= ()=> {
    const [initialState, setIntialState] = useState([])

    useEffect(()=>{
fetch('/api/').then(res => {
    if(res.ok){
        return res.json()
    }
}).then(jsonResponse => setIntialState(jsonResponse))
    },[] )}

console.log(initialState)
return(<div></div>)    