import { Box, styled } from '@mui/material';

import { theme } from '@/theme';

export const WrapperContent = styled(Box)`
  background-image: url(${theme.palette.backgrounds.bgLandingSection});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
  padding: 24px 0;
  ${({ theme }) => theme.breakpoints.down('md')} {
    background-size: auto;
    background-position: inherit;
    background-repeat: no-repeat;
  }
`;
