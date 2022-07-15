import { HeaderBG } from '../../components/HeaderBG';
import { Input } from '../../components/Input';
import { Client } from '../../components/Client';

import { Container, Main } from './styles';

export const Home = () => {
  return (
    <Container>
      <HeaderBG />

      <Main>
        <Input />

        <div className="scrollable-area">
          <Client />
          <Client />
          <Client />
          <Client />
          <Client />
          <Client />
          <Client />
        </div>
      </Main>
    </Container>
  );
};
