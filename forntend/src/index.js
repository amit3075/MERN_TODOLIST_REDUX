
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';


import Todos from './components/Todos';
import LoginPage from './components/LoginPage';
import RegisterForm from './components/RegisterForm';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/"  element={<LoginPage/>} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/todos" element={<Todos />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* Add other routes if needed */}
        </Routes>
      </Router>
    </Provider>
  );
};

root.render(<App />);

