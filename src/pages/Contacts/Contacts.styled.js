import { styled } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 20px;
  border: 2px blue solid;
  border-radius: 5px;
  min-width: 350px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  color: white;
`;

export const ContactsTitle = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: white;
`;

export const FilterTitle = styled.p`
  margin-bottom: 3px;
  font-size: 16px;
  text-align: center;
  color: white;
`;
