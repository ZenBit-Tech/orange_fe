import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export type LoginFormInputs = {
  email: string;
  message: string;
};

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { t } = useTranslation();

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Form Data:', data);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    t,
    onSubmit,
  };
};
