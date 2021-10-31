import { useRef } from 'react';
import { useHover } from "../hooks";

export const HoverElement = props => {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div ref={ref} style={{width: 300, height: 300, background: isHovering ? 'red' : 'coral'}}>
      <button onClick={() => console.log(ref.current)}>show ref</button>
    </div>
  )
};