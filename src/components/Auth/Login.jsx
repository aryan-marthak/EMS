import React, { useState } from "react";
import { FaUser, FaLock } from 'react-icons/fa';

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setIsLoading(true);
        try {
            await handleLogin(email, password);
            setEmail("");
            setPassword("");
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.02]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-emerald-600 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Please sign in to continue</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-400" />
                        </div>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-gray-800"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                        </div>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-gray-800"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        disabled={isLoading}
                        className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-all
                            ${isLoading 
                                ? 'bg-emerald-400 cursor-not-allowed' 
                                : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg'
                            }`}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
