import React from 'react';
import { StyledButton, CircleButton } from "./style";

const Button = (props) => {
  if (props.circle) {
    return (
      <CircleButton {...props} >
        {props.text}
      </CircleButton>
    )
  }

  return (
    <StyledButton {...props} >
      {props.text}
    </StyledButton>
  );
};

export default Button;
