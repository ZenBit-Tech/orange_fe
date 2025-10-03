import React from "react";
import { Typography, useTheme  } from "@mui/material";

import { WrapperForm, StyledDivider, CenteredText, BtnSubmit } from './styles';
import { useLoginForm } from './useLoginForm';

import SocialLoginButton from '../SocialLoginButton';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import EmailField from '../RoundedInput';
import { emailRegex } from '../../constants/validation';

import { theme } from '@theme';

export const LoginForm: React.FC = () => {
  const { register, handleSubmit,watch, errors, t, onSubmit } = useLoginForm();
  const emailValue = watch('email') || '';
  const theme = useTheme();

  const handleGoogleLogin = () => {
    // Implement Google login logic here
  }
  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
  }
  const handleLinkedinLogin = () => {
    // Implement Linkedin login logic here
  }
  
  
  const isEmailValid = emailRegex.test(emailValue);
  return (
    <WrapperForm
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CenteredText>
        <h1>{t('Form.login-form.title')}</h1>
        <p>{t('Form.login-form.subtitle')}</p>
      </CenteredText>


      <SocialLoginButton icon={<FcGoogle />} label={t('Form.login-form.loginWithGoogle')} onClick={handleGoogleLogin}  />
      <SocialLoginButton icon={<FaFacebook color={theme.palette.custom.facebook}  onClick={handleFacebookLogin} />} label={t('Form.login-form.loginWithFacebook')}  />
      <SocialLoginButton icon={<FaLinkedin color={theme.palette.custom.linkedin} onClick={handleLinkedinLogin} />} label={t('Form.login-form.loginWithLinkedin')}  />

      <StyledDivider>
        <Typography variant="body2" sx={{ color: theme.palette.custom.textGray }}>
           {t('Form.login-form.or')}
        </Typography>
      </StyledDivider>

      <EmailField  register={register} errors={errors} t={t} />



      <BtnSubmit type="submit" disabled={!isEmailValid} >
        {t('Form.login-form.submit')}
      </BtnSubmit>
    </WrapperForm>
  );
};