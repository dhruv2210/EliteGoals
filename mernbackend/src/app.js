const dotenv=require('dotenv');
const express = require("express");
const path = require("path");
const app = express();

dotenv.config({path:'./config.env'});
//const hbs = require("hbs");

require("./db/conn");
app.use(express.json());
const Register = require("./models/register");


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