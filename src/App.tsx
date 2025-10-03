import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import {LinkExpiredPage} from './pages/LinkExpiredPage';
import { GlobalStyle } from './style';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/link-expired' element={<LinkExpiredPage />} />
      </Routes>
    </>
  );
};