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
