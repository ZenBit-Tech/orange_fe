import { Box, styled } from '@mui/material';

export const WrapperContent = styled(Box)`
  background-image: url(${({ theme }) => theme.palette.backgrounds.bgLandingSection});
  background-position: center;
  box-sizing: border-box;
  background-size: cover;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 0;
  ${({ theme }) => theme.breakpoints.down('md')} {
    background-size: auto;
    background-position: inherit;
    background-repeat: no-repeat;
  }
`;
