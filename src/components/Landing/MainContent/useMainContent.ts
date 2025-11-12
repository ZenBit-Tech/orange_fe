import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export const useMainContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const lists = [
    t('Main-Content.feature-list.instant-analysis'),
    t('Main-Content.feature-list.private'),
    t('Main-Content.feature-list.available'),
  ];

  const handleNavigate = () => {
    navigate('/upload');
  };

  return { lists, t, handleNavigate, ref, inView };
};
