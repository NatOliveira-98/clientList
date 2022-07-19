import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputProps) => {
  return (
    <Container {...rest}>
      <label htmlFor="search-users">Buscar por nome</label>

      <input id="search-users" type="text" placeholder="Buscar por nome" />
    </Container>
  );
};
