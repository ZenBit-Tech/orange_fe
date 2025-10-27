import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo.png';

import { Wrapper } from './styles';

interface NavProps {
  transparent?: boolean;
}

export const Nav: React.FC<NavProps> = ({ transparent = false }) => {
  const { t } = useTranslation();

  return (
    <Wrapper transparent={transparent}>
      <Link to="/">
        <img src={logo} alt={t('Form.nav.logoAlt')} />
      </Link>
    </Wrapper>
  );
};

export default Nav;
