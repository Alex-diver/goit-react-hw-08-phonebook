import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectorsContacts';
import { deleteContact } from 'redux/contacts/operationsContacts';
import {
  ItemStyled,
  DeleteButton,
  ListStyled,
  AvatarStyled,
  NoContacts,
} from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!contacts?.length && !error & !isLoading) {
    return <NoContacts>No contacts added yet.</NoContacts>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ListStyled>
      {contacts.map(({ id, name, number }) => (
        <ItemStyled key={id}>
          <AvatarStyled name={name} />
          {name}: {number}
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};
