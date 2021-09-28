import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    }
  }
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
