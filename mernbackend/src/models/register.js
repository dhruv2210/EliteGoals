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
    goals:[
        {
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            price75: {
                type: Number,
                required: true
            },
            monthlyprice: {
                type: Number,
                required: true
            },
        }
    ],

    messages: [
        {
            fname: {
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
            message: {
                type: String,
                required: true
            }
        }
    ],
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
    // console.log("HI from inside");
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

CustomerRegistrationSchema.methods.addMessage = async function (fname, email, phone, message) {
    try {
        this.messages = this.messages.concat({ fname, email, phone, message });
       await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
    }
}

CustomerRegistrationSchema.methods.addGoal = async function (title, price, price75, monthlyprice) {
    try {
        console.log("inside---------------",monthlyprice);
        this.goals = this.goals.concat({title, price, price75, monthlyprice});
       await this.save();
        return this.goals;
    } catch (error) {
        console.log(error);
    }
}


const Register = new mongoose.model("Register", CustomerRegistrationSchema);
module.exports = Register;