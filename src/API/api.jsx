import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://649f8e20ed3c41bdd7a68293.mockapi.io/',
});

export const getAllContacts = async () => {
  const { data } = await contactInstance.get('/');
  return data;
};
export const addContact = async data => {
  const { data: result } = await contactInstance.post('/', data);
  return result;
};
export const deleteContact = async id => {
  const { data } = await contactInstance.delete(`/${id}`);
  return data;
};
