// LeaderBoard.Controller.js

const LeaderBoard = require("../models/LeaderboardData.Model.js");

async function uploadScore(req, res) {
    const { game, score } = req.body;
    if (!game || game.trim() === "") {
        return res
            .status(400)
            .json({ status: false, message: "Invalid Game Name" });
    }
    if (!score) {
        return res
            .status(400)
            .json({ status: false, message: "Invalid Score" });
    }
    try {
        const result = await LeaderBoard.findOneAndUpdate(
            { userId: req.user._id, game: game.trim() },
            { score: Number(score) },
            { new: true, upsert: true, rawResult: true },
        );
        const isNewDoc = !result.lastErrorObject.updatedExisting;
        return res.status(isNewDoc ? 201 : 200).json({
            status: true,
            message: isNewDoc
                ? "Data uploaded successfully"
                : "Data updated successfully",
        });
    } catch (err) {
        console.error(err.message);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

async function getLeaderboardData(req, res) {
    try {
        const { gameName } = req.body;
        if (!gameName || gameName.trim() === "") {
            return res
                .status(400)
                .json({ status: false, message: "Game name is require" });
        }
        const data = await LeaderBoard.find({ game: gameName.trim() })
            .sort({
                score: -1,
            })
            .populate("userId", "username");
        return res.status(200).json({
            status: true,
            message: "Data fetched successfully",
            data: data,
        });
    } catch (err) {
        console.error(err.message);
        return res
            .status(500)
            .json({ status: false, message: "Internal Server Error" });
    }
}

module.exports = { uploadScore };
