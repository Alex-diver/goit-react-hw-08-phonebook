import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  LogInButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled type="password" name="password" />
      </LabelStyled>
      <LogInButton type="submit">Log In</LogInButton>
    </FormStyled>
  );
};
