var express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Flight = require("../Models/Flight");
var moment = require('moment'); // require


//loads all flights by default
router.get('/', function (req, res) {
    Flight.find(function(err, Flight) {
        if (err)
            res.send(err);
        res.json(Flight);
    });
})

router.post("/create",(req, res) => {
    var newflight = new Flight(req.body); // create a new instance of the Flight model
  console.log("create");
    newflight.save().then(flight => {
            res.status(200).send({ flight: newflight });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.put('/updateFlightbyadmin/:_id',  (req, res) => {
    console.log("patch")
    Flight.findByIdAndUpdate(  req.params._id,  req.body ).then(updatedflight => res.status(200).send({ flight: updatedflight }))
})



router.get("/searchFlights",(req,res) =>{
    Flight.find(req.query).then((result) =>{
        console.log("search");
        res.header("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 4));
    });
});

router.delete('/deleteFlight/:_id', function(req, res, next){
    console.log("delete");
    console.log(req.params._id);
    Flight.deleteOne({_id: mongoose.Types.ObjectId(req.params._id)}).then(function(flight){  //findall
        res.send(flight);
        console.log("record successfully deleted!")
    }).catch(next);
});

router.get('/update/:id',function(req,res){
Flight.findById(req.params.id).then(function(flight){
    res.send(flight);
}).catch(next);
});

module.exports = router;