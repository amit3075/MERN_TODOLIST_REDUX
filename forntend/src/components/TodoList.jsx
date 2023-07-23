

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from '../redux/actions/index';



// const TodoList = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const loading = useSelector((state) => state.loading);
//   const error = useSelector((state) => state.error);
//   // const handleToggle = (id) => {
//   //   dispatch(toggleTodo(id));
//   // };
  
//   // const handleUpdate = (id, data) => {
//   //   dispatch(updateTodo(id, data));
//   // };
  
//   // const handleDelete = (id) => {
//   //   dispatch(deleteTodo(id));
//   // };
//   getFilteredTodos().map((todo) => <Todo key={todo._id} todo={todo} />)


//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>

//     <div>
       
//       <h2>Todo List</h2>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           {todo.data}
//           {/* Additional UI for displaying Todo item details */}
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default TodoList;
// components/TodoList.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, toggleTodo } from '../redux/actions/index';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo._id}>
          <span
            style={{
              textDecoration: todo.done ? 'line-through' : '',
              color: todo.done ? '#bdc3c7' : '#34495e',
              cursor: 'pointer',
            }}
            onClick={() => handleToggle(todo._id)}
          >
            {todo.data}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
