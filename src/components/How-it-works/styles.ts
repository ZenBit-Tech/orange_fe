import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const WrapperWork = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const WrapperTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
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
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  &:nth-of-type(2) {
    flex-direction: row-reverse;
    gap: 110px;
  }
  img {
    width: 810px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 30px;
    flex-direction: column;
    &:nth-of-type(2) {
      flex-direction: column;
    }
    img {
      width: 100%;
    }
  }
`;

export const WrapperImage = styled(Box)`
  width: 810px;
  height: 460px;
`;

export const WrapperInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 400px;
  svg {
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
`;

export const StyledInfoTitle = styled(Typography)`
  color: ${theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontPoppins};
  margin-bottom: 20px;
  white-space: nowrap;
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
