
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const viewprofileController = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    postViewProfile: async function (req, res) {

        var email = req.body.email;
        var viewing_email = req.body.viewing_email;

        var user = {
            email:viewing_email
        };
        var projection = 'email username description position myReservations';

        var result = await db.findOne(User, user, projection);
        if (result != null){
            var currentid = 0;
                var temp = new Array();
                if(result.myReservations != null){
                    result.myReservations.forEach(e => {
                        if(e.id>currentid){
                            currentid = e.id;
                            temp.push(e);
                        }
                    });
                }
                result.myReservations = temp;
            res.render("viewprofile", {active:'profile',email:email,data:result,position:result.position});
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    }
}
module.exports = viewprofileController;
