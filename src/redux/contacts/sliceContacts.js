import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  fetchContacts,
  deleteContact,
} from './operationsContacts.js';
import {
  handlePending,
  handleRejected,
  handleGetAllContactsFulfilled,
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
} from 'redux/handlers.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleGetAllContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
