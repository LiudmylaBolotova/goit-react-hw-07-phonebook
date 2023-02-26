export const getContacts = state => state.contacts.contacts.items;
export const getFilter = state => state.filter.filter;
export const getLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;