import { useState, useEffect } from "react";
import Login from "./Forms/Login";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            Navigate("/login");
        }
    }, []);

    return (
        <>
            <main className="w-full flex flex-col items-center justify-center pt-14">
                <Navbar />
                <div className="w-full max-w-6xl p-4">
                    <div>Heading here...</div>
                </div>
            </main>
        </>
    );
};

export default Homepage;
