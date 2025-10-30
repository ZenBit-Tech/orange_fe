import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

import { theme } from '@theme';
import { styled } from 'styled-components';

export const WrapperForm = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 600px;
  width: 100%;
  background: ${theme.palette.loginColors.loginBg};
  border-radius: 20px;
  border: 1px solid ${theme.palette.loginColors.border};
  padding: 32px 50px;
  margin: 40px auto;

  svg {
    font-size: 48px;
  }
`;

export const CenteredText = styled.div`
  text-align: center;

  h5 {
    margin: 0;
    font-size: ${theme.typography.sizes.h5};
    line-height: ${theme.typography.lineHeight.h5};
    font-weight: ${theme.typography.weights.regular};
    font-family: ${theme.typography.general.fontPoppins};
    color: ${theme.palette.text?.primary};
  }

  p {
    margin: 8px 0 0;
    color: ${theme.palette.loginColors?.subtitleColor ?? theme.palette.text?.secondary};
    font-size: ${theme.typography.sizes.body1};
    font-family: ${theme.typography.general.fontInter};
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
