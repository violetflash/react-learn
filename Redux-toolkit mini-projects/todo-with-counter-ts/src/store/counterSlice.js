import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + 1;
    },
    decrement(state, action) {
      state.counter = state.counter - 1;
    },
    reset(state, action) {
      state.counter = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export const { reducer  } = counterSlice;