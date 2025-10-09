import React from 'react';

import { useTranslation } from 'react-i18next';

import { Divider, Wrapper } from './styles';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>{t('Footer.logo')}</div>
      <Divider>
        <a href="/help">{t('Footer.help')}</a>
        <a href="/privacy">{t('Footer.privacy')}</a>
      </Divider>
    </Wrapper>
  );
};

export default Footer;
