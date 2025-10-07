import { Nav } from '@/components/Nav';
import { PageWrapper } from '../LoginPage/styles';
import { LinkExpired } from 'components';
import { Footer } from '@/components/Footer';


export const LinkExpiredPage: React.FC = () => {
  return (
    <div>
        <Nav />
          <PageWrapper>
            <LinkExpired  />
          </PageWrapper>
        <Footer />
    </div>
  );
};
