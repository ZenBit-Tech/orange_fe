import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';
import { styled } from 'styled-components';

export const Wrapper = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 5px 50px;
  color: ${theme.palette.loginColors.subtitleColor1};
  a {
    color: ${theme.palette.loginColors.subtitleColor1};
    text-decoration: none;

    &:hover {
      color: ${theme.palette.globalColors.primaryGreen};
    }
  }
  img {
    width: 125px;
    height: 40px;
  }
`;
