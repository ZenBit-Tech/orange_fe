import React from 'react';

import { t } from 'i18next';

import {
  DescriptionText,
  RotatingSpinnerCircle,
  SpinnerCircle,
  SpinnerContainer,
  SpinnerSvg,
  SpinnerWrapper,
  TextBlock,
  TitleText,
} from './styles';
import type { HealthReportAnalyzerProps } from './types';

const radius = 16;
const circumference = 2 * Math.PI * radius;

export const OCRSpinner: React.FC<HealthReportAnalyzerProps> = ({
  isLoading = false,
  titleKey = 'spinner.analyzingTitle',
  descriptionKey = 'spinner.analyzingDescription',
}) => {
  if (!isLoading) return null;

  const progress = 25;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <SpinnerContainer>
      <SpinnerWrapper>
        <SpinnerSvg viewBox="0 0 40 40">
          <SpinnerCircle r={radius} cx="20" cy="20" />
          <RotatingSpinnerCircle
            $isProgress
            r={radius}
            cx="20"
            cy="20"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </SpinnerSvg>
      </SpinnerWrapper>

      <TextBlock>
        <TitleText variant="h5">{t(titleKey)}</TitleText>
        <DescriptionText variant="body1">{t(descriptionKey)}</DescriptionText>
      </TextBlock>
    </SpinnerContainer>
  );
};
