import { ButtonHTMLAttributes } from 'react';

import { FiPhone, FiMail, FiChevronRight } from 'react-icons/fi';
import CupcakePlaceholder from '../../assets/cupcake_placeholder.jpg';

import { Container } from './styles';

type ClientProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: {
    name: string;
    username: string;
    phone: string;
    email: string;
    company: {
      name: string;
    };
  };
};

export const Client = ({ data, ...rest }: ClientProps) => {
  return (
    <Container>
      <img src={CupcakePlaceholder} alt="Foto de cliente X" />

      <div className="client-info-container">
        <strong>{data.company.name}</strong>
        <h2>
          {data.name} <span>({data.username})</span>
        </h2>

        <div className="line-separator"></div>

        <div className="client-contact-container">
          <span>
            <FiPhone />
            {data.phone}
          </span>

          <span>
            <FiMail />
            {data.email}
          </span>
        </div>
      </div>

      <FiChevronRight size={20} className="icon-go-top-page" />
    </Container>
  );
};
