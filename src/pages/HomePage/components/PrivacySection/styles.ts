import { Box, Typography, styled } from '@mui/material';

import { Lock } from 'lucide-react';

import { theme } from '@/theme';

export const WrapperPrivacy = styled(Box)`
  background: ${({ theme }) => theme.palette.backgrounds.white};
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: 40px 0px;
  margin-bottom: 100px;
`;

export const WrapperSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ theme }) => theme.palette.backgrounds.bgPrivacy});
  border-radius: 20px;
  background-size: cover;
  width: 1282px;
  height: 724px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    height: 100%;
    padding: 10px 0px;
  }
`;

export const StyledIcon = styled(Lock)<{ isVisible?: boolean }>`
  width: 44px;
  height: 44px;
  margin-bottom: 40px;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.palette.backgrounds.bgPrimary};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.baseColors.grey[50]
      : theme.palette.baseColors.green[500]};
  flex-shrink: 0;
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: 0.2s;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 20px;
    height: 20px;
    padding: 8px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const StyledTitle = styled(Typography)<{ isVisible?: boolean }>`
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.size48};
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: 0.2s;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size24};
    padding: 10px;
    align-self: center;
  }
`;

export const StyledTypographyDescription = styled(Typography)<{ isVisible?: boolean }>`
  width: 846px;
  margin-top: 32px;
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  color: ${({ theme }) => theme.palette.textIcons?.textPrimary};
  text-align: center;
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: 0.2s;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 324px;
    align-self: center;
  }
`;

export const WrapperCards = styled(Box)<{ isVisible?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.backgrounds.white};
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode === 'dark'
        ? theme.palette.backgrounds.white
        : theme.palette.baseColors.grey[200]};
  padding: 40px 24px;
  margin-top: 40px;
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: 0.2s;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    background-color: transparent;
    border: none;
    padding: 40px 0px;
  }
`;

export const StyledCard = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 314px;
  gap: 16px;
  h5 {
    font-family: ${theme.typography.general.fontPoppins};
    font-weight: ${theme.typography.weights.weight400};
    font-size: ${theme.typography.sizes.size24};
  }
  p {
    font-family: ${theme.typography.general.fontInter};
    font-size: ${theme.typography.sizes.size16};
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    background-color: ${({ theme }) => theme.palette.backgrounds.white};
    padding: 24px;
    border-radius: 20px;
    margin-bottom: 24px;
    border: ${({ theme }) =>
      theme.palette.mode === 'dark' ? 'none' : `1px solid ${theme.palette.baseColors.grey[200]}`};
    h5 {
      font-size: ${theme.typography.sizes.size18};
    }
  }
`;
