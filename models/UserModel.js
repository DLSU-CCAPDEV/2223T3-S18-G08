
// import module `mongoose`
var mongoose = require('mongoose');

var reservations = new mongoose.Schema({
    lab: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    seat: {
        type: Number,
        required: true
    }
  });

// defines the schema for collection `users`
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    myReservations:[reservations]
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('User', UserSchema);
