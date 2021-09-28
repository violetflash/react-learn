import React from 'react';

const CheckBox = ({ checkedState, onChangeHandle }) => {
  return (
    <input type="checkbox" checked={checkedState} onChange={onChangeHandle}/>
  )
};

export default CheckBox;