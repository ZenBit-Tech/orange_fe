import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/store';
import { logout } from '@/store/authSlice';

export const useLinkExpired = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  return { handleNavigate };
};
