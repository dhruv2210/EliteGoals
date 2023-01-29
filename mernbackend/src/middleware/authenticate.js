const jwt = require("jsonwebtoken");
const User = require("../middleware/authenticate");

const Authenticate = async (req, res) => {
    try {

    } catch (error) {
        res.status(401).send("Unautorised : No token provided");
        console.log(error);
    }
}

module.exports = Authenticate;
