import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import logo from '../assets/logo.png';
import './style.css';

import api from '../../services/api';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitForm(e) {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert('Make sure to fill in all fields');
      return;
    }

    const response = await api.login(email, password);
    if (!response) {
      alert('Error when logging in, please, check your credentials');
      return;
    }
    history.push('/dashboard');
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    const refresh_token = localStorage.getItem('refresh_token');
    if (token && refresh_token) {
      history.push('/dashboard');
    }
  }, []);
  return (
    <div className="login-container">
      <img
        src={logo}
        width="200"
        alt="kole's kreations"
        id="logo-home"
      />
      <div className="form-container">
        <h1>Sign in</h1>
        <form id="sign-in">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="submit-form"
            onClick={submitForm}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
