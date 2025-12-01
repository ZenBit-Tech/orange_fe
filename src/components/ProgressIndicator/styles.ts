import { Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
});

export const SpinnerWrapper = styled('div')({
  position: 'relative',
  width: 60,
  height: 60,
});

export const SpinnerSvg = styled('svg')({
  width: 60,
  height: 60,
  transform: 'rotate(-90deg)',
});

export const TextBlock = styled('div')({
  textAlign: 'center',
  marginTop: '24px',
  maxWidth: 480,
});

interface SpinnerCircleProps {
  $isProgress?: boolean;
}

export const SpinnerCircle = styled('circle', {
  shouldForwardProp: (prop) => prop !== '$isProgress',
})<SpinnerCircleProps>(({ theme, $isProgress }) => ({
  transition: 'stroke 0.4s ease',
  transformOrigin: '50% 50%',
  stroke: $isProgress ? theme.palette.success.main : theme.palette.backgrounds.bgTeriarty,
  fill: 'transparent',
  strokeWidth: 4,
  strokeLinecap: $isProgress ? 'round' : 'butt',
}));

export const RotatingSpinnerCircle = styled(SpinnerCircle)(() => ({
  animation: `${spin} 1.5s linear infinite`,
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons?.textPrimary,
  fontFamily: theme.typography.general.fontPoppins,
  fontSize: theme.typography.sizes.size16,
  fontWeight: theme.typography.weights.weight500,
  marginBottom: '8px',
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.weights.weight400,
  lineHeight: 1.5,
  opacity: 0.9,
  margin: 0,
}));
