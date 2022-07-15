import CupcakePlaceholder from '../../assets/cupcake_placeholder.jpg';
import { FiPhone, FiMail, FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

export const Client = () => {
  return (
    <Container>
      <img src={CupcakePlaceholder} alt="Foto de cliente X" />

      <div className="client-info-container">
        <strong>Kiramman's bakery</strong>
        <h2>Caitlyn 'Cupcake' Kiramman </h2>

        <div className="line-separator"></div>

        <div className="client-contact-container">
          <span>
            <FiPhone />
            1-770-736-8031 x56442
          </span>

          <span>
            <FiMail />
            cupcake@kirammansbakeryteam.com
          </span>
        </div>

        <div className="line-separator"></div>

        <div className="type-of-service">Bakery</div>
      </div>

      <FiChevronRight size={20} className="icon-go-top-page" />
    </Container>
  );
};
