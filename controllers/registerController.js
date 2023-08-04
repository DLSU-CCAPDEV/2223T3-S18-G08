
const bcrypt = require('bcrypt');
const saltRounds = 10;
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const registerController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getRegister: function (req, res) {
        res.render('register',{active:'register'});
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postRegister: async function (req, res) {

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
        var usercheck = {
            email:email
        }
        let index = email.indexOf("@");
        
        if ((email.substring(index, email.length) == "@dlsu.edu.ph")){
            var check = await db.findOne(User,usercheck,'email');
            if(await check == null){
                if(password == confirmpassword){
                    bcrypt.hash(password, saltRounds,async function(err, hash) {
                        var user = {
                            email:email,
                            username: username,
                            password: hash,
                            description: 'This is your description',
                            position: position,
                            myReservations:null
                        };
                        var response = await db.insertOne(User,user);
                    if(response){
                        res.render('index',{active:'index'});
                    }else{
                        res.render('error',{error:'Database error.'});
                    }
                    });
                    
                }else{
                    res.render('error',{error:'Password and confirm password do not match.'});
                }
            }else{
                res.render('error',{error:'This email is already registered.'});
            }
        }else{
            res.render('error',{error:'This email is not a dlsu email.'});
        }
    },

    getRegisterCheckEmail: async function(req, res){
        var email = req.query.email;
        var result = await db.findOne(User, {email: email}, 'email');
        res.send(result);
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = registerController;
