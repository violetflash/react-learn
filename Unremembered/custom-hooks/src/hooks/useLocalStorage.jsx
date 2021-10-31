import { useState, useEffect } from 'react';

export const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;
  };
  const [value, setValue] = useState(getValue);



  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue];
};