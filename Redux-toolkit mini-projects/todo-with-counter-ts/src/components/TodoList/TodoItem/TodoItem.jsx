import React from 'react';
import { TodoItemContainer } from "../../../styles/styles";
import CheckBox from "../../ui/Inputs/CheckBox";
import Button from "../../ui/Buttons/Button";

const TodoItem = ({ index, id, text, completed }) => {
  return (
    <TodoItemContainer data-id={`${index})`}>
      <CheckBox/>
      <span>{text}</span>
      <Button text="X" addStyle="mlAuto"/>
    </TodoItemContainer>
  )

};

export default TodoItem;