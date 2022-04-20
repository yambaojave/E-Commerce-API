const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, "User Id is required"]
	},
	productId: {
		type: String,
		required: [true, "Product Id is required"]
	},
	orderedByUser: {
		type: Number,
		required: [true, "Total ordered stock is required"]
	},
	// stockOnHand: {
	// 	type: Number,
	// 	required: [true, "SOH by product is required"]
	// },
	payment: {
		type: String,
		required: [true, "Payment type is required"]
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	totalPrice: {
		type: Number
	}
	// status: {
	// 	type: String,
	// 	required: [true, "Status is required"]
	// }

})

module.exports = mongoose.model("Order", orderSchema)

/*
	Order:

	UserId: String,
	ProductId: String,
	OrderedByUser: Number, // ordered stock of user
	StockOnHand: Number, // remaining stock of the productId
	payment: String // data from user	
	createdOn: Date,
	Status: String	// comming from the cart of user

*/

// Check is cartId is still required for identifying the cart used 