import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  padding: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.light_gray_3};

  background-color: ${({ theme }) => theme.colors.desaturated_cyan};
  border-radius: 9999px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.desaturated_cyan};
    outline-offset: 3px;
  }
`;

export { Container };
