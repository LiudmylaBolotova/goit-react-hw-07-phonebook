import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isLoading = true;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [addContact.pending]: (state, action) => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },

    [addContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContact.pending]: (state, action) => {
      state.contacts.isLoading = true;
    },

    [deleteContact.fulfilled]: (state, action) => {
      const contactIndex = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(contactIndex, 1);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },

    [deleteContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
