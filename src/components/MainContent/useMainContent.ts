import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useMainContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lists = [
    t('Main-Content.feature-list.instant-analysis'),
    t('Main-Content.feature-list.private'),
    t('Main-Content.feature-list.available'),
  ];

  const handleNavigate = () => {
    navigate('/upload');
  };

  return { lists, t, handleNavigate };
};
