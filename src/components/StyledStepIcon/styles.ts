import { styled } from '@mui/material';

export const StyledStepIconRoot = styled('div')<{
  ownerState: { active?: boolean; completed?: boolean; error?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.backgrounds.bgTeriarty,
  color: theme.palette.textIcons?.textSecondary,
  width: 32,
  height: 32,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'normal',
  [theme.breakpoints.up('md')]: {
    width: 40,
    height: 40,
  },
  ...(ownerState.active && {
    backgroundColor: ownerState.error
      ? theme.palette.surface.error.light
      : theme.palette.surface.primary.light,
    color: ownerState.error ? theme.palette.textIcons?.errorDark : theme.palette.textIcons?.primary,
  }),
  ...(ownerState.completed &&
    !ownerState.error && {
      backgroundColor: theme.palette.surface.primary.light,
      color: theme.palette.textIcons?.primary,
    }),
  ...(ownerState.error && {
    backgroundColor: theme.palette.surface.error.light,
    color: theme.palette.textIcons?.errorDark,
  }),
}));
