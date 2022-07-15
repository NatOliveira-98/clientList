import { Input } from '../../components/Input';
import { Client } from '../../components/Client';

import { Container, HeaderBG, Main } from './styles';

export const Home = () => {
  return (
    <Container>
      <HeaderBG />

      <Main>
        <Input />
        <Client />
        <Client />
        <Client />
      </Main>
    </Container>
  );
};
