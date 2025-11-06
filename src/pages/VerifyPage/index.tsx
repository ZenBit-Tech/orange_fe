import { useTranslation } from 'react-i18next';

import { Verify } from '@/components/Verify/index';

export const VerifyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t('VerifyPage.meta-title')}</title>
      <meta name="description" content={t('VerifyPage.meta-description')} />
      <meta name="robots" content="noindex, nofollow" />
      <Verify />
    </div>
  );
};
