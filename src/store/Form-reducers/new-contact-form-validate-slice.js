import { createSlice } from '@reduxjs/toolkit';

const newContactFormInitialState = {
  isValid: false, // Only responsible for dom changes
  errMsg: null,
  errSite: null,
};

const newContactFormValidateSlice = createSlice({
  name: 'formDataSlice',
  initialState: newContactFormInitialState,
  reducers: {
    nameInputInvalid(state) {
      state.isValid = false;
      state.errMsg =
        'Please write name less than 20 and greter than  character';
      state.errSite = 'Name';
    },

    phoneInputInvalid(state) {
      state.isValid = false;
      state.errMsg =
        'Please write valid phone number or remove (+91) if you added it';
      state.errSite = 'Phone number';
    },

    formIsValid(state) {
      state.isValid = true;
      state.errMsg = null;
      state.errSite = null;
    },
  },
});

export const newContactFormStateActions = newContactFormValidateSlice.actions;

export default newContactFormValidateSlice;
