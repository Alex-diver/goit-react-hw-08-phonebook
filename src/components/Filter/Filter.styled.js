import { styled } from 'styled-components';

export const InputStyled = styled.input`
  font-size: 16px;
  border-radius: 5px solid blue;
  padding: 5px;
  margin-bottom: 10px;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid blue;
    outline: transparent;
  }
`;
