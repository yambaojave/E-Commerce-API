const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, "User Id is required"]
	},
	productId: {
		type: String,
		required: [true, "Product Id is required"]
	},
	totalOrder: {
		type: Number,
		required: [true, "Total Stock order is required"]
	},
	addToCartOn: {
		type: Date,
		default: new Date()
	},
	status: {
		type: String,
		default: 'pending'
	},
	payment: {
		type: String,
	}
	

})


module.exports = mongoose.model("Cart", cartSchema);


// Note: Payment will have a filled first before added to ORDER model
// Cart:
//  	User can delete selected cart_order by id

/*
Cart: 
userId: String
Cart: [
	{
		ProductId: String,
		totalOrder: Number,
		totalPrice: Number,
		orderedOn: Date,
		status: String,
		payment: String
	}
	ID: (objectID)
]
*/