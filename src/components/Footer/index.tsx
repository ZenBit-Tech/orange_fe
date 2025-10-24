import React from 'react';

import { useTranslation } from 'react-i18next';

import { Divider, Wrapper } from './styles';

interface FooterProps {
  transparent?: boolean;
}
export const Footer: React.FC<FooterProps> = ({ transparent = false }) => {
  const { t } = useTranslation();

  return (
    <Wrapper transparent={transparent}>
      <div>{t('Footer.logo')}</div>
      <Divider>
        <a href="/help">{t('Footer.help')}</a>
        <a href="/privacy">{t('Footer.privacy')}</a>
      </Divider>
    </Wrapper>
  );
};

export default Footer;
