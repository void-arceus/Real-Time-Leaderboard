const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.Model");

async function register(req, res) {
    try {
        const { username, email, password } = req.body;
        // check is email is already linked
        const isAlreadyUser = await User.findOne({ email: email });
        if (isAlreadyUser) {
            return res.status(409).json({
                status: false,
                message: "This email is already linked to other account.",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        return res.status(201).json({
            status: true,
            message: "User Created Successfully",
            data: newUser,
        });
    } catch (err) {
        console.error(err.message);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || email.trim() === "") {
            return res
                .status(401)
                .json({ status: false, message: "Missing Credentials" });
        }

        // directly check if password === hashedpassword
        const user = await User.findOne({ email: email });
        if (!user)
            return res
                .status(404)
                .json({ status: false, message: "Invalid Email Address" });

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res
                .status(401)
                .json({ status: false, message: "Incorrect Password" });
        }

        // create token and set cookie if everything is correct - later
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.cookie("token", token);

        return res
            .status(200)
            .json({ status: true, message: "Logged In Successfully" });
    } catch (err) {
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { register, login };
