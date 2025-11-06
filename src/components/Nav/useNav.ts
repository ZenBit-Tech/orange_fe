import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate('/upload');
  };

  const links = [
    { link: t('Form.nav.links.about-us'), path: '#about-us' },
    { link: t('Form.nav.links.how-it-works'), path: '#how-it-works' },
    { link: t('Form.nav.links.your-privacy'), path: '#privacy-section' },
    { link: t('Form.nav.links.faq'), path: '#faq' },
  ];
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  return { t, handleNavigate, links, isMobileMenuOpen, handleToggleMenu };
};
