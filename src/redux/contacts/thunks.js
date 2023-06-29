import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNewContact, deleteContact, getContacts } from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {}
  }
);

export const createNewContactThunk = createAsyncThunk(
  'contacts/createContact',
  async body => {
    try {
      const { data } = await createNewContact(body);
      return data;
    } catch (error) {}
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await deleteContact(id);
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
