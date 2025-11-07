import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useGetMeQuery, useLogoutMutation } from '@/store/authApi';

export const useNav = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: user, isSuccess } = useGetMeQuery();
  const [logoutUser] = useLogoutMutation();

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isAuthenticated = isSuccess && !!user;

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();

      navigate('/login');
    } catch (err) {
      console.error('Failed to log out:', err);
    }
  };

  const handleNavigate = () => {
    if (isAuthenticated) {
      navigate('/upload');
    } else {
      navigate('/login');
    }
  };

  const { t } = useTranslation();

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
  return {
    t,
    navigate,
    links,
    isMobileMenuOpen,
    handleToggleMenu,
    handleLogout,
    handleNavigate,
    isAuthenticated,
  };
};
