import React from 'react';
import '../styles/Contacts.css';
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contact-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/contact-operations';

const Contacts = () => {
  const isLoading = useSelector(store => store.contacts.isLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(fetchDeleteContact(id));
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Your contact was deleted',
      showConfirmButton: false,
      timer: 1500
    })
  };
  const elements = filterContactsContacts?.map(({ name, id, number }) => {
    return (
      <li className="item" key={id} name={id}>
        <p className="text">
          {name}: {number}
        </p>
        <button
          type="button"
          className="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className="list">{elements}</ul>
    </>
  );
};
export default Contacts;
