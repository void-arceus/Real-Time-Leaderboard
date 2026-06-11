import { useState, useEffect } from "react";
import { games } from "../constants/games";
import { gameConfig } from "../constants/RankingSystem";
import { leaderBoardData } from "../constants/DummyRanking";

const Leaderboard = () => {
    const [selectedGame, setSelectedGame] = useState("Chess");
    const [gameData, setGameData] = useState(leaderBoardData[selectedGame]);
    useEffect(() => {
        setGameData(leaderBoardData[selectedGame]);
    }, [selectedGame]);

    return (
        <main className="w-full flex items-center justify-center p-4">
            <div className="w-full max-w-6xl flex flex-col items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Real Time Leaderboard
                </h1>
                {/* Leaderboard*/}
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="selectGame"
                        className="text-sm text-gray-700 font-medium"
                    >
                        Select Game:
                    </label>
                    <select
                        id="selectGame"
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                        className="border-2 border-gray-400 p-1.5 rounded-lg hover:border-black cursor-pointer"
                    >
                        {games.map((game, idx) => {
                            return (
                                <option key={idx} value={game}>
                                    {game}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="w-full max-w-2xl overflow-x-auto rounded-xl shadow-lg border border-gray-200">
                    <table className="w-full table-fixed border-collapse border rounded-xl">
                        <thead className="bg-gray-900 text-white/95 text-md font-semibold">
                            <tr className="border-b border-gray-400">
                                <th className="sm:w-30 w-15 min-w-auto px-4 py-3 text-left">
                                    Rank
                                </th>
                                <th className="sm:w-full w-fit px-4 py-3 text-left">
                                    Username
                                </th>
                                <th className="w-fit sm:w-40 px-4 py-3 text-left">
                                    {gameConfig[selectedGame].label}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameData.map((data, idx) => {
                                return (
                                    <tr
                                        key={idx}
                                        className="border-b border-gray-100 hover:bg-gray-200 transition-colors duration-100 ease-in-out"
                                    >
                                        <td className="px-4 py-2">{idx + 1}</td>
                                        <td className="px-4 py-2">
                                            {data.player}
                                        </td>
                                        <td className="px-4 py-2">
                                            {data.score}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default Leaderboard;
