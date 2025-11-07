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

import { ProtectedRoute } from './components/ProtectedRoute';
import { GlobalStyle } from './style';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
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
