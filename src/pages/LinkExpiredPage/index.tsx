import { useTranslation } from 'react-i18next';

import { PageLayout } from '@/components/Layout';

import { LinkExpired } from './components/LinkExpired';

export const LinkExpiredPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout auth={true}>
      <title>{t('LinkExpiredPage.meta-title')}</title>
      <meta name="description" content={t('LinkExpiredPage.meta-description')} />
      <meta name="robots" content="noindex, nofollow" />
      <LinkExpired />
    </PageLayout>
  );
};
