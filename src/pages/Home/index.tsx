import { useEffect, useState } from 'react';

import { HeaderBG } from '../../components/HeaderBG';
import { Input } from '../../components/Input';
import { Dropdown } from '../../components/Dropdown';
import { Client } from '../../components/Client';

import { Container, Main } from './styles';

export const Home = () => {
  const [clients, setClients] = useState<[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      setClients(data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <HeaderBG />

      <Main>
        <div className="search-container">
          <Input />
          <Dropdown />
        </div>

        <div className="scrollable-area">
          {clients.map((client: any, index) => (
            <Client key={String(index)} data={client} />
          ))}
        </div>
      </Main>
    </Container>
  );
};
