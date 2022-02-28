import { configureStore } from '@reduxjs/toolkit';

import newContactFormValidateSlice from './Form-reducers/new-contact-form-validate-slice';
import modalSlice from './ModalSlices/modal-slice';
import userSlice from './Users-slice/user-slice';
import startupFormValidateSlice from './Form-reducers/startup-form-validate-slice';

const store = configureStore({
  reducer: {
    newContactFormValidateSlice: newContactFormValidateSlice.reducer,
    modalReducer: modalSlice.reducer,
    userDataReducer: userSlice.reducer,
    startupFormReducer: startupFormValidateSlice.reducer,
  },
});

export default store;
