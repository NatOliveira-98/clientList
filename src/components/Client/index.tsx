import { ButtonHTMLAttributes, useEffect } from 'react';
import mailgo, { MailgoConfig } from 'mailgo';

import { FiPhone, FiMail } from 'react-icons/fi';
import AvatarPlaceholder from '../../assets/avatar_placeholder.svg';

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

const mailgoConfig: MailgoConfig = {
  dark: false,
};

export const Client = ({ data, ...rest }: ClientProps) => {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  return (
    <Container>
      <img src={AvatarPlaceholder} alt={`Foto de cliente ${data.name}`} />

      <div className="client-info-container">
        <strong>{data.company.name}</strong>
        <h2>
          {data.name} <span>({data.username})</span>
        </h2>

        <div className="line-separator"></div>

        <div className="client-contact-container">
          <span>
            <FiPhone />
            <a
              href={`tel:${data.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.phone}
            </a>
          </span>

          <span>
            <FiMail />
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.email}
            </a>
          </span>
        </div>
      </div>
    </Container>
  );
};
