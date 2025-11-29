import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import { useAppSelector } from '@/store';
import { isTokenExpired } from '@/utils/auth';

export const ProtectedRoute = () => {
  const reduxToken = useAppSelector((state) => state.auth.token);

  const token = reduxToken || localStorage.getItem('accessToken');
  useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isTokenExpired(token)) {
    return <Navigate to="/link-expired" replace />;
  }

  return <Outlet />;
};
