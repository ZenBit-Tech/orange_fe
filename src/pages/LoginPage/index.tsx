import { LoginForm } from 'components';
import { useTranslation } from 'react-i18next';

import { PageLayout } from '@/components/Layout';
import { PageWrapper } from '@/pages/LoginPage/styles';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <title>{t('LoginPage.meta-title')}</title>
      <meta name="description" content={t('LoginPage.meta-description')} />
      <PageWrapper>
        <LoginForm />
      </PageWrapper>
    </PageLayout>
  );
};
