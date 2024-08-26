import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter(); // useRouter for navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Error state

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password }); // Adjusted URL for Next.js API route
      if (response.data.success) {
        router.push('/private'); // Navigate on successful login
      } else {
        setError(response.data.error); // Set error message on failed login
      }
    } catch (error) {
      if (axios.isAxiosError && error.response) {
        setError(`Server error: ${error.response.status}`); // Error message for server errors
      } else {
        setError('Network error. Please try again later.'); // Error message for network errors
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
              onClick={() => router.back()} // Back navigation
            >
              Back
            </button>
          </div>
          <p className="text-red-500 mt-4">{error}</p> {/* Display error messages */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
