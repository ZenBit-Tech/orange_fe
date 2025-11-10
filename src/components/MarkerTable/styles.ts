import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MarkerTableContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  border: `2px solid ${theme.palette.border.default}`,
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: theme.palette.backgrounds.white,
  width: '100%',
}));

export const MarkerTableBody = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  overflowY: 'visible',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.baseColors.grey[300]} transparent`,

  '&::-webkit-scrollbar': {
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.baseColors.grey[300],
    borderRadius: '3px',
  },
}));

export const MarkerTableContent = styled(Box)(() => ({
  minWidth: '900px',
  display: 'flex',
  flexDirection: 'column',
}));

export const MarkerTableHeader = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '6fr 2.2fr 3fr 2.2fr 60px',
  gap: theme.spacing(2),
  padding: theme.spacing(1.25, 2),
  backgroundColor: theme.palette.baseColors.grey.second50,
  borderBottom: `1px solid ${theme.palette.border.default}`,
  alignItems: 'center',
}));

export const MarkerTableHeaderCell = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.sizes.size16,
  fontWeight: theme.typography.weights.weight500,
  color: theme.palette.textIcons.textPrimary,
  fontFamily: theme.typography.general.fontInter,
}));

export const MarkerTableFooter = styled(Box)(({ theme }) => ({
  height: '58px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderTop: `1px solid ${theme.palette.border.default}`,
  backgroundColor: theme.palette.baseColors.grey.second50,
  transition: 'background-color 0.2s',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const AddMarkerButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0.75, 2),
  cursor: 'pointer',
  border: `1px solid ${theme.palette.border.default}`,
  borderRadius: '12px',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: theme.palette.surface.primary.hoverLight,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8, 2),
    margin: theme.spacing(0, 0.5),
  },
}));

export const AddMarkerButtonText = styled('p')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.sizes.size16,
  fontWeight: theme.typography.weights.weight500,
  color: theme.palette.baseColors.grey[950],
  fontFamily: theme.typography.general.fontInter,
  margin: '0',
}));
