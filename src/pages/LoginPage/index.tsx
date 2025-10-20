import { LoginForm } from 'components';
import Footer from 'components/Footer';
import Nav from 'components/Nav';

import { ContentWrapper, PageWrapper } from '@/pages/LoginPage/styles';

export const LoginPage: React.FC = () => {
  return (
    <PageWrapper>
      <Nav />
      <ContentWrapper>
        <LoginForm />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};
