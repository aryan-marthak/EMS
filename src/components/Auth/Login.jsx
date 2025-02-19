import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password);

        setEmail("")
        setPassword("")
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <input
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                        className="border-2 outline-none bg-transparent font-medium text-lg  placeholder:text-gray-400 border-emerald-600 py-2 px-6 rounded-full"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                        className="border-2 outline-none bg-transparent font-medium text-lg  placeholder:text-gray-400 mt-3 border-emerald-600 py-2 px-6 rounded-full"
                        type="password"
                        placeholder="Enter password"
                    />
                    <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
