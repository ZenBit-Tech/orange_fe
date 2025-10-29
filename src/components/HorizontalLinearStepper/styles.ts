import { Box, Stepper } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';

interface CustomProps {
  error?: boolean;
}

export const StepperWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1062px',
  height: '100%',
  margin: '5px auto',
  padding: theme.spacing(2, 0),
  boxSizing: 'border-box',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
}));

export const StyledStepper = styled(Stepper)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: 0,
  },
}));

export const StyledContent = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledConnector = styled(StepConnector, {
  shouldForwardProp: (prop) => prop !== 'error',
})<CustomProps & { error?: boolean }>(({ theme, error }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    flexGrow: 0,
    flexShrink: 1,
    width: '24px',
    [theme.breakpoints.up('md')]: {
      width: '48.5px',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.stepperColors.disabledStep,
    borderTopWidth: 2,
    borderRadius: 1,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.stepperColors.activeStep,
    ...(error && {
      borderColor: theme.palette.error.main,
    }),
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.stepperColors.activeStep,
  },
}));

export const StyledStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) => prop !== 'error',
})<CustomProps>(({ theme, error }) => ({
  [`& .${stepLabelClasses.label}`]: {
    color: theme.palette.stepperColors.nonActiveText,
    whiteSpace: 'normal',
  },
  [`& .${stepLabelClasses.label}.${stepLabelClasses.active}`]: {
    color: theme.palette.globalColors.primaryGreen,
    fontWeight: 500,
    ...(error && {
      color: theme.palette.error.main,
    }),
  },
  [`& .${stepLabelClasses.label}.${stepLabelClasses.completed}`]: {
    color: theme.palette.globalColors.primaryGreen,
  },
  [`& .${stepLabelClasses.label}.${stepLabelClasses.error}`]: {
    color: theme.palette.error.main,
  },
}));
