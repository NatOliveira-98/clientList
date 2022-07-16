import { Container, Select } from './styles';

export const Dropdown = () => {
  return (
    <Container>
      <label htmlFor="filter-companies">Filtre pelo tipo de serviço</label>

      <Select name="" id="filter-companies">
        <option value="" disabled selected hidden className="placeholder">
          Filtre pelo tipo de serviço
        </option>
        <option value="0">real-time</option>
        <option value="1">supply-chain</option>
        <option value="2">e-enable</option>
        <option value="3">applications</option>
        <option value="4">web services</option>
        <option value="5">end-to-end</option>
        <option value="6">systems</option>
        <option value="7">e-tailers</option>
        <option value="8">models</option>
      </Select>
    </Container>
  );
};
