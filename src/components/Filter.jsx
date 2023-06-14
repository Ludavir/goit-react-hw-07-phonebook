import React from 'react';
import '../styles/Filter.css';
import { filterContacts } from '../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';

const Filter = () => {

    const dispatch = useDispatch();
    const onFilter = value => dispatch(filterContacts(value));
return (
    <label className="label">
    <span className="span">Find contacts by name</span>
    <input
        className="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => onFilter(e.target.value)}
    />
    </label>
);
};
export default Filter;