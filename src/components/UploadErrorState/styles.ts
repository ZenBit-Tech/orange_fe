import { Button, Typography, styled } from '@mui/material';

import { CiCircleAlert } from 'react-icons/ci';

export const StyledIcon = styled(CiCircleAlert)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '48px',
  backgroundColor: 'rgba(254, 228, 226, 1)',
  borderRadius: '50%',
  padding: '8px',
  marginBottom: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
    padding: '6px',
    marginBottom: '12px',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: '450px',
  color: theme.palette.textIcons?.textPrimary,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: '12px',
  borderRadius: '12px',
  padding: '8px 22px',
  width: '329px',
  textTransform: 'none',
  color: theme.palette.error.main,
  borderColor: theme.palette.error.main,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.error.main + '1A',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '329px',
    padding: '10px 22px',
  },
}));
