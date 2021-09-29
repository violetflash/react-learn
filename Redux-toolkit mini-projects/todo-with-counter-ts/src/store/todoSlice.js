import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
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
  }
})

export const { addTodo, removeTodo, removeLastTodo, toggleComplete, removeAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
