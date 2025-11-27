import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import { useAppSelector } from '@/store';
import { isTokenExpired } from '@/utils/auth';

export const ProtectedRoute = () => {
  const token = useAppSelector((state) => state.auth.token);
  useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isTokenExpired(token)) {
    return <Navigate to="/link-expired" replace />;
  }

  return <Outlet />;
};
