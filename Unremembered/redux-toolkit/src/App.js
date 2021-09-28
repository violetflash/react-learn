import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { TodoList } from './components/TodoList';
import { InputField } from "./components/InputField";
import { addTodo } from './store/todoSlice';


function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo({ id: nanoid(), text, completed: false }));
    setText("");
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };


  return (
    <div className="App">
      <InputField text={text} handleInput={handleInput} handleSubmit={handleSubmit}/>
      <TodoList />
    </div>
  );
}

export default App;
