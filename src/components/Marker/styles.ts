import { Autocomplete, Box, IconButton, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MarkerRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '2.5fr 1fr 1fr 1.2fr 60px',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 2, 1, 2),
  minWidth: '900px',
  overflow: 'visible',
  position: 'relative',

  '&:last-child': {
    borderBottom: 'none',
  },

  '&.last-step': {
    gridTemplateColumns: '2fr 0.7fr 2.5fr 0fr 0px',
    gap: 0,
  },
}));

export const MarkerCell = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),

  '&.cell-markers': {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  marginTop: '0',

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
  textAlign: 'left',
  position: 'relative',
  top: '100%',
  left: 0,
  whiteSpace: 'nowrap',
}));

export const MarkerCircle = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: '1px solid',
  marginRight: theme.spacing(1),
  '&.Normal': {
    backgroundColor: theme.palette?.baseColors?.green?.[500],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
  '&.Slightly-High': {
    backgroundColor: theme.palette?.baseColors?.yellow?.[300],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
  '&.High': {
    backgroundColor: theme.palette?.baseColors?.red?.[400],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
  '&.Slightly-Low': {
    backgroundColor: theme.palette?.baseColors?.yellow?.[300],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
  '&.Low': {
    backgroundColor: theme.palette?.baseColors?.red?.[400],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
  '&.Critical': {
    backgroundColor: theme.palette?.baseColors?.red?.[500],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
}));

export const MarkerText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size16,
  color: theme.palette.textIcons.textPrimary,
  fontWeight: theme.typography.weights.weight400,

  '&.normal-range': {
    fontSize: theme.typography.sizes.size14,
  },
}));

export const MarkerInterpretation = styled(Box)(({ theme }) => ({
  width: '106px',
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size14,
  color: theme.palette.textIcons.textPrimary,
  fontWeight: theme.typography.weights.weight400,
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(4),
  borderRadius: '8px',
  textAlign: 'center',

  '&.Normal': {
    color: theme.palette.markerIndicatorColors.text.green,
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelGreen,
    border: `1px solid ${theme.palette.border.markerInterpretation.borderGreen}`,
  },
  '&.Slightly-High': {
    color: theme.palette.markerIndicatorColors.text.yellow,
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelYellow,
    border: `1px solid ${theme.palette.border.markerInterpretation.borderYellow}`,
  },
  '&.High': {
    color: theme.palette.markerIndicatorColors.text.red,
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelRed,
    border: `1px solid ${theme.palette.border.markerInterpretation.borderRed}`,
  },
  '&.Slightly-Low': {
    color: theme.palette.markerIndicatorColors.text.yellow,
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelYellow,
    border: `1px solid ${theme.palette.border.markerInterpretation.borderYellow}`,
  },
  '&.Low': {
    color: theme.palette.markerIndicatorColors.text.red,
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelRed,
    border: `1px solid ${theme.palette.border.markerInterpretation.borderRed}`,
  },
  '&.Critical': {
    color: theme.palette.baseColors.red[800],
    backgroundColor: theme.palette.baseColors.red[200],
    border: `1px solid ${theme.palette.baseColors.red[300]}`,
  },
}));

export const TooltipContainer = styled(Box)(() => ({
  position: 'relative',
  display: 'inline-flex',

  '&:hover .tooltip-content': {
    opacity: 1,
    visibility: 'visible',
  },
}));

export const TooltipContent = styled(Box)(({ theme }) => ({
  position: 'fixed',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.backgrounds.bgPrimary
      : theme.palette.baseColors.green[50],
  padding: '16px',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.border.borderPrimary}`,
  fontSize: theme.typography.sizes.size14,
  lineHeight: '1.6',
  width: '320px',
  overflow: 'visible',
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
  pointerEvents: 'none',
  zIndex: 99999,

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-10px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: `10px solid ${theme.palette.border.borderPrimary}`,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    right: '-7px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderTop: '7px solid transparent',
    borderBottom: '7px solid transparent',
    borderLeft: `9px solid ${theme.palette.mode === 'dark' ? 'black' : 'white'}`,
    zIndex: 1,
  },
}));

export const QuestionIconButton = styled(IconButton)(({ theme }) => ({
  width: '40px',
  height: '40px',
  color: theme.palette.textIcons.textGrey[400],
}));

export const TooltipTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size18,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textPrimary,
  fontFamily: theme.typography.general.fontInter,
  marginBottom: theme.spacing(1),
  lineHeight: '1.5',
}));

export const TooltipDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size14,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textSecondary,
  fontFamily: theme.typography.general.fontInter,
  marginBottom: theme.spacing(1),
  lineHeight: '1.6',
}));

export const TooltipImportance = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.sizes.size14,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textSecondary,
  fontFamily: theme.typography.general.fontInter,
  margin: '0',
  lineHeight: '1.6',

  '& strong': {
    fontWeight: theme.typography.weights.weight600,
    color: theme.palette.textIcons.textPrimary,
  },
}));
