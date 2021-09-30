import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import Button from "../ui/Buttons/Button";
import { ControlsContainer } from "../../styles/styles";
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../store/counterSlice';
import { addTodo, removeLastTodo, removeAllTodos } from '../../store/todoSlice';
import { resetTextInputValue } from "../../store/todoInputSlice";

import s from './Controls.module.scss';

export const Controls = () => {
  const { inputValue } = useSelector(state => state.todoInput);
  const dispatch = useDispatch();

  const decrementHandle = () => dispatch(decrement());
  const incrementHandle = () => dispatch(increment());
  const resetHandle = () => dispatch(reset());

  const addHandler = () => {
    if (!inputValue) return;
    dispatch(addTodo({
      id: nanoid(),
      title: inputValue,
      completed: false
    }));
    dispatch(resetTextInputValue());
  };

  const removeLastHandler = () => dispatch(removeLastTodo());
  const removeAllHandler = () => {dispatch(removeAllTodos())};

  return (
    <ControlsContainer>
      <h2 className={s.title}>Отдельный блок управления</h2>
      <h3>Управление счетчиком</h3>
      <div className={s.row}>
        <Button text="Убавить" onPress={decrementHandle}/>
        <Button text="Прибавить" onPress={incrementHandle}/>
        <Button text="Сбросить" onPress={resetHandle}/>
      </div>
      <h3>Управление Todo</h3>
      <div className={s.row}>
        <Button text="Добавить ToDo" onPress={addHandler}/>
        <Button text="Удалить последний ToDo" onPress={removeLastHandler}/>
        <Button text="Очистить ToDo" onPress={removeAllHandler}/>
      </div>
    </ControlsContainer>
  )
};
