import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color:${({ theme }) => theme.fontsColors.secondary};
}

`;

export default GlobalStyles;
