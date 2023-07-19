
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

        // query where `idNum` is equal to URL parameter `idNum`
        var email = req.body.email;

        var user = {
            email:email
        };
        // fields to be returned
        var projection = 'email username description position myReservations';

        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            this function searches the collection `users`
            based on the value set in object `query`
            the third parameter is a string containing fields to be returned
            the fourth parameter is a callback function
            this called when the database returns a value
            saved in variable `result`
        */
        var result = await db.findOne(User, user, projection);
        if (result != null){
            res.render("profile", result,{active:'index'});
        }else{
            res.render("error");
        }
    },
    getProfile: async function (req, res) {

        // query where `idNum` is equal to URL parameter `idNum`
        var email = req.body.email;

        var user = {
            email:email
        };
        // fields to be returned
        var projection = 'email username description position myReservations';

        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            this function searches the collection `users`
            based on the value set in object `query`
            the third parameter is a string containing fields to be returned
            the fourth parameter is a callback function
            this called when the database returns a value
            saved in variable `result`
        */
        var result = await db.findOne(User, user, projection);
        if (result != null){
            res.render("profile", result,{active:'index'});
        }else{
            res.render("profile",{active:'index'});
            //res.render("error");
        }
    }
}


/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = profileController;
