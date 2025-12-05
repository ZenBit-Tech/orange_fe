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
  const { t, isLoading, isSuccess, isError } = useVerify();
  const getStatusComponent = () => {
    if (isLoading) {
      return <LoadingText>{t('Verify.loading')}</LoadingText>;
    }

    if (isError) {
      return <ErrorText>{t('Verify.error-text')}</ErrorText>;
    }

    if (isSuccess) {
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
