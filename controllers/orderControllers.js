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