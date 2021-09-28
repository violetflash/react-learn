import React from 'react';
import { ButtonContainer } from "../../../styles/styles";

const Button = ({ text, onPress, addStyle }) => {
  return (
    <ButtonContainer onClick={onPress} addStyle={addStyle}>
      {text}
    </ButtonContainer>
  )

};

export default Button;