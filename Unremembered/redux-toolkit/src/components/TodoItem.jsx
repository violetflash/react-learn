import React from 'react';
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

export const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  const handleComplete = () => dispatch(toggleTodoComplete({ id }));
  const handleRemove = () => dispatch(removeTodo({ id }));

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleComplete}/>
      <span>{text}</span>
      <button onClick={handleRemove}>X</button>
    </li>
  );
};
