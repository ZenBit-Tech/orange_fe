import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store';
import { logout } from '@/store/authSlice';

export const useNav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const token = useAppSelector((state) => state.auth.token);
  const isAuthenticated = Boolean(token);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentPath = location.pathname;

  const hideAuthButtonsOn = ['/login', '/privacy', '/terms'];
  const hideLinksOn = ['/login', '/privacy', '/terms', '/upload'];

  const showLinks = !hideLinksOn.includes(currentPath);
  const showAuthButtons = isAuthenticated && !hideAuthButtonsOn.includes(currentPath);

  const handleTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleNavigate = () => {
    if (isAuthenticated) {
      navigate('/upload');
    } else {
      navigate('/login');
    }
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
  return {
    t,
    navigate,
    links,
    isMobileMenuOpen,
    handleToggleMenu,
    handleLogout,
    handleNavigate,
    isAuthenticated,
    showLinks,
    showAuthButtons,
    currentPath,
    handleTop,
  };
};
