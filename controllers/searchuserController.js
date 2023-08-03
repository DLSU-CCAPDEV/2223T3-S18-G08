
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const searchuserController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getSearch: async function (req, res) {
        var email = req.session.email;
        var user = {
            email: email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        res.render('searchusers',{active:'searchusers',email:email,position:position});
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postSearch: async function (req, res) {

        var email = req.session.email;
        var find_email = req.body.find_email;
        var user = {
            email: email
        };
        var find_user = {
            email: find_email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        var result = await db.findOne(User,find_user,'email');
        if(result!=null){
            result = result.email;
            res.render('searchusers',{active:'searchusers',email:email,position:position,viewing_email:result,display:'true'});
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = searchuserController;
