import { Box, Button, styled } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';

interface WrapperProps extends BoxProps {
  transparent?: boolean;
}

export const Wrapper = styled(Box)<WrapperProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
    color: ${theme.palette.navLinks.linksColor};
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

export const WrapperLinks = styled(Box)`
  display: flex;
  gap: 30px;
`;

export const WrapperButtons = styled(Box)`
  display: flex;
  gap: 15px;
`;

export const LogoutButton = styled(Button)`
  padding: 8px 22px;
  border-color: ${theme.palette.button.defaultBorderColor};
  border-radius: 12px;
  color: ${theme.palette.button.textColor};
  :hover {
    color: ${theme.palette.globalColors.primaryGreen};
  }
`;

export const StartedButton = styled(Button)`
  text-align: center;
  border-radius: 12px;
  width: 192px;
  background-color: ${({ theme }) => theme.palette.button.primaryGreen};
`;
