
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const modifytechController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */getModifyTech: async function (req, res) {
        var email = req.session.email;
        var user = {
            email: email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        res.render("labtechnicianmodify", {active:'studentreserve',email:email,display:'false',position:position});
    },
    postModifyTech: async function (req, res) {
        var email = req.body.email;
        var editing_email = req.body.find_email;
        var user = {
            email: email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        var projection = 'myReservations';
        var user = {
            email: editing_email
        };
        var result = await db.findOne(User, user, projection);
        if (result != null){
            result.active = "labtechnicianmodify";
            result.email = email;
            result.editing_email = editing_email;
            result.position = position;
            result.display = 'true';
            var temp = new Array();
            if(result.myReservations!=null){
                result.myReservations.forEach(e => {
                    if(e.id>currentid){
                        currentid = e.id;
                        temp.push(e);
                    }
                });
            }
            result.myReservations = temp;
            res.render("labtechnicianmodify", result);
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    }
}

module.exports = modifytechController;
