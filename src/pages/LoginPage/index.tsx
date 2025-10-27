import { LoginForm } from 'components';

import { PageLayout } from '@/components/Layout';
import { PageWrapper } from '@/pages/LoginPage/styles';

export const LoginPage: React.FC = () => {
  return (
    <PageLayout>
      <PageWrapper>
        <LoginForm />
      </PageWrapper>
    </PageLayout>
  );
};
