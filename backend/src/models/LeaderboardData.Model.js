const mongoose = require("mongoose");

const leaderBoardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref:"User" ,required: true},    
    game: {type: String, required: true}, 
    score: {type: Number, required: true}, 
}, {timestamps: true});

const LeaderBoard = mongoose.model("LeaderBoard", leaderBoardSchema);
module.exports = LeaderBoard; 


