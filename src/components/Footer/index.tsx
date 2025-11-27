import React from 'react';

import { Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { flipTheme } from '@/store/darkThemeSlice';

import { Divider, FlipButton, Wrapper } from './styles';

interface FooterProps {
  transparent?: boolean;
}
export const Footer: React.FC<FooterProps> = ({ transparent = true }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Wrapper transparent={transparent}>
      <div>{t('Footer.logo')}</div>
      <Divider>
        <a href="mailto:plasma.ai.project@gmail.com">{t('Footer.help')}</a>
        <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
          {t('Footer.privacy')}
        </Link>
        <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>
          {t('Footer.terms')}
        </Link>
        <FlipButton>
          <Sun onClick={() => dispatch(flipTheme())} />
        </FlipButton>
      </Divider>
    </Wrapper>
  );
};

export default Footer;
