import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperAnalysisResult = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 48px 0 48px',
  display: 'flex',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderRadius: 20,
  borderWidth: 2,
  fontFamily: theme.typography.general.fontInter,
  borderColor: theme.palette.baseColors.grey[200],
  backgroundColor: theme.palette.backgrounds.white,
  boxSizing: 'border-box',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2),
    borderWidth: 1,
    borderRadius: 12,
  },
}));

export const Disclaimer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 3),
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.surface.cardBackground.cardBgPastelYellow,
  border: `1px solid ${theme.palette.baseColors.yellow[500]}`,
  borderRadius: '12px',
  color: theme.palette.textIcons.textPrimary,

  '.octagon-alert': {
    paddingRight: theme.spacing(1),
  },
}));
