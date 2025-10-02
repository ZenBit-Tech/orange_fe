import { HomePage } from 'pages';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './style';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
};