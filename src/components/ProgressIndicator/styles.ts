import styled from 'styled-components';

import { theme } from '@/theme';

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

export const SpinnerSvg = styled.svg`
  width: 60px;
  height: 60px;
  transform: rotate(-90deg);
`;

export const TextBlock = styled.div`
  text-align: center;
  margin-top: 24px;
  max-width: 480px;
`;

export const SpinnerCircle = styled.circle.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<{
  $isProgress?: boolean;
}>`
  transition: stroke 0.4s ease;
  transform-origin: 50% 50%;
  stroke: ${({ $isProgress }) =>
    $isProgress ? theme.palette.success.main : theme.palette.grey[300]};
  fill: transparent;
  stroke-width: 4;
  stroke-linecap: ${({ $isProgress }) => ($isProgress ? 'round' : 'butt')};
`;

export const RotatingSpinnerCircle = styled(SpinnerCircle)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 1.5s linear infinite;
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
  font-weight: ${theme.typography.weights.light};
  line-height: 1.5;
  opacity: 0.9;
  margin: 0;
`;
