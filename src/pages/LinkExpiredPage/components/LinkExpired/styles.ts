import { Box, Typography, styled } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';

export const WrapperForm = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 600px;
  background: ${theme.palette.backgrounds.white};
  border-radius: 20px;
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  padding: 32px 50px;
  margin: 40px auto;

  svg {
    font-size: 48px;
    color: ${theme.palette.textIcons.textPrimary};
  }
`;

export const CenteredText = styled('div')`
  text-align: center;
`;

export const Title = styled(Typography)`
  margin: 0;
  line-height: 1.33;
  font-weight: ${theme.typography.weights.weight500} !important;
  color: ${theme.palette.textIcons?.textPrimary};
`;

export const Description = styled(Typography)`
  margin: 8px 0 0;
  color: ${theme.palette.textIcons?.textPrimary};
`;
