import { HorizontalLinearStepper } from '@/components/HorizontalLinearStepper';
import { PageLayout } from '@/components/Layout';

import { WrapperContent } from './styles';

export const UploadPage: React.FC = () => {
  return (
    <PageLayout>
      <WrapperContent>
        <HorizontalLinearStepper />
      </WrapperContent>
    </PageLayout>
  );
};
