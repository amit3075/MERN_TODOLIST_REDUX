// import { useEffect } from 'react';

// import { deleteTodo, getAllTodos } from '../redux/actions/index';
// import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';

// import { useDispatch, useSelector } from 'react-redux';


// // component
// import Todo from './Todo';
// import Tabs from './Tabs';


// export const Todos = () => {

//     const dispatch = useDispatch();

//     const todos = useSelector(state => state.todos);
//     const currentTab = useSelector(state => state.currentTab);

//     useEffect(() => {
//         dispatch(getAllTodos());
//     }, [])

//     const getTodos = () => {
//         if (currentTab === ALL_TODOS) {
//             return todos;
//         } else if (currentTab === ACTIVE_TODOS) {
//             return todos.filter(todo => !todo.done)
//         } else if (currentTab === DONE_TODOS) {
//             return todos.filter(todo => todo.done)
//         }
//     }

//     const removeDoneTodos = () => {
//         todos.forEach(({ done, _id }) => {
//             if (done) {
//                 dispatch(deleteTodo(_id));
//             }
//         })
//     }

//     return (
//         <article>
//             <div>
//                 <Tabs currentTab={currentTab} />

//                 {
//                     todos.some(todo => todo.done) ? (
//                         <button
//                             onClick={removeDoneTodos}
//                             className="button clear"
//                         >Remove Done Todos</button>
//                     ) : null    
//                 }
//             </div>

//             <ul>
//                 {
//                     getTodos().map(todo => (
//                         <Todo 
//                             key={todo._id}
//                             todo={todo}
//                         />
//                     ))
//                 }
//             </ul>
//         </article>
//     )
// }

//export default Todos;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllTodos, deleteTodo } from '../redux/actions';
// import Todo from './Todo';
// import Tabs from './Tabs';

// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const currentTab = useSelector((state) => state.currentTab);

//   useEffect(() => {
//     dispatch(getAllTodos());
//   }, [dispatch]);

//   const getTodos = () => {
//     if (currentTab === 'All Todos') {
//       return todos;
//     } else if (currentTab === 'Active Todos') {
//       return todos.filter((todo) => !todo.done);
//     } else if (currentTab === 'Done Todos') {
//       return todos.filter((todo) => todo.done);
//     }
//     return []; // Return an empty array if no condition matches to avoid 'map' error.
//   };

//   const removeDoneTodos = () => {
//     todos.forEach(({ done, _id }) => {
//       if (done) {
//         dispatch(deleteTodo(_id));
//       }
//     });
//   };

//   return (
//     <article>
//       <div>
//         <Tabs currentTab={currentTab} />

//         {todos.some((todo) => todo.done) ? (
//           <button onClick={removeDoneTodos} className="button clear">
//             Remove Done Todos
//           </button>
//         ) : null}
//       </div>

//       <ul>
//         {getTodos().map((todo) => (
//           <Todo key={todo._id} todo={todo} />
//         ))}
//       </ul>
//     </article>
//   );
// };

// export default Todos;
// import React , { useEffect }from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllTodos, deleteTodo } from '../redux/actions/index';
// import Todo from './Todo';
// import Tabs from './Tabs';
// import TodoForm from './TodoForm'; // Import the TodoForm component

// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const currentTab = useSelector((state) => state.currentTab);

//   useEffect(() => {
//     dispatch(getAllTodos());
//   }, [dispatch]);

//   const getTodos = () => {
//     if (currentTab === 'All Todos') {
//       return todos;
//     } else if (currentTab === 'Active Todos') {
//       return todos.filter((todo) => !todo.done);
//     } else if (currentTab === 'Done Todos') {
//       return todos.filter((todo) => todo.done);
//     }
//   };

//   const removeDoneTodos = () => {
//     todos.forEach(({ done, _id }) => {
//       if (done) {
//         dispatch(deleteTodo(_id));
//       }
//     });
//   };

//   return (
//     <article>
//       <div>
//         <TodoForm /> {/* Include the TodoForm component here */}
//         <Tabs currentTab={currentTab} />

//         {todos.some((todo) => todo.done) ? (
//           <button onClick={removeDoneTodos} className="button clear">
//             Remove Done Todos
//           </button>
//         ) : null}
//       </div>

//       <ul>
//         {getTodos().map((todo) => (
//           <Todo key={todo._id} todo={todo} />
//         ))}
//       </ul>
//     </article>
//   );
// };

// export default Todos;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllTodos, deleteTodo } from '../redux/actions';
// import Todo from './Todo';
// import Tabs from './Tabs';
// import TodoForm from './TodoForm';
// import Header from './Header';


// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const currentTab = useSelector((state) => state.currentTab);
 
//   useEffect(() => {
//     dispatch(getAllTodos());
//   }, [dispatch]);

//   const getTodos = () => {
//     if (!todos) return []; // Handle the case when todos is undefined
//     if (currentTab === 'All Todos') {
//         console.log(currentTab);
//       return todos;
//     } else if (currentTab === 'Active Todos') {
//       return todos.filter((todo) => !todo.done);
//     } else if (currentTab === 'Done Todos') {
//       return todos.filter((todo) => todo.done);
//     } else {
//       return []; // Handle the case when the currentTab is not recognized
//     }
  
//   };

//   const removeDoneTodos = () => {
//     if (!todos) return; // Ensure todos is not undefined
//     todos.forEach(({ done, _id }) => {
//       if (done) {
//         dispatch(deleteTodo(_id));
//       }
//     });
//   };

//   return (
//     <article>
//       <div>
//         <Header/>
//         <TodoForm/>
       
//         <Tabs currentTab={currentTab} />

//         {todos && todos.some((todo) => todo.done) ? (
//           <button onClick={removeDoneTodos} className="button clear">
//             Remove Done Todos
//           </button>
//         ) : null}
        
//       </div>

//       <ul>
        
//         {getTodos().map((todo) => (
//           <Todo key={todo._id} todo={todo} />
//         ))}
       
//       </ul>
//     </article>
//   );
// };

// export default Todos;
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, setFilter } from '../redux/actions/index';
// import Todo from './Todo';
// import TodoForm from './TodoForm';
// import Header from './Header';
// import '../App.css';


// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos); // Assuming your todos reducer stores the Todo items
//  const completedTodos = useSelector((state) => state.completedTodos);
//    const deletedTodos = useSelector((state) => state.deletedTodos);
//   const filter = useSelector((state) => state.filter);
//   useEffect(() => {
//     // Fetch the Todo items when the component mounts
//     dispatch(fetchTodos());
    
  
//   }, [dispatch]);

//   const handleFilter = (filter) => {
//     dispatch(setFilter(filter));
//   };
//   const getFilteredTodos = () => {
//     switch (filter) {
//       case 'active':
//         return todos.filter((todo) => !todo.done);
//       case 'done':
//         return todos.filter((todo) => todo.done);
//       default:
//         return todos;
//     };
//   if (!Array.isArray(todos)) {
//     // Render the LoadingMessage component instead of the loading message
//     return (console.log('hello world'))
   
//   }

//   return (
//     <>
//      <Header/>
//      <TodoForm/>
//      <div>
//         <button onClick={() => handleFilter('all')}>All Todos</button>
//         <button onClick={() => handleFilter('active')}>Active Todos</button>
//         <button onClick={() => handleFilter('done')}>Done Todos</button>
//       </div>
    
//      <div>
//       <h1>Todo List</h1>
//       {todos.map((todo) => (
//         <Todo key={todo.id} todo={todo} />
//       ))}
//         <ul>
//         {getFilteredTodos().map((todo) => (
//           <Todo key={todo.id} todo={todo} />
//         ))}
//       </ul>
//     </div>
//     </>

    
   
  
//   );
// }}


// export default Todos;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, setFilter } from '../redux/actions/index';
// import Todo from './Todo';
// import TodoForm from './TodoForm';
// import Header from './Header';
// import '../App.css';

// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos); // Assuming your todos reducer stores the Todo items
//   // const completedTodos = useSelector((state) => state.completedTodos);
//   // const deletedTodos = useSelector((state) => state.deletedTodos);
//   const filter = useSelector((state) => state.filter);
  
//   useEffect(() => {
//     // Fetch the Todo items when the component mounts
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   const handleFilter = (filter) => {
//     dispatch(setFilter(filter));
//   };

//   const getFilteredTodos = () => {
//     switch (filter) {
//       case 'active':
//         return todos.filter((todo) => !todo.done);
//       case 'done':
//         return todos.filter((todo) => todo.done);
//       default:
//         return todos;
//     }
//   };

//   // Move this 'if' statement outside the getFilteredTodos function
//   if (!Array.isArray(todos)) {
//     // Render the LoadingMessage component instead of the loading message
//     return console.log('hello world');
//   }

//   return (
//     <>
//       <Header />
//       <TodoForm />
//       <div>
//         <button onClick={() => handleFilter('all')}>All Todos</button>
//         <button onClick={() => handleFilter('active')}>Active Todos</button>
//         <button onClick={() => handleFilter('done')}>Done Todos</button>
//       </div>

//       <div>
//         <h1>Todo List</h1>
//         {todos.map((todo) => (
//           <Todo key={todo.id} todo={todo} />
//         ))}
//         <ul>
//           {getFilteredTodos().map((todo) => (
//             <Todo key={todo.id} todo={todo} />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Todos;
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, setFilter, addNewTodo } from '../redux/actions/index';
// import Todo from './Todo';
// import TodoForm from './TodoForm';
// import Header from './Header';
// import '../App.css';

// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos); // Assuming your todos reducer stores the Todo items
//   const loading = useSelector((state) => state.loading); // Get the loading state from the Redux store

//   const filter = useSelector((state) => state.filter);

//   useEffect(() => {
//     // Fetch the Todo items when the component mounts
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   const handleFilter = (filter) => {
//     dispatch(setFilter(filter));
//   };
//   const handleAddNewTodo = (data) => {
//     // Dispatch the addNewTodo action with the new todo data
//     dispatch(addNewTodo(data));
//   };


//   const getFilteredTodos = () => {
//     if (!todos) return [];
//     switch (filter) {
//       case 'active':
//         const activeTodos = todos.filter((todo) => !todo.done);
//         console.log('Active Todos:', activeTodos);
//         return activeTodos;
//       case 'done':
//         const doneTodos = todos.filter((todo) => todo.done);
//         console.log('Done Todos:', doneTodos);
//         return doneTodos;
//       default:
//         return todos || [];
//     }
//   };
//   const allTodosCount = todos.length;
  
//   // Handle the loading state
//   if (loading) {
//     return <div>Loading...</div>; // You can show a loading spinner or any other loading UI here
//   }

//   return (
//     <>
//       <Header />
//       <TodoForm onAddNewTodo={handleAddNewTodo} />
//       <div>
//         <button onClick={() => handleFilter('all')}>All Todos({allTodosCount})</button>
//         <button onClick={() => handleFilter('active')}>Active Todos</button>
//         <button onClick={() => handleFilter('done')}>Done Todos</button>
//       </div>

//       <div>
//         <h1>Todo List</h1>
//         {/* Ensure getFilteredTodos() always returns an array before using map */}
//         {Array.isArray(getFilteredTodos()) ? (
//           getFilteredTodos().map((todo) => <Todo key={todo.id} todo={todo} />)
//         ) : (
//           <div>No todos to display.</div>
//         )}
//       </div>
//     </>
//   );
// };



// export default Todos;
// TodosComponent.js

// import React from 'react';
// import { connect } from 'react-redux';

// const TodosComponent = ({ todos, completedTodos, deletedTodos }) => {
//   return (
//     <div>
//       <h2>Todos:</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>{todo.text}</li>
//         ))}
//       </ul>

//       <h2>Completed Todos:</h2>
//       <ul>
//         {completedTodos.map((todo) => (
//           <li key={todo._id}>{todo.text}</li>
//         ))}
//       </ul>

//       <h2>Deleted Todos:</h2>
//       <ul>
//         {deletedTodos.map((todo) => (
//           <li key={todo._id}>{todo.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   todos: state.todos.todos, // Accessing the todos state from the todosReducer
//   completedTodos: state.todos.completedTodos, // Accessing the completedTodos state from the todosReducer
//   deletedTodos: state.todos.deletedTodos, // Accessing the deletedTodos state from the todosReducer
// });

// export default connect(mapStateToProps)(TodosComponent);
// components/TodosComponent.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from '../redux/actions/index';
// import Todo from './Todo';
// import TodoForm from './TodoForm';
// import Header from './Header';




// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos); // Accessing the todos state from the todosReducer
//   const completedTodos = useSelector((state) => state.todos.completedTodos); // Accessing the completedTodos state from the todosReducer
//   const deletedTodos = useSelector((state) => state.todos.deletedTodos); // Accessing the deletedTodos state from the todosReducer

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   if (!todos) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//     <Header/>
//     <TodoForm/>
//     <Todo/>
//     {/* <div>
//       <h2>Todos:</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>{todo.data}</li>
//         ))}
//       </ul>

//       <h2>Completed Todos:</h2>
//       <ul>
//         {completedTodos.map((todo) => (
//           <li key={todo._id}>{todo.data}</li>
//         ))}
//       </ul>

//       <h2>Deleted Todos:</h2>
//       <ul>
//         {deletedTodos.map((todo) => (
//           <li key={todo._id}>{todo.data}</li>
//         ))}
//       </ul>
//     </div> */}
//     <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
//   <div>
//     <h2>Todos:</h2>
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo._id}>{todo.data}</li>
//       ))}
//     </ul>
//   </div>

//   <div>
//     <h2>Completed Todos:</h2>
//     <ul>
//       {completedTodos.map((todo) => (
//         <li key={todo._id}>{todo.data}</li>
//       ))}
//     </ul>
//   </div>

//   <div>
//     <h2>Deleted Todos:</h2>
//     <ul>
//       {deletedTodos.map((todo) => (
//         <li key={todo._id}>{todo.data}</li>
//       ))}
//     </ul>
//   </div>
// </div>

//     </>
//   );
// };

// export default Todos;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from '../redux/actions/index';
// import Todo from './Todo';
// import TodoForm from './TodoForm';
// import Header from './Header';
// import '../App.css';

// const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos); // Accessing the todos state from the todosReducer
//   const completedTodos = useSelector((state) => state.todos.completedTodos); // Accessing the completedTodos state from the todosReducer
//   const deletedTodos = useSelector((state) => state.todos.deletedTodos); // Accessing the deletedTodos state from the todosReducer

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   if (!todos) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Header />
//       <TodoForm />
//       <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
//         <div>
//           <h2>Todos:</h2>
//           <ul>
//             {todos.map((todo) => (
//               <Todo key={todo._id} todo={todo} /> // Pass the todo as a prop to the Todo component
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2>Completed Todos:</h2>
//           <ul>
//             {completedTodos.map((todo) => (
//               <li key={todo._id}>{todo.data}</li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2>Deleted Todos:</h2>
//           <ul>
//             {deletedTodos.map((todo) => (
//               <li key={todo._id}>{todo.data}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Todos;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions/index';
import Todo from './Todo';
import CompletedTodo from './CompletedTodo';
import DeletedTodo from './DeletedTodo';
import TodoForm from './TodoForm';
import Header from './Header';
import '../App.css';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos); // Accessing the todos state from the todosReducer
  const completedTodos = useSelector((state) => state.todos.completedTodos); // Accessing the completedTodos state from the todosReducer
  const deletedTodos = useSelector((state) => state.todos.deletedTodos); // Accessing the deletedTodos state from the todosReducer

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (!todos) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <TodoForm />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <div>
          <h2>Todos:</h2>
          <ul>
            {todos.map((todo) => (
              <Todo key={todo._id} todo={todo} />
            ))}
          </ul>
        </div>

        <div>
          <h2>Completed Todos:</h2>
          <ul>
            {completedTodos.map((todo) => (
              <CompletedTodo key={todo._id} todo={todo} />
            ))}
          </ul>
        </div>

        <div>
          <h2>Deleted Todos:</h2>
          <ul>
            {deletedTodos.map((todo) => (
              <DeletedTodo key={todo._id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todos;
