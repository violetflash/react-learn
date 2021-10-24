import { configureStore } from "@reduxjs/toolkit";
import { popupsSlice } from '../slices';

export const store = configureStore({
  reducer: {
    popup: popupsSlice.reducer,
  }

})