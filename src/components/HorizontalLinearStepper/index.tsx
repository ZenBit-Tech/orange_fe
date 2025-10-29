import Step from '@mui/material/Step';

import { getStepContent } from '@/helpers/getStep';

import { StyledStepIcon } from '../StyledStepIcon';
import {
  StepperWrapper,
  StyledConnector,
  StyledContent,
  StyledStepLabel,
  StyledStepper,
} from './styles';
import { useHorizontalLinearStepper } from './useHorizontalLinearStepper';

export const HorizontalLinearStepper: React.FC = () => {
  const { steps, activeStep, handleNext, isError } = useHorizontalLinearStepper();
  return (
    <StepperWrapper>
      <StyledStepper activeStep={activeStep} connector={<StyledConnector error={isError} />}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StyledStepLabel
              error={isError && activeStep === index}
              StepIconComponent={(stepIconProps) => (
                <StyledStepIcon {...stepIconProps} error={isError && activeStep === index} />
              )}
            >
              {label}
            </StyledStepLabel>
          </Step>
        ))}
      </StyledStepper>
      <StyledContent>{getStepContent(activeStep, handleNext)}</StyledContent>
    </StepperWrapper>
  );
};
