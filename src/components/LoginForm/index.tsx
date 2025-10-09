import React from 'react';

import { useTheme } from '@mui/material';

import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { EmailField } from '@/components/RoundedInput';
import SocialLoginButton from '@/components/SocialLoginButton';
import { emailRegex } from '@/constants/validation';

import {
  BtnSubmit,
  CenteredText,
  DividerContainer,
  Line,
  Terms,
  Text,
  WrapperForm,
} from './styles';
import { useLoginForm } from './useLoginForm';

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, watch, errors, t, onSubmit } = useLoginForm();
  const emailValue = watch('email') || '';
  const theme = useTheme();

  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_AUTH;
  };
  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
  };
  const handleLinkedinLogin = () => {
    // Implement Linkedin login logic here
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
        onClick={handleGoogleLogin}
      />
      <SocialLoginButton
        icon={
          <FaFacebook color={theme.palette.iconColors.facebook} onClick={handleFacebookLogin} />
        }
        label={t('Form.login-form.loginWithFacebook')}
      />
      <SocialLoginButton
        icon={
          <FaLinkedin color={theme.palette.iconColors.linkedin} onClick={handleLinkedinLogin} />
        }
        label={t('Form.login-form.loginWithLinkedin')}
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

      <Terms>{t('Form.login-form.terms')}</Terms>
    </WrapperForm>
  );
};
