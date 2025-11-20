import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useResultButtons = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    navigate('/');
  };

  return { handleBack, t };
};
