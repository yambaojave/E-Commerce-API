const User = require('../models/User');
const bcrypt = require('bcrypt');
const auth = require('../auth');


// Check if email already exists within the database
module.exports.checkEmailExists = (reqBody) => {

	return User.find({email: reqBody.email}).then(result => {
		console.log(result.length);

		if(result.length > 0){
			return true
		}
		else {
			return false
		}
	})
}

// Register a new user
module.exports.registerUser = (reqBody) => {

	let newUser = new User({
		firstName : reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
		mobileNo: reqBody.mobileNo,
		// address: [{
		// 	city: reqBody.address.city,
		// 	street: reqBody.address.street,
		// 	unit: reqBody.address.unit,
		// 	category: reqBody.address.address
		// }]
	})

	return newUser.save().then((user, err) => {

		if(err){
			return false
		}
		else {
			return true
		}
	})
}

// Login
module.exports.loginUser = (reqBody) => {

	return User.findOne({email: reqBody.email}).then(result => {
		if(result == null){
			return false;
		}
		else {
			// isPasswordCorrect will return true or false value
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password)

			if(isPasswordCorrect){
				return { access: auth.createAccessToken(result)}
			}
			else {
				return false
			}

		}
	})
}

module.exports.getProfile = (data) => {

	return User.findById(data.userId).then(result=> {
		result.password = '';

		return result;
	})
}