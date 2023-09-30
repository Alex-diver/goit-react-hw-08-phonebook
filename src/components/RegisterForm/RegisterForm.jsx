import { useDispatch } from 'react-redux';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  RegisterButton,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operationsAuth';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <InputStyled type="text" name="name" />
      </LabelStyled>
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled type="password" name="password" />
      </LabelStyled>
      <RegisterButton type="submit">Register</RegisterButton>
    </FormStyled>
  );
};
