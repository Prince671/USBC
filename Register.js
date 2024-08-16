import React, { useState } from 'react';
import AuthService from '../services/authService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(username, email, password);
      window.location.reload();
    } catch (error) {
      setMessage('Error registering');
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
