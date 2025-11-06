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
  background: ${theme.palette.backgrounds.white};
  border-radius: 20px;
  border: 1px solid ${theme.palette.baseColors.grey[200]};
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
    font-size: ${theme.typography.sizes.size24};
    line-height: ${theme.typography.lineHeights.lineHeight133};
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

  @media (max-width: 480px) {
    h5 {
      font-size: ${theme.typography.sizes.size18};
    }
    p {
      font-size: ${theme.typography.sizes.size16};
    }
  }
`;
