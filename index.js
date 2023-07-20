
// import module `express`
const express = require('express');

// import module `hbs`
const hbs = require('hbs');

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
            return "12:00AM-12:30AM";
        case 5:
            return "12:30AM-1:00AM";
        case 6:
            return "1:00AM-1:30AM";
        case 7:
            return "1:30AM-2:00AM";
        case 8:
            return "2:00AM-2:30AM";
        case 9:
            return "2:30AM-3:00AM";
        case 10:
            return "3:00AM-3:30AM";
        case 11:
            return "3:30AM-4:00AM";
    }
});

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static('public'));

// define the paths contained in `./routes/routes.js`
app.use('/', routes);

// if the route is not defined in the server, render `../views/error.hbs`
// always define this as the last middleware
app.use(function (req, res) {
    res.render('error');
});

// connects to the database
db.connect();

// binds the server to a specific port
app.listen(port, function () {
    console.log('app listening at port ' + port);
});
