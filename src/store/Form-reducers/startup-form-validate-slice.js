import { createSlice } from '@reduxjs/toolkit';

const startupFormInitialState = {
  isValid: false, // Only responsible for dom changes
  errMsg: null,
  errSite: null,
};

const startupFormValidateSlice = createSlice({
  name: 'startup-form-validate-slice',
  initialState: startupFormInitialState,
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

export const startupFormActions = startupFormValidateSlice.actions;
export default startupFormValidateSlice;
