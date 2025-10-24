import { Route, Routes } from 'react-router-dom';

import { LinkExpiredPage } from './pages/LinkExpiredPage';
import { LoginPage } from './pages/LoginPage';
import { UploadPage } from './pages/UploadPage';
import { VerifyPage } from './pages/VerifyPage';
import { GlobalStyle } from './style';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/link-expired" element={<LinkExpiredPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
    </>
  );
};
