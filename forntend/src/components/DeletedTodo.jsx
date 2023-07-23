import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions/index';

const DeletedTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo._id));
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
      {todo.data}
    </li>
  ) : null;
};

export default DeletedTodo;
