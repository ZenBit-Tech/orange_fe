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
    transparent ? theme.palette.backgrounds.bgTransparent : theme.palette.backgrounds.bgPrimary};
  border-bottom: ${({ transparent }) =>
    transparent ? 'none' : `1px solid ${theme.palette.baseColors.grey[200]}`};
  padding: 5px 50px;
  color: ${theme.palette.textIcons?.textTeriartry};
  position: relative;
  z-index: 101;
  a {
    color: ${theme.palette.textIcons?.textTeriartry};
    text-decoration: none;
    z-index: 1005;

    &:hover {
      color: ${theme.palette.textIcons?.success};
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
  font-family: ${theme.typography.general.fontInter};
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
  border-color: ${theme.palette.baseColors.grey[200]};
  text-transform: none;
  border-radius: 12px;
  color: ${theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontInter};
  box-shadow: none;
  :hover {
    color: ${theme.palette.globalColors.primaryGreen};
  }
`;

export const StartedButton = styled(Button)`
  text-align: center;
  border-radius: 12px;
  width: 192px;
  font-family: ${theme.typography.general.fontInter};
  background-color: ${({ theme }) => theme.palette.surface.primary.default};
  text-transform: none;
  box-shadow: none;
`;

export const MobileStartedButton = styled(StartedButton)`
  width: 100%;
`;

export const MenuButton = styled(IconButton)`
  display: none;
  color: ${theme.palette.textIcons?.textTeriartry};
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
  background: ${theme.palette.backgrounds.bgPrimary};
  font-family: ${theme.typography.general.fontInter};
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
