import { StrictMode } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import 'i18n';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, useAppSelector } from 'store';

import { App } from './App';
import { createAppTheme } from './theme/theme';

const ThemedApp = () => {
  const isDarkMode = useAppSelector((state) => state.darkTheme.isBlackTheme);
  const theme = createAppTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemedApp />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
