// Auth.validator.js

function validateCredentials(username, email, password) {
    if (!username || username.trim() === "") {
        return { status: false, message: "User name is required" };
    }
    if (!email || email.trim() === "") {
        return { status: false, message: "Email is required" };
    }
    if (!password || password.trim() === "") {
        return { status: false, message: "Password is required" };
    }
    return { status: true };
}

module.exports = { validateCredentials };
