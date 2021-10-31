import { useState } from 'react';

export const useToggle = (initialState) => {
  const [toggleState, setToggle] = useState(initialState);
  const toggle = () => setToggle(() => !toggleState);

  return { toggleState, toggle };
};