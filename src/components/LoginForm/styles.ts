import type { BoxProps } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { theme } from '@theme';
import styled from 'styled-components';

export const CenteredText = styled.div`
  text-align: center;
  margin: 15px 0 40px;

  h5 {
    margin: 0;
    font-size: ${theme.typography.sizes.size24};
    line-height: 1.2;
    font-weight: ${theme.typography.weights.weight500};
    font-family: ${theme.typography.general.fontPoppins};
    color: ${theme.palette.textIcons?.textPrimary};
  }

  p {
    margin: 8px 0 0;
    color: ${theme.palette.textIcons?.textPrimary};
    font-size: ${theme.typography.sizes.size16};
    font-family: ${theme.typography.general.fontInter};
  }

  @media (min-width: 1024px) and (max-height: 860px) {
    margin: 20px 0;
    h5 {
      font-size: ${theme.typography.sizes.size24};
      line-height: 1.2;
    }
    p {
      margin: 5px 0 0;
      font-size: ${theme.typography.sizes.size16};
    }

  @media (max-width: 480px) {
    h5 {
      font-size: ${theme.typography.sizes.size18};
    }
    p {
      font-size: ${theme.typography.sizes.size16};
    }
  }
`;

export const WrapperForm = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;

  background: ${theme.palette.backgrounds.white};
  border-radius: 20px;
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  padding: 32px 50px;
  margin: 40px auto;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);

  @media (min-width: 1024px) and (max-height: 760px) {
    max-width: 420px;
    gap: 5px;
    padding: 32px 50px;
    border-radius: 20px;
    margin: 15px auto;
  }

  @media (max-width: 768px) {
    max-width: 360px;
    padding: 22px 24px;
    border-radius: 14px;
    margin: 24px auto;
  }

  @media (max-width: 480px) {
    max-width: 320px;
    padding: 16px 18px;
    gap: 12px;
  }
`;

export const DividerContainer = styled(Stack)`
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 4px 0 8px;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${theme.palette.baseColors.grey[500]};
  min-width: 20px;
`;

export const Text = styled(Typography)`
  padding: 0 12px;
  font-size: ${theme.typography.sizes.size14};
  color: ${theme.palette.textIcons?.textTeriartry};
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: ${theme.typography.sizes.size14};
    padding: 0 8px;
  }
`;

export const Button = styled.button<{ disabledBg?: string; disabledColor?: string }>`
  display: flex;
  padding: 8px 22px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  gap: 9px;
  width: 100%;
  background-color: ${theme.palette.surface.disabled.disabledDark};
  color: ${theme.palette.textIcons?.textTeriartry};
  cursor: pointer;
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};

  @media (min-width: 1024px) and (max-height: 760px) {
    ${theme.typography.sizes.size14};
    padding: 2px 24px;
    height: 36px;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    height: 44px;
    padding: 8px 16px;
  }
  @media (max-width: 480px) {
    height: 40px;
    padding: 6px 10px;
    font-size: ${theme.typography.sizes.size16};
  }
`;

export const BtnSubmit = styled(Button)`
  background-color: ${theme.palette.surface.primary.default};
  color: ${theme.palette.textIcons?.contrast};
  width: 100%;

  &:disabled {
    background-color: ${theme.palette.surface.disabled.disabledDark};
    color: ${theme.palette.textIcons?.textGrey};
    border: 1px solid ${theme.palette.baseColors.grey[200]};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const Terms = styled.p`
  text-align: center;
  margin: 8px 0 0;
  font-size: ${theme.typography.sizes.size14};
  color: ${theme.palette.textIcons?.textTeriartry};
  font-family: ${theme.typography.general.fontInter};
  a {
    color: ${theme.palette.textIcons?.textTeriartry};
    text-decoration: underline;
  }
  @media (min-width: 1024px) and (max-height: 760px) {
    font-size: ${theme.typography.sizes.size12};
  }

  @media (max-width: 480px) {
    font-size: ${theme.typography.sizes.size12};
  }
`;
