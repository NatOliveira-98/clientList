import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

import bgMobile from '../../assets/bg-header-mobile.svg';
import bgDesktop from '../../assets/bg-header-desktop.svg';

const Container = styled.div`
  padding: 7rem 0;

  background-color: ${({ theme }) => theme.colors.desaturated_cyan};
  background-image: url(${bgMobile});

  filter: opacity(0.8);

  z-index: -1;

  @media ${device.tablet} {
    background-image: url(${bgDesktop});
  }
`;

export { Container };
