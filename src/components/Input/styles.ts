import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto 1.5rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.light_gray_3};
  border-radius: 8px;

  box-shadow: 0 4px 1.8rem ${({ theme }) => theme.colors.desaturated_cyan_alpha};

  z-index: 1;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.desaturated_cyan};
    outline-offset: 2px;
  }

  label {
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

  input {
    width: 100%;
    height: 3rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.light_gray_3};

    color: ${({ theme }) => theme.colors.very_dark_gray};

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark_gray};
    }
  }
`;

export { Container };
