import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagAdventure from "../../assets/1.jpg"
import dndSymbol from "../../assets/symbol.png"

export function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="w-full h-screen flex items-center justify-center p-7 bg-blue-100">
            <div className="grid text-center gap-2 lg:grid-cols-2 lg:gap-20">

                <div className="w-full flex justify-center items-center max-w-7xl">

                    <img src={dndSymbol}
                        className="absolute scale-50 h-96 z-0 -top-12 lg:top-40"
                        alt="D&D Symbol" />

                    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 z-10">
                        <input
                            className="border-2 w-72 h-10 p-2 rounded-lg"
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Text your user name."
                        />
                        <input
                            className="border-2 w-72 h-10 p-2 rounded-lg"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Text your password"
                        />
                        <button
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Send</button>
                    </form>
                </div>

                <div className="w-full flex flex-col items-center gap-2 md:gap-5 lg:gap-5">
                    <h2 className="text-4xl font-bold text-gray-700">D&D 5.0</h2>
                    <img
                        className="w-full rounded-xl max-w-7xl object-contain h-80"
                        src={imagAdventure} alt="" />
                    <p className="text-4xl font-semibold text-gray-700">One Shot Character Tools!</p>


                </div>
            </div>
        </div>
    );
}
