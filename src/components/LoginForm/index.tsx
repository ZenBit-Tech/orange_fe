import React from 'react';

import { useTheme } from '@mui/material';

import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Link } from 'react-router-dom';

import {
  BtnSubmit,
  CenteredText,
  DividerContainer,
  Line,
  Terms,
  Text,
  WrapperForm,
} from '@/components/LoginForm/styles';
import { EmailField } from '@/components/RoundedInput';
import SocialLoginButton from '@/components/SocialLoginButton';
import { emailRegex } from '@/constants/validation';

import { useLoginForm } from './useLoginForm';

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, watch, errors, t, onSubmit } = useLoginForm();
  const emailValue = watch('email') || '';
  const theme = useTheme();

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
  };

  const isEmailValid = emailRegex.test(emailValue);
  return (
    <WrapperForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <CenteredText>
        <h5>{t('Form.login-form.title')}</h5>
        <p>{t('Form.login-form.subtitle')}</p>
      </CenteredText>

      <SocialLoginButton
        icon={<FcGoogle />}
        label={t('Form.login-form.loginWithGoogle')}
        linkPath={import.meta.env.VITE_GOOGLE_AUTH}
      />

      <SocialLoginButton
        onClick={handleFacebookLogin}
        icon={<FaFacebook color={theme.palette.iconColors.facebook} />}
        label={t('Form.login-form.loginWithFacebook')}
      />

      <SocialLoginButton
        icon={<FaLinkedin color={theme.palette.iconColors.linkedin} />}
        label={t('Form.login-form.loginWithLinkedin')}
        linkPath={import.meta.env.VITE_LINKEDIN_AUTH}
      />

      <DividerContainer direction="row">
        <Line />
        <Text variant="body1">{t('Form.login-form.or')}</Text>
        <Line />
      </DividerContainer>

      <EmailField register={register} errors={errors} t={t} />

      <BtnSubmit type="submit" disabled={!isEmailValid}>
        {t('Form.login-form.submit')}
      </BtnSubmit>
      <Terms>
        <span> {t('By continuing you agree to')} </span>
        <Link to="/privacy">{t('Form.login-form.privacyLink')}</Link>
        <span> {t('and')} </span>
        <Link to="/terms">{t('Form.login-form.termsLink')}</Link>
      </Terms>
    </WrapperForm>
  );
};
