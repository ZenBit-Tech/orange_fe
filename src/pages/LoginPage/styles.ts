import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 24px;
  @media (min-width: 1200px) {
    padding: 48px;
  }
  background: ${theme.palette.loginColors?.pageWrapperBg};
  background: ${theme.palette.backgrounds.mainGradient};
  justify-content: space-between;
`;
