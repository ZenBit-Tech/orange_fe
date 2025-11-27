import { Box, styled } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';

interface WrapperProps extends BoxProps {
  transparent?: boolean;
}

export const Wrapper = styled(Box)<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ transparent }) =>
    transparent ? theme.palette.backgrounds.bgTransparent : theme.palette.backgrounds.bgPrimary};
  border-top: ${({ transparent }) =>
    transparent ? 'none' : `1px solid ${theme.palette.baseColors.grey[200]}`};
  box-sizing: border-box;
  padding: 20px 50px;
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.fontWeightLight};
  color: ${theme.palette.textIcons?.textTeriartry};
  a {
    color: ${theme.palette.textIcons?.textTeriartry};
    text-decoration: none;

    &:hover {
      color: ${theme.palette.textIcons?.success};
    }
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    border-top: 1px solid ${theme.palette.baseColors.grey[200]};
    gap: 24px;
    flex-direction: column-reverse;
  }
`;

export const Divider = styled(Box)`
  display: flex;
  gap: 40px;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    padding: 16px;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
  }
`;

export const FlipButton = styled(Box)`
  cursor: pointer;
`;
