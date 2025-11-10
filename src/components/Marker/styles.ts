import { Autocomplete, Box, IconButton, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MarkerRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2.5fr 1fr 1.5fr 1.2fr 60px',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 3),
  alignItems: 'center',
  minWidth: '900px',

  '&:last-child': {
    borderBottom: 'none',
  },
}));

export const MarkerCell = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

export const MobileLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size12,
  fontWeight: theme.typography.weights.weight500,
  color: theme.palette.baseColors.grey[600],
  fontFamily: theme.typography.general.fontInter,
  display: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    fontFamily: theme.typography.general.fontInter,
    fontSize: theme.typography.sizes.size14,
    color: theme.palette.textIcons.textPrimary,

    '& fieldset': {
      borderRadius: '12px',
      borderColor: theme.palette.border.default,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.border.defaultHover,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.surface.primary.default,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.textIcons.errorMain,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: theme.typography.general.fontInter,
    fontSize: theme.typography.sizes.size12,
    color: theme.palette.textIcons.textTeriartry,
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.textIcons.errorMain,
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiOutlinedInput-root': {
      fontSize: theme.typography.sizes.size16,
      minHeight: '48px',
    },
    '& .MuiInputLabel-root': {
      fontSize: theme.typography.sizes.size14,
    },
  },
})) as typeof Autocomplete;

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    fontFamily: theme.typography.general.fontInter,
    fontSize: theme.typography.sizes.size14,
    color: theme.palette.textIcons.textPrimary,

    '& fieldset': {
      borderColor: theme.palette.border.default,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.border.defaultHover,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.surface.primary.default,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.textIcons.errorMain,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: theme.typography.general.fontInter,
    fontSize: theme.typography.sizes.size12,
    color: theme.palette.textIcons.textTeriartry,
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.textIcons.errorMain,
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiOutlinedInput-root': {
      fontSize: theme.typography.sizes.size16,
      minHeight: '48px',
    },
    '& .MuiInputLabel-root': {
      fontSize: theme.typography.sizes.size14,
    },
  },
}));

export const NormalRangeText = styled('p')(({ theme }) => ({
  fontSize: theme.typography.sizes.size14,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textSecondary,
  fontFamily: theme.typography.general.fontInter,
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  margin: '0',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: theme.palette.surface.error.hoverOutlinedButton,
  },

  '&:focus': {
    backgroundColor: theme.palette.surface.error.hoverOutlinedButton,
    outline: `2px solid ${theme.palette.surface.error.light}`,
  },

  '& svg': {
    transition: 'color 0.2s',
    color: theme.palette.baseColors.grey[400],
    width: '20px',
    height: '20px',
  },

  '&:hover svg': {
    color: theme.palette.textIcons.errorMain,
  },

  [theme.breakpoints.down('md')]: {
    alignSelf: 'flex-end',
  },
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size12,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.errorMain,
  fontFamily: theme.typography.general.fontInter,
  marginTop: theme.spacing(0.25),
  textAlign: 'left',
}));
