import Button from '@mui/material/Button';

import { theme } from '@theme';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    justify-content: flex-center;
    text-transform: none;
    border-radius: 12px;
    padding: 8px 14px;
    height: 42px;
    font-size: ${theme.typography.sizes.button};
    border: 1px solid ${theme.palette.loginColors?.border ?? theme.palette.divider};
    background: ${theme.palette.common.white};
    color: ${theme.palette.loginColors?.socialButtonsColor ?? theme.palette.text?.primary};
  }
`;

export const Emoji = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  border-radius: 6px;

  & > svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    & > svg {
      width: 18px;
      height: 18px;
    }
  }
`;
