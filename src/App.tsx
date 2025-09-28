import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages';
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
