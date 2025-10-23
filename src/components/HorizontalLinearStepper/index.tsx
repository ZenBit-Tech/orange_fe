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
  const { steps, activeStep, handleNext } = useHorizontalLinearStepper();

  return (
    <StepperWrapper>
      <StyledStepper activeStep={activeStep} connector={<StyledConnector />}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StyledStepLabel StepIconComponent={StyledStepIcon}>{label}</StyledStepLabel>
          </Step>
        ))}
      </StyledStepper>
      <StyledContent>{getStepContent(activeStep, handleNext)}</StyledContent>
    </StepperWrapper>
  );
};
