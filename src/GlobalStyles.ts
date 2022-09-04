import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`${css`
  :root {
    --background: hsl(207, 26%, 17%);
    --text: hsl(0, 0%, 100%);
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`}`;
