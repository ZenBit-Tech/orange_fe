import { LinkExpired } from 'components';
import { useTranslation } from 'react-i18next';

import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

import { PageWrapper } from '../LoginPage/styles';

export const LinkExpiredPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t('LinkExpiredPage.meta-title')}</title>
      <meta name="description" content={t('LinkExpiredPage.meta-description')} />
      <meta name="robots" content="noindex, nofollow" />
      <Nav />
      <PageWrapper>
        <LinkExpired />
      </PageWrapper>
      <Footer />
    </div>
  );
};
