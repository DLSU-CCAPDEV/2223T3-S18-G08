
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

        var email = req.session.email;
        var viewing_email = req.body.viewing_email;

        var user = {
            email:email
        };
        var projection = 'email username description position myReservations';
        var find_user = {
            email: viewing_email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        var result = await db.findOne(User, find_user, projection);
        if (result != null){
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
            res.render("viewprofile", {active:'profile',email:email,data:result,position:position});
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    }
}
module.exports = viewprofileController;
