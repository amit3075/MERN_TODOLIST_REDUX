// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log('Logging in with:', email, password);

//     const success = await dispatch(login(email, password));
//     if (success) {
//       console.log('Login successful');
//       navigate('/todos'); // Redirect to TodoList on successful login
//     } else {
//       console.log('Login failed');
//       // Handle login failure (e.g., show an error message)
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);

    const success = await dispatch(login(email, password));
    if (success) {
      console.log('Login successful');
      navigate('/todos'); // Redirect to TodoList on successful login
    } else {
      console.log('Login failed');
      // Handle login failure (e.g., show an error message)
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <Link to="/register">Register a new user</Link>
      </div>
    </div>
  );
};

export default LoginForm;
