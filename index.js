
// import module `express`
const express = require('express');

// import module `hbs`
const hbs = require('hbs');

// import module `express-session`
const session = require('express-session');

// import module `mongoose`
const mongoose = require('mongoose');

// import module `connect-mongo`
const MongoStore = require('connect-mongo')(session);

// import module `routes` from `./routes/routes.js`
const routes = require('./routes/routes.js');

// import module `database` from `./model/db.js`
const db = require('./models/db.js');

const app = express();
const port = 3000;

// set `hbs` as view engine
app.set('view engine', 'hbs');

// sets `/views/partials` as folder containing partial hbs files
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
});

hbs.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 1; i <= n; ++i)
        accum += block.fn(i);
    return accum;
});

hbs.registerHelper('add1', function(v) {
    return Number(v)+1;
});

hbs.registerHelper('add20', function(v) {
    return Number(v)+20;
});

hbs.registerHelper('gettime', function(v) {
    switch(Number(v)){
        case 0:
            return "10:00AM-10:30AM";
        case 1:
            return "10:30AM-11:00AM";
        case 2:
            return "11:00AM-11:30AM";
        case 3:
            return "11:30AM-12:00AM";
        case 4:
            return "12:00AM-12:30PM";
        case 5:
            return "12:30PM-1:00PM";
        case 6:
            return "1:00PM-1:30PM";
        case 7:
            return "1:30PM-2:00PM";
        case 8:
            return "2:00PM-2:30PM";
        case 9:
            return "2:30PM-3:00PM";
        case 10:
            return "3:00PM-3:30PM";
        case 11:
            return "3:30PM-4:00PM";
    }
});
hbs.registerHelper('getdate', function(v) {
    var d = new Date();
    d.setDate(d.getDate() + v);
    return (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
});

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static('public'));

// connects to the database
db.connect();

// use `express-session`` middleware and set its options
// use `MongoStore` as server-side session storage
app.use(session({
    'secret': 'ccapdev-session',
    'resave': false,
    'saveUninitialized': false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// define the paths contained in `./routes/routes.js`
app.use('/', routes);

// if the route is not defined in the server, render `../views/error.hbs`
// always define this as the last middleware
app.use(function (req, res) {
    res.render('error',{error:'Root does not exist.'});
});

// binds the server to a specific port
app.listen(port, function () {
    console.log('app listening at port ' + port);
});
