const express = require('express');
const Register = require('../models/register');
const Products = require('../models/Products');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');

router.get("/", (req, res) => res.status(200).send("Home Page"));

// add product

router.post("/productsadd", (req, res) => {
  const productDetail = req.body;

  console.log("Product Detail >>>>", productDetail);

  Products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

router.get("/productsget", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post('/signup', async (req, res) => {

    const { fname, lname, dob, email, phone, aadharNumber, pyin, pswd, cpswd } = req.body;


    if (!fname || !lname || !dob || !email || !phone || !aadharNumber || !pyin || !pswd || !cpswd) {
        return res.status(422).json({ error: "Plz filled the field property" });
    }
    try {
        const userExist = await Register.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists!" });
        }
        const user = new Register({ fname, lname, dob, email, phone, aadharNumber, pyin, pswd, cpswd });
        const userRegister = await user.save();
        console.log("use registered successfully");
        console.log(userRegister);

        if (userRegister) {
            res.status(201).json({ message: "User registered successfully" });
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    // console.log(req.body);
    // res.json({message:"awesome"})
    try {
        const { phone, pswd } = req.body;
        if (!phone || !pswd) {
            return res.status(400).json({ error: "Plz filled the field Loginnnn" });
        }
        const userLogin = await Register.findOne({ phone: phone });

        if (userLogin) {

            const isMatch = await bcrypt.compare(pswd, userLogin.pswd);


            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                htttpOnly:true
            });
            if (!isMatch) {
                res.json({ error: "use error" });
            } else {

                res.json({ message: "use signin successfully" });
            }
        } else {
            return res.status(400).json({ error: "Login INVALID@@@@@@@@@" });
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;