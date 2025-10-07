import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, Divider } from './styles';
export const Footer: React.FC = () => {
  const { t } = useTranslation();


  return (
    <Wrapper>
            <div>{t('Footer.logo')}</div>
            <Divider>
                <a href="">{t('Footer.help')}</a> 
                <a href="">{t('Footer.privacy')}</a> 
            </Divider>
    </Wrapper>
  );
};

export default Footer;