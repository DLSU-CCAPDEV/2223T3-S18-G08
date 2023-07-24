
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const studenteditslotController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    postgetSlots: async function (req, res) {
        var email = req.body.email;
        var editing_email = req.body.editing_email;
        var id =  Number(req.body.id);
        var user = {
            email: editing_email
        };
        var data = await db.findMany(User,{},'email username myReservations');
        var datas = await db.findOne(User,user,'email username myReservations');
        user.email = email
        var position = await db.findOne(User,user,'position');
        position = position.position;
        
        if(data !=null){
            var seats = new Array();
            datas.myReservations.forEach(e => {
                if(e.id==id){
                    seats.push(e);
                }
            });
            data = JSON.stringify(data);
            seats = JSON.stringify(seats);
            res.render('studenteditslot',{active:'studentreserve',email:email,editing_email:editing_email,position:position,data:data,id:id,seats:seats});
        }
        else{
            res.render('error',{error:'DB error'});
        }
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
        var email = req.body.email;

        var editing_email = req.body.editing_email;
        var id =  Number(req.body.id);
        var seat = JSON.parse(req.body.seat);
        var user = {
            email:editing_email
        };
        var lab,date,time;
        var reservations = new Array();
        var projection = 'email username description position myReservations';
        var old = await db.findOne(User, user, projection);
        if(old != null){
            if(old.myReservations != null){
                old.myReservations.forEach(e => {
                    if(e.id != id){
                        reservations.push(e);
                    }
                    else{
                        lab = e.lab;
                        date = e.date;
                        time = e.time;
                    }
                    
                });
            }
            var d = new Date();
            
            seat.forEach(e => {
                var reservation = {
                    lab:lab,
                    date:date,
                    time:time,
                    seat:e,
                    id:id,
                    month:d.getMonth(),
                    day:d.getDate(),
                    year:d.getFullYear(),
                    created:d.toString()
                    
                };
                if(!reservations.some(a=>a.seat===e)){
                    reservations.push(reservation);
                }
            });
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
                var currentid = 0;
                var temp = new Array();
                result.myReservations.forEach(e => {
                    if(e.id>currentid){
                        currentid++;
                        temp.push(e);
                    }
                });
                result.myReservations = temp;
                res.render("profile", result);
            }else{
                res.render('error',{error:'This user was not found.'});
            }
        }
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = studenteditslotController;
