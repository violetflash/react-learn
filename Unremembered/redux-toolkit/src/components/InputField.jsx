import React from 'react';

export const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input type="text" value={text} onChange={handleInput}/>
      <button onClick={handleSubmit}>Добавить</button>
    </label>
  );
};
