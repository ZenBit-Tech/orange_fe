import { MARKER_STATUS_CLASSES } from '@/constants';

import { PositionIndicator, ProgressBar, StretchedIcon } from './styles';
import type { HealthBarProps } from './types';

const getStatusClass = (status: string): string => {
  return MARKER_STATUS_CLASSES[status as keyof typeof MARKER_STATUS_CLASSES] || '';
};

export const HealthBar = ({ position, status, isSmallScreen }: HealthBarProps) => {
  const statusClass = getStatusClass(status);

  return (
    <ProgressBar className={`${isSmallScreen ? 'small' : ''}`}>
      <PositionIndicator positionValue={position} className={statusClass}>
        <StretchedIcon />
      </PositionIndicator>
    </ProgressBar>
  );
};
