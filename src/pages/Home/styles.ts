import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

const Container = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  margin-top: -2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .search-container {
    display: flex;
    align-items: center;
    gap: 2rem;

    div:nth-child(1) {
      flex: 2;
    }

    div:nth-child(2) {
      flex: 1;
    }
  }

  .scrollable-area {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    height: 690px;
    padding: 5px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.desaturated_cyan};
      border-radius: 9999px;
    }

    /* Firefox */
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.colors.desaturated_cyan} transparent;

    > button:nth-child(1) {
      margin-top: 2.1rem;
    }
  }

  @media ${device.tablet} {
    .scrollable-area {
      gap: 2rem;

      > button:nth-child(1) {
        margin-top: 0;
      }
    }
  }

  @media ${device.laptop_m} {
    max-width: 1024px;
  }
`;

export { Container, Main };
