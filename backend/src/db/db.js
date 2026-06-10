const mongoose = require("mongoose");

async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to DB successfully");
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { connectDB };
