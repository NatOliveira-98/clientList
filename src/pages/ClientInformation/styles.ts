import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.colors.very_dark_gray};
`;

const Main = styled.main`
  width: 90%;
  margin: 3rem auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  div.go-back {
    position: relative;

    a {
      display: flex;
      align-items: center;
      gap: 5px;

      color: ${({ theme }) => theme.colors.desaturated_cyan};

      &:focus {
        &::after {
          content: '';
          width: 6.4rem;
          height: 1px;

          position: absolute;
          bottom: -1px;
          left: 3px;

          background-color: ${({ theme }) => theme.colors.desaturated_cyan};
        }
      }
    }
  }

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.laptop_m} {
    max-width: 900px;
  }
`;

const ClientContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.light_gray_3};
  border-radius: 8px;

  box-shadow: 0 6px 1.8rem ${({ theme }) => theme.colors.desaturated_cyan_alpha};

  h2 {
    color: ${({ theme }) => theme.colors.desaturated_cyan};
    font-size: 2.3rem;
    font-weight: 700;

    margin-bottom: 2rem;
  }

  @media ${device.tablet} {
    padding: 3rem 4rem;
  }

  @media ${device.laptop_m} {
    padding: 5rem 6rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2rem;

  .client-name-user {
    display: flex;
    flex-direction: column;
    gap: 3px;

    p:nth-child(2) {
      color: ${({ theme }) => theme.colors.dark_gray};
      font-size: 1.4rem;
    }
  }

  .client-address {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .client-address {
      align-items: flex-end;
    }
  }
`;

const ClientContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-bottom: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.dark_gray};
    font-weight: 700;

    margin-bottom: 1rem;
  }
`;

const ClientCompany = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.dark_gray};
    font-weight: 700;

    margin-bottom: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light_gray_3};
  border-radius: 8px;

  box-shadow: 0 6px 1.8rem ${({ theme }) => theme.colors.desaturated_cyan_alpha};

  button {
    align-self: flex-end;
    max-width: 40%;
  }
`;

export {
  Container,
  Main,
  ClientContainer,
  ClientInfo,
  ClientContact,
  ClientCompany,
  ButtonsContainer,
};
