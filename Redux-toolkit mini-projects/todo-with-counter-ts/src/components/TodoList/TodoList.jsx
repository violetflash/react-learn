import React from 'react';
import { useSelector } from 'react-redux';
import { TodoListContainer } from "../../styles/styles";
import TodoItem from "./TodoItem/TodoItem";

export const TodoList = () => {
  const { todos } = useSelector(state => state.todo);
  const todosItems = todos.map((todo, index) => {
    const {id} = todo;
    return <TodoItem key={id} {...todo} index={index + 1}/>
  });

  return (
    <TodoListContainer>
      {todosItems}
    </TodoListContainer>
  )

};
