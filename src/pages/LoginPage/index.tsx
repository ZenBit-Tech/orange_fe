import { useTranslation } from 'react-i18next';

import { LoginForm } from '@/pages';
import { PageWrapper } from '@/pages/LoginPage/styles';
import { PageLayout } from '@/utils/Layout';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout auth={true}>
      <title>{t('LoginPage.meta-title')}</title>
      <meta name="description" content={t('LoginPage.meta-description')} />
      <PageWrapper>
        <LoginForm />
      </PageWrapper>
    </PageLayout>
  );
};
