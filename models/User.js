const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name is required"]
	},
	lastName: {
		type: String,
		required: [true, "Last Name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Password is required"]
	},
	mobileNo: {
		type: String,
		required: [true, "Mobile Number is required"],
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	address: [{
		city: {
			type: String,
			required: [true, "City is required"]
		},
		street: {
			type: String,
			required: [true, "Street is required"]
		},
		unit: {
			type: String,
			required: [true, "Unit is required"]
		},
		category: {
			type: String,
			required: [true, "Category is required"]
		}
	}]

})

module.exports = mongoose.model("User", userSchema);

/*
User
firstName: String,
lastName: String,
Email: String(unique),
MobileNo: String
Address: [
		{
			City: String,
			Street: String,
			Unit: String,
			MobileNo: String,
			
			Note: Pick by user
			Home: boolean,	
			Office: boolean
		}
	]
wallet: number
createdOn: Date,
isAdmin: boolean
		 Default: false
*/