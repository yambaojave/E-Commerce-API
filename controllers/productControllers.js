const Product = require('../models/Product');

module.exports.addProduct = async(data) => {
	console.log(data)

	if(data.isAdmin) {
		let newProduct = new Product({
			name : data.product.name,
			description: data.product.description,
			price: data.product.price,
			stocks: data.product.stocks
		});
	

		return newProduct.save().then((product, error) => {
			if(error){
				return false;
			}
			else{
				return `Product added ${product}`
			}
		})

	}
	else {
		return false;
	}
}

module.exports.getAllProducts = async(user) => {
	if(user.isAdmin === true){
		return Product.find({}).then(result => {
			return result
		})
	}
	else {
		return `${user.email} is not authorized`
	}
}

module.exports.getAllActive = () => {
	return Product.find({isActive : true}).then(result => {
		return result
	})
}