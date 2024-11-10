const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Google auth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home');
  }
);

// Logout route
router.get('/logout', (req, res) => {
  // Clear the user's session
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destruction error:', err);
      return res.redirect('/home');
    }
    // Clear the login session
    req.logout(() => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  });
});

// Signup route
router.post('/signup', async (req, res) => {
    try {
        console.log('Signup request body:', req.body);
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            console.log('Missing fields:', { name, email, password });
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Split full name into first name and last name
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = await User.create({
            displayName: name,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            authType: 'email',
            image: '/images/user.png' // Default image
        });

        console.log('User created successfully:', newUser);

        // Log the user in
        req.login(newUser, (err) => {
            if (err) {
                console.error('Login error:', err);
                return res.status(500).json({ message: 'Error logging in after signup' });
            }
            console.log('User logged in successfully');
            res.status(200).json({ message: 'Signup successful', redirectUrl: '/home' });
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Signin route
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Verify password using bcrypt directly
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Log the user in
        req.login(user, (err) => {
            if (err) {
                console.error('Login error:', err);
                return res.status(500).json({ message: 'Error logging in' });
            }
            return res.status(200).json({ message: 'Login successful' });
        });

    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Error signing in' });
    }
});

module.exports = router;
