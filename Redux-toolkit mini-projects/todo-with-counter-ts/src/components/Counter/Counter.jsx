import React from 'react';
import { useSelector } from 'react-redux';
import { CounterContainer } from "../../styles/styles";

export const Counter = () => {
  const { counter } = useSelector(state => state.counter);

  return (
    <CounterContainer>
      {counter}
    </CounterContainer>
  )

};
