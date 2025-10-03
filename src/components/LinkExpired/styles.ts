import { styled } from "styled-components";
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

export const WrapperForm = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-direction: column; 
  gap: 16px;
  max-width: 500px;
  width: 100%;

  background: #fff;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  padding: 32px 50px;

  margin: 40px auto;
`;
