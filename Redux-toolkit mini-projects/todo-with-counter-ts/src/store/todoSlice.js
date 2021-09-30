import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; //метод AsyncThunk - позволяет создавать
// асинхронные функции (thunk'и), которые возвращаются из экшнов вместо объектов.
//Этот метод принимает название самого события = typePrefix (в данном случае это 'todos/fetchTodos') и асинхронную
// функцию.
//Асинхронная функция (payloadCreator) - принимает два параметра:
// 1) То, что мы передаем в момент вызова через диспетчер (dispatch)
// 2) Дополнительные сущности,которые можно использовать внутри этой функции (надо почитать больше про это!)
// https://redux-toolkit.js.org/api/createAsyncThunk
//Внутри функции делаем асинхронный запрос, если будет ошибка - обрабатываем ее, если данные получены корректо -
// возвращаем их  в виде payload

const DATA_LINK = 'https://jsonplaceholder.typicode.com/todos';
const LIMIT_QUERY = '?_limit=15'


const initialState = {
  todos: [],
  status: null,
  error: null
};


//Получаем асинхронные данные
export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch(DATA_LINK + LIMIT_QUERY);
      if (!response.ok) {
        throw new Error('Server not responding')
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async ({ id }, {dispatch, rejectWithValue}) => {
    try {
      const response = await fetch(`${DATA_LINK}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error("Can't delete that task");
      }

      dispatch(removeTodo({ id }))

    } catch(err) {
      return rejectWithValue(err.message);
    }

  }
);

export const toggleStatus = createAsyncThunk(
  'todo/toggleStatus',
  async({id}, {dispatch, getState, rejectWithValue}) => {
    const todo = getState().todo.todos.find(todo => todo.id === id);

    try {
      const response = await fetch(`${DATA_LINK}/${id}`, {
        method: "PATCH",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          completed: !todo.completed,
        })
      });

      if (!response.ok) {
        throw new Error("Can't delete that task");
      }

      dispatch(toggleComplete({ id }))

    } catch(err) {
      return rejectWithValue(err.message);
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: action.payload.completed
      })
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },

    removeLastTodo(state) {
      state.todos.pop();
    },

    removeAllTodos: () => initialState,

    toggleComplete(state, action) {
      const currentTodo = state.todos.find(todo => todo.id === action.payload.id);
      currentTodo.completed = !currentTodo.completed;
    }
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
      state.error = null;
    },
    [fetchTodos.rejected]: setError,
    [deleteTodo.rejected]: setError
  }
})

export const { addTodo, removeTodo, removeLastTodo, toggleComplete, removeAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
