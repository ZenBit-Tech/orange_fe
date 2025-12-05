import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const WrapperWork = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background: ${({ theme }) => theme.palette.backgrounds.white};
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
  font-size: ${theme.typography.sizes.size48};
  color: ${({ theme }) => theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontPoppins};
`;

export const StyledDescription = styled(Typography)`
  font-size: ${theme.typography.sizes.size16};
  color: ${({ theme }) => theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontInter};
`;

export const WrapperStep = styled(Box)<{ isVisible?: boolean; itemIndex: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 40px 80px 40px 150px;
  &:nth-of-type(2) {
    flex-direction: row-reverse;
    padding: 40px 190px 40px 80px;
  }
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: translateY(0);
      transition-delay: ${props.itemIndex * 0.8}s;
    `}
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
    color: ${({ theme }) => theme.palette.textIcons?.success};
    background-color: ${({ theme }) => theme.palette.surface.primary.light};
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 31px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    justify-content: center;
    align-items: center;
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
  color: ${({ theme }) => theme.palette.textIcons?.textPrimary};
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.size34};
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: center;
  }
`;

export const StyledInfoDescription = styled(Typography)`
  font-size: ${theme.typography.sizes.size16};
  font-family: ${theme.typography.general.fontInter};
  color: ${({ theme }) => theme.palette.textIcons?.textPrimary};
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0 40px;
    align-self: stretch;
  }
`;
