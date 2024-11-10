module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  },
	
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
<<<<<<< HEAD
      res.redirect('/home');
=======
      res.redirect('/log');
>>>>>>> f6719f33e84bd639b8273ebf8e379c0108a0df69
    }
  },
}