import { theme } from '@theme';
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(3px);
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

export const SpinnerSvg = styled.svg`
  width: 150px;
  height: 150px;
  transform: rotate(-90deg);
`;
export const TextBlock = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  max-width: 480px;
`;

export const SpinnerCircle = styled.circle<
  React.SVGProps<SVGCircleElement> & {
    $isProgress?: boolean;
    $isCompleted?: boolean;
  }
>`
  transition:
    stroke-dashoffset 0.35s ease,
    stroke 0.4s ease;
  transform-origin: 50% 50%;
  stroke: ${({ $isCompleted, $isProgress }) =>
    $isCompleted
      ? theme.palette.success.main
      : $isProgress
        ? theme.palette.success.main
        : theme.palette.grey[300]};
  fill: transparent;
  stroke-width: 10;
  stroke-linecap: round;
`;

export const PercentText = styled.div<{ $isCompleted?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${theme.typography.sizes.terms};
  font-weight: ${theme.typography.sizes.body2};
  color: ${({ $isCompleted }) =>
    $isCompleted ? theme.palette.success.main : theme.palette.success.main};
  transition: color 0.4s ease;
`;

export const TitleText = styled.h2`
  color: ${theme.palette.text.primary};
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.body1};
  font-weight: ${theme.typography.weights.regular};
  margin-bottom: 0.5rem;
`;

export const DescriptionText = styled.p`
  color: ${theme.palette.text.primary};
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.body2};
  line-height: 1.5;
  opacity: 0.9;
`;
