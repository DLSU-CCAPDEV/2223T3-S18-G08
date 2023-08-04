
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const techreserveController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getSlots: async function (req, res) {
        var email = req.session.email;
        var data = await db.findMany(User,{},'email username myReservations');
        data = JSON.stringify(data);
        var user = {
            email: email
        };
        var position = await db.findOne(User,user,'position');
        position = position.position;
        res.render('labtechnicianreserve',{active:'labtechnicianreserve',email:email,position:position,data:data});
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
        var email = req.session.email;
        var student_email = req.body.student_email;
        var lab =  Number(req.body.lab);
        var date = Number(req.body.date);
        var time = Number(req.body.time);
        var seat = JSON.parse(req.body.seat);
        var anon = req.body.anon;
        var user = {
            email:student_email
        };
        var reservations = new Array();
        
        var projection = 'email username description position myReservations';
        var old = await db.findOne(User, user, projection);
        var id = 1;
        if(old != null){
            if(old.myReservations != null && old.myReservations.length != 0){
                old.myReservations.forEach(e => {
                    reservations.push(e);
                });
                id = old.myReservations[old.myReservations.length-1].id;
            }
            var d = new Date;
            
            seat.forEach(e => {
                var reservation = {
                    lab:lab,
                    date:date,
                    time:time,
                    seat:e,
                    id:id,
                    created:d.toString(),
                    anon:anon
                };
                if(!reservations.some(a=>(a.seat===e && a.lab===lab&&a.date === date && a.time === time))){
                    reservations.push(reservation);
                }
            });
            var change = {
                myReservations:reservations
            };
            await db.updateOne(User,user,change);
            user.email=email;
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
        }else{
            res.render('error',{error:'This user was not found.'});
        }
    },

    getTechReserveSearchUserCheckEmail: async function(req, res){
        var email = req.query.email;
        var result = await db.findOne(User, {email: email}, 'email');
        res.send(result);
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = techreserveController;
