import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';
import { styled } from 'styled-components';

interface WrapperProps extends BoxProps {
  transparent?: boolean;
}

export const Wrapper = styled(Box)<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ transparent }) =>
    transparent
      ? theme.palette.loginColors.pageWrapperBgTransparent
      : theme.palette.loginColors.pageWrapperBg};
  border-bottom: ${({ transparent }) =>
    transparent ? 'none' : `1px solid ${theme.palette.loginColors.border}`};
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
