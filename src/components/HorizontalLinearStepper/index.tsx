import type { StepIconProps } from '@mui/material';
import Step from '@mui/material/Step';

import { getStepContent } from '@/helpers/getStep';

import {
  StepperWrapper,
  StyledConnector,
  StyledContent,
  StyledStepIconRoot,
  StyledStepLabel,
  StyledStepper,
} from './styles';
import { useHorizontalLinearStepper } from './useHorizontalLinearStepper';

export function StyledStepIcon(props: StepIconProps) {
  const { active, completed, icon, error } = props;

  return (
    <StyledStepIconRoot ownerState={{ active, completed, error }}>
      {String(icon)}
    </StyledStepIconRoot>
  );
}

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
