import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/store';

export const ProtectedRoute = () => {
  const token = useAppSelector((state) => state.auth.token);
  const isAuthenticated = Boolean(token);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
