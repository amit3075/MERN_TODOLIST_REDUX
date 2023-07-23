import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Dispatch registerUser action with email and password
      await dispatch(registerUser({ email, password }));
      // Redirect to the login page after successful registration
      navigate('/');
    } catch (err) {
      setError('An error occurred during registration. Please try again later.');
      // You can also log the error or handle it in a different way
      console.error(err);
    }
  };

  return (
    <div className="register-form-container">
       {error && <p>{error}</p>}
    <form className="register-form" onSubmit={handleRegister}>
    <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      <button type="submit">Register</button>
    </form>
   
  </div>
  );
};

export default RegisterForm;
