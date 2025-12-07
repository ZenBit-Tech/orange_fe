import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useSendMagicLinkMutation } from '@/store/authApi';

import type { LoginFormInputs } from './types';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [sendMagicLink, { isSuccess }] = useSendMagicLinkMutation();

  const { t } = useTranslation();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await sendMagicLink(data).unwrap();
    } catch (error) {
      console.error('Error sending magic link', error);
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    t,
    onSubmit,
    isSuccess,
  };
};
