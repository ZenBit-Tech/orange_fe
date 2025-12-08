import { CiClock2 } from 'react-icons/ci';

import { t } from 'i18next';

import { BtnSubmit } from '@/pages/LoginPage/components/LoginForm/styles';

import { CenteredText, Description, Title, WrapperForm } from './styles';
import { useLinkExpired } from './useLinkExpired';

export const LinkExpired: React.FC = () => {
  const { handleNavigate } = useLinkExpired();

  return (
    <WrapperForm>
      <CiClock2 />
      <CenteredText>
        <Title variant="h5">{t('Form.login-form.linkExpiredTitle')}</Title>
        <Description variant="body1">{t('Form.login-form.linkExpiredSubtitle')}</Description>
      </CenteredText>

      <BtnSubmit type="button" onClick={handleNavigate}>
        {t('Form.login-form.resendLink')}
      </BtnSubmit>
    </WrapperForm>
  );
};

export default LinkExpired;
