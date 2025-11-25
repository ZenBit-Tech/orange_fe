import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MdArrowDropDown } from 'react-icons/md';

export const StretchedIcon = styled(MdArrowDropDown)(({ theme }) => ({
  transform: 'scale(0.7, 2.5)',
  fontSize: theme.typography.sizes.size24,
}));

export const ProgressBar = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '140px',
  height: '8px',
  background: `linear-gradient(
    to right,
    ${theme.palette.markerIndicatorColors.marker.red} 0% 20%,
    ${theme.palette.markerIndicatorColors.marker.yellow} 20% 30%,
    ${theme.palette.markerIndicatorColors.marker.green} 30% 70%,
    ${theme.palette.markerIndicatorColors.marker.yellow} 70% 80%,
    ${theme.palette.markerIndicatorColors.marker.red} 80% 100%
  )`,
  borderRadius: '12px',
  marginRight: '16px',

  '&.small': {
    maxWidth: 'unset',
  },
}));

export const PositionIndicator = styled(Box)<{ positionValue: number }>(
  ({ theme, positionValue }) => ({
    position: 'absolute',
    left: `${positionValue}%`,
    top: '-20px',
    transform: 'translateX(-50%)',
    transition: 'left 0.3s ease',

    '&.Normal': {
      color: theme.palette.markerIndicatorColors.pointer.green,
    },
    '&.Slightly-High': {
      color: theme.palette.markerIndicatorColors.pointer.yellow,
    },
    '&.High': {
      color: theme.palette.markerIndicatorColors.pointer.red,
    },
    '&.Slightly-Low': {
      color: theme.palette.markerIndicatorColors.pointer.yellow,
    },
    '&.Low': {
      color: theme.palette.markerIndicatorColors.pointer.red,
    },
  }),
);
