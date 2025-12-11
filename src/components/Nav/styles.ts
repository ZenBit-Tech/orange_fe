import { Box, Button, IconButton, styled } from '@mui/material';
import type { BoxProps } from '@mui/material';

interface WrapperProps extends BoxProps {
  transparent?: boolean;
  topHeader?: boolean;
}

export const Wrapper = styled(Box)<WrapperProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${({ transparent, theme }) =>
    transparent ? theme.palette.backgrounds.bgTransparent : theme.palette.backgrounds.bgPrimary};
  border-bottom: ${({ transparent, theme }) =>
    transparent ? 'none' : `1px solid ${theme.palette.border.default}`};
  padding: 5px 50px;
  font-family: ${({ theme }) => theme.typography.general.fontInter};
  color: ${({ theme }) => theme.palette.textIcons?.textTeriartry};
  position: ${({ topHeader }) => (topHeader ? 'absolute' : 'sticky')};
  top: 0;
  width: 100%;
  z-index: 101;
  a {
    color: ${({ theme }) => theme.palette.textIcons?.textTeriartry};
    text-decoration: none;
    z-index: 1005;

    &:hover {
      color: ${({ theme }) => theme.palette.textIcons?.success};
    }
  }
  img {
    width: 125px;
    height: 40px;
    object-fit: contain;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 5px 0;
  }
`;

export const WrapperLinks = styled(Box)`
  display: flex;
  gap: 30px;
  font-size: ${({ theme }) => theme.typography.sizes.size16};
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const WrapperButtons = styled(Box)`
  display: flex;
  gap: 48px;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const LogoutButton = styled(Box)`
  text-transform: none;
  color: ${({ theme }) => theme.palette.textIcons?.textTeriartry};
  font-size: ${({ theme }) => theme.typography.sizes.size16};
  box-shadow: none;
  display: flex;
  align-content: center;
  gap: 8px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.palette.globalColors.primaryGreen};
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 8px 22px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.baseColors.grey[200]};
    border-radius: 12px;
  }
`;

export const StartedButton = styled(Button)`
  text-align: center;
  border-radius: 12px;
  width: 192px;
  font-family: ${({ theme }) => theme.typography.general.fontInter};
  background-color: ${({ theme }) => theme.palette.surface.primary.default};
  text-transform: none;
  &:hover {
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.surface.primary.hover};
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const MobileStartedButton = styled(StartedButton)`
  width: 100%;
`;

export const MenuButton = styled(IconButton)`
  display: none;
  color: ${({ theme }) => theme.palette.textIcons?.textTeriartry};
  font-family: ${({ theme }) => theme.typography.general.fontInter};
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
  background: ${({ theme }) => theme.palette.backgrounds.bgPrimary};
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
