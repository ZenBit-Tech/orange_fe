import React, { useEffect } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setAuth } from '@/store/authSlice';

export const AuthVerify: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);
      dispatch(setAuth({ token }));
      navigate('/upload');
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
      <Typography sx={{ mt: 2 }}>{t('Verify.title')}</Typography>
    </Box>
  );
};
