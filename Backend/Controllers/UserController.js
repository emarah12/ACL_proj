var express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Flight = require("../Models/Flight");
var moment = require('moment'); // require
const User = require('../Models/User');

//Create a new user
router.post("/userCreate",(req, res) => {
    var newUserlight = new User(req.body); // create a new instance of the Flight model
  console.log("create");
    newUser.save().then(User => {
            res.status(200).send({ User: newUser });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

//user search flights 
router.get("/userSearchFlights",(req,res) =>{
    Flight.find(req.query).then((result) =>{
        res.header("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 4));
    });
});

//Num of econ_seats

router.get("/numOfEconSeats",(req,res) =>{
    Flight.find(req.query).then((result) =>{
        res.header("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 4));
    });
});

//Num of business_seats

router.get("/numOfBussSeats",(req,res) =>{
    Flight.find(req.query).then((result) =>{
        res.header("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 4));
    });
});

//Load all flights (Reserved)
router.get('/userReservedFlights', function (req, res) {
    Flight.find(function(err, Flight) {
        if (err)
            res.send(err);
        res.json(Flight);
    });
})

//Cancel reservation (Delete)
router.delete('/userDeleteFlight/:_id', function(req, res, next){     //a delete ezay 3and user msh mn el flights (seats++,send email)
    console.log("delete");
    console.log(req.params._id);
    Flight.deleteOne({_id: mongoose.Types.ObjectId(req.params._id)}).then(function(flight){  //findall
        res.send(flight);
        console.log("record successfully deleted!")
    }).catch(next);
});

//Update user info
router.get('/update/:id',function(req,res){                            //update data in reservations also
    User.findById(req.params.id).then(function(flight){
        res.send(User);
    }).catch(next);
    });

