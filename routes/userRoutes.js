const express = require("express");
const router = express.Router();

// import User Controllers
const userController = require('../controllers/userControllers')

// // import auth 
const auth = require('../auth');

// Routes

// Checking of Email
router.post("/checkEmail", (req, res) => {
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController))
});

// Registration
router.post('/register', (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController))
});

// Login
router.post('/login', (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController))
});

// Retrieve specific details
router.post('/details', auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization)

	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController))
})


// User add Address


// Update Non-admin details







module.exports = router;

