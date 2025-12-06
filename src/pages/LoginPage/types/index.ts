import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export type LoginFormInputs = {
  email: string;
  message: string;
};

export type SocialLoginButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  linkPath?: string;
};

export interface EmailFieldProps {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
  t: (key: string) => string;
}
