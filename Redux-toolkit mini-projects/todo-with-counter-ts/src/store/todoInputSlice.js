import { createSlice } from '@reduxjs/toolkit';

const todoInputSlice = createSlice({
  name: "todoInput",
  initialState: { value: "" },
  reducers: {
    handleInput(state, action) {
      state.value = action.payload.value;
    },

    resetTextInputValue(state) {
      state.value = "";
    }
  }
})

export const { handleInput, resetTextInputValue } = todoInputSlice.actions;

export default todoInputSlice.reducer;