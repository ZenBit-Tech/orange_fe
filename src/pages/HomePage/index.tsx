import { useTranslation } from 'react-i18next';

import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { HowItWorks } from '@/components/How-it-works';
import { PageLayout } from '@/components/Layout';
import { MainContent } from '@/components/MainContent';
import { PrivacySection } from '@/components/PrivacySection';

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
