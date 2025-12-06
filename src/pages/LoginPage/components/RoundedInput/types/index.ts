import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { LoginFormInputs } from '@/pages/LoginPage/components/LoginForm/types';

export interface EmailFieldProps {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
  t: (key: string) => string;
}
