import React from 'react';

import { Box } from '@mui/material';

import { theme } from '@theme';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import styled, { css } from 'styled-components';

interface PageLayoutProps {
  children: React.ReactNode;
  transparentNav?: boolean;
  auth?: boolean;
}
interface PageWrapperProps {
  auth?: boolean;
}

const PageWrapper = styled(Box)<PageWrapperProps>`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  ${({ auth }) =>
    auth &&
    css`
      background: ${theme.palette.backgrounds.mainGradient};
    `}
`;

const Main = styled.div`
  flex-grow: 1;
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children, transparentNav, auth }) => (
  <PageWrapper auth={auth}>
    <Nav transparent={transparentNav} />
    <Main>{children}</Main>
    <Footer transparent={transparentNav} />
  </PageWrapper>
);
