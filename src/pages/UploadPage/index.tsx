import Footer from '@/components/Footer';
import { HorizontalLinearStepper } from '@/components/HorizontalLinearStepper';
import Nav from '@/components/Nav';

import { PageContainer, WrapperContent } from './styles';

export const UploadPage: React.FC = () => {
  return (
    <PageContainer>
      <Nav transparent />
      <WrapperContent>
        <HorizontalLinearStepper />
      </WrapperContent>
      <Footer transparent />
    </PageContainer>
  );
};
