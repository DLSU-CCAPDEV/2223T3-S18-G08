
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const searchslotsController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    postgetSlots: async function (req, res) {
        var email = req.body.email;
        var data = await db.findMany(User,{},'email username myReservations');
        var user = {
            email: email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        if(data != null){
            data = JSON.stringify(data);
            res.render('searchslots',{email:email,position:position,data:data,active:'studentreserve'});
        }else{
            res.render('error');
        }
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
        
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = searchslotsController;
