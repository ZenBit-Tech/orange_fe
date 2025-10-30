import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

interface NavProps {
  transparent?: boolean;
}

export const Nav: React.FC<NavProps> = ({ transparent = true }) => {
  const { t } = useTranslation();

  return (
    <Wrapper transparent={transparent}>
      <Link to="/">
        <img
          src={'https://res.cloudinary.com/dhixqnug0/image/upload/v1761741378/logo_tnioc1.png'}
          alt={t('Form.nav.logoAlt')}
        />
      </Link>
    </Wrapper>
  );
};

export default Nav;
