import React from 'react';
import Button from "../ui/Buttons/Button";
import { ControlsContainer } from "../../styles/styles";
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../store/counterSlice';

import s from './Controls.module.scss';

export const Controls = () => {
  const dispatch = useDispatch();

  const decrementHandle = () => dispatch(decrement());
  const incrementHandle = () => dispatch(increment());
  const resetHandle = () => dispatch(reset());

  return (
    <ControlsContainer>
      <div className={s.row}>
        <Button text="Убавить" onPress={decrementHandle}/>
        <Button text="Прибавить" onPress={incrementHandle}/>
        <Button text="Сбросить" onPress={resetHandle}/>
      </div>

      <Button text="Добавить ToDo"/>
      <Button text="Удалить последний ToDo"/>
    </ControlsContainer>
  )

};
