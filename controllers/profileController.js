
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const profileController = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    postProfile: async function (req, res) {

        var email = req.body.email;

        var user = {
            email:email
        };
        var projection = 'email username description position myReservations';

        var result = await db.findOne(User, user, projection);
        if (result != null){
            result.active = "profile";
            res.render("profile", result);
        }else{
            res.render("error");
        }
    }
}


/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = profileController;
