
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

// import module `signupController` from `../controllers/signupController.js`
const loginController = require('../controllers/loginController.js');

const registerController = require('../controllers/registerController.js');

// import module `profileController` from `../controllers/profileController.js`
const profileController = require('../controllers/profileController.js');

const app = express();



/*
    execute function getIndex()
    defined in object `controller` in `../controllers/controller.js`
    when a client sends an HTTP GET request for `/`
*/
app.get('/', controller.getIndex);

/*
    execute function getSignUp()
    defined in object `signupController` in `../controllers/signupController.js`
    when a client sends an HTTP GET request for `/signup`
*/
app.get('/index', controller.redirectIndex);
app.get('/login', loginController.getLogin);

/*
    execute function postSignUp()
    defined in object `signupController` in `../controllers/signupController.js`
    when a client sends an HTTP POST request for `/signup`
*/
app.post('/login', loginController.postLogin);

app.get('/register', registerController.getRegister);


app.post('/profile', profileController.postProfile);

/*
    execute function postSignUp()
    defined in object `signupController` in `../controllers/signupController.js`
    when a client sends an HTTP POST request for `/signup`
*/
app.post('/register', registerController.postRegister);


/*
    execute function getProfile()
    defined in object `profileController` in `../controllers/profileController.js`
    when a client sends an HTTP GET request for `/profile/:idNum`
    where `idNum` is a parameter
*/

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;
