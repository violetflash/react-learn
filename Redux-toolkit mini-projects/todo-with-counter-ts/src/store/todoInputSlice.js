import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: ""
}

const todoInputSlice = createSlice({
  name: "todoInput",
  initialState,
  reducers: {
    handleInput(state, action) {
      state.inputValue = action.payload.inputValue;
    },

    resetTextInputValue: () => initialState
  }
})

export const { handleInput, resetTextInputValue } = todoInputSlice.actions;

export default todoInputSlice.reducer;
