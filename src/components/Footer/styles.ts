import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';
import { styled } from 'styled-components';

export const Wrapper = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  font-family: ${theme.typography.h5?.fontFamily};
  font-size: ${theme.typography.body2?.fontSize};
  font-weight: ${theme.typography.fontWeightLight};
  color: ${theme.palette.loginColors.subtitleColor1};
  a {
    color: ${theme.palette.loginColors.subtitleColor1};
    text-decoration: none;

    &:hover {
      color: ${theme.palette.globalColors.primaryGreen};
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;
