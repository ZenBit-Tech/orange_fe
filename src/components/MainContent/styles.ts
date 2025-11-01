import { Box, Button, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const MainWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const TabletImageWrapper = styled(Box)`
  position: absolute;
  right: -100px;
  bottom: 80px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const DescriptionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  height: 552px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    p {
      align-items: center;
      height: auto;
    }
  }
`;

export const TitleStyled = styled(Typography)`
  max-width: 628px;
  margin: 32px 0;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 34px;
    max-width: 100%;
  }
`;

export const StyledInstantly = styled('span')`
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 5px;
    left: 43%;
    background-color: #009966;
    height: 5px;
    width: 85%;
    transform: translateX(-50%);
    border-radius: 12px;
    ${({ theme }) => theme.breakpoints.down('md')} {
      bottom: 0;
    }
  }
`;

export const DescriptionStyled = styled(Typography)`
  width: 735px;
  margin-bottom: 32px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const ListsWrapper = styled('ul')`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  padding: 0;
  justify-content: flex-start;
  gap: 56px;
  margin-top: 160px;
  li::marker {
    color: ${theme.palette.button.primaryGreen};
    width: 10px;
    height: 10px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    gap: 5px;
    margin-left: 15px;
    margin-top: 48px;
    align-self: flex-start;
  }
`;

export const StyledBody = styled(Typography)`
  align-self: flex-start;
  background-color: ${theme.palette.mainContent.bgBody};
  padding: 4px 8px;
  border-radius: 100px;
`;

export const ButtonStyled = styled(Button)`
  background-color: ${theme.palette.button.primaryGreen};
  width: 192px;
  border-radius: 12px;
`;
