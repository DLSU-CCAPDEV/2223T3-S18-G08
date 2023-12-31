
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
    getProfile: async function (req, res) {

        var email = req.session.email;

        var user = {
            email:email
        };
        
        var projection = 'email username description position myReservations';

        var result = await db.findOne(User, user, projection);
        console.log(result);
        if (result != null){
            result.active = "profile";
            var currentid = new Array();
                var temp = new Array();
                if(result.myReservations!=null){
                    result.myReservations.forEach(e => {
                        if(!currentid.includes(e.id)){
                            currentid.push(e.id);
                            temp.push(e);
                        }
                    });
                }
                result.myReservations = temp;
            res.render("profile", result);
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    }
}


/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = profileController;
