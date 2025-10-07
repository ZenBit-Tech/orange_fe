import React from "react";
import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { LoginFormInputs } from "@/components/LoginForm/useLoginForm"; 
import { theme } from "@theme";

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField {...props} fullWidth id="outlined-basic" label="Email" variant="outlined" />
))`
  && {
    .MuiOutlinedInput-root {
      height: 40px;
      border-radius: 10px;
      align-items: center;
      input {
        
        height: 100%;
        padding: 0 14px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      }

      fieldset {
        transition: border-color 0.2s ease;
      }

      &:hover fieldset {
        border-color: ${theme.palette.loginColors.border};
      }

      &.Mui-focused fieldset {
        border-color: ${theme.palette.loginColors.border};
        border-width: 2px;
      }
    }

    .MuiInputLabel-root {
      color: ${theme.palette.text.secondary};
      transform: translate(14px, 10px) scale(1);
      transition: all 0.2s ease;
    }

    .MuiInputLabel-root.Mui-focused,
    .MuiInputLabel-root.MuiFormLabel-filled {
      color: ${theme.palette.common.black};
      transform: translate(8px, -8px) scale(0.85);
      padding: 0 4px;
    }
  }
`;
interface EmailFieldProps {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
  t: (key: string) => string;
}

export const EmailField: React.FC<EmailFieldProps> = ({ register, errors, t }) => {
  return (
    <StyledTextField
      type="email"
      error={!!errors.email}
      helperText={errors.email?.message}
      {...register("email", {
        required: t("Form.login-form.email_required") as string,
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email regex
          message: t("Form.login-form.email_invalid") as string,
        },
      })}
    />
  );
};