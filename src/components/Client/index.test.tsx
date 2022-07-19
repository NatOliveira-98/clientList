import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import { Client } from '.';

describe('Client component', () => {
  const clients = [
    {
      name: 'Test name',
      username: 'Test username',
      phone: '(034) 08001',
      email: 'test@email.com',
      company: {
        name: 'Test Company name',
      },
    },
    {
      name: 'Test name2',
      username: 'Test username2',
      phone: '(034) 08002',
      email: 'test2@email.com',
      company: {
        name: 'Test Company name2',
      },
    },
  ];
  const avatar = 'testAvatarPlaceholder.jpg';

  it('should render a list of contacts', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        {clients.map((client, index) => (
          <Client
            key={String(index)}
            data={client}
            avatarPlaceholder={avatar}
          />
        ))}
      </ThemeProvider>,
    );

    expect(getByText('Test name')).toBeInTheDocument();
  });

  it('should open modal with email options', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        {clients.map((client, index) => (
          <Client
            key={String(index)}
            data={client}
            avatarPlaceholder={avatar}
          />
        ))}
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(/test@email.com/i));

    await waitFor(() => {
      expect(getByText('Gmail')).toBeInTheDocument();
      expect(getByText('Outlook')).toBeInTheDocument();
      expect(getByText('Yahoo Mail')).toBeInTheDocument();
      expect(getByText('default')).toBeInTheDocument();
    });
  });

  it('should open modal with phone options', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        {clients.map((client, index) => (
          <Client
            key={String(index)}
            data={client}
            avatarPlaceholder={avatar}
          />
        ))}
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(/.*(08001)/i));

    await waitFor(() => {
      expect(getByText('WhatsApp')).toBeInTheDocument();
      expect(getByText('Skype')).toBeInTheDocument();
      expect(getByText('default')).toBeInTheDocument();
    });
  });
});
