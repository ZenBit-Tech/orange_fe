import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const CenteredContent = styled(Box)({
  textAlign: 'center',
});

export const LoadingText = styled(Typography)({
  fontSize: '1.125rem',
  marginTop: '80px',
});

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  color: theme.palette.error.main,
  marginTop: '80px',
}));

export const SuccessText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  color: theme.palette.success.main,
  marginTop: '80px',
}));

export const StatusText = styled(Typography)({
  fontSize: '1.125rem',
  marginTop: '80px',
});
