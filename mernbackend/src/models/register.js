const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const CustomerRegistrationSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true
    },
    pyin: {
        type: String,
        required: true
    },
    pswd: {
        type: String,
        required: true
    },
    cpswd: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }

        }
    ]
})

CustomerRegistrationSchema.pre('save', async function (next) {
    console.log("HI from inside");
    if (this.isModified('pswd')) {
        this.pswd = await bcrypt.hash(this.pswd, 12);
        this.cpswd = await bcrypt.hash(this.cpswd, 12);
    }
    next();
})

CustomerRegistrationSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, "QWERTYUISDFGHJSADFGHJXCVBNWERFGHJWERTYUWERTYHJSDFERTYUGHJZXCVBNMASDFGHJK");
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}


const Register = new mongoose.model("Register", CustomerRegistrationSchema);
module.exports = Register;