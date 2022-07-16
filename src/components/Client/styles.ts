import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.button`
  position: relative;

  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.light_gray_3};
  border-radius: 8px;

  box-shadow: 0 6px 9px ${({ theme }) => theme.colors.desaturated_cyan_alpha};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.desaturated_cyan};
    outline-offset: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;

    width: 0px;
    height: 100%;
    transform: translateX(-1px);
    transform: translateY(-40px);

    transition: all 0.3s;

    background-color: ${({ theme }) => theme.colors.desaturated_cyan};
    border-radius: 8px 0 0 8px;
  }

  &:hover::before {
    width: 5px;
    transform: translateX(0px);
    transform: translateY(-40px);
  }

  img {
    position: absolute;
    top: -2.5rem;

    width: 5rem;
    height: 5rem;

    border-radius: 50%;
    object-fit: cover;
  }

  .client-info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    strong {
      color: ${({ theme }) => theme.colors.desaturated_cyan};
      font-weight: 700;
    }

    h2 {
      color: ${({ theme }) => theme.colors.very_dark_gray};
      font-weight: 700;
      font-size: 1.8rem;

      transition: color 0.3s;

      span {
        color: ${({ theme }) => theme.colors.dark_gray};
        font-size: 1.5rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.desaturated_cyan};
      }
    }
  }

  .line-separator {
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.dark_gray};
  }

  .client-contact-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    margin-top: 4px;

    span {
      display: flex;
      align-items: center;
      gap: 5px;

      color: ${({ theme }) => theme.colors.dark_gray};

      transition: all 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .icon-go-top-page {
    display: none;
  }

  @media ${device.tablet} {
    padding: 3rem 5rem;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      position: relative;
      top: auto;

      width: 7rem;
      height: 7rem;
    }

    &::before {
      transform: translateY(0);
    }

    &:hover::before {
      transform: translateY(0);
    }

    .client-info-container {
      flex: 1;
    }

    .line-separator {
      display: none;
    }

    .client-contact-container {
      flex-direction: row;
      gap: 1rem;
    }

    .icon-go-top-page {
      display: block;
      color: ${({ theme }) => theme.colors.desaturated_cyan};

      transition: all 0.3s;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;

export { Container };
