const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product name is required"],
		unique: true
	},
	description: {
		type: String,
		required: [true, "Description is required"]
	},
	price: {
		type: Number,
		required: [true, "Price is required"]
	},
	stocks: {
		type: Number,
		required: [true, "Stocks is required"]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	}
})

module.exports = mongoose.model("Product", productSchema);

/*
Product

Name: String,
Description: String,
Price: Number
Stock: Number
isActive: Boolean
		  default: true
createOn: Date,
*/