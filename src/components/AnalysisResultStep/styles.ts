import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperAnalysisResult = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(6, 4),
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
