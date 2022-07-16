import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto 1.5rem;
  padding: 1.67rem 1rem;

  background-color: ${({ theme }) => theme.colors.light_gray_3};
  border-radius: 8px;

  box-shadow: 0 4px 1.8rem ${({ theme }) => theme.colors.desaturated_cyan_alpha};

  z-index: 1;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.desaturated_cyan};
    outline-offset: 2px;
  }

  &:hover {
    filter: brightness(1.1);
  }

  > label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

const Select = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_gray_3};

  option {
    background-color: ${({ theme }) => theme.colors.light_gray_3};
  }
`;

export { Container, Select };
