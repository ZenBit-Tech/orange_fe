import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { theme } from '@theme';

export const WrapperContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const CenteredContent = styled(Box)`
  align-items: center;
  h2 {
    font-size: ${theme.typography.sizes.size96};
  }
`;

export const LoadingText = styled(Typography)`
  display: flex;
  justify-content: center;
  font-size: ${theme.typography.sizes.size16};
`;

export const ErrorText = styled(Typography)`
  font-size: ${theme.typography.sizes.size16};
  color: ${theme.palette.error.main};
  margin-top: '80px';
  display: flex;
  justify-content: center;
`;

export const SuccessText = styled(Typography)`
  font-size: ${theme.typography.sizes.size16};
  color: ${theme.palette.success.main};
  margin-top: '80px';
  display: flex;
  justify-content: center;
`;

export const StatusText = styled(Typography)`
  font-size: ${theme.typography.sizes.size16};
  margin-top: '80px';
  display: flex;
  justify-content: center;
`;
