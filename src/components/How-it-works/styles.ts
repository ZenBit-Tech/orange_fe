import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const WrapperWork = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const WrapperTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

export const StyledTitle = styled(Typography)`
  color: ${theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontPoppins};
`;

export const StyledDescription = styled(Typography)`
  color: ${theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontInter};
`;

export const WrapperStep = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 40px 80px 40px 150px;
  &:nth-of-type(2) {
    flex-direction: row-reverse;
    padding: 40px 190px 40px 80px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 30px;
    flex-direction: column;
    padding: 0;
    &:nth-of-type(2) {
      flex-direction: column;
      padding: 0;
    }
  }
`;

export const WrapperImage = styled(Box)`
  height: auto;
  display: block;
  flex-shrink: 0;
  img {
    max-width: 600px;
    height: auto;
    display: block;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    img {
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }
`;

export const WrapperInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
  svg {
    width: 28px;
    height: 28px;
    color: ${theme.palette.textIcons?.success};
    background-color: ${theme.palette.surface.primary.light};
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 31px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

export const WrapperSteps = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
`;

export const StyledInfoTitle = styled(Typography)`
  color: ${theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontPoppins};
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.h4Mobile};
    font-family: ${theme.typography.general.fontPoppins};
    text-align: center;
  }
`;

export const StyledInfoDescription = styled(Typography)`
  font-family: ${theme.typography.general.fontInter};
  color: ${theme.palette.textIcons?.textPrimary};
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0 40px;
    font-size: ${theme.typography.sizes.body1Mobile};
    font-family: ${theme.typography.general.fontInter};
  }
`;
