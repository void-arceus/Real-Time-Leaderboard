import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { games } from "../constants/games";
import { gameConfig } from "../constants/RankingSystem";

const Homepage = () => {
    const [selectedGame, setSelectedGame] = useState("Chess");
    const [score, setScore] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/login");
        }
    }, []);

    function isCharNumber(char) {
        return /^\d$/.test(char);
    }

    function handleSubmitScore() {
        // check if score is valid
        if (!score) {
            alert("Score cannot be empty!");
            return;
        }
        for (let i = 0; i < score.length; i++) {
            if (!isCharNumber(score[i])) {
                alert("Enter valid score");
                return;
            }
        }
        setSelectedGame("Chess");
        setScore("");
    }

    return (
        <>
            <main className="h-screen w-full flex flex-col items-center justify-center">
                <Navbar />
                <div className="w-full max-w-6xl p-2 flex flex-col items-center justify-center gap-4">
                    <div className="w-full flex items-center justify-center">
                        <p className="text-md font-medium">
                            Select a game, and enter your current rating...
                        </p>
                    </div>
                    <div className="w-full max-w-75 flex flex-col flex-wrap items-center justify-center gap-3 transition-all duration-200 ease-in-out">
                        <div className="flex items-center gap-5 flex-wrap ">
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="selectGame"
                                    className="text-sm text-gray-700 font-medium"
                                >
                                    Select Game:
                                </label>
                                <select
                                    id="selectGame"
                                    value={selectedGame}
                                    onChange={(e) => {
                                        setSelectedGame(e.target.value);
                                    }}
                                    className="border-2 border-black w-fit p-2 rounded-lg cursor-pointer text-sm"
                                >
                                    {games.map((game, idx) => (
                                        <option key={idx} value={game}>
                                            {game}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-35 flex flex-col items-start gap-1">
                                <label
                                    htmlFor="gameScore"
                                    className="text-sm text-gray-700 font-medium"
                                >
                                    {gameConfig[selectedGame].label}
                                </label>
                                <input
                                    id="gameScore"
                                    value={score}
                                    onChange={(e) => {
                                        setScore(e.target.value);
                                    }}
                                    placeholder={
                                        gameConfig[selectedGame].placeholder
                                    }
                                    className="w-full border-2 border-gray-400 outline-0 p-1.5 rounded-lg focus:border-black transition-all ease-in-out duration-200"
                                />
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-start">
                            <button
                                onClick={() => {
                                    handleSubmitScore();
                                }}
                                className="px-3.5 py-1.5 bg-gray-900 rounded-lg hover:cursor-pointer hover:bg-gray-800 text-white/95 shadow-sm hover:shadow-lg text-sm font-medium"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Homepage;
