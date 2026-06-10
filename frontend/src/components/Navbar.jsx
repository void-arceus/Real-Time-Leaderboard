import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full fixed top-0 h-12 flex items-center justify-center z-100">
            <nav className="w-full h-full max-w-6xl border-b border-b-gray-300 flex items-center justify-between px-4">
                <div className="w-fit flex flex-col items-center justify-center gap-0 leading-2 hover:cursor-pointer">
                    <p className="text-sm font-semibold">Realtime</p>
                    <h2 className="text-md font-semibold">Leaderboard</h2>
                </div>
                <div className="flex items-center gap-6">
                    <Link
                        to="/leaderboard"
                        className="font-semibold text-sm text-black hover:text-gray-800 hover:underline"
                    >
                        Leaderboard
                    </Link>
                    <button className="px-4 py-2 bg-black hover:bg-gray-900 text-white/95 text-sm font-medium hover:cursor-pointer transition-all ease-in-out duration-200 rounded-xl shadow-sm hover:shadow-lg">
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
