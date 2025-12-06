import { useTranslation } from 'react-i18next';

import { HorizontalLinearStepper } from '@/components/HorizontalLinearStepper';
import { PageLayout } from '@/utils/Layout';

import { WrapperContent } from './styles';

export const UploadPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout transparentNav={true} auth={true}>
      <title>{t('UploadPage.meta-title')}</title>
      <meta name="description" content={t('UploadPage.meta-description')} />
      <WrapperContent>
        <HorizontalLinearStepper />
      </WrapperContent>
    </PageLayout>
  );
};
