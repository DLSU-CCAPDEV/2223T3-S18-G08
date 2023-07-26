const express = require('express');

const controller = require('../controllers/controller.js');
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');
const profileController = require('../controllers/profileController.js');
const searchslotsController = require('../controllers/searchslotsController.js');
const studentreserveController = require('../controllers/studentreserveController.js');
const searchuserController = require('../controllers/searchuserController.js');
const studenteditslotController = require('../controllers/studenteditslotController.js');
const viewprofileController = require('../controllers/viewprofileController.js');
const editprofileController = require('../controllers/editprofileController.js');
const deleteprofileController = require('../controllers/deleteprofileController.js');
const modifytechController = require('../controllers/modifytechController.js');
const techreserveController = require('../controllers/techreserveController.js');

const app = express();

app.get('/', controller.getIndex);

app.get('/index', controller.redirectIndex);
app.get('/login', loginController.getLogin);

app.get('/profile', profileController.getProfile);

app.post('/viewprofile',viewprofileController.postViewProfile);

app.post('/editprofile',editprofileController.postgetEditProfile);
app.post('/saveprofile',editprofileController.postEditProfile);

app.post('/deleteprofile',deleteprofileController.postDeleteProfile);

app.post('/login', loginController.postLogin);

app.get('/register', registerController.getRegister);
app.post('/register', registerController.postRegister);

app.post('/searchslots',searchslotsController.postgetSlots);

app.post('/studentreserve',studentreserveController.postgetSlots);
app.post('/studentreserved',studentreserveController.postSlots);

app.post('/studenteditslot',studenteditslotController.postgetSlots);
app.post('/studenteditedslot',studenteditslotController.postSlots);

app.post('/searchuser',searchuserController.postgetSearch);
app.post('/searcheduser',searchuserController.postSearch);

app.post('/techmodify',modifytechController.postgetModifyTech);
app.post('/techmodifying',modifytechController.postModifyTech);


app.post('/techreserve',techreserveController.postgetSlots);
app.post('/techreserved',techreserveController.postSlots);

module.exports = app;
