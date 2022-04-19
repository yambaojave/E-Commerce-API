const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const auth = require('../auth')


// Add product
router.post('/', auth.verify, (req,res) => {
	const data = {
		product : req.body,
		isAdmin : auth.decode(req.headers.authorization).isAdmin
	}

	productController.addProduct(data).then(resultFromController => res.send(resultFromController))
})

// retreive all products
router.post('/all', auth.verify, (req,res) => {
	const data = auth.decode(req.headers.authorization)

	productController.getAllProducts(data).then(resultFromController => res.send(resultFromController))
})

// retrieval of active courses
router.get('/', (req, res) => {
	productController.getAllActive().then(resultFromController => res.send(resultFromController))
})


// update product
router.put('/:productId', auth.verify, (req, res) => {

	console.log(req.params)

	const data = {
		productId : req.params.productId,
		isAdmin : auth.decode(req.headers.authorization).isAdmin,
		updatedProduct : req.body
	}


	productController.updateProduct(data).then(resultFromController => res.send(resultFromController))
})




// To be Added Update Product, achive/active
router.put('/:productId/archive', auth.verify, (req, res) => {

	const data = {
		productId : req.params.productId,
		isAdmin: auth.decode(req.headers.authorization).isAdmin,
	}

	productController.archiveProduct(data).then(resultFromController=> res.send(resultFromController))

})

router.put('/:productId/activate', auth.verify, (req, res) => {

	const data = {
		productId : req.params.productId,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}

	productController.activateProduct(data).then(resultFromController=> res.send(resultFromController))

})


// Specific Product
router.get('/:productId', (req, res) => {
	productController.getProduct(req.params).then(resultFromController => res.send(resultFromController))
})


module.exports = router;
