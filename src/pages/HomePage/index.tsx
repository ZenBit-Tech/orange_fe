import { useTranslation } from 'react-i18next';

import { PageLayout } from '@/utils/Layout';

import { About, FAQ, HowItWorks, MainContent, PrivacySection } from './export';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout transparentNav={false}>
      <title>{t('HomePage.meta-title')}</title>
      <meta name="description" content={t('HomePage.meta-description')} />
      <MainContent />
      <About />
      <HowItWorks />
      <PrivacySection />
      <FAQ />
    </PageLayout>
  );
};
