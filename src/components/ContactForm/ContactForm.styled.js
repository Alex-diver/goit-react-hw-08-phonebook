import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
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
export const SpanStyled = styled.span`
  margin-bottom: 5px;
`;

export const InputStyled = styled.input`
  font-size: 16px;
  border-radius: 5px solid blue;
  padding: 5px;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid blue;
    outline: transparent;
  }
`;
export const BtnStyled = styled.button`
  color: gray;
  padding: 5px;
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
