import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { WrapperForm } from './styles';
import { useExampleWorkForm } from './useExampleWorkForm';


export const ExampleWorkForm: React.FC = () => {
  const { register, handleSubmit, errors, t, onSubmit } = useExampleWorkForm();

  return (
    <WrapperForm
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label={t('Form.welcome-form.email')}
        type="email"
        variant="outlined"
        {...register('email', {
          required: t('Form.welcome-form.email_required') as string,
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label={t('Form.welcome-form.message')}
        variant="outlined"
        multiline
        rows={3}
        {...register('message', {
          required: t('Form.welcome-form.message_required') as string,
        })}
        error={!!errors.message}
        helperText={errors.message?.message}
        fullWidth
      />

      <Button type="submit" variant="contained">
        {t('Form.welcome-form.submit')}
      </Button>
    </WrapperForm>
  );
};