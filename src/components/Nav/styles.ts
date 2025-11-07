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
  box-sizing: border-box;
  justify-content: space-between;
  background: ${({ transparent }) =>
    transparent ? theme.palette.backgrounds.bgTransparent : theme.palette.backgrounds.bgPrimary};
  border-bottom: ${({ transparent }) =>
    transparent ? 'none' : `1px solid ${theme.palette.baseColors.grey[200]}`};
  padding: 5px 50px;
  color: ${theme.palette.textIcons?.textTeriartry};
  a {
    color: ${theme.palette.textIcons?.textTeriartry};
    text-decoration: none;

    &:hover {
      color: ${theme.palette.textIcons?.success};
    }
  }
  img {
    width: 125px;
    height: 40px;
  }
`;
