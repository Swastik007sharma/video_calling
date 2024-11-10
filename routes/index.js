const router = require('express').Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const User = require("../models/User");

router.get('/', ensureGuest, (req, res) => {
  res.render('index')
});

router.get('/home', ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.render('home', { user });
  } catch (err) {
    console.error(err);
  }
});

// Keep only one route for '/lobby'
router.get('/lobby', ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.render('lobby', { user }); // Pass the user object to the lobby page
  } catch (err) {
    console.error(err);
  }
});

<<<<<<< HEAD
router.get('/javascript/room.html', ensureAuth, (req, res) => {
=======
router.get('/javascript/room.html', (req, res) => {
>>>>>>> f6719f33e84bd639b8273ebf8e379c0108a0df69
  res.render('room'); // Adjust the template name if needed
});

module.exports = router;
