import type { StepIconProps } from '@mui/material';

import { StyledStepIconRoot } from './styles';

export function StyledStepIcon(props: StepIconProps) {
  const { active, completed, icon, error } = props;

  return (
    <StyledStepIconRoot ownerState={{ active, completed, error }}>
      {String(icon)}
    </StyledStepIconRoot>
  );
}
