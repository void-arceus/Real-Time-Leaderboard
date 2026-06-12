// Auth.middleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User.Model");

async function authUser(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res
                .status(401)
                .json({ status: false, message: "Unauthenticated" });
        }
        const isValidToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!isValidToken) {
            return res
                .status(401)
                .json({ status: false, message: "Unauthenticated" });
        }
        // get user from the database
        const user = await User.find({ _id: token.id });
        if (!user)
            return res
                .status(404)
                .json({ status: false, message: "User not found" });
        req.user = user;
        next();
    } catch (err) {
        console.error(err.message);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { authUser };
