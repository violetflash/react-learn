
import { Controls } from '../Controls/Controls';
import { Counter } from '../Counter/Counter';
import { TodoList } from '../TodoList/TodoList';
import { TodoInput } from '../TodoInput/TodoInput';
import s from './App.module.scss';



function App() {

  return (
    <div className={s.App}>
      <h1>Redux toolkit Test App</h1>
      <Counter/>
      <Controls/>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
