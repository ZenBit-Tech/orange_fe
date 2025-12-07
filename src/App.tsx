import { GlobalStyles } from '@mui/material';

import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage/index.tsx';
import PrivacyPolicyPage from './pages/LegalPages/PrivacyPolicyPage';
import TermsPage from './pages/LegalPages/TermsPage';
import { LinkExpiredPage } from './pages/LinkExpiredPage';
import { LoginPage } from './pages/LoginPage';
import { UploadPage } from './pages/UploadPage';
import { VerifyPage } from './pages/VerifyPage';
import { AuthVerify } from './pages/VerifyPage/components/AuthVerify';
import { globalStyle } from './style';
import { useAuth } from './utils/AuthVerify/useAuth';
import { ProtectedRoute } from './utils/ProtectedRoute';

export const App: React.FC = () => {
  useAuth();
  return (
    <>
      <GlobalStyles styles={globalStyle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth-verify" element={<AuthVerify />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/link-expired" element={<LinkExpiredPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/upload" element={<UploadPage />} />
        </Route>
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
    </>
  );
};
