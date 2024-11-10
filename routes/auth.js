const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc        Auth with Google
// @route       GET /auth/google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }))

// @desc        Google auth callback
// @route       GET /auth/google/callback
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/index' }),
  (req, res, next) => {
    res.redirect('/home')
  }
)

// @desc        Layout use
// @route       /auth/logout
<<<<<<< HEAD
router.get('/auth/logout', (req, res) => {
  req.logout(function(err) {
    if (err) {
      console.error(err);
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
      res.redirect('/'); // Redirect to home page after logout
    });
  });
});
=======
router.get('/logout', (req, res, next) => {
  req.logout((error)=>{
    if(error){return next(error)}
    res.redirect('/')
  })
})
>>>>>>> f6719f33e84bd639b8273ebf8e379c0108a0df69

module.exports = router;