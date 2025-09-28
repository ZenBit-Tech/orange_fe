import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type ExampleWorkFormInputs = {
  email: string;
  message: string;
};

export const useExampleWorkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleWorkFormInputs>();
  const { t } = useTranslation();

  const onSubmit = (data: ExampleWorkFormInputs) => {
    console.log('Form Data:', data);
  };

  return {
    register,
    handleSubmit,
    errors,
    t,
    onSubmit,
  };
};
