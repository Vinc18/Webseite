import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from '../styles/LoginPage.module.css'; // Import als CSS-Modul

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.vincentwitzmann.com/api/login', { username, password });
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token);
        router.push('/private');
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
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label
              htmlFor="username"
              className={styles.label}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label
              htmlFor="password"
              className={styles.label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.btn} ${styles.btnLogin}`}
              type="submit"
            >
              Login
            </button>
            <button
              className={`${styles.btn} ${styles.btnBack}`}
              type="button"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
