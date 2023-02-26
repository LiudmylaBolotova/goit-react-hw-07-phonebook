import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from './contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const addContact = await contactsAPI.addContacts({ name, number });
      return addContact;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const deleteContact = await contactsAPI.deleteContacts(contactId);
      return deleteContact;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
