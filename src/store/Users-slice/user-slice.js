import { createSlice } from '@reduxjs/toolkit';

const userSliceInitialState = {
  id: '',
  name: '',
  contacts: [],
  filtereKeywords: '',
  numOfContacts: 0,
};

const userSlice = createSlice({
  name: 'Users-data-reducer',
  initialState: userSliceInitialState,
  reducers: {
    extractIdentity(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
      state.numOfContacts++;
    },
    changeFilterKeyword(state, action) {
      state.filtereKeywords = action.payload;
    },
    replaceContactsData(state, action) {
      state.contacts = action.payload;
      state.numOfContacts = state.contacts.length;
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice;
