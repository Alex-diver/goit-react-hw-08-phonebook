import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const InputStyled = styled.input`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  border-radius: 5px solid blue;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid blue;
    outline: transparent;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  row-gap: 5px;
  color: white;
  max-width: 300px;
  font-size: 16px;
`;
export const LogInButton = styled.button`
  width: 75px;
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
