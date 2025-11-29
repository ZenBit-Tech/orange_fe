import React from 'react';

import { Box, styled } from '@mui/material';

import Footer from 'components/Footer';
import Nav from 'components/Nav';

interface PageLayoutProps {
  children: React.ReactNode;
  transparentNav?: boolean;
  auth?: boolean;
}
interface PageWrapperProps {
  auth?: boolean;
}

const PageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'auth',
})<PageWrapperProps>(({ theme, auth }) => ({
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  position: 'relative',
  backgroundImage: auth ? `url(${theme.palette.backgrounds.bgLandingSection})` : 'none',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
}));

const Main = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
});

export const PageLayout: React.FC<PageLayoutProps> = ({ children, transparentNav, auth }) => (
  <PageWrapper auth={auth}>
    <Nav transparent={transparentNav} />
    <Main>{children}</Main>
    <Footer transparent={transparentNav} />
  </PageWrapper>
);
