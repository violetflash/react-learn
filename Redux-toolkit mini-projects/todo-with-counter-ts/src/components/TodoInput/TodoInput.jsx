import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInput, resetTextInputValue } from "../../store/todoInputSlice";
import { addTodo } from "../../store/todoSlice";
import { TextInput } from "../ui/Inputs/TextInput";
import { nanoid } from "nanoid";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.todoInput.inputValue);

  const inputHandler = (e) => {
    dispatch(handleInput({ inputValue: e.target.value }));
  };

  const submitTodo = () => {
    if (!inputValue) return;
    dispatch(addTodo({
      id: nanoid(),
      text: inputValue,
      completed: false
    }))
    dispatch(resetTextInputValue());
  }

  return (
    <TextInput
      placeholder="Введите ToDo"
      inputValue={inputValue}
      inputHandler={inputHandler}
      onEnterPress={submitTodo}
    />
  );
};
