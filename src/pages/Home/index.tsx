import { ChangeEvent, useEffect, useState } from 'react';

import { api } from '../../services/api';

import { HeaderBG } from '../../components/HeaderBG';
import { Input } from '../../components/Input';
import { Dropdown } from '../../components/Dropdown';
import { Client } from '../../components/Client';

import { Container, Main } from './styles';

export const Home = () => {
  const [clients, setClients] = useState<[]>([]);
  const [search, setSearch] = useState<string[]>([]);
  const [filterByCompanyType, setFilterByCompanyType] = useState<string[]>([]);

  function checkName(name: string, str: string) {
    const pattern = str.split('').map((x: string) => {
      return `(?=.*${x})`;
    });
    const regex = new RegExp(`${pattern}, g`);

    return name.match(regex);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value.toLowerCase().substring(0, 3);
    let result: string[] = [];

    result = clients.filter((client: any) => {
      const nameSub = client.name.substring(0, 3).toLowerCase();
      return (
        client.name.toLowerCase().includes(value) || checkName(nameSub, value)
      );
    });

    setSearch(result);
  }

  function handleFilterByCompany(event: ChangeEvent<HTMLSelectElement>) {
    let value = event.target.value.toLowerCase();
    let result: string[] = [];

    result = filterByCompanyType.filter((client: any) => {
      if (value === 'all') {
        return client.company.bs.toLowerCase();
      }
      return client.company.bs.toLowerCase().includes(value);
    });

    setSearch(result);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get('/users');

        setClients(res.data);
        setSearch(res.data);
        setFilterByCompanyType(res.data);
        //
      } catch (error) {
        console.log('There was an error: ', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <HeaderBG />

      <Main>
        <div className="search-container">
          <Input onChange={event => handleSearch(event)} />
          <Dropdown onChange={event => handleFilterByCompany(event)} />
        </div>

        <div className="scrollable-area">
          {search.map((client: any, index) => (
            <Client key={String(index)} data={client} />
          ))}
        </div>
      </Main>
    </Container>
  );
};
