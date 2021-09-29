import React from 'react';
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from '../../../store/todoSlice';
import { TodoItemContainer, TodoItemText } from "../../../styles/styles";
import CheckBox from "../../ui/Inputs/CheckBox";
import Button from "../../ui/Buttons/Button";

const TodoItem = ({ index, id, text, completed }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeTodo({ id }));
  const handleComplete = () => dispatch(toggleComplete({ id }));

  return (
    <TodoItemContainer data-id={`${index})`}>
      <CheckBox checkedState={completed} onChangeHandle={handleComplete}/>
      <TodoItemText completed={completed} onClick={handleComplete}>{text}</TodoItemText>

      <Button text="X" addStyle="mlAuto small" onPress={handleRemove}/>
    </TodoItemContainer>
  );

};

export default TodoItem;
