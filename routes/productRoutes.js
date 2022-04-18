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
router.get('/all', auth.verify, (req,res) => {
	const data = auth.decode(req.headers.authorization)

	productController.getAllProducts(data).then(resultFromController => res.send(resultFromController))
})

// retrieval of active courses
router.get('/', (req, res) => {
	productController.getAllActive().then(resultFromController => res.send(resultFromController))
})

// To be Added Update Product, achive/active


module.exports = router;
