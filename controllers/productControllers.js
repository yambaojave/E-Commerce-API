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
				return true
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


module.exports.getProduct = (reqParams) => {
	return Product.findById(reqParams.productId).then(result => {
		return result
	})
}


module.exports.updateProduct = (data) => {
	console.log(data);

	return Product.findById(data.productId).then((result, err) => {
		console.log(result)

		if(data.isAdmin === true) {
			result.name = data.updatedProduct.name,
			result.description = data.updatedProduct.description,
			result.price = data.updatedProduct.price,
			result.stocks = data.updatedProduct.stocks

			console.log(result)
			return result.save().then((updatedProduct, err) => {
				if(err){
					return false
				}
				else{
					return true
				}
			})
		}
		else {
				return false
			}
	})
}

module.exports.archiveProduct = async (data) => {
	if(data.isAdmin === true) {
		return Product.findById(data.productId).then((result, err) => {
			result.isActive = false;

			return result.save().then((archivedProduct, err) => {
				if(err) {
					return false
				}
				else {
					return true;
				}
			})
		})
	}
	else {
		return false;
	}
}

module.exports.activateProduct = async (data) => {
	console.log(data)
	if(data.isAdmin === true) {
		
		return Product.findById(data.productId).then((result, err) => {
			result.isActive = true;

			return result.save().then((activateProduct, err) => {
				if(err) {
					return false
				}
				else {
					return true;
				}
			})
		})
	}
	else {
		return false;
	}
}