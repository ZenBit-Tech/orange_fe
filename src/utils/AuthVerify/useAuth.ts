import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { RootState } from '@/store';
import { getTokenTimeLeft } from '@/utils/AuthVerify/auth';

export const useAuth = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    const timeLeft = getTokenTimeLeft(token);
    const handleLogout = () => {
      navigate('/link-expired');
    };

    if (timeLeft <= 0) {
      handleLogout();
      return;
    }

    const timer = setTimeout(() => {
      handleLogout();
    }, timeLeft);

    return () => clearTimeout(timer);
  }, [token, dispatch, navigate]);
};
