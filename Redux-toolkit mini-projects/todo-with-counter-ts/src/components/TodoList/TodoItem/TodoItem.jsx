import React from 'react';
import { useDispatch } from "react-redux";
import { toggleStatus, deleteTodo } from '../../../store/todoSlice';
import { TodoItemContainer, TodoItemText } from "../../../styles/styles";
import CheckBox from "../../ui/Inputs/CheckBox";
import Button from "../../ui/Buttons/Button";

const TodoItem = ({ index, id, title, completed }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteTodo({ id }));
  const handleComplete = () => dispatch(toggleStatus({ id }));

  return (
    <TodoItemContainer data-id={`${index})`}>
      <CheckBox checkedState={completed} onChangeHandle={handleComplete}/>
      <TodoItemText completed={completed} onClick={handleComplete}>{title}</TodoItemText>

      <Button text="X" addStyle="mlAuto small" onPress={handleRemove}/>
    </TodoItemContainer>
  );

};

export default TodoItem;
