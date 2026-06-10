import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Homepage from "./components/Homepage";
import Leaderboard from "./components/Leaderboard";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
