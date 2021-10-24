import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainModalOpened: false,
  dialogOpened: false,
}

export const popupsSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openMainModal: (state) => {
      state.mainModalOpened = true;
    },
    closeMainModal: (state) => {
      state.mainModalOpened = false;
    },
    openDialog: (state) => {
      state.dialogOpened = true;
    },
    closeDialog: (state) => {
      state.dialogOpened = false;
    }
  }
});

export const { openMainModal, closeMainModal, openDialog, closeDialog } = popupsSlice.actions;