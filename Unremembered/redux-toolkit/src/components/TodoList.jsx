import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useSelector(state => state.app.todos);
  const items = todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
      />
  ))
  return (
    <ul>
      {items}
    </ul>
  );
};
