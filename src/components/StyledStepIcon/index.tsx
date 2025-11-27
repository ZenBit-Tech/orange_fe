import type { StepIconProps } from '@mui/material';

import { Check } from 'lucide-react';

import { StyledStepIconRoot } from './styles';

export function StyledStepIcon(props: StepIconProps) {
  const { active, completed, icon, error } = props;
  return (
    <StyledStepIconRoot ownerState={{ active, completed, error }}>
      {completed && !error ? <Check size={20} /> : icon}
    </StyledStepIconRoot>
  );
}
