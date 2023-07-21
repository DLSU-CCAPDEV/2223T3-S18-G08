
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
        
        data = JSON.stringify(data);
        res.render('searchslots',{email:email,position:position,data:data,active:'studentreserve'});
        
    },

}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = searchslotsController;
