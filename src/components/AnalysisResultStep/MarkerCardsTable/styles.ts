import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MobileMarkerCardWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.border.default}`,
  borderRadius: '12px',
  marginBottom: theme.spacing(8),
  backgroundColor: theme.palette.backgrounds.white,
  overflow: 'hidden',
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.border.default}`,
  backgroundColor: theme.palette.backgrounds.white,
  overflow: 'hidden',

  '&.last-child': {
    borderBottom: 'unset',
  },

  '&.expanded': {
    borderBottom: 'unset',
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
}));

export const MarkerInfo = styled(Box)(() => ({
  flex: 1,
}));

export const MarkerNameRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const MarkerCircle = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  flexShrink: 0,
  '&.Normal': {
    backgroundColor: theme.palette?.baseColors?.green?.[500],
    border: `1px solid ${theme.palette?.baseColors?.green?.[50]}`,
  },
  '&.Slightly-High': {
    backgroundColor: theme.palette?.baseColors?.yellow?.[300],
    border: `1px solid ${theme.palette?.baseColors?.yellow?.[50]}`,
  },
  '&.High': {
    backgroundColor: theme.palette?.baseColors?.red?.[400],
    border: `1px solid ${theme.palette?.baseColors?.red?.[50]}`,
  },
  '&.Slightly-Low': {
    backgroundColor: theme.palette?.baseColors?.yellow?.[300],
    border: `1px solid ${theme.palette?.baseColors?.yellow?.[50]}`,
  },
  '&.Low': {
    backgroundColor: theme.palette?.baseColors?.red?.[400],
    border: `1px solid ${theme.palette?.baseColors?.red?.[50]}`,
  },
  '&.Critical': {
    color: theme.palette?.baseColors?.red?.[500],
    border: `1px solid ${theme.palette?.baseColors?.red?.[50]}`,
  },
}));

export const MarkerName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.general.fontInter,
  fontWeight: theme.typography.weights.weight500,
  color: theme.palette.textIcons.textPrimary,
}));

export const StatusBadge = styled(Typography)(({ theme }) => ({
  width: '106px',
  textAlign: 'center',
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(1),
  borderRadius: '8px',
  display: 'inline-block',

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

export const ExpandButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.textIcons.textSecondary,
}));

export const CardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2, 2, 2),
}));

export const ValueLabel = styled(Typography)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.textIcons.textSecondary,
  marginBottom: theme.spacing(2),

  '&.top': {
    marginTop: theme.spacing(1),
  },
  '&.bottom': {
    marginBottom: theme.spacing(3),
  },
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textTeriartry,
  fontWeight: theme.typography.weights.weight500,
  marginLeft: theme.spacing(1),
}));

export const HealthBarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
}));

export const InterpretationSection = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.border.default}`,
  marginTop: theme.spacing(6),
  padding: theme.spacing(2, 0, 0, 0),
  borderRadius: '8px',
}));

export const ImportanceText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textSecondary,
  display: 'inline',
}));
