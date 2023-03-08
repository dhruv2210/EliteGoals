const dotenv = require('dotenv');
const express = require("express");
const path = require("path");
// const app = express();

// ________________dev_______________________
const app = require('express')()
// const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const razorpay = new Razorpay({
	key_id: 'rzp_test_cMV1GfmpfhYe5T',
	key_secret: 'OCf0XPewnJgyDfNikiOlPSWJ'
})

app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'))
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {

	try {
		const { monthlypricee } = req.body
		const a=monthlypricee
		const amount= a
		console.log("////////", amount)
		// console.log("////////???????????????????????????????????????????????")

		const payment_capture = 1
		const currency = 'INR'

		const options = {
			amount: amount * 100,
			currency,
			receipt: shortid.generate(),
			payment_capture,
		}

		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
		})
		console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",new Date(Date.now()))
	} catch (error) {
		console.log(error)
	}
})

// ---------------Ayush---------------------------------------------------
dotenv.config({ path: './config.env' });
//const hbs = require("hbs");

require("./db/conn");
app.use(express.json());
const Register = require("./models/register");
const { time } = require('console');

// const middleware = (req, res, next) => {
//     console.log('Hello my middleware');
//     next();
// }

app.use(require('./router/auth'));

const port = 5000 || process.env.PORT;

// const static_path = path.join(__dirname, "../public");
// const template_path = path.join(__dirname, "../template/views");
// const partials_path = path.join(__dirname, "../template/partials");


// app.use(express.urlencoded({ extended: false }));

// app.use(express.static(static_path));

// app.set("view engine", "hbs");
// app.set("views", template_path);
// hbs.registerPartials(partials_path);

// app.get("/", (req, res) => {
//     res.send("req res app.get()");
//     // res.render("index");
// });

// app.get("/register", (req, res) => {
//     res.render("register");
// })





app.listen(port, () => {
	console.log(`server is running at port number ${port}`);
});



// {
//     "fname":"ayush",
//     "lname":"thakor" ,
//     "dob":"13-01-2003",
//     "email":"ayushthakor1313@gmail.com",
//     "phone":9687988645,
//     "aadharNumber":"9999-9999-9999-9999",
//     "pyin":"mobile",
//     "pswd":"aemyush"
// }
