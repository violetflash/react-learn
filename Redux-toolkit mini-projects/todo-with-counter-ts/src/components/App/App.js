import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Controls } from '../Controls/Controls';
import { Counter } from '../Counter/Counter';
import { TodoList } from '../TodoList/TodoList';
import { TextInput } from '../ui/Inputs/TextInput'
import s from './App.module.scss';
import { handleInput, resetTextInputValue } from "../../store/todoInputSlice";
import { addTodo } from "../../store/todoSlice";


function App() {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.todoInput.value);

  const inputHandler = (e) => {
    dispatch(handleInput({ value: e.target.value }));
  };

  const submitTodo = (e) => {
    dispatch(resetTextInputValue());
    dispatch(addTodo({
      id: nanoid(),
      text: e.target.value,
      completed: false
    }))
  }


  return (
    <div className={s.App}>
      <h1>Redux toolkit Test App</h1>
      <Counter/>
      <Controls/>
      <TextInput
        placeholder="Введите ToDo"
        value={value}
        inputHandler={inputHandler}
        submitTodo={submitTodo}
      />
      <TodoList/>
    </div>
  );
}

export default App;
