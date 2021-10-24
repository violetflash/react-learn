import React from 'react';
import {ButtonContainer} from "./style";

const Button = ({ text, confirm = null, danger = null, onClick = Function.prototype }) => {
  return (
    <ButtonContainer onClick={onClick}
    danger={danger}
    confirm={confirm}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;