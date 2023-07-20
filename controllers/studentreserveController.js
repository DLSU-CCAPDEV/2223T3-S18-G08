
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const studentreserveController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    postgetSlots: function (req, res) {
        var email = req.body.email;
        res.render('studentreserve',{email:email});
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postSlots: async function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using `req.body.fName`
        */
        var email = req.body.email;
        var lab =  Number(req.body.lab);
        var date = Number(req.body.date);
        var time = Number(req.body.time);
        var seat = JSON.parse(req.body.seat);
        var user = {
            email:email
        };
        var reservations = new Array();
        seat.forEach(e => {
            var reservation = {
                lab:lab,
                date:date,
                time:time,
                seat:e
            };
            reservations.push(reservation);
        });
        
        var projection = 'email username description position myReservations';
        var old = await db.findOne(User, user, projection);
        if(old != null){
            old.myReservations.forEach(e => {
                reservations.push(e);
            });
            var change = {
                myReservations:reservations
            };
            await db.updateOne(User,user,change);
            var result = await db.findOne(User, user, projection);
            if (result != null){
                result.active = "profile";
                res.render("profile", result);
            }else{
                res.render("error");
            }
        }
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = studentreserveController;
