import React from 'react';

import { LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '@/store';

import {
  LogoutButton,
  MenuButton,
  MobileMenuContent,
  MobileMenuOverlay,
  StartedButton,
  Wrapper,
  WrapperButtons,
  WrapperLinks,
} from './styles';
import { useNav } from './useNav';

interface NavProps {
  transparent?: boolean;
}

export const Nav: React.FC<NavProps> = ({ transparent = true }) => {
  const {
    t,
    links,
    isMobileMenuOpen,
    handleToggleMenu,
    handleLogout,
    handleNavigate,
    isAuthenticated,
    showLinks,
    showAuthButtons,
    currentPath,
    handleTop,
  } = useNav();
  const isTheme = useAppSelector((state) => state.darkTheme.isBlackTheme);
  return (
    <Wrapper transparent={transparent}>
      <Link to="/" onClick={handleTop}>
        <img
          src={
            isTheme
              ? 'https://res.cloudinary.com/dhixqnug0/image/upload/v1764334113/logo-dark_p4pnfz.png'
              : 'https://res.cloudinary.com/dhixqnug0/image/upload/v1761741378/logo_tnioc1.png'
          }
          alt={t('Form.nav.logoAlt')}
        />
      </Link>
      {!transparent && (
        <>
          {showLinks && (
            <WrapperLinks>
              {links.map((link, index) => {
                return (
                  <a key={index} href={link.path}>
                    {link.link}
                  </a>
                );
              })}
            </WrapperLinks>
          )}
          <WrapperButtons>
            {showLinks && (
              <StartedButton variant="contained" onClick={handleNavigate}>
                {t('Form.nav.button.get-started')}
              </StartedButton>
            )}
            {showAuthButtons && (
              <LogoutButton onClick={handleLogout}>
                <LogOut /> {t('Form.nav.button.log-out')}
              </LogoutButton>
            )}
          </WrapperButtons>
        </>
      )}
      {currentPath !== '/login' && (
        <MenuButton onClick={handleToggleMenu}>{isMobileMenuOpen ? <X /> : <Menu />}</MenuButton>
      )}
      {isMobileMenuOpen && (
        <MobileMenuOverlay>
          <MobileMenuContent>
            <StartedButton variant="contained" onClick={handleNavigate}>
              {t('Form.nav.button.get-started')}
            </StartedButton>
            {showLinks &&
              links.map((link, index) => {
                return (
                  <a key={index} href={link.path} onClick={handleToggleMenu}>
                    {link.link}
                  </a>
                );
              })}
            {isAuthenticated && (
              <LogoutButton onClick={handleLogout}>
                <LogOut /> {t('Form.nav.button.log-out')}
              </LogoutButton>
            )}
          </MobileMenuContent>
        </MobileMenuOverlay>
      )}
    </Wrapper>
  );
};

export default Nav;
