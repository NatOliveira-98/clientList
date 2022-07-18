import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputProps) => {
  return (
    <Container {...rest}>
      <input type="text" placeholder="Buscar por nome" />
    </Container>
  );
};
