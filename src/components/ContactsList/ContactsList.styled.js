import styled from 'styled-components';
import { Avatar } from '@chakra-ui/react';

export const AvatarStyled = styled(Avatar)`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: green;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  margin: 0;
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  color: white;
`;

export const DeleteButton = styled.button`
  width: 75px;
  color: gray;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid;
  margin-left: auto;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid blue;
    background: dodgerblue;
    color: black;
  }
`;
export const NoContacts = styled.p`
  color: white;
`;
