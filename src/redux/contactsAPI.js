import axios from 'axios';

axios.defaults.baseURL = 'https://63fcbf648ef914c5559e82c8.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContacts({ name, number }) {
  const res = await axios.post(`/contacts`, { name, number });
  return res.data;
}

export async function deleteContacts(contactId) {
  const res = await axios.delete(`/contacts/${contactId}`);
  return res.data;
}
