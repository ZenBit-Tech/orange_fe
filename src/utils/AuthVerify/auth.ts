import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;
  try {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
};

export const getTokenTimeLeft = (token: string | null): number => {
  if (!token) return 0;
  try {
    const decoded: { exp: number } = jwtDecode(token);
    const expTime = decoded.exp * 1000;
    const currentTime = Date.now();
    return expTime - currentTime;
  } catch {
    return 0;
  }
};
