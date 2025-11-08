import { Box, Button, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const WrapperUpload = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  padding: theme.spacing(4, 2),
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderRadius: 20,
  borderWidth: 1,
  borderColor: theme.palette.baseColors.grey[200],
  backgroundColor: theme.palette.backgrounds.white,
  alignItems: 'center',
  textAlign: 'center',
  boxSizing: 'border-box',
  '& .MuiTypography-body1': {
    color: theme.palette.textIcons?.textSecondary,
    alignItems: 'center',
    marginBottom: 16,
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '48px',
    paddingBottom: '5px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '15px',
  padding: theme.spacing(0, 2),
  boxSizing: 'border-box',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    margin: '15px',
    padding: 0,
  },
}));

export const StyledTitle = styled(Typography)`
  font-family: ${theme.typography.general.fontPoppins};
`;

export const Spacer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    flex: '1 1 auto',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.surface.primary.default,
  color: theme.palette.textIcons?.contrast,
  width: '192px',
  height: '42px',
  borderRadius: '12px',
  textTransform: 'none',
  [theme.breakpoints.up('md')]: {
    width: '192px',
  },
}));
