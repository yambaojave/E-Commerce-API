const Cart = require('../models/Cart');
const auth = require('../auth');
const Order = require('../models/Order');


module.exports.addToCart = async (data) => {
	console.log(data)
	if(data.isAdmin) {
		return 'Only regular user can add to cart'
	}
	else {
		let newCart = new Cart ({
			userId: data.userId,
			productId: data.productId,
			totalOrder: data.totalOrder,
			payment: data.payment
		})

		// console.log(newCart);

		return newCart.save().then((cart, error) => {
			if(error) {
				return false;
			}
			else {
				return `Cart added ${cart}`
			};
		});
	}		
}

module.exports.getCart = (data) => {
	console.log(data);
	if(data.isAdmin === false) {
		return Cart.find({userId: data.userId}).then(result => {
			return result
		})
	}
	else {
		return `Admin not authorized`
	}
}