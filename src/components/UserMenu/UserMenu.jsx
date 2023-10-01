import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks';

import {
  Container,
  UserText,
  WelText,
  AvatarStyled,
  Button,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <WelText> Welcome</WelText>
      <AvatarStyled name={user.name} />
      <Box size="ml">
        <UserText fontWeight="bold"> {user.name}</UserText>
        <UserText fontSize="sm">{user.email}</UserText>
      </Box>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
