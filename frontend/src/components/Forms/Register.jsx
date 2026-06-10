import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth.api";

const Register = () => {
    const navigate = useNavigate();

    async function handleFormSubmit(e) {
        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const dataObj = Object.fromEntries(formData.entries());
            console.log(dataObj);
            if (dataObj.password !== dataObj.confirmPassword) {
                throw new Error("Password shoud be same");
            }
            const res = await register(dataObj);
            if (res.status === 201) {
                navigate("/login");
            } else {
                // toaster message later
                alert("Something went wrong");
            }
        } catch (err) {
            console.error(err.message);
            return;
        }
    }

    return (
        <main className="h-screen w-full flex flex-col items-center justify-center p-6">
            <form
                onSubmit={handleFormSubmit}
                className="w-full max-w-lg border border-gray-200 flex flex-col items-center gap-4 p-4 rounded-xl shadow-lg box-border"
            >
                <h1 className="text-2xl font-semibold text-gray-700">
                    Register
                </h1>
                <div className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="username"
                        className="text-sm text-gray-500 font-semibold"
                    >
                        Username:
                    </label>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        name="username"
                        className="w-full border-2 border-gray-300 outline-0 p-3 rounded-lg text-sm text-gray-800 font-semibold focus:border-gray-800 transition-all ease-in-out duration-200"
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-sm text-gray-500 font-semibold"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        className="w-full border-2 border-gray-300 outline-0 p-3 rounded-lg text-sm text-gray-800 font-semibold focus:border-gray-800 transition-all ease-in-out duration-200"
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="password"
                        className="text-sm text-gray-500 font-semibold"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        name="password"
                        className="w-full border-2 border-gray-300 outline-0 p-3 rounded-lg text-sm text-gray-800 font-semibold focus:border-gray-800 transition-all ease-in-out duration-200"
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        htmlFor="confirmPassword"
                        className="text-sm text-gray-500 font-semibold"
                    >
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        placeholder="confirm-password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full border-2 border-gray-300 outline-0 p-3 rounded-lg text-sm text-gray-800 font-semibold focus:border-gray-800 transition-all ease-in-out duration-200"
                        required
                    />
                </div>
                <div className="w-full text-sm text-gray-800 font-medium">
                    Already have an Account ?
                    <Link
                        to="/login"
                        className="text-black font-semibold cursor-pointer hover:text-gray-700 hover:underline"
                    >
                        Login
                    </Link>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <button
                        type="submit"
                        className="bg-black p-2.5 text-md rounded-lg hover:cursor-pointer text-white/95 font-medium hover:bg-gray-900 shadow-md hover:shadow-lg"
                    >
                        Register
                    </button>
                    <button
                        type="button"
                        className="bg-gray-300 p-2.5 text-md rounded-lg hover:cursor-pointer text-black font-medium hover:bg-gray-200 shadow-md hover:shadow-lg"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Register;
