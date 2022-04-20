const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');
const auth = require('../auth');

router.post('/checkOut/:cartId', auth.verify, (req, res) => {
	let data = {
		userId : auth.decode(req.headers.authorization).id,
		isAdmin : auth.decode(req.headers.authorization).isAdmin,
		cartId : req.params.cartId,
		productId : req.body.productId,
		orderedByUser : req.body.orderedByUser,
		totalPrice : req.body.totalPrice,
		payment : req.body.payment

	}

	orderController.checkOutRecord(data).then(resultFromController => res.send(resultFromController))
})



module.exports = router;