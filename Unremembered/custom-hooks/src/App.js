import {Books, HoverElement, List} from './components';
import { books } from './data/index';
import {useLocalStorage, useToggle, useInput, useHover} from './hooks';
import {useRef} from "react";


function App() {
  const [order, setOrder] = useLocalStorage([], 'order');
  const { toggleState, toggle } = useToggle(false);
  const hoverToggle = useToggle(false);
  const username = useInput('');
  const password = useInput('');
  const ref = useRef();
  const isBarHovered = useHover(ref);

  const addToOrder = (id) => {
    const newItem = books.find(item => item.id === id);
    setOrder([...order, newItem]);
  };

  const loginHandle = () => {
    console.log(`login: ${username.value}\npassword: ${password.value}`);
  };

  return (
    <>
      <div>
        <button onClick={toggle}>Toggle Books</button>
        {toggleState && <Books items={books} addToOrder={addToOrder} order={order}/>}
      </div>
      <div>
        <input {...username} placeholder="username"/>
        <input {...password} placeholder="password"/>
        <button onClick={loginHandle}>Login</button>
      </div>
      <div>
        <button onClick={hoverToggle.toggle}>toggle Hovers</button>
        {hoverToggle.toggleState &&
        <>
          <HoverElement/>
          <div className="bar" ref={ref} style={{width: 200, height: 200, background: isBarHovered ? 'lightcyan' : 'coral'}}>
          </div>
        </>
        }
      </div>
      <List/>
    </>
  );
}

export default App;
