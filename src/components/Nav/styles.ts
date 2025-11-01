import { Box, Button, IconButton, styled } from '@mui/material';
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
  position: relative;
  z-index: 101;
  a {
    color: ${theme.palette.navLinks.linksColor};
    text-decoration: none;
    z-index: 1005;

    &:hover {
      color: ${theme.palette.globalColors.primaryGreen};
    }
  }
  img {
    width: 125px;
    height: 40px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 5px 0;
  }
`;

export const WrapperLinks = styled(Box)`
  display: flex;
  gap: 30px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const WrapperButtons = styled(Box)`
  display: flex;
  gap: 15px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
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

export const MobileStartedButton = styled(StartedButton)`
  width: 100%;
`;

export const MenuButton = styled(IconButton)`
  display: none;
  color: ${theme.palette.navLinks.linksColor};
  z-index: 1005;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: inline-flex;
  }
`;

export const MobileMenuOverlay = styled(Box)`
  position: absolute;
  top: 0;
  align-self: flex-start;
  z-index: 100;
  width: 100%;
  background: ${theme.palette.loginColors.pageWrapperBg};
  display: none;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: block;
  }
`;

export const MobileMenuContent = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  gap: 24px;
  margin-top: 60px;
`;
