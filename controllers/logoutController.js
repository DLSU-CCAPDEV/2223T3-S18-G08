
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
    getLogout: function (req, res) {
        req.session.lastLogin = "";
        res.render('index',{active:'index'});
    }
}
module.exports = loginController;
