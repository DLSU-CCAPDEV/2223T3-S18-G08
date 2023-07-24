// import module `database` from `../models/db.js`
const db = require('./models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('./models/UserModel.js'); 
db.connect();

var UserSchema = {
    email: 'ethan_lester_l_chan@dlsu.edu.ph',
    username: 'Ethan',
    password: 'ELC1123',
    description: 'This is your description',
    position: 'student',
    myReservations: [
      {
        lab: 1,
        date: 0,
        time: 0,
        seat: 0,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 1,
        date: 0,
        time: 0,
        seat: 1,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 1,
        date: 0,
        time: 0,
        seat: 2,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 1,
        date: 0,
        time: 0,
        seat: 3,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 1,
        date: 0,
        time: 0,
        seat: 4,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      }
    ]
  }

var response = await db.insertOne(User, UserSchema);
if(response){
    console.log("added 1 doc");
}else{
    console.log("failed");
}

var UserSchema = {
    email: 'adriel_shanlley_teng@dlsu.edu.ph',
    username: 'Adriel',
    password: 'lolafobic',
    description: 'Hi',
    position: 'student',
    myReservations: [
      {
        lab: 0,
        date: 0,
        time: 0,
        seat: 0,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 0,
        seat: 1,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 0,
        seat: 2,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 0,
        seat: 3,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 0,
        seat: 4,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      }
    ]
  }

var response = await db.insertOne(User, UserSchema);
if(response) {
    console.log("added 1 doc");
} else{
    console.log("failed");
}

var UserSchema = {
    email: 'arren.antioquia@dlsu.edu.ph',
    username: 'arren',
    password: 'CCAPDEV_prof',
    description: 'This is your description',
    position: 'technician',
    myReservations: null
  }

var response = await db.insertOne(User, UserSchema);
if(response){
    console.log("added 1 doc");
}else{
    console.log("failed");
}

var UserSchema = {
    email: 'andre_giancarlo_lu@dlsu.edu.ph',
    username: 'Andre',
    password: 'AGL',
    description: 'This is your description',
    position: 'student',
    myReservations: [
      {
        lab: 0,
        date: 1,
        time: 0,
        seat: 0,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 1,
        time: 0,
        seat: 1,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 1,
        time: 0,
        seat: 2,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 1,
        time: 0,
        seat: 3,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 1,
        time: 0,
        seat: 4,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      }
    ]
  }

var response = await db.insertOne(User, UserSchema);
if(response){
    console.log("added 1 doc");
}else{
    console.log("failed");
}

var UserSchema = {
    email: 'adriel_donato@dlsu.edu.ph',
    username: 'AJ',
    password: 'AJ123',
    description: 'This is your description',
    position: 'student',
    myReservations: [
      {
        lab: 0,
        date: 0,
        time: 2,
        seat: 0,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 2,
        seat: 1,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 2,
        seat: 2,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 2,
        seat: 3,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      },
      {
        lab: 0,
        date: 0,
        time: 2,
        seat: 4,
        id: 1,
        month: 6,
        day: 24,
        year: 2023,
        created: 'Mon Jul 24 2023 16:57:57 GMT+0800 (Taipei Standard Time)'
      }
    ]
  }

var response = await db.insertOne(User, UserSchema);
if(response){
    console.log("added 1 doc");
}else{
    console.log("failed");
}