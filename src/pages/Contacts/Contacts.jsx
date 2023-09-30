import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { Filter } from 'components/Filter/Filter';
import {
  ContactsContainer,
  ContactsTitle,
  FilterTitle,
  MainTitle,
  MainContainer,
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>

      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsContainer>
          <FilterTitle>Find contacts by name</FilterTitle>
          <Filter />
          <ContactList />
        </ContactsContainer>
      </MainContainer>
    </>
  );
}
