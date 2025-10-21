import React from 'react';

import { theme } from '@theme';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import styled from 'styled-components';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background: ${theme.palette.backgrounds.mainGradient};
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <PageWrapper>
    <Nav />
    {children}
    <Footer />
  </PageWrapper>
);
