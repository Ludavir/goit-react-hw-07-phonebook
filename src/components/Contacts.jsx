import React from 'react';
import '../styles/Contacts.css';
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contact-slice';
import { getAllContacts } from 'redux/contacts/contact-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = id => {
    const action = removeContact(id);
    dispatch(action);
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
      <li className="item"key={id}>
        <p className="text">
          {name}: {number}
        </p>
        <button
          type="button"
          className="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    )
  })
  
  return <ul className="list">{elements}</ul>;
};

export default Contacts
