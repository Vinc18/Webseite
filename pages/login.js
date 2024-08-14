import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      router.push('/dokumente');
    } else {
      alert('Ungültige Anmeldedaten');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Benutzername</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Passwort</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
