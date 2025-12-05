import { Box, Button, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const MainWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 80px;
  margin: auto;
  position: relative;
  overflow: hidden;
  background-image: url(${({ theme }) => theme.palette.backgrounds.bgLandingSection});
  padding-bottom: 121px;
  width: 100%;
  max-width: 1520px;
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    padding: 40px 20px;
    max-width: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.palette.backgrounds.white}
    );
  }
`;

export const TabletImageWrapper = styled(Box)<{ isVisible?: boolean }>`
  position: absolute;
  right: -100px;
  bottom: 80px;
  opacity: 0;
  transform: translateX(500px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  ${(props) =>
    props.isVisible &&
    ` 
      opacity: 1;
      transform: translateX(0);
    `}
  ${({ theme }) => theme.breakpoints.down('md')} {
    bottom: 10px;
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

export const DescriptionWrapper = styled(Box)<{ isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  height: 552px;
  opacity: 0;
  transform: translateX(-500px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  ${(props) =>
    props.isVisible &&
    ` 
      opacity: 1;
      transform: translateX(0);
    `}
  ${({ theme }) => theme.breakpoints.down('md')} {
    p {
      align-items: center;
      height: auto;
      align-self: center;
    }
  }
`;

export const TitleStyled = styled(Typography)`
  max-width: 628px;
  margin: 32px 0;
  font-size: ${theme.typography.sizes.size60};
  font-family: ${theme.typography.general.fontPoppins};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size34};
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
    background-color: ${theme.palette.baseColors.green[700]};
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
  font-size: ${theme.typography.sizes.size18};
  font-family: ${theme.typography.general.fontPoppins};
  font-weight: ${theme.typography.weights.weight400};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size16};
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
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.weights.weight500};
  li::marker {
    color: ${theme.palette.baseColors.green[900]};
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
  background-color: ${({ theme }) => theme.palette.textIcons?.contrast};
  padding: 4px 8px;
  border-radius: 100px;
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size14};
`;

export const ButtonStyled = styled(Button)`
  background-color: ${theme.palette.surface.primary.default};
  font-size: ${theme.typography.sizes.size16};
  font-family: ${theme.typography.general.fontInter};
  width: 192px;
  border-radius: 12px;
  text-transform: none;
  &:hover {
    box-shadow: none;
    background-color: ${theme.palette.surface.primary.hover};
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size14};
    align-self: center;
  }
`;
