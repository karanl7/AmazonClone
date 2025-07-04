import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    };

    if (email === "test@example.com" && password === "password") {
        navigate("/"); 
        } else {
        setError("Invalid credentials");
        }
    };
    

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-[350px] space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login to your account</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <div className="flex flex-col space-y-1">
          <label>Email</label>
          <input
            type="email"
            className="border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label>Password</label>
          <input
            type="password"
            className="border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
};

export default LoginPage;