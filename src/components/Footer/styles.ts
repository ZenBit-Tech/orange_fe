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
    transparent ? theme.palette.backgrounds.bgTransparent : theme.palette.backgrounds.bgPrimary};
  border-top: ${({ transparent }) =>
    transparent ? 'none' : `1px solid ${theme.palette.baseColors.grey[200]}`};
  box-sizing: border-box;
  padding: 20px 50px;
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.size14};
  font-weight: ${theme.typography.fontWeightLight};
  color: ${theme.palette.textIcons?.textTeriartry};
  a {
    color: ${theme.palette.textIcons?.textTeriartry};
    text-decoration: none;

    &:hover {
      color: ${theme.palette.textIcons?.success};
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;
