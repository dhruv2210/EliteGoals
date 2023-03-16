// const dotenv=require('dotenv');
const express = require("express");
const path = require("path");
const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// dotenv.config({path:'./config.env'});
//const hbs = require("hbs");

require("./db/conn");
app.use(express.json());
// const Register = require("./models/register");



app.use(require('./router/auth'));

const port = 5000;


app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
});


