import { GlobalStyles } from '@mui/material';

import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  LinkExpiredPage,
  LoginPage,
  PrivacyPolicyPage,
  TermsPage,
  UploadPage,
  VerifyPage,
} from '@/pages';

import { AuthVerify } from './components/AuthVerify';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import { globalStyle } from './style';

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
