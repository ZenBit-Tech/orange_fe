import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { Divider } from "@mui/material";
import styled from 'styled-components';

export const CenteredText = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.2;
  }

  p {
    margin: 8px 0 0;
    color: #666;
    font-size: 0.95rem;
}`;

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
    margin: 5px 0;
    font-size: 14px;
    color: #888;
    ::before,
    ::after {
      border-color: #ccc;
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