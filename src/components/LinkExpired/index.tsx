import React from 'react';
import { useTranslation } from 'react-i18next';

import { WrapperForm, CenteredText, BtnSubmit } from '@/components/LoginForm/styles';

export const LinkExpired: React.FC = () => {
  const { t } = useTranslation();

  const handleRequestNewLink = () => {
    //  implement request logic
  };

  return (
    <WrapperForm component="div" aria-labelledby="link-expired-title">
      <CenteredText>
        <h5 id="link-expired-title">{t('Form.login-form.linkExpiredTitle')}</h5>
        <p>{t('Form.login-form.linkExpiredSubtitle')}</p>
      </CenteredText>

      <BtnSubmit type="button" onClick={handleRequestNewLink}>
        {t('Form.login-form.resendLink')}
      </BtnSubmit>
    </WrapperForm>
  );
};

export default LinkExpired;