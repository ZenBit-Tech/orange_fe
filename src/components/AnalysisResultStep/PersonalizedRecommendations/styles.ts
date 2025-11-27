import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperBloodTestSummary = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2, 4),
  display: 'flex',
  borderRadius: 20,
  border: `1px solid ${theme.palette.border.default}`,
  backgroundColor: theme.palette.baseColors.grey.second50,
  boxSizing: 'border-box',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: theme.spacing(2, 2),
    border: 'none',
    backgroundColor: 'none',
  },
}));

export const Diagram = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '230px',
  padding: theme.spacing(5, 1.5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: `1px solid ${theme.palette.border.default}`,
  borderRadius: 20,
  backgroundColor: theme.palette.baseColors.grey[0],
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    maxWidth: 'unset',
    marginBottom: theme.spacing(3),
  },
}));

export const StyledBloodTestSummary = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(0, 0, 0, 5),
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 20,
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));

export const BloodTestSummaryTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textPrimary,
  lineHeight: '1.60',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const SummaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons.textSecondary,
  lineHeight: '1.6',
  marginBottom: '24px',

  '&.end': {
    marginTop: '24px',
    marginBottom: '0',
  },
}));

export const MarkersList = styled('ul')(() => ({
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

export const MarkerItem = styled('li')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '24px',
  fontSize: theme.typography.sizes.size16,
  lineHeight: '1.6',
  color: theme.palette.textIcons.textSecondary,

  '&::before': {
    content: '"•"',
    position: 'absolute',
    left: '0',
    fontWeight: theme.typography.weights.weight600,
    fontSize: theme.typography.sizes.size18,
  },
}));

export const MarkerName = styled('strong')(({ theme }) => ({
  fontWeight: theme.typography.weights.weight600,
}));

export const DoughnutWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(3),
  width: '120px',
  height: '120px',
}));

export const CenteredText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.sizes.size24,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  color: theme.palette.textIcons.textPrimary,
}));

export const ConclusionText = styled(Typography)(({ theme }) => ({
  lineHeight: '1.6',
  color: theme.palette.textIcons.textPrimary,
  marginTop: '24px',
}));
