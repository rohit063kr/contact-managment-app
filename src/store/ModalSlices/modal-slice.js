import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  isNewContactFormRequired: false,
  isStartupFormModalRequired: true,
};

const modalSlice = createSlice({
  name: 'Modal states',
  initialState: modalInitialState,
  reducers: {
    openNewContactForm(state) {
      state.isNewContactFormRequired = true;
    },
    openStartupFormModal(state) {
      state.isStartupFormModalRequired = true;
    },
    closeModal(state) {
      state.isNewContactFormRequired = false;
      state.isStartupFormModalRequired = false;
    },
  },
});

export const modalStateActions = modalSlice.actions;

export default modalSlice;
