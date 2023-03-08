const express = require('express');
const jwt = require("jsonwebtoken");
const Register = require("../models/register");
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

const Authenticate = async (req, res,next) => {
    try {
        
        console.log('Cookies: ', req.headers.cookie);  
        let t =req.headers.cookie.split("=");
        console.log("t",t);

        console.log('token: ',t[1].trim());
        let token =t[1];

        const verifytoken = jwt.verify(token,"QWERTYUISDFGHJSADFGHJXCVBNWERFGHJWERTYUWERTYHJSDFERTYUGHJZXCVBNMASDFGHJK");
        const rootUser = await Register.findOne({_id:verifytoken._id,"tokens.token":token})
        if(!rootUser)
        {
            throw new Error('USer not found');
        }
        
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();

    } catch (error) {
        res.status(401).send("Unautorised : No token provided");
        console.log(error);
    }
}

module.exports = Authenticate;
