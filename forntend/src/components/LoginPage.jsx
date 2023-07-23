import React from 'react';
import { Routes, Route} from 'react-router-dom'; // Make sure to use Link if you want to keep the import
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../App.css';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />

    
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default LoginPage;
