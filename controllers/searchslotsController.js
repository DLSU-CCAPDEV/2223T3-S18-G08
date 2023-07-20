
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
    getSlots: function (req, res) {
        res.render('searchslots');
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
        var position = req.body.accounttype;
        var username = req.body.username;
        var password = req.body.password;
        var confirmpassword = req.body.confirmpassword;
        var user = {
            email:email,
            username: username,
            password: password,
            description: 'This is your description',
            position: position,
            myReservations:null
        };
        var usercheck = {
            email:email
        }
        var check = await db.findOne(User,usercheck,'email');
        if(await check == null){
            if(password == confirmpassword){
                var response = await db.insertOne(User,user);
                if(response){
                    res.render('index');
                }else{
                    res.render('error');
                }
            }else{
                res.render('error');
            }
        }else{
            console.log('repeat');
            res.render('error');
        }
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = searchslotsController;
