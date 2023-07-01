import React from 'react';
import '../styles/ContactAdd.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Notiflix from 'notiflix';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/contact-operations';


const Form = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSumbit = e => {
    e.preventDefault();
    dispatch(fetchAddContact({ name, number }));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `${name} was added...`,
      showConfirmButton: false,
      timer: 1500
    });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  
    return (
        <form className="form" onSubmit={formSumbit}>
        <label className="label">
        <span className="span">Name</span>
        <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={e => {
                setName(e.target.value);
              }}
            required
        />
        </label>
        <label className="label">
        <span className="span">Number</span>
        <input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={e => {
                setNumber(e.target.value);
              }}
            required
        />
        </label>
        <button className="button" type="submit">
        Add contact
        </button>
    </form>
    );
  };

 Form.propTypes = { onSubmit: PropTypes.func };
export default Form;