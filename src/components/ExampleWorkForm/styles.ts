import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import styled from 'styled-components';

export const WrapperForm = styled(Box)<BoxProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  align-content: center;
`;
