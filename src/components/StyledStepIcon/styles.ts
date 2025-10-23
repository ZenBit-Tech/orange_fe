import { styled } from '@mui/material';

export const StyledStepIconRoot = styled('div')<{
  ownerState: { active?: boolean; completed?: boolean; error?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.stepperColors.disabledStep,
  color: theme.palette.stepperColors.nonActiveText,
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
    backgroundColor: theme.palette.stepperColors.activeStep,
    color: theme.palette.globalColors.primaryGreen,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.stepperColors.activeStep,
    color: theme.palette.globalColors.primaryGreen,
  }),
  ...(ownerState.error && {
    backgroundColor: theme.palette.stepperColors.errorStep,
    color: theme.palette.error.main,
  }),
}));
