const mongoose = require('mongoose');
const Flight = require('./Flight');
const Seat = require('./Seat');
const userSchema = new mongoose.Schema({
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
    
    
    reservedFlights: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Flight'
        }],
    

    tokens: [{
        access: {
            type: String,
            required: true,
        },
        
        token: {
            type: String,
            required: true,
        },
    }, ],


    userId: {
        type: Number,
        unique: true
    },   index: true,

    seat:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat'
    }],
     

});




userSchema.index({ "$**": "text" }); 

userSchema.pre("save", async function() { //Before saving when creating user the password is hashed 
    if (this.isModified("password"))
        this.password = await hash(this.password, 10);
});


userSchema.pre("findOneAndUpdate", async function() { // Hashing password when updating it 
    if (this._update && this._update.password)
        this._update.password = await hash(this._update.password, 10);
});


userSchema.methods.toJSON = function() { // Return the user info as JASON without unwanted fields
    const user = this;
    const userObject = user.toObject();

    // return _.omit(userObject, ["isBanned", "password", "tokens", "__v"]);
    return _.omit(userObject, [ "password", "__v"]);
};


userSchema.methods.generateAuthToken = function() { // Generated the user token to access the website when registering and login
    const user = this;
    const access = "auth";
    const token = jwt.sign({
            _id: user._id.toHexString(),
            access
        },
        secretOrPrivateKey
    );
    user.tokens.push({ // Array to be able to be used on multiple devices
        access,
        token,
    });

    return user.save().then(() => {
        return token;
    });
};


userSchema.methods.removeToken = function(token) { // Remove token after the user logs out
    const user = this;

    return user.updateOne({
        $pull: {
            tokens: {
                token,
            },
        },
    });
};

userSchema.statics.findByToken = function(token) {
    const User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, secretOrPrivateKey); //verifies that the token is valid
    } catch (err) {
        return Promise.reject({
            message: err,
        });
    }

    return User.findOne({
        _id: decoded._id,
        "tokens.token": token,
        "tokens.access": "auth",
    });
};


userSchema.statics.findByCredentials = function(email, password) { // Find using email
    const User = this;

    return User.findOne({
        email,


    }).then((user) => {
        if (!user) {
            return Promise.reject({
                message: "email is incorrect !!",
            });

        }
        if (user.blocked == true) {
            return Promise.reject({
                message: "This is user is blocked from the system",
            });
        }
        return new Promise((resolve, reject) => {

            bcrypt.compare(password, user.password, (err, res) => { // Compares the two passwords both hashed 
                if (res) {
                    resolve(user);
                } else {
                    reject({
                        message: "password is incorrect !!",
                        err,
                    });
                }
            });
        });
    });
};


//Login 
router.post("/login", (req, res) => { // If email or password fields are not entered return error
    if (!req.body.email) {
        return res.status(400).send({
            err: "email field is required !",
        });
    }
    if (!req.body.password) {
        return res.status(400).send({
            err: "password field is required !",
        });
    }
    const userData = {
        email: req.body.email,
        password: req.body.password,
    };

    User.findByCredentials(userData.email, userData.password) // Checks the username and password of user
        .then((user) => {
            return user.generateAuthToken().then((token) => {
                // res.header("x-auth", token).status(200).send(user);
                res.status(200).send({ user: user, token: token });
            });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
});
userSchema.index({ "$**": "text" }); 
module.exports= mongoose.model('User', userSchema);