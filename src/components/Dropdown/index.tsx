import { SelectHTMLAttributes } from 'react';

import { Container, Select } from './styles';

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Dropdown = ({ ...rest }: DropdownProps) => {
  return (
    <Container>
      <label htmlFor="filter-companies">Filtre pelo tipo de serviço</label>

      <Select id="filter-companies" {...rest}>
        <option
          defaultValue=""
          disabled
          selected
          hidden
          className="placeholder"
        >
          Filtre pelo tipo de serviço
        </option>
        <option defaultValue="">all</option>
        <option defaultValue="real-time">real-time</option>
        <option defaultValue="supply-chain">supply-chain</option>
        <option defaultValue="e-enable">e-enable</option>
        <option defaultValue="applications">applications</option>
        <option defaultValue="web services">web services</option>
        <option defaultValue="end-to-end">end-to-end</option>
        <option defaultValue="systems">systems</option>
        <option defaultValue="e-tailers">e-tailers</option>
        <option defaultValue="models">models</option>
      </Select>
    </Container>
  );
};
