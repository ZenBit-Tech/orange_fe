import { Box, Typography, styled } from '@mui/material';

import { Lock } from 'lucide-react';

import { theme } from '@/theme';

export const WrapperPrivacy = styled(Box)`
  background: #ffff;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: 40px 0px;
`;

export const WrapperSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${theme.palette.backgrounds.bgPrivacy});
  background-size: cover;
  width: 1282px;
  height: 724px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    padding: 50px 0px;
  }
`;

export const StyledIcon = styled(Lock)`
  width: 24px;
  height: 24px;
  padding: 8px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: ${theme.palette.backgrounds.white};
  stroke: ${theme.palette.baseColors.green[500]};
  flex-shrink: 0;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 20px;
    height: 20px;
    padding: 4px;
    margin-bottom: 20px;
  }
`;

export const StyledTitle = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 24px;
    padding: 10px;
    align-self: center;
  }
`;

export const StyledTypographyDescription = styled(Typography)`
  width: 846px;
  margin-top: 32px;
  font-family: ${theme.typography.general.fontInter};
  color: ${theme.palette.textIcons?.textPrimary};
  text-align: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    align-self: stretch;
    font-size: ${theme.typography.sizes.body1Mobile};
    margin: 5px;
  }
`;

export const WrapperCards = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  background-color: ${theme.palette.backgrounds.white};
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  padding: 40px 24px;
  margin-top: 40px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    background-color: transparent;
    border: none;
  }
`;

export const StyledCard = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 314px;
  gap: 16px;
  h6 {
    font-family: ${theme.typography.general.fontPoppins};
    font-weight: ${theme.typography.weights.light};
  }
  p {
    font-family: ${theme.typography.general.fontInter};
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    background-color: ${theme.palette.backgrounds.white};
    padding: 24px;
    border-radius: 20px;
    margin-bottom: 24px;
    border: 1px solid ${theme.palette.baseColors.grey[200]};
  }
`;
