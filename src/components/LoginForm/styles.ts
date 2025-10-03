import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { Divider } from "@mui/material";
import styled from 'styled-components';
import { theme } from '@theme';


export const CenteredText = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h5 {
    margin: 0;
    font-size: ${theme.typography.h5.fontSize};
    line-height: ${theme.typography.h5.lineHeight || 1.2};
    font-weight: ${700};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette.text?.primary ?? '#000'};
  }

  p {
    margin: 8px 0 0;
    color: ${theme.palette.custom.textGray};
    font-size: ${theme.typography.body1.fontSize};
    font-family: ${theme.typography.fontFamily};
  }
`;

export const WrapperForm = styled(Box)<BoxProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  align-content: center;
`;

export const StyledDivider = styled(Divider)`
  && {
    margin: 8px 0;
    font-size: 14px;
    color:${theme.palette.custom.textGray};
    ::before,
    ::after {
      border-color: #e6e6e6;
    }
  }
`;

export const Button = styled.button<{ disabledBg?: string; disabledColor?: string }>`
  display: flex;
  padding: 8px 22px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #E0E0E0;
  gap: 9px;
  margin-bottom: 12px;
  background-color: ${(props) => props.disabledBg || "transparent"};
  color: ${(props) => props.disabledColor || "#fff"};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`;

export const BtnSubmit = styled(Button)`

  background-color: #000;
  color: #fff;

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    border-color: #e0e0e0;
    cursor: not-allowed;
    pointer-events: none;
  }
`;