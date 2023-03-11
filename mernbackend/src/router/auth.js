const express = require('express');
const Register = require('../models/register');
const Products = require('../models/Products');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

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
  try {
    let token;
    const { phone, pswd } = req.body;
    if (!phone || !pswd) {
      return res.status(400).json({ error: "Plz filled the field Loginnnn" });
    }
    const userLogin = await Register.findOne({ phone: phone });

    if (userLogin) {

      const isMatch = await bcrypt.compare(pswd, userLogin.pswd);

      token = await userLogin.generateAuthToken();
      console.log(token);


      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589209999),
        htttpOnly: true,
      });


      if (!isMatch) {
        res.json({ error: "use error" });
      } else {

        res.json({ message: "use signin successfully" });
      }
    } else {
      return res.status(400).json({ error: "-----Login INVALID-----" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/profile", authenticate, (req, res) => {
  res.send(req.rootUser);
});


router.get("/paymentdetails", authenticate, (req, res) => {
  res.send(req.rootUser);
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",req.rootUser);
});

router.post('/contact', authenticate, async (req, res) => {
  // let userMessage;
  try {
    const { fname, email, phone, message } = req.body;

    if (!fname || !email || !phone || !message) {
      console.log("ERROR: Contact")
      return res.json({ error: "Plz filled the field Contact us property" });
    }

    const userContact = await Register.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(fname, email, phone, message);
      res.status(201).json({ message: "user contact successfully" });
    }

  } catch (error) {
    console.log(error);
  }
});


router.post('/goal', authenticate, async (req, res) => {

  try {
    const { title, price, price75, monthlyprice, duration, imgURL } = req.body;
    const userGoal = await Register.findOne({ _id: req.userID });
    // console.log("*******************", userGoal);

    if (userGoal) {
      const usersettedGoal = await userGoal.addGoal(title, price, price75, monthlyprice, duration, imgURL);
      res.status(201).json({ message: "user goal successfully added to mongodb" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  console.log("Heloo logout ***********");
  // res.cookie.remove('jwtoken',{ path: '/login' })
  res.clearCookie('jwtoken', { path: '/login' });
  res.status(200).send('User Logout');
});


router.post('/payment', authenticate, async (req, res) => {

  try {
    console.log(req.body);
    const { payment_count, payment_id, monthlypricee, duration, date, id } = req.body;
    let f;
    let uu;
    const userPay = await Register.findOne({ _id: req.userID });
    let data;
    userPay.goals.map((item) => {
      const userG = Buffer.from(item._id);
      const i = Buffer.from(id);

      f = Buffer.compare(userG, i);
      if (!f) {
        uu = item;
        uu.payment.push(req.body);
        data = userG;
      }
    })
    // console.log("*******************", uu);
    // console.log(uu);
    // console.log(data);
    await userPay.save();
    res.status(201).json({ message: "user payment successfully added to mongodb" });

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;