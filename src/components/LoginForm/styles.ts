import type { BoxProps } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { theme } from '@theme';
import styled from 'styled-components';

export const CenteredText = styled.div`
  text-align: center;
  margin: 15px 0 40px;

  h5 {
    margin: 0;
    font-size: ${theme.typography.h5?.fontSize};
    line-height: ${theme.typography.h5?.lineHeight || 1.2};
    font-weight: ${theme.typography.h5?.fontWeight || 500};
    font-family: ${theme.typography.h5.fontFamily};
    color: ${theme.palette.text?.primary};
  }

  p {
    margin: 8px 0 0;
    color: ${theme.palette.loginColors?.subtitleColor ?? theme.palette.text?.secondary};
    font-size: ${theme.typography.body1?.fontSize};
    font-family: ${theme.typography.fontFamily};
  }

  @media (max-width: 480px) {
    h5 {
      font-size: ${theme.typography.sizes.h5Mobile};
    }
    p {
      font-size: ${theme.typography.sizes.body1Mobile};
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

  background: ${theme.palette.loginColors?.loginBg};
  border-radius: 20px;
  border: 1px solid ${theme.palette.loginColors?.border ?? theme.palette.divider};
  padding: 32px 50px;
  margin: 40px auto;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);

  @media (max-width: 1024px) {
    max-width: 420px;
    padding: 28px 36px;
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
  background-color: ${theme.palette.globalColors?.textGray ?? theme.palette.divider};
  min-width: 20px;
`;

export const Text = styled(Typography)`
  padding: 0 12px;
  font-size: ${theme.typography.body2?.fontSize};
  color: ${theme.palette.common.black};
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: ${theme.typography.sizes.body2Mobile};
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
  border: 1px solid ${theme.palette.loginColors?.border ?? theme.palette.divider};
  gap: 9px;
  width: 100%;
  background-color: ${(props) => props.disabledBg || 'transparent'};
  color: ${(props) => props.disabledColor || theme.palette.common.white};
  cursor: pointer;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.button?.fontSize || '16px'};

  @media (max-width: 768px) {
    height: 44px;
    padding: 8px 16px;
  }
  @media (max-width: 480px) {
    height: 40px;
    padding: 6px 10px;
    font-size: ${theme.typography.sizes.body1Mobile};
  }
`;

export const BtnSubmit = styled(Button)`
  background-color: ${theme.palette.globalColors.primaryGreen ?? theme.palette.primary?.main};
  color: ${theme.palette.common.white};
  width: 100%;

  &:disabled {
    background-color: ${theme.palette.loginColors?.disabledBg ?? theme.palette.divider};
    color: ${theme.palette.loginColors?.disabledText ?? theme.palette.text?.disabled};
    border-color: ${theme.palette.loginColors?.border ?? theme.palette.divider};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const Terms = styled.p`
  text-align: center;
  margin: 8px 0 0;
  font-size: ${theme.typography.body2?.fontSize};
  color: ${theme.palette.loginColors?.subtitleColor1 ?? theme.palette.text?.secondary};
  font-family: ${theme.typography.fontFamily};

  @media (max-width: 480px) {
    font-size: ${theme.typography.sizes.terms};
  }
`;
