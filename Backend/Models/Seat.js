const mongoose = require('mongoose');
const seatSchema = new mongoose.Schema({


    Seat:
    {
        Letter:String,
        Number:Number,
        IsOccupied:Boolean 
    }
})
module.exports= mongoose.model('Seat', seatSchema);