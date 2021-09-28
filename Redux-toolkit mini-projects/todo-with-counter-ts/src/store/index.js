import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counterSlice';
import todoReducer from './todoSlice';
import todoInputReducer from './todoInputSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    todoInput: todoInputReducer
  }
})