import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useLazyVerifyMagicLinkQuery } from '@/store/authApi';

export const useVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [verifyMagicLink, { isLoading, error, data }] = useLazyVerifyMagicLinkQuery();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const email = params.get('email');

    if (token && email) {
      verifyMagicLink({ token, email })
        .unwrap()
        .then(() => {
          setTimeout(() => {
            navigate('/', { replace: true });
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
    useLazyVerifyMagicLinkQuery,
    isLoading,
    error,
    data,
    t,
  };
};
