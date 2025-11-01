import { PageLayout } from '@/components/Layout';
import { MainContent } from '@/components/MainContent';

export const HomePage: React.FC = () => {
  return (
    <PageLayout transparentNav={false}>
      <MainContent />
    </PageLayout>
  );
};
