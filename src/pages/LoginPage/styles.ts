import { theme } from '@theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${theme.palette.loginColors?.pageWrapperBg};
  background: ${theme.palette.backgrounds.mainGradient};
  justify-content: space-between;
`;
export const ContentWrapper = styled.main`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;

    @media (max-height: 860px) {
    padding: 12px;
`;
