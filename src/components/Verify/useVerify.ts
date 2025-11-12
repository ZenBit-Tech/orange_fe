import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useVerifyMagicLinkMutation } from '@/store/authApi';

export const useVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [verifyMagicLink, { isLoading, isSuccess, isError }] = useVerifyMagicLinkMutation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const email = params.get('email');

    if (token && email) {
      verifyMagicLink({ token, email })
        .unwrap()
        .then(() => {
          setTimeout(() => {
            navigate('/upload', { replace: true });
          }, 1500);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [location.search, verifyMagicLink, navigate]);

  return {
    location,
    navigate,
    isLoading,
    isSuccess,
    isError,
    t,
  };
};
