const { validateCredentials } = require("../validators/Auth.validator");

function validateData(req, res, next) {
    try {
        const { username, email, password} = req.body;  
        const result = validateCredentials(username, email, password); 
        if (result.status === false) {
            return res.status(401).json({status: false, message: result.message}); 
        }
        next();
    } catch (err) {
        console.error(err.message);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { validateData };
