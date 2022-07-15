import { createGlobalStyle } from 'styled-components';
import { MyTheme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: MyTheme }>`
  /* RESET */ 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  input, button {
    border: none;
    outline: none;

    transition: all 0.3s;
  }

  button {
    cursor: pointer;
  }

  /* GLOBAL */
  body {
    background-color: ${({ theme }) => theme.colors.light_gray_1};
    -webkit-font-smoothing: antialiased;
  }

  body * {
    font-size: 1.5rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
  }

  button:hover {
    filter: brightness(0.98);
  }
`;
