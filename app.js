const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./conf/db')

connectDB()

const app = express();

// Passport config
require('./conf/passport')(passport);

// Mongo & Template Setup
const PORT = process.env.PORT || 3000;

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.set('view engine','ejs');

// Middleware & DB for Sessions Setup
app.use(express.urlencoded({extended:true}))
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Use Routes
app.use(require("./routes/index"))
app.use(require('./routes/auth'))

app.listen(PORT,console.log(`listening at ${PORT}`)) 