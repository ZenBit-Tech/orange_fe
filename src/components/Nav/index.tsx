import React from 'react';

import { LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const { t, handleNavigate, links, isMobileMenuOpen, handleToggleMenu } = useNav();

  return (
    <Wrapper transparent={transparent}>
      <Link to="/">
        <img
          src={'https://res.cloudinary.com/dhixqnug0/image/upload/v1761741378/logo_tnioc1.png'}
          alt={t('Form.nav.logoAlt')}
        />
      </Link>
      {!transparent && (
        <>
          <WrapperLinks>
            {links.map((link, index) => {
              return (
                <a key={index} href={link.path}>
                  {link.link}
                </a>
              );
            })}
          </WrapperLinks>
          <WrapperButtons>
            <StartedButton variant="contained" onClick={handleNavigate}>
              {t('Form.nav.button.get-started')}
            </StartedButton>
            <LogoutButton>
              <LogOut /> {t('Form.nav.button.log-out')}
            </LogoutButton>
          </WrapperButtons>
        </>
      )}

      <MenuButton onClick={handleToggleMenu}>{isMobileMenuOpen ? <X /> : <Menu />}</MenuButton>
      {isMobileMenuOpen && (
        <MobileMenuOverlay>
          <MobileMenuContent>
            <StartedButton variant="contained" onClick={handleNavigate}>
              {t('Form.nav.button.get-started')}
            </StartedButton>
            {links.map((link, index) => {
              return (
                <a key={index} href={link.path} onClick={handleToggleMenu}>
                  {link.link}
                </a>
              );
            })}
            <LogoutButton>
              <LogOut /> {t('Form.nav.button.log-out')}
            </LogoutButton>
          </MobileMenuContent>
        </MobileMenuOverlay>
      )}
    </Wrapper>
  );
};

export default Nav;
