import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue, newContacts } from 'redux/reducer';
import { getItem } from 'redux/selector';
import css from './ContactForm.module.css';


const INITIAL_STATE = {
  name: '',
  number: '',
};


export const ContactForm = () => {
  const [{ name, number }, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const contacts = useSelector(getItem)

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const newC = {
      id: nanoid(5),
      name,
      number,
    }
    if (contacts.some(e => e.name === newC.name)) {
      alert(`${newC.name} is already is contacts`);
      return;
    }
    
    dispatch(newContacts(newC));
    dispatch(filterValue(''));

    setState({ ...INITIAL_STATE });
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>Name </label>
      <input
        className={css.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <label className={css.formLabel}>Number </label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChange}
      />
      <button className={css.formOnbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};


