import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  body {
    margin:0 auto;
  }

  button {
    font-family: inherit;
  }
`;
export default GlobalStyle;
