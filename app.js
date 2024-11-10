const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./conf/db')
const authRoutes = require('./routes/authRoutes');

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
app.use(express.json());
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      }
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Use Routes
app.use(require("./routes/index"))
app.use('/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT,console.log(`listening at ${PORT}`)) 