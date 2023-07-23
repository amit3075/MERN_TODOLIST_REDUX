// import { useState } from "react";

// import { toggleTodo, updateTodo } from "../redux/actions/index";
// import { deleteTodo } from "../redux/actions/index";

// import { useDispatch } from "react-redux";

// const Todo = ({ todo }) => {

//     const [editing, setEditing] = useState(false);
//     const [text, setText] = useState(todo?.data);

//     const dispatch = useDispatch();

//     const onFormSubmit = (e) => {
//         e.preventDefault();

//         setEditing(prevState => !prevState);

//         dispatch(updateTodo(todo._id, text))
//     }

//     return (
//         <li
//             className="task"
//             onClick={() => dispatch(toggleTodo(todo._id))}
//             style={{
//                 textDecoration: todo?.done ? 'line-through' : '',
//                 color: todo?.done ? '#bdc3c7' : '#34495e'
//             }}
//             data-testid="todo-test"
//         >
//             <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

//             <form
//                 style={{ display: editing ? 'inline' : 'none' }}
//                 onSubmit={onFormSubmit}
//             >
//                 <input
//                     type="text"
//                     value={text}
//                     className="edit-todo"
//                     onChange={(e) => setText(e.target.value)}
//                 />
//             </form>

//             <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//                 <i className="fas fa-trash" />
//             </span>
//             <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
//                 <i className="fas fa-pen" />
//             </span>
//         </li>
//     )
// }

// export default Todo;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, updateTodo } from '../redux/actions/index';
// import { deleteTodo } from '../redux/actions/index';

// const Todo = ({ todo }) => {
//   // Check if todo is undefined and return null
//   if (!todo) {
//     return null;
//   }

//   // Move the conditional checks outside of the React Hook calls
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(todo.data);

//   const dispatch = useDispatch();

//   const onFormSubmit = (e) => {
//     e.preventDefault();

//     setEditing((prevState) => !prevState);

//     dispatch(updateTodo(todo._id, text));
//   };

//   // Rest of the component code remains unchanged
//   return (
//     <li
//       className="task"
//       onClick={() => dispatch(toggleTodo(todo._id))}
//       style={{
//         textDecoration: todo.done ? 'line-through' : '',
//         color: todo.done ? '#bdc3c7' : '#34495e',
//       }}
//       data-testid="todo-test"
//     >
//       <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

//       <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="edit-todo"
//           onChange={(e) => setText(e.target.value)}
//         />
//       </form>

//       <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//         <i className="fas fa-trash" />
//       </span>
//       <span className="icon" onClick={() => setEditing((prevState) => !prevState)}>
//         <i className="fas fa-pen" />
//       </span>
//     </li>
//   );
// };

// export default Todo;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, updateTodo } from '../redux/actions/index';
// import { deleteTodo } from '../redux/actions/index';

// const Todo = ({ todo }) => {
//   const dispatch = useDispatch();
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(todo.data);

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     setEditing(false);
//     dispatch(updateTodo(todo._id, text));
//   };

//   return (
//     <li
//       className="task"
//       onClick={() => dispatch(toggleTodo(todo._id))}
//       style={{
//         textDecoration: todo.done ? 'line-through' : '',
//         color: todo.done ? '#bdc3c7' : '#34495e',
//       }}
//       data-testid="todo-test"
//     >
//       <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

//       <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="edit-todo"
//           onChange={(e) => setText(e.target.value)}
//         />
//       </form>

//       <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//         <i className="fas fa-trash" />
//       </span>
//       <span className="icon" onClick={() => setEditing(true)}>
//         <i className="fas fa-pen" />
//       </span>
//     </li>
//   );
// };

// export default Todo;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, updateTodo } from '../redux/actions/index';
// import { deleteTodo } from '../redux/actions/index';
// import '../App.css';

// const Todo = ({ todo }) => {
//   // Move the conditional check outside of the React Hook call
//   const isTodoDefined = !!todo;
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(isTodoDefined ? todo.data : '');

//   const dispatch = useDispatch();

//   const onFormSubmit = (e) => {
//     e.preventDefault();

//     setEditing((prevState) => !prevState);

//     dispatch(updateTodo(todo._id, text));
//   };

//   // Rest of the component code remains unchanged
//   return isTodoDefined ? (
//     <li
//       className="task"
//       onClick={() => dispatch(toggleTodo(todo._id))}
//       style={{
//         textDecoration: todo.done ? 'line-through' : '',
//         color: todo.done ? '#bdc3c7' : '#34495e',
//       }}
//       data-testid="todo-test"
//     >
//       <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

//       <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="edit-todo"
//           onChange={(e) => setText(e.target.value)}
//         />
//       </form>

//       <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//         <i className="fas fa-trash" />
//       </span>
//       <span className="icon" onClick={() => setEditing((prevState) => !prevState)}>
//         <i className="fas fa-pen" />
//       </span>
//     </li>
//   ) : null;
// };

// export default Todo;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, updateTodo } from '../redux/actions/index';
// import { deleteTodo } from '../redux/actions/index';
// import '../App.css';

// const Todo = ({ todo }) => {
//   const isTodoDefined = !!todo;
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(isTodoDefined ? todo.data : '');

//   const dispatch = useDispatch();

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     setEditing((prevState) => !prevState);
//     dispatch(updateTodo(todo._id, text));
//   };

//   return isTodoDefined ? (
//     <li
//       className={`task${todo.done ? ' completed' : ''}${!isTodoDefined ? ' deleted' : ''}`}
//       onClick={() => dispatch(toggleTodo(todo._id))}
//       style={{
//         textDecoration: todo.done ? 'line-through' : '',
//         color: todo.done ? '#bdc3c7' : '#34495e',
//       }}
//       data-testid="todo-test"
//     >
//       <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

//       <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="edit-todo"
//           onChange={(e) => setText(e.target.value)}
//         />
//       </form>

//       <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//         <i className="fas fa-trash" />
//       </span>
//       <span className="icon" onClick={() => setEditing((prevState) => !prevState)}>
//         <i className="fas fa-pen" />
//       </span>
//     </li>
//   ) : null;
// };

// export default Todo;
// components/Todo.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions/index';

// const Todo = ({ todo }) => {
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(todo ? todo.data : '');

//   const dispatch = useDispatch();

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     setEditing(false);
//     dispatch(updateTodo(todo._id, text));
//   };

//   return todo ? (
//     <li
//       className={`task${todo.done ? ' completed' : ''}${!todo ? ' deleted' : ''}`}
//       onClick={() => dispatch(toggleTodo(todo._id))}
//       style={{
//         textDecoration: todo.done ? 'line-through' : '',
//         color: todo.done ? '#bdc3c7' : '#34495e',
//       }}
//       data-testid="todo-test"
//     >
//       <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

//       <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="edit-todo"
//           onChange={(e) => setText(e.target.value)}
//         />
//       </form>

//       <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//         <i className="fas fa-trash" />
//       </span>
//       <span className="icon" onClick={() => setEditing(true)}>
//         <i className="fas fa-pen" />
//       </span>
//     </li>
//   ) : null;
// };

// export default Todo;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions/index';

// const Todo = ({ todo }) => {
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(todo ? todo.data : '');

//   const dispatch = useDispatch();

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     setEditing(false);
//     dispatch(updateTodo(todo._id, text));
//   };

//   return todo ? (
//     <li
//       className={`task${todo.done ? ' completed' : ''}${!todo ? ' deleted' : ''}`}
//       onClick={() => dispatch(toggleTodo(todo._id))}
//       style={{
//         textDecoration: todo.done ? 'line-through' : '',
//         color: todo.done ? '#bdc3c7' : '#34495e',
//       }}
//     >
//       <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

//       <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="edit-todo"
//           onChange={(e) => setText(e.target.value)}
//         />
//       </form>

//       <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//         <i className="fas fa-trash" />
//       </span>
//       <span className="icon" onClick={() => setEditing(true)}>
//         <i className="fas fa-pen" />
//       </span>
//     </li>
//   ) : null;
// };

// export default Todo;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions/index';
import '../App.css';

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo ? todo.data : '');
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo._id)); // Use the toggleTodo action
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditing(false);
    dispatch(updateTodo(todo._id, text));
  };

  return todo ? (
    <li
      className={`task${todo.done ? ' completed' : ''}${!todo ? ' deleted' : ''}`}
      onClick={handleToggle}
      style={{
        textDecoration: todo.done ? 'line-through' : '',
        color: todo.done ? '#bdc3c7' : '#34495e',
      }}
    >
      <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

      <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={handleUpdate}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>

      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <i className="fas fa-trash" />
      </span>
      <span className="icon" onClick={() => setEditing(true)}>
        <i className="fas fa-pen" />
      </span>
    </li>
  ) : null;
};

export default Todo;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from '../redux/actions/index';
// import Todo from './Todo';
// import CompletedTodo from './CompletedTodo';
// import DeletedTodo from './DeletedTodo';
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
//               <Todo key={todo._id} todo={todo} />
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2>Completed Todos:</h2>
//           <ul>
//             {completedTodos.map((todo) => (
//               <CompletedTodo key={todo._id} todo={todo} />
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2>Deleted Todos:</h2>
//           <ul>
//             {deletedTodos.map((todo) => (
//               <DeletedTodo key={todo._id} todo={todo} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Todos;
