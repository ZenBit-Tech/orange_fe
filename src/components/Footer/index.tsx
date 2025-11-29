import React from 'react';

import { t } from 'i18next';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

import { flipTheme } from '@/store/darkThemeSlice';

import { Divider, FlipButton, Wrapper } from './styles';
import { useFooter } from './useFooter';

interface FooterProps {
  transparent?: boolean;
}
export const Footer: React.FC<FooterProps> = ({ transparent = true }) => {
  const { isTheme, dispatch } = useFooter();

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
          {isTheme ? (
            <Moon onClick={() => dispatch(flipTheme())} />
          ) : (
            <Sun onClick={() => dispatch(flipTheme())} />
          )}
        </FlipButton>
      </Divider>
    </Wrapper>
  );
};

export default Footer;
