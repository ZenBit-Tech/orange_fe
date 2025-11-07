import { Navigate, Outlet } from 'react-router-dom';

import { useGetMeQuery } from '@/store/authApi';

export const ProtectedRoute = () => {
  const { isSuccess, data } = useGetMeQuery();
  const isAuthenticated = isSuccess && !!data;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
