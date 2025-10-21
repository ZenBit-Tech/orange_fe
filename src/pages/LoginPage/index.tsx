import { LoginForm } from 'components';
import { PageLayout } from 'components/Layout/PageLayout';

import { ContentWrapper } from '@/pages/LoginPage/styles';

export const LoginPage: React.FC = () => {
  return (
    <PageLayout>
      <ContentWrapper>
        <LoginForm />
      </ContentWrapper>
    </PageLayout>
  );
};
