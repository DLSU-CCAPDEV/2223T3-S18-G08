
const bcrypt = require('bcrypt');
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const loginController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getLogin: function (req, res) {
        res.render('index',{active:'index'});
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postLogin: async function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using `req.body.fName`
        */
        var email = req.body.email;
        var password = req.body.password;
        req.session.email = email;

        var user = {
            email: email
        };
        var response = await db.findOne(User,user,'email username description position myReservations password');
        if (response != null){
            bcrypt.compare(password, response.password, function(err, equal) {
                if(equal) {
                    response.active = 'profile';
                var currentid = 0;
                var temp = new Array();
                if(response.myReservations != null){
                    response.myReservations.forEach(e => {
                        if(e.id>currentid){
                            currentid++;
                            temp.push(e);
                        }
                    });
                }
                response.myReservations = temp;
                res.render('profile',response);
                }
                else {
                    res.render('error',{error:'Wrong password.'});
                }
            });
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    }
}
module.exports = loginController;
