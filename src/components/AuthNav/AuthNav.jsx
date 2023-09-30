import { StyledLink, Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Container>
  );
};
