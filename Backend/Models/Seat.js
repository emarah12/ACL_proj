const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({


    Seats:
    {
        Letter:String,
        Number:Number,
        IsOccupied:Boolean 
    }
})