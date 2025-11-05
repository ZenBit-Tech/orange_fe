import React from 'react';

import { theme } from '@theme';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import styled from 'styled-components';

interface PageLayoutProps {
  children: React.ReactNode;
  transparentNav?: boolean;
}

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  /* background: ${theme.palette.backgrounds.mainGradient}; */
  position: relative;
`;

const Main = styled.div`
  flex-grow: 1;
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children, transparentNav }) => (
  <PageWrapper>
    <Nav transparent={transparentNav} />
    <Main>{children}</Main>
    <Footer />
  </PageWrapper>
);
