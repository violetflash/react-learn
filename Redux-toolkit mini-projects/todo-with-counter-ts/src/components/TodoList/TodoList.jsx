import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from "../../store/todoSlice";
import { TodoListContainer } from "../../styles/styles";
import TodoItem from "./TodoItem/TodoItem";
import Loader from "../Loader";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector(state => state.todo);

  useEffect(() => {
    dispatch(fetchTodos()); //ничего не передаем (а если передавать, то в виде объекта)
  }, [dispatch])

  if (status === 'loading') return <Loader/>;
  if (error) return (
    <>
      <h2>Произошла ошибка: {error} </h2>
      <p>Попробуйте обновить страницу...</p>
    </>
  );

  const todosItems = todos.map((todo, index) => {
    const { id } = todo;
    return <TodoItem key={id} {...todo} index={index + 1}/>
  });

  return (
    <TodoListContainer>
      {todosItems}
    </TodoListContainer>
  )

};
