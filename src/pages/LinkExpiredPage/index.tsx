import { LinkExpired } from 'components';

import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

import { PageWrapper } from '../LoginPage/styles';

export const LinkExpiredPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <PageWrapper>
        <LinkExpired />
      </PageWrapper>
      <Footer />
    </div>
  );
};
