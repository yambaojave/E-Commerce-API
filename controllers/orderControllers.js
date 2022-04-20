const Order = require('../models/Order');
const auth = require('../auth');
const Cart = require('../models/Cart');


module.exports.checkOutRecord = async (data) => {
	console.log(data)

	if(data.isAdmin === true) {
		return `Only regular user can check out`
	}
	else {
		let newOrder = new Order({
			userId: data.userId,
			productId: data.productId,
			orderedByUser: data.orderedByUser,
			totalPrice: data.totalPrice,
			payment: data.payment
		})

		console.log(`This is the new ${newOrder}`);

		return newOrder.save().then((order, err) => {
			if(err){
				return false
			}
			else{
				return true
			}
		})
	}
}

module.exports.getHistory = async (data) => {
	console.log(data)

	if(data.isAdmin === true) {
		return `Regular use only`;
	}
	else {
		return Order.find({userId: data.userId}).then(result => {
			return result
		})
	}
}