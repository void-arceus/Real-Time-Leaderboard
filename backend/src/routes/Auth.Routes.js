const express = require("express");
const AuthController = require("../controllers/Auth.Controller.js");
const AuthValidator = require("../validators/Auth.validator.js");
const validationMiddleware = require("../middlewares/Validator.middleware.js");

const router = express.Router();

router.post(
    "/register",
    validationMiddleware.validateData,
    AuthController.register,
);

router.post("/login", AuthController.login);

module.exports = router;
