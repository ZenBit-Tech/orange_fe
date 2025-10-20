import { Route, Routes } from 'react-router-dom';

import { PrivacyPolicyPage } from '@/pages/LegalPages/PrivacyPolicyPage';
import { TermsPage } from '@/pages/LegalPages/TermsPage';
import { LinkExpiredPage } from '@/pages/LinkExpiredPage';
import { LoginPage } from '@/pages/LoginPage';
import { GlobalStyle } from '@/style';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/link-expired" element={<LinkExpiredPage />} />
      </Routes>
    </>
  );
};
