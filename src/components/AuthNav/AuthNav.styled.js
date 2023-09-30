import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  padding: 12px 12px;

  transition: transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &.active {
    color: white;
  }

  &:hover,
  &:focus {
    color: white;
    transform: scale(1.05);
  }
`;
