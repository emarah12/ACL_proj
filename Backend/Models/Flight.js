const mongoose = require('mongoose');
const Seat = require('./Seat');
const flightSchema = new mongoose.Schema({
    flight_number:
    {
    type: String,
    required:true ,
    unique: true,
    trim:true,
    uppercase:true,
    },
    departure: //departure time and date
    {
        type: Date,
        required: true,
        unique:false,
        trim:true,
        uppercase:true,
    },
    arrival:  //arrival time and date
    {
        type:Date,
        required:true,
        unique:false,
        trim:true,
        uppercase:true,
    },
    dep_airport:
    {
        type: String,
        unique:false,
        required:true,
        trim:true,
        uppercase:true,
    },
    arr_airport:
    {
        type: String,
        unique:false,
        required:true,
        trim:true,
        uppercase:true,
    },
    econ_seats:
    {
        type: Number,
        unique:false,
        trim:true,
        required:true,
        uppercase:true,
    },
    business_seats:
    {
        type: Number,
        unique:false,
        trim:true,
        required:true,
        uppercase:true,
    },
    dep_terminal:{
        type:Number,
        trim:true,
        unique:false,
        // required:true,
        uppercase:true,
    },
    arr_terminal:{
        type:Number,
        trim:true,
        unique:false,
        // required:true,
        uppercase:true,
    },
    econ_price:{
        type:String,
        trim:true,
        unique:false,
        required:true,
        uppercase:true,
    },
    business_price:{
        type:String,
        trim:true,
        unique:false,
        required:true,
        uppercase:true,
    },
    duration:{
        type:String,
        trim:true,
        unique:false,
        required:true,
        uppercase:true,
    },

    seats:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat'
    }]
});
flightSchema.index({ "$**": "text" }); 

module.exports= mongoose.model('Flight', flightSchema);
