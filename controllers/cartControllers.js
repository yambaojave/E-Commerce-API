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
				return true;
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

module.exports.deleteCartItem = (data) => {
	console.log(data);

	if(data.isAdmin === false) {
		return Cart.deleteOne(data.id).then(result => {
			return true
		})
	}
	else {
		return `Admin not authorized`
	}
}

module.exports.updateQuantity = (data) => {
	console.log(data);

	if(data.isAdmin === false) {
		return Cart.findById(data.cartId).then(result => {
			console.log(result);
			console.log(data.updatedQuantity.totalOrder);


			result.totalOrder = data.updatedQuantity.totalOrder

			console.log(result)
			return result.save().then((updatedProduct, err) => {
				if(err){
					return false
				}
				else{
					return true
				}
			})
		})
	}
	else {
		return `Admin not authorized`
	}
}