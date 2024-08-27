import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router
import axios from "axios";

const LoginPage = () => {
  const router = useRouter(); // Next.js router hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Error state

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.vincentwitzmann.com/api/login', { username, password }); // Use relative URL
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token); // Store token
        router.push('/private'); // Navigate using Next.js router
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(`Server error: ${error.response.status}`);
        } else {
          setError('Network error. Please try again later.');
        }
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => router.back()} // Use router.back() for Back navigation
            >
              Back
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error messages */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
