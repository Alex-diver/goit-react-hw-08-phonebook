import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { addContact } from 'redux/contacts/operationsContacts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FormStyled,
  LabelStyled,
  SpanStyled,
  InputStyled,
  BtnStyled,
} from './ContactForm.styled';

import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name: inputName, value } = event.target;
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    updateContacts({ name, number });
    resetForm();
  };
  const updateContacts = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const contactExists = contacts.find(contact => {
      return contact.name === name || contact.number === number;
    });

    contactExists
      ? toast.info(`${name} is already in contacts.`)
      : dispatch(addContact(contact));
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          <SpanStyled>Name </SpanStyled>
          <InputStyled
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Annie Copeland"
            onChange={handleChange}
          />
        </LabelStyled>
        <LabelStyled>
          <SpanStyled> Number </SpanStyled>
          <InputStyled
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="227-91-26"
            onChange={handleChange}
          />
        </LabelStyled>
        <BtnStyled type="submit">Add contact</BtnStyled>
      </FormStyled>
    </div>
  );
};
