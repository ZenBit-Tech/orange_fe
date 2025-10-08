import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo.png';

import { Wrapper } from './styles';

export const Nav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt={t('Form.nav.logoAlt')} />
      </Link>
    </Wrapper>
  );
};

export default Nav;
