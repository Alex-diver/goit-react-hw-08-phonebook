import { styled } from 'styled-components';
import { Avatar } from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 24px;
`;

export const UserText = styled.p`
  font-weight: 700;
`;
export const WelText = styled.p`
  font-weight: 700;
  font-size: 24px;
  padding: 12px 12px;
`;
export const AvatarStyled = styled(Avatar)`
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background-color: green;
`;
export const Button = styled.button`
  font-size: 16px;
  min-width: 80px;
  min-height: 30px;
  color: gray;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid blue;
    background: dodgerblue;
    color: black;
  }
`;
