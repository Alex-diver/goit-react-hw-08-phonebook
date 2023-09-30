import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectorsContacts';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operationsContacts';
import { ItemStyled, DeleteButton, ListStyled } from './ContactsList.styled';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListStyled>
      {filteredContacts.map(({ id, name, number }) => (
        <ItemStyled key={id}>
          {name}: {number}
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};
