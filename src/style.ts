import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  font-family:Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

}

a {
  text-decoration: inherit;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}
`;

export const GlobalSubtitle = createGlobalStyle`
  p {
    color: #101828
    font-size: 16px;
    font-weight: 400;
  }
`;
export const GlobalTitle = createGlobalStyle`
  p {
    color: #000000
    font-size: 24px;
    font-weight: 400;
  }
`;
