import React, { useState } from 'react';
import { InputFieldLabel,TextInputContainer } from "../../../styles/styles";

export const TextInput = ({ placeholder, inputHandler, value, submitTodo }) => {
  const [text, setText] = useState(value);

  const handleInput = (e) => {
    inputHandler(e);
    setText(value);
  }

  const keyPressHandle = (e) => {
    if (e.key !== 'Enter') return;

    submitTodo(e);
    setText("");
  }
  return (
    <InputFieldLabel>
      <TextInputContainer
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
        value={text}
        onKeyPress={keyPressHandle}
      />
    </InputFieldLabel>
  )

};
