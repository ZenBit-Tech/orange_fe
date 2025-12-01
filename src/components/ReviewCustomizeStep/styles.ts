import { Autocomplete, Box, Checkbox, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperReviewCustomize = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(6, 4),
  display: 'flex',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderRadius: 20,
  border: `1px solid ${theme.palette.baseColors.grey[200]}`,
  backgroundColor: theme.palette.backgrounds.white,
  boxSizing: 'border-box',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2),
    borderWidth: 1,
    borderRadius: 12,
  },
}));

export const TitleText = styled('h5')(({ theme }) => ({
  fontSize: theme.typography.sizes.size24,
  fontFamily: theme.typography.general.fontPoppins,
  fontWeight: theme.typography.weights.weight400,
  color: theme.palette.textIcons.textPrimary,
  margin: theme.spacing(0, 0, 1, 0),
  lineHeight: '1.17',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1),
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textSecondary,
  lineHeight: '1.5',
  textAlign: 'center',

  '&.customize-description': {
    textAlign: 'left',
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '24px',
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textPrimary,
  lineHeight: '1.33',
  marginTop: theme.spacing(6),

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export const FormField = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '200px',
  position: 'relative',
  paddingBottom: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    flex: '1 1 calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
    minWidth: '140px',
    '&.full-width': {
      flex: '1 1 100%',
      maxWidth: '100%',
    },
  },
}));

export const FormErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.errorMain,
  marginTop: theme.spacing(0.5),
  position: 'absolute',
  bottom: 0,
  left: 0,
}));

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    color: theme.palette.textIcons.textPrimary,

    '& fieldset': {
      borderColor: theme.palette.border.default,
    },
    '&:hover fieldset': {
      color: theme.palette.textIcons.textPrimary,
      borderColor: theme.palette.border.defaultHover,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.surface.primary.default,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.textIcons.errorMain,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.baseColors.green[700],
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.textIcons.errorMain,
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => {
  return {
    '& .MuiOutlinedInput-root': {
      color: theme.palette.textIcons.textPrimary,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.textIcons.textTeriartry,
    },
    '&.MuiInputLabel-root.Mui-focused': {
      color: theme.palette.baseColors.green[700],
    },
  };
});

export const CustomizeSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
  },
}));

export const CheckboxGrid = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1.5),
  },
}));

export const CheckboxCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5, 3),
  border: `1px solid ${theme.palette.border.default}`,
  borderRadius: '12px',
  backgroundColor: theme.palette.backgrounds.bgSecondary,
  cursor: 'pointer',
  transition: 'all 0.2s',
  position: 'relative',

  '&:hover': {
    borderColor: theme.palette.border.defaultHover,
    backgroundColor: theme.palette.backgrounds.bgPrimary,
  },

  '&.checked-nutrition': {
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelGreen,
    borderColor: theme.palette.surface.cardBorder.cardBorderPastelGreen,
  },

  '&.checked-supplement': {
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelCyan,
    borderColor: theme.palette.surface.cardBorder.cardBorderPastelCyan,
  },

  '&.checked-exercise': {
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelBlue,
    borderColor: theme.palette.surface.cardBorder.cardBorderPastelCyan,
  },

  '&.checked-medication': {
    backgroundColor: theme.palette.surface.cardBackground.cardBgPastelGreen,
    borderColor: theme.palette.surface.cardBorder.cardBorderPastelGreen,
  },

  [theme.breakpoints.down('md')]: {
    height: '77px',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    gap: theme.spacing(2),
  },
}));

export const CheckboxIcon = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '8px',
  backgroundColor: theme.palette.backgrounds.bgTeriarty,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.1s',

  '&.checked-nutrition': {
    backgroundColor: theme.palette.surface.cardIcon.cardIconGreen,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.baseColors.green[100]
        : theme.palette.baseColors.pastel.green.green,
  },

  '&.checked-supplement': {
    backgroundColor: theme.palette.surface.cardIcon.cardIconCyan,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.baseColors.pastel.cyan[100]
        : theme.palette.baseColors.pastel.cyan.cyan,
  },

  '&.checked-exercise': {
    backgroundColor: theme.palette.surface.cardIcon.cardIconBlue,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.baseColors.pastel.blue[100]
        : theme.palette.baseColors.pastel.blue.blue,
  },

  '&.checked-medication': {
    backgroundColor: theme.palette.surface.cardIcon.cardIconTeal,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.baseColors.green[100]
        : theme.palette.surface.primary.default,
  },

  [theme.breakpoints.down('md')]: {
    width: '48px',
    height: '48px',
  },
}));

export const CheckboxContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const CheckboxTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textPrimary,

  [theme.breakpoints.down('md')]: {
    maxWidth: '200px',
  },
}));

export const CheckboxDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textTeriartry,
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2.5),
  right: theme.spacing(3),
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.1s',

  [theme.breakpoints.down('md')]: {
    top: theme.spacing(1),
  },

  '&.checked-nutrition': {
    '&.Mui-checked': {
      color: theme.palette.baseColors.pastel.green.green,
    },
  },

  '&.checked-supplement': {
    '&.Mui-checked': {
      color: theme.palette.baseColors.pastel.cyan.cyan,
    },
  },

  '&.checked-exercise': {
    '&.Mui-checked': {
      color: theme.palette.baseColors.pastel.blue.blue,
    },
  },

  '&.checked-medication': {
    '&.Mui-checked': {
      color: theme.palette.surface.primary.default,
    },
  },

  '&.MuiButtonBase-root': {
    borderRadius: '100%',
  },
}));

export const AdditionalTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(6),
  color: theme.palette.textIcons.textPrimary,
  lineHeight: '1.33',

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
}));

export const AdditionalDescriptionText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  color: theme.palette.textIcons.textSecondary,
  lineHeight: '1.5',
  textAlign: 'left',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    justifyContent: 'center',
  },
}));

export const TextAreaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(2),

  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.baseColors.green[700],
  },

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
}));

export const StyledTextAreaField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    color: theme.palette.textIcons.textPrimary,
    alignItems: 'flex-start',

    '& fieldset': {
      borderColor: theme.palette.border.default,
    },
    '&:hover fieldset': {
      color: theme.palette.textIcons.textPrimary,
      borderColor: theme.palette.border.defaultHover,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.surface.primary.default,
    },
  },

  '& .MuiInputLabel-root': {
    color: theme.palette.textIcons.textTeriartry,
  },

  '& .MuiOutlinedInput-input': {
    '&::placeholder': {
      color: theme.palette.textIcons.textGrey,
      opacity: 1,
    },
  },

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    flex: '1',
    minWidth: '140px',
  },
}));

export const BackButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  color: theme.palette.textIcons.textPrimary,
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size16,
  backgroundColor: theme.palette.backgrounds.white,
  border: `1px solid ${theme.palette.border.default}`,
  borderRadius: '12px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: theme.palette.backgrounds.bgPrimary,
    borderColor: theme.palette.border.defaultHover,
  },

  [theme.breakpoints.down('md')]: {
    flex: '0 0 40%',
    width: '100%',
    justifyContent: 'center',
  },
}));

export const ContinueButton = styled('button')(({ theme }) => ({
  width: '194px',
  padding: theme.spacing(1, 2.75),
  color: theme.palette.baseColors.grey[50],
  backgroundColor: theme.palette.surface.primary.default,
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size16,
  '&:hover': {
    backgroundColor: theme.palette.surface.primary.hover,
  },

  '&:active': {
    backgroundColor: theme.palette.surface.primary.press,
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('md')]: {
    flex: '0 0 60%',
    width: '100%',
  },

  '&.marker-table-step-2': {
    width: '100px',
    flex: 'unset',
    padding: '0',
  },
}));
