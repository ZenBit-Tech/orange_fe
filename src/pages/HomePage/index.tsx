import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { HowItWorks } from '@/components/How-it-works';
import { PageLayout } from '@/components/Layout';
import { MainContent } from '@/components/MainContent';
import { PrivacySection } from '@/components/PrivacySection';

export const HomePage: React.FC = () => {
  return (
    <PageLayout transparentNav={false}>
      <MainContent />
      <About />
      <HowItWorks />
      <PrivacySection />
      <FAQ />
    </PageLayout>
  );
};
