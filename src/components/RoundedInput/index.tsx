import { RoundedInput } from "./styles";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { LoginFormInputs } from "../LoginForm/useLoginForm"; // import the existing type

interface EmailFieldProps {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
  t: (key: string) => string;
}

export default function EmailField({
  register,
  errors,
  t,
}: EmailFieldProps) {
  return (
    <RoundedInput
      placeholder={t("Form.login-form.email")}
      type="email"
      variant="outlined"
      fullWidth
      {...register("email", {
        required: t("Form.login-form.email_required") as string,
      })}
      error={!!errors.email}
      helperText={errors.email?.message}
      InputLabelProps={{ shrink: false }}
    />
  );
}