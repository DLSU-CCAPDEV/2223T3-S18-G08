
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const editprofileController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    postgetEditProfile: function (req, res) {
        var email = req.body.email;
        var position = req.body.accounttype;
        var username = req.body.username;
        var description = req.body.description;
        res.render('editaccount',{active:'profile',email:email,position:position,username:username,description:description});
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postEditProfile: async function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using `req.body.fName`
        */
        var email = req.body.email;
        var position = req.body.accounttype;
        var username = req.body.username;
        var description = req.body.description;
        var user = {
            email:email
        };
        var change = {
            username: username,
            description: description,
            position: position
        };
        await db.updateOne(User,user,change);
        var response = await db.findOne(User,user,'email username description position myReservations');
        if (response != null){
            response.active = 'profile';
            res.render('profile',response);
        }else{
            res.render('error',{error:''});
        }
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = editprofileController;
