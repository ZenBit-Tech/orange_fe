import Button from '@mui/material/Button';

import { theme } from '@theme';
import { Link } from 'react-router-dom';
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
    @media (min-width: 1024px) and (max-height: 760px) {
      font-size: ${theme.typography.sizes.body2};
      padding: 2px 24px;
      height: 36px;
      border-radius: 10px;
    }
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

export const StyledLink = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledRouterLink = styled(Link)`
  align-items: center;
  display: flex;
  width: 100%;
  text-decoration: none;
`;
