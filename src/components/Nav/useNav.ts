import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useNav = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate('/upload');
  };

  const links = [
    { link: t('Form.nav.links.about-us'), path: '/about-us' },
    { link: t('Form.nav.links.our-features'), path: '/our-features' },
    { link: t('Form.nav.links.how-it-works'), path: '/how-it-works' },
    { link: t('Form.nav.links.your-privacy'), path: '/your-privacy' },
    { link: t('Form.nav.links.faq'), path: '/faq' },
  ];
  return { t, handleNavigate, links };
};
