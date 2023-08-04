
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
        var email = req.session.email;
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
            res.render("labtechnicianmodify", result);
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    },

    getModifyTechSearchUserCheckEmail: async function(req, res){
        var email = req.query.email;
        var result = await db.findOne(User, {email: email}, 'email');
        res.send(result);
    },
    postDeleteTech: async function (req, res) {
        var email = req.body.email;
        var editing_email = req.body.editing_email;
        var id =  Number(req.body.id);
        var user = {
            email:editing_email
        };
        var reservations = new Array();
        var projection = 'email username description position myReservations';
        var old = await db.findOne(User, user, projection);
        if(old != null){
            if(old.myReservations != null){
                old.myReservations.forEach(e => {
                    if(e.id != id){
                        reservations.push(e);
                    }
                });
            }
            var change = {
                myReservations:reservations
            };
            await db.updateOne(User,user,change);
            var user = {
                email:email
            };
            var result = await db.findOne(User, user, projection);
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
}

module.exports = modifytechController;
