import { Accordion, AccordionDetails, Box, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom';

import { theme } from '@/theme';

export const WrapperFAQ = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${theme.palette.backgrounds.bgLandingSection});
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.palette.backgrounds.white}
    );
  }
`;

export const WrapperTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  svg {
    padding: 8px;
    width: 60px;
    height: 60px;
    background-color: ${theme.palette.surface.primary.light};
    color: ${theme.palette.baseColors.green[500]};
    border-radius: 8px;
    ${({ theme }) => theme.breakpoints.down('md')} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledTitle = styled(Typography)`
  font-size: ${theme.typography.sizes.size48};
  font-family: ${theme.typography.general.fontPoppins};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size24};
  }
`;

export const WrapperAccordionContainer = styled(Box)<{ isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  gap: 8px;
  max-width: 800px;
  margin: 40px 0;
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
`;

export const StyledAccordion = styled(Accordion)`
  border-radius: 20px !important;
  background-color: ${theme.palette.background.paper};
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  padding: 40px 24px;

  &::before {
    display: none;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 0 16px;
  text-align: left;
`;

export const StyledQuestion = styled(Typography)`
  font-size: ${theme.typography.sizes.size18};
  font-family: ${theme.typography.general.fontPoppins};
  font-weight: ${theme.typography.weights.weight400};
  color: ${theme.palette.textIcons?.textPrimary};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size16};
  }
`;

export const StyledAnswer = styled(Typography)`
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size18};
  color: ${theme.palette.textIcons?.textSecondary};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size16};
  }
`;

export const WrapperHelp = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${theme.palette.textIcons?.textPrimary};
    font-size: ${theme.typography.sizes.size16};
    font-family: ${theme.typography.general.fontInter};
  }
`;

export const WrapperMail = styled(Link)`
  display: flex;
  color: ${theme.palette.textIcons?.success};
  gap: 10px;
  cursor: 'pointer';
  p {
    color: ${theme.palette.textIcons?.success};
    border-bottom: 1px solid ${theme.palette.textIcons?.success};
    font-size: ${theme.typography.sizes.size16};
  }
`;
