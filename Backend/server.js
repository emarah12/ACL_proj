// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express');
const app = express();
const bcrypt= require('bcrypt')
app.use(express.json())
const users = []
app.get('/users',(req,res) => {
    res.json(users)
})
app.post('/users',async(req,res)=>{
    try{   
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        const user=  {name: req.body.name, password:hashedPassword}
            users.push(user)
            res.status(201).send()
    } catch {
        res.status(500).send()
    }
 
   

})
app.post('/users/login',async(req,res)=>{
const user = users.find(user =>user.name= req.body.name)
if (user==null){
    return res.status(400).send('Cannot find user')
}
try {
if(await bcrypt.compare(req.body.password,user.password))
res.send('Success')
} else {
    res.send('Not Allowed')
}
catch {
    res.status(500).send()
}
})
app.listen(3000)
const bodyParser = require('body-parser');
const cors = require('cors');
var moment = require('moment'); // require
moment().format(); 
// log requests to the console

// configure body parser
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/',require('./Controllers/FlightController'))

var port = process.env.PORT || 3001; // set our port

// DATABASE SETUP
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lobna:lobna@cluster0.iekig.mongodb.net/flight-reservation?retryWrites=true&w=majority'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('MongoDB is Connected...');
});

//Models lives here

var Admin = require('./Models/Admin');
var Flight = require('./Models/Flight');

//Controllers lives here
// import { adminController } from "./Backend/Controllers/AdminController"
//import { flightController } from "./Backend/Controllers/FlightController"
var flightController = require('./Controllers/FlightController');
const { use } = require('./Controllers/FlightController');
// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log(`App started on port ${port}`);
    next();
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
// app.use('/api/user', userController)
app.use('/api/flight', flightController)
// app.use('/api/admin', adminController)
    // START THE SERVER
    // =============================================================================
app.listen(port);
console.log(`App started on port ${port}`);