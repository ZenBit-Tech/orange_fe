import {
  CenteredContent,
  ErrorText,
  LoadingText,
  StatusText,
  SuccessText,
  WrapperContainer,
} from './styles';
import { useVerify } from './useVerify';

export const Verify: React.FC = () => {
  const { isLoading, error, data, t } = useVerify();
  const getStatusComponent = () => {
    if (isLoading) {
      return <LoadingText>{t('Verify.loading')}</LoadingText>;
    }

    if (error) {
      const errorMessage =
        error && 'data' in error && typeof error.data === 'object'
          ? (error.data as any).message
          : t('Verify.error-text');
      return <ErrorText>{errorMessage}</ErrorText>;
    }

    if (data) {
      return <SuccessText>{t('Verify.success')}</SuccessText>;
    }

    return <StatusText>{t('Verify.status')}</StatusText>;
  };

  return (
    <WrapperContainer>
      <CenteredContent>
        <h2>{t('Verify.title')}</h2>
        {getStatusComponent()}
      </CenteredContent>
    </WrapperContainer>
  );
};
