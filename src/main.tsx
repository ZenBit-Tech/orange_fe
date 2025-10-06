import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@theme";
import 'i18n';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
  </ThemeProvider>,
);