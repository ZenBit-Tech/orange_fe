import { PageWrapper } from './styles';

import { LoginForm } from 'components';
import Footer from "components/Footer";
import Nav from "components/Nav";
export const LoginPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <div>
      
      <PageWrapper>
        <LoginForm  />
      </PageWrapper>
      </div>

    <Footer />
    </div>
  );
};
