import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', address: '', password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('/signup', form);
      navigate('/login'); // 🔁 Redirect to login page
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required minLength={6} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
