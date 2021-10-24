import { useState, useEffect }  from 'react';


export const useKeypress = (key) => {
  const [keyPressed, setKeyPressed] = useState(false);



  useEffect(() => {
    const keyPressDownHandle = (e) => {
      if (e.key === key) {
        setKeyPressed(true);
      }
    }

    const keyPressUpHandle = (e) => {
      if (e.key === key) {
        setKeyPressed(false);
      }
    }
    window.addEventListener('keydown', keyPressDownHandle);
    window.addEventListener('keyup', keyPressUpHandle);

    return () => {
      window.removeEventListener('keydown', keyPressDownHandle);
      window.removeEventListener('keyup', keyPressUpHandle);
    }
  }, [key]);

  return keyPressed;

};
