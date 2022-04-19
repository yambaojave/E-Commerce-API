// Dependencies and Modules
	const express = require('express');
	const mongoose = require('mongoose');
	const cors = require('cors');
	const userRoutes = require('./routes/userRoutes');
	const cartRoutes = require('./routes/cartRoutes');
	const orderRoutes = require('./routes/orderRoutes');
	const productRoutes = require('./routes/productRoutes');


// Server Setup
	const app = express();
	// process.env.PORT heroku 
	const port = process.env.PORT || 4000;
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(cors());

// DataBase Connect

	mongoose.connect("mongodb+srv://admin_yambao:admin169@batch-169.m3rgy.mongodb.net/cap3-ecommerce?retryWrites=true&w=majority", 
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	);

	let db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Connection Error'));
	db.once('open', () => console.log("Successfully connected to MongoDB"));

// Server Routes
	app.use('/users', userRoutes);
	app.use('/cart', cartRoutes);
	// app.use('/orders', orderRoutes);
	app.use('/products', productRoutes);

// Server Response
	app.listen(port, () => console.log(`Server is running at port ${port}`))