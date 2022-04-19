const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartControllers');
const auth = require('../auth');

router.post('/addToCart/:productId', auth.verify, (req, res) => {
	let data = {
		userId : auth.decode(req.headers.authorization).id,
		isAdmin : auth.decode(req.headers.authorization).isAdmin,
		productId: req.params.productId,
		totalOrder: req.body.totalOrder,
		payment: req.body.payment
	}

	cartController.addToCart(data).then(resultFromController => res.send(resultFromController))
})

router.post('/', auth.verify, (req, res) => {

	let data = {
		userId : auth.decode(req.headers.authorization).id,
		isAdmin : auth.decode(req.headers.authorization).isAdmin
	}
	console.log(data)

	cartController.getCart(data).then(resultFromController => res.send(resultFromController))
})

module.exports = router;