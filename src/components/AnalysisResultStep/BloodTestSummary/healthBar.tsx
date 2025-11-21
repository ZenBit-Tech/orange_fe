import { MARKER_STATUS_CLASSES } from '@/constants/marker';

import { PositionIndicator, ProgressBar, StretchedIcon } from './styles';

interface HealthBarProps {
  position: number;
  status: string;
}

const getStatusClass = (status: string): string => {
  return MARKER_STATUS_CLASSES[status as keyof typeof MARKER_STATUS_CLASSES] || '';
};

export const HealthBar = ({ position, status }: HealthBarProps) => {
  const statusClass = getStatusClass(status);

  return (
    <ProgressBar>
      <PositionIndicator positionValue={position} className={statusClass}>
        <StretchedIcon />
      </PositionIndicator>
    </ProgressBar>
  );
};
