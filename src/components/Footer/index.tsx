import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Divider, Wrapper } from './styles';

interface FooterProps {
  transparent?: boolean;
}
export const Footer: React.FC<FooterProps> = ({ transparent = true }) => {
  const { t } = useTranslation();

  return (
    <Wrapper transparent={transparent}>
      <div>{t('Footer.logo')}</div>
      <Divider>
        <a href="mailto:plasma.ai.project@gmail.com">{t('Footer.help')}</a>
        <Link to="/privacy">{t('Footer.privacy')}</Link>
        <Link to="/terms">{t('Footer.terms')}</Link>
      </Divider>
    </Wrapper>
  );
};

export default Footer;
