import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      })
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.id);
    },
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;