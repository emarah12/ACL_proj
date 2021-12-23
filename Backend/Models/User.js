const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({

    first_name:
    {
    type: String,
    required:true ,
    unique: false,
    trim:true,
    uppercase:true,
    },

    last_name:
    {
    type: String,
    required:true ,
    unique: false,
    trim:true,
    uppercase:true,
    },

    passport_num:
    {
    type: String,
    required:true ,
    unique: true,
    trim:true,
    uppercase:true,
    },

    email:
    {
    type: String,
    required:true ,
    unique: true,
    trim:true,
    uppercase:true,
    },

    password:
    {
    type: String,
    required: true
    },

    //array of reserved flights
    reservedFlights:
    {
        type: Schema.Types.Flight,
        path: Flight,
        required: True
    }

});

userSchema.index({ "$**": "text" }); 

module.exports= mongoose.model('user', userSchema);