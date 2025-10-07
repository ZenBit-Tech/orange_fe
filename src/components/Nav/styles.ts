import { styled } from "styled-components";
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { theme } from '@theme';

export const Wrapper = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.palette.loginColors?.pageWrapperBg};
  border-bottom: 1px solid ${theme.palette.loginColors.border};
  padding: 5px 50px;
  color: ${theme.palette.loginColors.subtitleColor1};
  a{
    color: ${theme.palette.loginColors.subtitleColor1}; 
    text-decoration: none; 
    
    &:hover {
      color: ${theme.palette.globalColors.primaryGreen};
    }
  }
img{
    width: 125px;
    height: 40px;
 }
`;