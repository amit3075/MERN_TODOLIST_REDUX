import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/index';

const CompletedTodo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo ? todo.data : '');
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo._id)); // Use the toggleTodo action
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
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

      <span className="icon" onClick={handleDelete}>
        <i className="fas fa-trash" />
      </span>
    </li>
  ) : null;
};

export default CompletedTodo;
