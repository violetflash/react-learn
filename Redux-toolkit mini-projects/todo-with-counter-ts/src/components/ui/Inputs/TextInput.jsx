import React from 'react';
import { InputFieldLabel,TextInputContainer } from "../../../styles/styles";

export const TextInput = ({ placeholder, inputHandler, inputValue, onEnterPress }) => {

  const handleInput = (e) => {
    inputHandler(e);
  }

  const keyPressHandle = (e) => {
    if (e.key !== 'Enter') return;

    onEnterPress(e);
  }
  return (
    <InputFieldLabel>
      <TextInputContainer
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
        value={inputValue}
        onKeyPress={keyPressHandle}
      />
    </InputFieldLabel>
  )

};
