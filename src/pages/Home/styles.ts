import styled from 'styled-components';

import bgMobile from '../../assets/bg-header-mobile.svg';

const Container = styled.div`
  width: 100%;
`;

const HeaderBG = styled.div`
  padding: 7rem 0;

  background-color: ${({ theme }) => theme.colors.desaturated_cyan};
  background-image: url(${bgMobile});
`;

const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  margin-top: -2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export { Container, HeaderBG, Main };
