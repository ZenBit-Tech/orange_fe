import styled from 'styled-components';
import { theme } from '@theme';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${theme.palette.loginColors?.pageWrapperBg ?? theme.palette.background?.default};
  padding: 24px;

  @media (min-width: 1200px) {
    padding: 48px;
  }
`;