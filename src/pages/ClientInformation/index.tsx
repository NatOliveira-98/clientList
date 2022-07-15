import { FiArrowLeft } from 'react-icons/fi';

import { HeaderBG } from '../../components/HeaderBG';
import { Button } from '../../components/Button';

import {
  Container,
  Main,
  ClientContainer,
  ClientInfo,
  ClientContact,
  ClientCompany,
  ButtonsContainer,
} from './styles';

export const ClientInformation = () => {
  return (
    <Container>
      <HeaderBG />

      <Main>
        <div className="go-back">
          <a href="#" className="go-back">
            <FiArrowLeft size={20} />
            Voltar
          </a>
        </div>

        <ClientContainer>
          <h2>Dados do cliente</h2>

          <ClientInfo>
            <div className="client-name-user">
              <p>Caitlyn Kiramman</p>
              <p>Cupcake</p>
            </div>

            <div className="client-address">
              <p>Kulas Light, Apt. 556</p>
              <p>Gwenborough</p>
              <p>92998-3874</p>
            </div>
          </ClientInfo>

          <ClientContact>
            <h3>Contato</h3>
            <p>1-770-736-8031 x56442</p>
            <p>cupcake@kirammansbakeryteam.com</p>
            <p>hildegard.org</p>
          </ClientContact>

          <ClientCompany>
            <h3>Empresa</h3>
            <p>Kiramman's bakery</p>
          </ClientCompany>
        </ClientContainer>

        <ButtonsContainer>
          <Button className="btn-one">Entrar em contato</Button>
        </ButtonsContainer>
      </Main>
    </Container>
  );
};
