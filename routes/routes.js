const express = require('express');

const controller = require('../controllers/controller.js');
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');
const aboutController = require('../controllers/aboutController.js')
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
const logoutController = require('../controllers/logoutController.js');

const app = express();

app.get('/', controller.getIndex);

app.get('/index', controller.redirectIndex);
app.get('/login', loginController.getLogin);

app.get('/logout',logoutController.getLogout);

app.get('/about', aboutController.getAbout);

app.get('/profile', profileController.getProfile);

app.post('/viewprofile',viewprofileController.postViewProfile);

app.post('/editprofile',editprofileController.postgetEditProfile);
app.post('/saveprofile',editprofileController.postEditProfile);

app.post('/deleteprofile',deleteprofileController.postDeleteProfile);

app.post('/login', loginController.postLogin);

app.get('/register', registerController.getRegister);
app.post('/register', registerController.postRegister);
app.get('/getRegisterCheckEmail', registerController.getRegisterCheckEmail);

app.get('/searchslots',searchslotsController.getSlots);
app.get('/getdata',searchslotsController.getData);

app.get('/studentreserve',studentreserveController.getSlots);
app.post('/studentreserved',studentreserveController.postSlots);

app.post('/studenteditslot',studenteditslotController.postgetSlots);
app.post('/studenteditedslot',studenteditslotController.postSlots);

app.get('/searchuser',searchuserController.getSearch);
app.post('/searcheduser',searchuserController.postSearch);
app.get('/getSearchUserCheckEmail', searchuserController.getSearchUserCheckEmail);

app.get('/techmodify',modifytechController.getModifyTech);
app.post('/techmodifying',modifytechController.postModifyTech);
app.get('/getModifyTechSearchUserCheckEmail', modifytechController.getModifyTechSearchUserCheckEmail);

app.get('/techreserve',techreserveController.getSlots);
app.post('/techreserved',techreserveController.postSlots);
app.get('/getTechReserveSearchUserCheckEmail', techreserveController.getTechReserveSearchUserCheckEmail);

module.exports = app;
