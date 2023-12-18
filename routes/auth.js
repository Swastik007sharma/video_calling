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
router.get('/logout', (req, res, next) => {
  req.logout((error)=>{
    if(error){return next(error)}
    res.redirect('/')
  })
})

module.exports = router;