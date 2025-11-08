import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const WrapperAbout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 176px;
  padding-top: 30px;
`;

export const WrapperDescription = styled(Box)`
  width: 1282px;
  height: 718px;
  background-image: url(${theme.palette.backgrounds.bgPrivacy});
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
  }
`;

export const StyledTitle = styled(Typography)`
  font-size: ${theme.typography.sizes.size48};
  font-family: ${theme.typography.general.fontPoppins};
  margin-bottom: 32px;
  color: ${theme.palette.textIcons?.textPrimary};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size24};
  }
`;

export const StyledDescription = styled(Typography)`
  font-size: ${theme.typography.sizes.size16};
  font-family: ${theme.typography.general.fontInter};
  margin-bottom: 40px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 324px;
  }
`;

export const WrapperCards = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 24px;

  & > :nth-of-type(2) {
    margin-top: 40px;
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-top: 0px;
    }
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const StyledCard = styled(Box)`
  height: 144px;
  background-color: ${theme.palette.backgrounds.white};
  padding: 40px 36px;
  align-items: flex-start;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
    gap: 24px;
    justify-content: center;
    padding: 40px 24px;
    margin: 0px 15px;
  }
`;

export const StyledTitleCard = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  svg {
    color: ${theme.palette.textIcons?.success};
    background-color: ${theme.palette.surface.primary.light};
    padding: 8px;
    border-radius: 8px;
  }
  h5 {
    font-family: ${theme.typography.general.fontPoppins};
    font-size: ${theme.typography.sizes.size24};
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    h5 {
      font-size: ${theme.typography.sizes.size18};
    }
  }
`;

export const StyledDescriptionCard = styled(Typography)`
  width: 468px;
  text-align: justify;
  align-self: stretch;
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    height: 100%;
    text-align: start;
  }
`;
