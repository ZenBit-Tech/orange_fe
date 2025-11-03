import { PageLayout } from '@/components/Layout';
import { MainContent } from '@/components/MainContent';
import { PrivacySection } from '@/components/PrivacySection';

export const HomePage: React.FC = () => {
  return (
    <PageLayout transparentNav={false}>
      <MainContent />
      <PrivacySection />
    </PageLayout>
  );
};
