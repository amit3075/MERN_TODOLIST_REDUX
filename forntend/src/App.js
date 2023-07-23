// // import './App.css';

// // // components
// // import Header from './components/Header';
// // import TodoForm from './components/TodoForm';
// // import Todos from './components/Todos';
// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import store from './store';
// // import RegisterForm from './components/RegisterForm';

// // function App() {
// //   return (
// //     <Provider store={store}>
// //    <div>
      
// //       <RegisterForm />
// //       <Header />
// //       <TodoForm />
// //       <Todos />
// //     </div>
// //    </Provider>
// //   );
// // }
// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import { Provider } from 'react-redux';
// // import Header from './components/Header';
// // import TodoForm from './components/TodoForm';
// // import Todos from './components/Todos';
// // import RegisterForm from './components/RegisterForm';
// // import LoginForm from './components/LoginForm';
// // import store from './redux/store'; // Make sure to import your store here

// // const App = () => {
// //   // State to track user authentication status
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   // Use Redux state to determine if the user is authenticated
// //   const { token } = useSelector((state) => state.auth);

// //   // Check if the user has a valid token (authenticated)
// //   // Update the isAuthenticated state accordingly
// //   if (token && !isAuthenticated) {
// //     setIsAuthenticated(true);
// //   }

// //   return (
// //     <Provider store={store}>
// //       <div>
// //         {!isAuthenticated ? (
// //           // If not authenticated, render the register and login pages
// //           <>
// //             <RegisterForm />
// //             <LoginForm />
// //           </>
// //         ) : (
// //           // If authenticated, render the TodoList page
// //           <>
// //             <Header />
// //             <TodoForm />
// //             <Todos />
// //           </>
// //         )}
// //       </div>
// //     </Provider>
// //   );
// // };

// // export default App;
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import Todos from './components/Todos';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';

// const App = () => {
//   // State to track user authentication status
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Use Redux state to determine if the user is authenticated
//   const { token } = useSelector((state) => state.auth);

//   // Check if the user has a valid token (authenticated)
//   // Update the isAuthenticated state accordingly
//   if (token && !isAuthenticated) {
//     setIsAuthenticated(true);
//   }

//   return (
//     <div>
//       {!isAuthenticated ? (
//         // If not authenticated, render the register and login pages
//         <>
//           <RegisterForm />
//           <LoginForm /> {/* Use LoginForm component here */}
//         </>
//       ) : (
//         // If authenticated, render the TodoList page
//         <>
//           <Header />
//           <TodoForm />
//           <Todos />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// App.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Provider } from 'react-redux';
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import Todos from './components/Todos';
// import LoginForm from './components/LoginForm';
// import store from './redux/store'; // Import your Redux store

// const App = () => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => !!state.auth.token);

//   // Fetch all Todos when the component mounts (you can adjust this as needed)
//   useEffect(() => {
//     // Add your action here to fetch initial data if needed
//     // Example: dispatch(getAllTodos());
//   }, [dispatch]);

//   return (
//     <Provider store={store}>
//       <div>
//         {!isAuthenticated ? (
//           // If not authenticated, render the register and login pages
//             <LoginForm />
          
//         ) : (
//           // If authenticated, render the TodoList page
//           <>
//             <Header />
//             <TodoForm />
//             <Todos />
//           </>
//         )}
//       </div>
//     </Provider>
//   );
// };

// export default App;

// src/App.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import Todos from './components/Todos';
// import LoginForm from './components/LoginForm';

// const App = () => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => !!state.auth.token);

//   // Fetch all Todos when the component mounts (you can adjust this as needed)
//   useEffect(() => {
//     // Add your action here to fetch initial data if needed
//     // Example: dispatch(getAllTodos());
//   }, [dispatch]);

//   return (
//     <div>
//       {!isAuthenticated ? (
//         // If not authenticated, render the LoginForm
//         <LoginForm />
//       ) : (
//         // If authenticated, render the TodoList page
//         <>
//           <Header />
//           <TodoForm />
//           <Todos />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
// App.jsx

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Provider } from 'react-redux';
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import LoginForm from './components/LoginForm';
// import TodoList from './components/TodoList'; // Import the TodoList component
// import store from './redux/store'; // Import your Redux store

// const App = () => {
//   const isAuthenticated = useSelector((state) => !!state.auth.token);

//   return (
//     <Provider store={store}>
//       <div>
//         {!isAuthenticated ? (
//           // If not authenticated, render the login form
//           <LoginForm />
//         ) : (
//           // If authenticated, render the TodoList page
//           <>
//             <Header />
//             <TodoForm />
//             <TodoList /> {/* Render the TodoList component */}
//           </>
//         )}
//       </div>
//     </Provider>
//   );
// };

// export default App;

///
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
// import Todo from './components/Todo';
import LoginForm from './components/LoginForm';
import store from './redux/store'; // Import your Redux store
// import TodoList from './components/TodoList';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  // Fetch all Todos when the component mounts (you can adjust this as needed)
  useEffect(() => {
    // Add your action here to fetch initial data if needed
    // Example: dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div>
        {!isAuthenticated ? (
          // If not authenticated, render the register and login pages
          <LoginForm />
        ) : (
          // If authenticated, render the TodoList page (Todos component)
         <Todos/>
        
         
        )}
      </div>
    </Provider>
  );
};

export default App;