import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  maxWidth: '580px',
  backgroundColor: theme.palette.backgrounds.white,
  borderRadius: '20px',
  padding: theme.spacing(4, 8),
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 4),
    margin: theme.spacing(0, 2),
    maxWidth: '90%',
  },
}));

export const ModalHeader = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.textIcons.textSecondary,

  '&:hover': {
    backgroundColor: theme.palette.backgrounds.bgPrimary,
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size24,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textPrimary,
  fontFamily: theme.typography.general.fontPoppins,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.sizes.size20,
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size16,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textSecondary,
  lineHeight: '1.5',
  fontFamily: theme.typography.general.fontInter,
  textAlign: 'center',
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.sizes.size14,
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  width: '100%',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(1.5),
  },

  '&.step-2': {
    width: 'unset',
    flexDirection: 'row',
    gap: 0,
    justifyContent: 'unset',
  },
}));

export const CancelButton = styled('button')(({ theme }) => ({
  width: '194px',
  padding: theme.spacing(1.5, 3),
  fontSize: theme.typography.sizes.size16,
  fontWeight: theme.typography.weights.weight500,
  fontFamily: theme.typography.general.fontInter,
  color: theme.palette.textIcons.textPrimary,
  backgroundColor: theme.palette.backgrounds.white,
  border: `1px solid ${theme.palette.border.default}`,
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: theme.palette.backgrounds.bgPrimary,
    borderColor: theme.palette.border.defaultHover,
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const DeleteButton = styled('button')(({ theme }) => ({
  width: '194px',
  padding: theme.spacing(1.5, 3),
  fontSize: theme.typography.sizes.size16,
  fontWeight: theme.typography.weights.weight500,
  fontFamily: theme.typography.general.fontInter,
  color: theme.palette.textIcons.errorMain,
  backgroundColor: theme.palette.backgrounds.white,
  border: `1px solid ${theme.palette.border.error}`,
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: theme.palette.surface.error.hoverOutlinedButton,
  },

  '&:active': {
    backgroundColor: theme.palette.surface.error.light,
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
