import { CiClock2 } from 'react-icons/ci';

import { t } from 'i18next';

import { BtnSubmit } from '@/pages/LoginPage/components/LoginForm/styles';

import { CenteredText, WrapperForm } from './styles';
import { useLinkExpired } from './useLinkExpired';

export const LinkExpired: React.FC = () => {
  const { handleNavigate } = useLinkExpired();

  return (
    <WrapperForm component="div" aria-labelledby="link-expired-title">
      <CiClock2 />
      <CenteredText>
        <h5 id="link-expired-title">{t('Form.login-form.linkExpiredTitle')}</h5>
        <p>{t('Form.login-form.linkExpiredSubtitle')}</p>
      </CenteredText>

      <BtnSubmit type="button" onClick={handleNavigate}>
        {t('Form.login-form.resendLink')}
      </BtnSubmit>
    </WrapperForm>
  );
};

export default LinkExpired;
